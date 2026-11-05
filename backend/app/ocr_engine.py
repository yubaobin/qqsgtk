import io
import logging

import numpy as np
from PIL import Image, ImageOps

logger = logging.getLogger(__name__)

_ocr_engine = None

# 最大图片边长，超过则等比缩小（1 核 2G 服务器需控制处理分辨率）
MAX_IMAGE_SIDE = 960
# 最小短边长度，短边小于此值则放大（保证文字高度足够）
MIN_SHORT_SIDE = 64


def get_ocr_engine():
    """Lazy-load RapidOCR singleton. Loaded once, reused across requests.
    
    RapidOCR 是 PaddleOCR 的轻量级分支，内存占用约 300MB（PaddleOCR 的 1/5），
    速度提升 3-5 倍，精度相当。
    """
    global _ocr_engine
    if _ocr_engine is None:
        from rapidocr_onnxruntime import RapidOCR
        logger.info("Initializing RapidOCR (lang=ch)...")
        # det_limit_side_len=960: 降低检测分辨率
        # cls=False: 关闭角度分类
        # rec_batch_num=1: 单批处理，省内存
        _ocr_engine = RapidOCR(
            det_limit_side_len=960,
            det_db_box_thresh=0.3,
            cls=False,
            rec_batch_num=1,
            use_cuda=False,
        )
        logger.info("RapidOCR initialized.")
    return _ocr_engine


def _preprocess(image: Image.Image) -> np.ndarray:
    """
    图片预处理：转 RGB + 按短边缩放 + 自动反色。
    
    截图类 OCR 场景：不做额外增强（减少 CPU 开销）。
    短边 < MIN_SHORT_SIDE 时放大，保证文字高度足够。
    自动检测黑底白字并反转为白底黑字（OCR 训练数据是白底黑字）。
    """
    # 1. 转 RGB
    if image.mode != "RGB":
        image = image.convert("RGB")

    # 2. 自动反色：检测黑底白字并反转
    gray = image.convert("L")
    avg_brightness = sum(gray.getdata()) / len(gray.getdata())
    if avg_brightness < 100:  # 暗图，假设是黑底白字
        image = ImageOps.invert(image)
        logger.debug(f"检测到黑底白字 (avg={avg_brightness:.1f})，已反色")

    # 3. 按短边缩放（保证文字高度）
    w, h = image.size
    short_side = min(w, h)
    if short_side < MIN_SHORT_SIDE:
        scale = MIN_SHORT_SIDE / short_side
        image = image.resize((int(w * scale), int(h * scale)), Image.BILINEAR)
    elif max(w, h) > MAX_IMAGE_SIDE:
        max_side = max(w, h)
        scale = MAX_IMAGE_SIDE / max_side
        image = image.resize((int(w * scale), int(h * scale)), Image.BILINEAR)

    return np.array(image)


def recognize(image_bytes: bytes) -> list[str]:
    """
    Run OCR on raw image bytes.

    Args:
        image_bytes: Raw bytes of an image file (PNG, JPG, etc.)

    Returns:
        List of recognized text strings, one per detected line.
        Returns empty list if no text is found.

    Raises:
        OSError: If the image cannot be opened (corrupt or non-image).
        Exception: For other OCR failures.
    """
    engine = get_ocr_engine()

    image = Image.open(io.BytesIO(image_bytes))
    image_array = _preprocess(image)

    result, _ = engine(image_array)

    if not result:
        return []

    lines: list[str] = []
    for item in result:
        if item and len(item) >= 2:
            text = item[1]
            lines.append(text)

    return lines


_correction_questions: list[str] | None = None


def _load_questions_for_correction() -> list[str]:
    """加载题库中的问题列表，用于 OCR 后处理纠错（缓存，仅加载一次）。"""
    global _correction_questions
    if _correction_questions is not None:
        return _correction_questions

    import json
    from pathlib import Path

    questions: list[str] = []
    json_path = Path(__file__).resolve().parent.parent.parent / "question.json"
    if json_path.exists():
        with open(json_path, "r", encoding="utf-8") as f:
            data = json.load(f)
            questions.extend(item.get("question", "") for item in data)

    _correction_questions = questions
    return questions


def _normalize_for_compare(text: str) -> str:
    """标准化文本用于比较：去除标点、空格。"""
    import re
    return re.sub(r"[^\w\u4e00-\u9fff]", "", text)


def correct_ocr_text(ocr_text: str, threshold: float = 0.85) -> str:
    """
    OCR 后处理纠错：用题库中的问题做模糊匹配，自动修正识别错误。
    
    原理：
    1. 将 OCR 识别的文本与题库中所有问题做归一化后 LCS 相似度比较
    2. 如果找到相似度 >= threshold 的题目，返回题库中的标准文本
    3. 否则返回原始 OCR 文本
    
    Args:
        ocr_text: OCR 识别的原始文本
        threshold: 相似度阈值，默认 0.85（85% 相似即认为匹配）
    
    Returns:
        纠错后的文本，或原始 OCR 文本（无匹配时）
    """
    ocr_normalized = _normalize_for_compare(ocr_text)
    if len(ocr_normalized) < 5:
        return ocr_text
    
    questions = _load_questions_for_correction()
    
    best_match: str | None = None
    best_score = 0.0
    
    for q in questions:
        q_norm = _normalize_for_compare(q)
        if len(q_norm) < 5:
            continue
        
        score = _lcs_ratio(ocr_normalized, q_norm)
        if score > best_score:
            best_score = score
            best_match = q
    
    if best_score >= threshold and best_match:
        logger.debug(f"OCR 纠错：'{ocr_text}' -> '{best_match}' (相似度：{best_score:.2f})")
        return best_match
    
    return ocr_text


def _lcs_ratio(a: str, b: str) -> float:
    """计算两个字符串的最长公共子串占比。"""
    if not a or not b:
        return 0.0
    m, n = len(a), len(b)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    max_len = 0
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if a[i - 1] == b[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
                max_len = max(max_len, dp[i][j])
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return max_len / max(m, n)
