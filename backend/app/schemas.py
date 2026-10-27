from pydantic import BaseModel


class OCRResponse(BaseModel):
    text: str
    lines: list[str]


class HealthResponse(BaseModel):
    status: str


class AnswerResponse(BaseModel):
    question: str
    answer: str


class AnswerListResponse(BaseModel):
    results: list[AnswerResponse]
