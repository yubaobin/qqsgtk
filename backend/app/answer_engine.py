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


def find_answers(query: str, limit: int = 10) -> list[dict]:
    """
    在 question.json 中模糊匹配问题，返回所有匹配的列表。

    匹配策略（按优先级，结果去重合并）:
    1. 索引匹配（query 是拼音首字母，匹配 indexes 字段）
    2. 精确匹配（原始文本相等）
    3. 归一化后精确匹配（忽略标点和大小写）
    4. 包含匹配（query 归一化文本是 question 归一化文本的子串，或反过来）
    5. 相似度匹配（最长公共子串比例 >= 50%），按相似度排序

    Args:
        query: 查询文本（中文或拼音首字母）
        limit: 最多返回的结果数量

    Returns:
        匹配的 [{id, question, answer, indexes}, ...] 列表，可能为空
    """
    data = get_qa_data()
    normalized_query = _normalize(query)
    # 将查询转换为小写拼音首字母格式（去除非字母字符）
    query_indexes = re.sub(r'[^a-zA-Z]', '', query).lower()

    if not normalized_query and not query_indexes:
        return []

    results: list[dict] = []
    seen_questions: set[str] = set()

    def add(item: dict) -> None:
        key = _normalize(item["question"])
        if key not in seen_questions:
            seen_questions.add(key)
            results.append({
                "id": item.get("id"),
                "question": item["question"],
                "answer": item["answer"],
                "indexes": item.get("indexes"),
            })

    # 1. 索引匹配（拼音首字母模糊匹配）- 最高优先级
    # 支持部分匹配：如 "zsx" 可匹配 "abczsxdefg"
    if query_indexes:
        for item in data:
            item_indexes = item.get("indexes", "").lower()
            if item_indexes and query_indexes in item_indexes:
                add(item)

    # 2. 精确匹配
    for item in data:
        if item["question"] == query:
            add(item)

    # 3. 归一化后精确匹配
    for item in data:
        if _normalize(item["question"]) == normalized_query:
            add(item)

    # 4. 包含匹配（双向）
    for item in data:
        nq = _normalize(item["question"])
        if not nq:
            continue
        if normalized_query in nq or nq in normalized_query:
            add(item)

    # 5. 相似度匹配（按分数排序，取 top-N）
    scored: list[tuple[float, dict]] = []
    for item in data:
        nq = _normalize(item["question"])
        if not nq:
            continue
        score = _lcs_ratio(normalized_query, nq)
        if score >= 0.5:
            scored.append((score, item))
    scored.sort(key=lambda x: x[0], reverse=True)
    for _, item in scored:
        add(item)

    return results[:limit]


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
