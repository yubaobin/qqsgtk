from unittest.mock import patch, MagicMock
from app.ocr_engine import recognize


@patch("app.ocr_engine.Image")
@patch("app.ocr_engine.get_ocr_engine")
def test_recognize_returns_list_of_strings(mock_get, mock_image):
    """recognize should return a list of strings given valid image bytes."""
    fake_result = [
        [("line1_info", ("第一行文本", 0.99))],
        [("line2_info", ("第二行文本", 0.98))],
    ]
    mock_engine = MagicMock()
    mock_engine.ocr.return_value = fake_result
    mock_get.return_value = mock_engine

    result = recognize(b"fake_image_bytes")

    assert isinstance(result, list)
    assert all(isinstance(line, str) for line in result)
    assert result == ["第一行文本", "第二行文本"]


@patch("app.ocr_engine.Image")
@patch("app.ocr_engine.get_ocr_engine")
def test_recognize_empty_result(mock_get, mock_image):
    """recognize should return empty list when no text is found."""
    mock_engine = MagicMock()
    mock_engine.ocr.return_value = []
    mock_get.return_value = mock_engine

    result = recognize(b"fake_image_bytes")

    assert result == []


@patch("app.ocr_engine.Image")
@patch("app.ocr_engine.get_ocr_engine")
def test_recognize_none_result(mock_get, mock_image):
    """recognize should return empty list when OCR returns None."""
    mock_engine = MagicMock()
    mock_engine.ocr.return_value = None
    mock_get.return_value = mock_engine

    result = recognize(b"fake_image_bytes")

    assert result == []
