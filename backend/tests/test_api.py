from unittest.mock import patch


def test_health_endpoint(client):
    """GET /health returns 200 with status ok."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_ocr_success(client):
    """POST /ocr with a valid image returns recognized text."""
    from PIL import Image
    import io
    img = Image.new("RGB", (1, 1), color="white")
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)

    with patch("app.main.recognize") as mock_recognize:
        mock_recognize.return_value = ["测试文本"]

        response = client.post(
            "/ocr",
            files={"file": ("test.png", buf, "image/png")},
        )

    assert response.status_code == 200
    data = response.json()
    assert data["text"] == "测试文本"
    assert data["lines"] == ["测试文本"]


def test_ocr_no_file(client):
    """POST /ocr without a file returns 422 (FastAPI validation error)."""
    response = client.post("/ocr")
    assert response.status_code == 422
    assert "detail" in response.json()


def test_ocr_empty_result(client):
    """POST /ocr with image containing no text returns empty result."""
    from PIL import Image
    import io
    img = Image.new("RGB", (1, 1), color="white")
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)

    with patch("app.main.recognize") as mock_recognize:
        mock_recognize.return_value = []

        response = client.post(
            "/ocr",
            files={"file": ("test.png", buf, "image/png")},
        )

    assert response.status_code == 200
    data = response.json()
    assert data["text"] == ""
    assert data["lines"] == []


def test_ocr_engine_failure(client):
    """POST /ocr returns 500 when OCR engine raises an exception."""
    from PIL import Image
    import io
    img = Image.new("RGB", (1, 1), color="white")
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)

    with patch("app.main.recognize") as mock_recognize:
        mock_recognize.side_effect = ValueError("Cannot read image")

        response = client.post(
            "/ocr",
            files={"file": ("test.png", buf, "image/png")},
        )

    assert response.status_code == 500
    assert "detail" in response.json()
