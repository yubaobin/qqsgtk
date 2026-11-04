import io
import logging

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

logger = logging.getLogger(__name__)

_ocr_engine = None

# 最大图片边长，超过则等比缩小（1核2G 服务器需控制处理分辨率）
MAX_IMAGE_SIDE = 1280
# 最小图片边长，小于则放大（太小文字模糊）
MIN_IMAGE_SIDE = 600
# 对比度增强系数，1.0=不增强，>1=增强，<1=减弱
CONTRAST_FACTOR = 1.5
# 锐化强度，0=不锐化，1=标准锐化，>1=更强
SHARPEN_FACTOR = 1


def get_ocr_engine():
    """Lazy-load PaddleOCR singleton. Loaded once, reused across requests."""
    global _ocr_engine
    if _ocr_engine is None:
        from paddleocr import PaddleOCR
        logger.info("Initializing PaddleOCR (lang=ch)...")
        # use_angle_cls=False: 截图通常正向，关闭角度分类省一次推理
        # det_limit_side_len=1280: 降低检测分辨率，1核CPU上大幅提速
        _ocr_engine = PaddleOCR(
            use_angle_cls=False,
            lang="ch",
            det_db_box_thresh=0.3,
            det_db_unclip_ratio=1.6,
            det_limit_side_len=1280,
            drop_score=0.3,
        )
        logger.info("PaddleOCR initialized.")
    return _ocr_engine


def _preprocess(image: Image.Image) -> np.ndarray:
    """
    图片预处理，提升 OCR 识别精度。

    步骤:
    1. 转 RGB（排除 RGBA/灰度等格式干扰）
    2. 等比缩放到合适尺寸
    3. 对比度增强（提升文字与背景反差）
    4. 锐化（让文字边缘更清晰）
    """
    # 1. 转 RGB
    if image.mode != "RGB":
        image = image.convert("RGB")

    # 2. 等比缩放
    w, h = image.size
    max_side = max(w, h)
    if max_side > MAX_IMAGE_SIDE:
        scale = MAX_IMAGE_SIDE / max_side
        image = image.resize((int(w * scale), int(h * scale)), Image.BILINEAR)
    elif max_side < MIN_IMAGE_SIDE:
        scale = MIN_IMAGE_SIDE / max_side
        image = image.resize((int(w * scale), int(h * scale)), Image.BILINEAR)

    # 3. 对比度增强
    enhancer = ImageEnhance.Contrast(image)
    image = enhancer.enhance(CONTRAST_FACTOR)

    # 4. 锐化
    if SHARPEN_FACTOR > 0:
        for _ in range(int(SHARPEN_FACTOR)):
            image = image.filter(ImageFilter.SHARPEN)

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

    result = engine.ocr(image_array, cls=False)

    if not result:
        return []

    lines: list[str] = []
    for line_group in result:
        if line_group:
            for item in line_group:
                if item and len(item) >= 2:
                    text = item[1][0] if isinstance(item[1], tuple) else str(item[1])
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
    # 归一化 OCR 文本
    ocr_normalized = _normalize_for_compare(ocr_text)
    if len(ocr_normalized) < 5:
        # 太短的文本不做纠错
        return ocr_text
    
    # 加载题库
    questions = _load_questions_for_correction()
    
    best_match: str | None = None
    best_score = 0.0
    
    for q in questions:
        q_norm = _normalize_for_compare(q)
        if len(q_norm) < 5:
            continue
        
        # 计算 LCS 相似度
        score = _lcs_ratio(ocr_normalized, q_norm)
        if score > best_score:
            best_score = score
            best_match = q
    
    # 如果找到高相似度匹配，返回题库中的标准文本
    if best_score >= threshold and best_match:
        logger.debug(f"OCR 纠错：'{ocr_text}' -> '{best_match}' (相似度：{best_score:.2f})")
        return best_match
    
    return ocr_text


def _lcs_ratio(a: str, b: str) -> float:
    """计算两个字符串的最长公共子串占比。"""
    if not a or not b:
        return 0.0
    m, n = len(a), len(b)
    # 使用动态规划求最长公共子串长度
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
