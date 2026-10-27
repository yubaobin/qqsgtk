from pydantic import BaseModel


class OCRResponse(BaseModel):
    text: str
    lines: list[str]


class HealthResponse(BaseModel):
    status: str


class AnswerResponse(BaseModel):
    id: int | None = None
    question: str
    answer: str
    indexes: str | None = None


class AnswerListResponse(BaseModel):
    results: list[AnswerResponse]
