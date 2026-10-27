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
    """POST /ocr returns 500 when OCR engine raises a generic exception."""
    from PIL import Image
    import io
    img = Image.new("RGB", (1, 1), color="white")
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)

    with patch("app.main.recognize") as mock_recognize:
        mock_recognize.side_effect = RuntimeError("Engine crashed")

        response = client.post(
            "/ocr",
            files={"file": ("test.png", buf, "image/png")},
        )

    assert response.status_code == 500
    assert "detail" in response.json()


def test_ocr_non_image_file(client):
    """POST /ocr with a non-image file (e.g. .txt) returns 400."""
    import io
    buf = io.BytesIO(b"hello world, this is not an image")

    response = client.post(
        "/ocr",
        files={"file": ("test.txt", buf, "text/plain")},
    )

    assert response.status_code == 400
    assert "仅支持图片文件" in response.json()["detail"]


def test_ocr_corrupt_image(client):
    """POST /ocr with a corrupt image (garbage bytes) returns 400."""
    import io
    buf = io.BytesIO(b"not a real png but pretending")

    with patch("app.main.recognize") as mock_recognize:
        mock_recognize.side_effect = OSError("cannot identify image file")

        response = client.post(
            "/ocr",
            files={"file": ("test.png", buf, "image/png")},
        )

    assert response.status_code == 400
    assert "损坏" in response.json()["detail"]


def test_answer_success(client):
    """POST /answer with a valid question returns matched answers list."""
    from unittest.mock import patch
    with patch("app.main.find_answers") as mock_find:
        mock_find.return_value = [
            {"question": "三国演义是谁的著作", "answer": "罗贯中"},
            {"question": "三国演义共有多少回", "answer": "一百二十回"},
        ]

        response = client.post(
            "/answer",
            json={"question": "三国演义"},
        )

    assert response.status_code == 200
    data = response.json()
    assert "results" in data
    assert len(data["results"]) == 2
    assert data["results"][0]["answer"] == "罗贯中"


def test_answer_no_match(client):
    """POST /answer with unmatched question returns empty results list."""
    from unittest.mock import patch
    with patch("app.main.find_answers") as mock_find:
        mock_find.return_value = []

        response = client.post(
            "/answer",
            json={"question": "完全不相关的问题xyz"},
        )

    assert response.status_code == 200
    data = response.json()
    assert data["results"] == []


def test_answer_empty_question(client):
    """POST /answer with empty question returns 400."""
    response = client.post(
        "/answer",
        json={"question": ""},
    )
    assert response.status_code == 400
    assert "不能为空" in response.json()["detail"]
