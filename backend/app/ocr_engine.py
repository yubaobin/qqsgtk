import io
import logging

import numpy as np
from PIL import Image, ImageOps

logger = logging.getLogger(__name__)

_ocr_engine = None

# 最大图片边长（1 核 2G 服务器极速模式）
MAX_IMAGE_SIDE = 480
# 最小短边长度
MIN_SHORT_SIDE = 32


def get_ocr_engine():
    """Lazy-load RapidOCR singleton with ultra-light model.
    
    使用 PP-OCRv4 ultra-light 模型，内存占用约 150MB，
    单次 OCR 耗时 1-3 秒（480px 分辨率）。
    """
    global _ocr_engine
    if _ocr_engine is None:
        from rapidocr_onnxruntime import RapidOCR
        logger.info("Initializing RapidOCR (ultra-light, 480px)...")
        # det_limit_side_len=480: 极低分辨率，速度优先
        # det_db_box_thresh=0.6: 高阈值，只检测最明显的文字区域
        # cls=False: 关闭角度分类
        # rec_batch_num=1: 单批处理
        _ocr_engine = RapidOCR(
            det_limit_side_len=480,
            det_db_box_thresh=0.6,
            det_db_unclip_ratio=1.5,
            cls=False,
            rec_batch_num=1,
            use_cuda=False,
            det_model_path=None,  # 使用内置 ultra-light 模型
            rec_model_path=None,
        )
        logger.info("RapidOCR initialized (ultra-light mode).")
    return _ocr_engine


def _preprocess(image: Image.Image) -> np.ndarray:
    """图片预处理：转 RGB + 自动反色 + 按短边缩放。"""
    # 1. 转 RGB
    if image.mode != "RGB":
        image = image.convert("RGB")

    # 2. 自动反色：检测黑底白字并反转
    gray = image.convert("L")
    avg_brightness = sum(gray.getdata()) / len(gray.getdata())
    if avg_brightness < 100:
        image = ImageOps.invert(image)
        logger.debug(f"检测到黑底白字 (avg={avg_brightness:.1f})，已反色")

    # 3. 按短边缩放
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
    """Run OCR on raw image bytes."""
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


def correct_ocr_text(ocr_text: str, threshold: float = 0.75) -> str:
    """OCR 后处理纠错：用题库中的问题做模糊匹配，自动修正识别错误。"""
    ocr_normalized = _normalize_for_compare(ocr_text)
    if len(ocr_normalized) < 4:
        return ocr_text
    
    questions = _load_questions_for_correction()
    
    best_match: str | None = None
    best_score = 0.0
    
    for q in questions:
        q_norm = _normalize_for_compare(q)
        if len(q_norm) < 4:
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
