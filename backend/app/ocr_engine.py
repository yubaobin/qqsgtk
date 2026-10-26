import io
import logging

from PIL import Image

logger = logging.getLogger(__name__)

_ocr_engine = None


def get_ocr_engine():
    """Lazy-load PaddleOCR singleton. Loaded once, reused across requests."""
    global _ocr_engine
    if _ocr_engine is None:
        from paddleocr import PaddleOCR
        logger.info("Initializing PaddleOCR (lang=ch)...")
        _ocr_engine = PaddleOCR(use_angle_cls=True, lang="ch")
        logger.info("PaddleOCR initialized.")
    return _ocr_engine


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
    import numpy as np

    engine = get_ocr_engine()

    image = Image.open(io.BytesIO(image_bytes))
    image_array = np.array(image)

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
