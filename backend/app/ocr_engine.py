import io
import logging

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

logger = logging.getLogger(__name__)

_ocr_engine = None

# 最大图片边长，超过则等比缩小（PaddleOCR 对超大图检测精度会下降）
MAX_IMAGE_SIDE = 2048
# 最小图片边长，小于则放大（太小文字模糊）
MIN_IMAGE_SIDE = 600
# 对比度增强系数，1.0=不增强，>1=增强，<1=减弱
CONTRAST_FACTOR = 1.8
# 锐化强度，0=不锐化，1=标准锐化，>1=更强
SHARPEN_FACTOR = 1.3


def get_ocr_engine():
    """Lazy-load PaddleOCR singleton. Loaded once, reused across requests."""
    global _ocr_engine
    if _ocr_engine is None:
        from paddleocr import PaddleOCR
        logger.info("Initializing PaddleOCR (lang=ch)...")
        # use_angle_cls=True: 识别旋转/倾斜文字
        # det_db_box_thresh=0.3: 降低检测阈值，捕获更多文字区域（默认 0.5）
        # det_db_unclip_ratio=1.8: 扩大检测框，避免边缘文字被裁剪（默认 1.5）
        # det_limit_side_len: 限制检测输入图片边长，提升检测稳定性
        _ocr_engine = PaddleOCR(
            use_angle_cls=True,
            lang="ch",
            det_db_box_thresh=0.3,
            det_db_unclip_ratio=1.8,
            det_limit_side_len=2048,
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
    5. 中值滤波去噪
    """
    # 1. 转 RGB
    if image.mode != "RGB":
        image = image.convert("RGB")

    # 2. 等比缩放
    w, h = image.size
    max_side = max(w, h)
    if max_side > MAX_IMAGE_SIDE:
        scale = MAX_IMAGE_SIDE / max_side
        image = image.resize((int(w * scale), int(h * scale)), Image.LANCZOS)
    elif max_side < MIN_IMAGE_SIDE:
        scale = MIN_IMAGE_SIDE / max_side
        image = image.resize((int(w * scale), int(h * scale)), Image.LANCZOS)

    # 3. 对比度增强
    enhancer = ImageEnhance.Contrast(image)
    image = enhancer.enhance(CONTRAST_FACTOR)

    # 4. 锐化
    if SHARPEN_FACTOR > 0:
        for _ in range(int(SHARPEN_FACTOR)):
            image = image.filter(ImageFilter.SHARPEN)

    # 5. 中值滤波去噪（3x3 窗口）
    image = image.filter(ImageFilter.MedianFilter(size=3))

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

    result = engine.ocr(image_array, cls=True)

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
