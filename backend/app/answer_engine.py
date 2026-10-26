import json
import logging
import re
from pathlib import Path

logger = logging.getLogger(__name__)

_qa_data: list[dict[str, str]] | None = None

QUESTION_JSON_PATH = Path(__file__).resolve().parent.parent.parent / "question.json"


def get_qa_data() -> list[dict[str, str]]:
    """Lazy-load question.json once, reuse across requests."""
    global _qa_data
    if _qa_data is None:
        logger.info("Loading question.json...")
        with open(QUESTION_JSON_PATH, "r", encoding="utf-8") as f:
            _qa_data = json.load(f)
        logger.info(f"Loaded {len(_qa_data)} Q&A pairs.")
    return _qa_data


def _normalize(text: str) -> str:
    """去除标点和空白，统一为小写，用于模糊匹配。"""
    return re.sub(r"[^\w\u4e00-\u9fff]", "", text).lower()


def find_answer(query: str) -> dict[str, str] | None:
    """
    在 question.json 中模糊匹配问题，返回最佳匹配的 {question, answer}。

    匹配策略（按优先级）:
    1. 精确匹配（原始文本相等）
    2. 归一化后精确匹配（忽略标点和大小写）
    3. 包含匹配（query 归一化文本是 question 归一化文本的子串，或反过来）
    4. 最长公共子串比例最高者（相似度 > 50%）

    Returns:
        {"question": str, "answer": str} 或 None（无匹配）
    """
    data = get_qa_data()

    normalized_query = _normalize(query)

    # 1. 精确匹配
    for item in data:
        if item["question"] == query:
            return item

    # 2. 归一化后精确匹配
    for item in data:
        if _normalize(item["question"]) == normalized_query:
            return item

    # 3. 包含匹配（双向）
    for item in data:
        nq = _normalize(item["question"])
        if not nq or not normalized_query:
            continue
        if normalized_query in nq or nq in normalized_query:
            return item

    # 4. 相似度匹配（最长公共子串占比）
    best_item: dict[str, str] | None = None
    best_score = 0.0
    threshold = 0.5

    for item in data:
        nq = _normalize(item["question"])
        if not nq or not normalized_query:
            continue
        score = _lcs_ratio(normalized_query, nq)
        if score > best_score:
            best_score = score
            best_item = item

    if best_item and best_score >= threshold:
        return best_item

    return None


def _lcs_ratio(a: str, b: str) -> float:
    """计算两个字符串的最长公共子串占比。"""
    if not a or not b:
        return 0.0
    # 使用动态规划求最长公共子串
    max_len = 0
    dp = [[0] * (len(b) + 1) for _ in range(len(a) + 1)]
    for i in range(1, len(a) + 1):
        for j in range(1, len(b) + 1):
            if a[i - 1] == b[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
                if dp[i][j] > max_len:
                    max_len = dp[i][j]
    return max_len / max(len(a), len(b))
