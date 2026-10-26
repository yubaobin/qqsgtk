# OCR Backend

PaddleOCR-based image text recognition API.

## Setup

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
```

## Run

```bash
uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload
```

## API

- `POST /ocr` — Upload image, returns recognized text
- `GET /health` — Health check
