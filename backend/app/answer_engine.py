import json
import logging
import re
from pathlib import Path

from app import db

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


def find_answers(query: str, limit: int = 10, similarity_threshold: float = 0.6) -> list[dict]:
    """
    在数据库和 question.json 中模糊匹配问题，返回所有匹配结果。

    数据源优先级：先查 SQLite 数据库，有匹配结果则直接返回；
    无结果时再查 question.json。相同题目可能因答案不同存在多条，不去重。
    匹配策略（按优先级）:
    纯拼音首字母查询: 索引匹配优先，找到则直接返回
    含中文查询:
      1. 精确匹配（原始文本相等）
      2. 归一化后精确匹配（忽略标点和大小写）
      3. 包含匹配（query 归一化文本是 question 归一化文本的子串，或反过来）
      4. 相似度匹配（最长公共子串比例 >= similarity_threshold），按相似度排序
      5. 索引匹配（兜底：文本匹配无结果时，尝试拼音首字母匹配）

    Args:
        query: 查询文本（中文或拼音首字母）
        limit: 最多返回的结果数量
        similarity_threshold: 相似度匹配阈值，0.0-1.0，默认 0.6

    Returns:
        匹配的 [{id, question, answer, indexes}, ...] 列表，可能为空
    """
    normalized_query = _normalize(query)
    # 将查询转换为小写格式，保留字母和数字（indexes 可能包含数字）
    query_indexes = re.sub(r'[^a-zA-Z0-9]', '', query).lower()

    if not normalized_query and not query_indexes:
        return []

    # 先查 SQLite 数据库，有结果则直接返回
    db_data = db.get_all_questions()
    results = _match_in_data(db_data, query, normalized_query, query_indexes, limit, similarity_threshold)
    if results:
        return results

    # 数据库无结果，再查 question.json
    json_data = get_qa_data()
    results = _match_in_data(json_data, query, normalized_query, query_indexes, limit, similarity_threshold)
    return results


def _match_in_data(
    data: list[dict],
    query: str,
    normalized_query: str,
    query_indexes: str,
    limit: int,
    similarity_threshold: float,
) -> list[dict]:
    """在单个数据源上执行完整匹配流程，返回匹配结果列表。"""
    results: list[dict] = []
    seen_keys: set[int] = set()

    def add(item: dict) -> None:
        # 用对象 id 作为唯一键，同一条记录不被重复添加
        key = id(item)
        if key not in seen_keys:
            seen_keys.add(key)
            results.append({
                "id": item.get("id"),
                "question": item["question"],
                "answer": item["answer"],
                "indexes": item.get("indexes"),
            })

    # 判断查询是否包含中文
    has_chinese = any('\u4e00' <= c <= '\u9fff' for c in query)

    if not has_chinese and query_indexes:
        # 纯拼音首字母/数字查询：索引匹配优先，找到则直接返回
        for item in data:
            item_indexes = item.get("indexes", "").lower()
            if item_indexes and query_indexes in item_indexes:
                add(item)
        if results:
            return results[:limit]

    # 文本匹配（含中文查询时优先，纯索引查询无结果时也执行）
    # 1. 精确匹配
    for item in data:
        if item["question"] == query:
            add(item)

    # 2. 归一化后精确匹配
    for item in data:
        if _normalize(item["question"]) == normalized_query:
            add(item)

    # 3. 包含匹配（双向）
    for item in data:
        nq = _normalize(item["question"])
        if not nq:
            continue
        if normalized_query in nq or nq in normalized_query:
            add(item)

    # 4. 相似度匹配（按分数排序，取 top-N）
    scored: list[tuple[float, dict]] = []
    for item in data:
        nq = _normalize(item["question"])
        if not nq:
            continue
        score = _lcs_ratio(normalized_query, nq)
        if score >= similarity_threshold:
            scored.append((score, item))
    scored.sort(key=lambda x: x[0], reverse=True)
    for _, item in scored:
        add(item)

    # 5. 索引匹配（兜底：含中文查询且文本匹配无结果时，尝试索引匹配）
    if has_chinese and query_indexes and not results:
        for item in data:
            item_indexes = item.get("indexes", "").lower()
            if item_indexes and query_indexes in item_indexes:
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
