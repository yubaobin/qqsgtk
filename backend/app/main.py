import logging

from fastapi import FastAPI, File, UploadFile, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware

from app.schemas import OCRResponse, HealthResponse, AnswerResponse, AnswerListResponse
from app.ocr_engine import recognize
from app.answer_engine import find_answers

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="OCR Backend", description="PaddleOCR image text recognition API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ALLOWED_IMAGE_TYPES = {"image/png", "image/jpeg", "image/jpg", "image/webp", "image/bmp"}


@app.get("/health", response_model=HealthResponse)
async def health_check():
    return HealthResponse(status="ok")


@app.post("/ocr", response_model=OCRResponse)
async def ocr(file: UploadFile = File(...)):
    if file.content_type not in ALLOWED_IMAGE_TYPES:
        raise HTTPException(status_code=400, detail="仅支持图片文件 (PNG, JPG, JPEG, WEBP, BMP)")

    image_bytes = await file.read()
    if not image_bytes:
        raise HTTPException(status_code=400, detail="文件内容为空")

    try:
        lines = recognize(image_bytes)
    except OSError as e:
        raise HTTPException(status_code=400, detail=f"图片文件损坏或无法读取: {e}")
    except Exception as e:
        logger.exception("OCR failed")
        raise HTTPException(status_code=500, detail=f"识别失败: {e}")

    text = "\n".join(lines)
    return OCRResponse(text=text, lines=lines)


@app.post("/answer", response_model=AnswerListResponse)
async def answer(request: Request):
    """根据问题文本在 question.json 中模糊匹配多个答案。"""
    try:
        body = await request.json()
    except Exception:
        raise HTTPException(status_code=400, detail="请求体不是有效的 JSON")

    question = body.get("question", "").strip()
    if not question:
        raise HTTPException(status_code=400, detail="问题不能为空")

    results = find_answers(question)
    return AnswerListResponse(
        results=[AnswerResponse(question=r["question"], answer=r["answer"]) for r in results]
    )


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
