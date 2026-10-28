import logging

from fastapi import FastAPI, File, UploadFile, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware

from app.schemas import (
    OCRResponse, HealthResponse, AnswerResponse, AnswerListResponse,
    QuestionCreate, QuestionUpdate, QuestionResponse, QuestionListResponse,
)
from app.ocr_engine import recognize
from app.answer_engine import find_answers
from app import db

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


@app.on_event("startup")
def startup():
    db.init_db()


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
    """根据问题文本模糊匹配答案，先查 question.json，再查数据库。"""
    try:
        body = await request.json()
    except Exception:
        raise HTTPException(status_code=400, detail="请求体不是有效的 JSON")

    question = body.get("question", "").strip()
    if not question:
        raise HTTPException(status_code=400, detail="问题不能为空")

    results = find_answers(question)
    return AnswerListResponse(
        results=[
            AnswerResponse(
                id=r.get("id"),
                question=r["question"],
                answer=r["answer"],
                indexes=r.get("indexes"),
            )
            for r in results
        ]
    )


# ===== 题库录入 CRUD =====


@app.get("/questions", response_model=QuestionListResponse)
async def list_questions(limit: int = 100, offset: int = 0):
    """列出数据库中的题目。"""
    results = db.list_questions(limit, offset)
    return QuestionListResponse(results=[QuestionResponse(**r) for r in results])


@app.post("/questions", response_model=QuestionResponse)
async def create_question(body: QuestionCreate):
    """新增题目。"""
    return QuestionResponse(**db.create_question(body.question, body.answer, body.indexes))


@app.put("/questions/{qid}", response_model=QuestionResponse)
async def update_question(qid: int, body: QuestionUpdate):
    """编辑题目。"""
    result = db.update_question(qid, body.question, body.answer, body.indexes)
    if result is None:
        raise HTTPException(status_code=404, detail="题目不存在")
    return QuestionResponse(**result)


@app.delete("/questions/{qid}")
async def delete_question(qid: int):
    """删除题目。"""
    if not db.delete_question(qid):
        raise HTTPException(status_code=404, detail="题目不存在")
    return {"detail": "已删除"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
