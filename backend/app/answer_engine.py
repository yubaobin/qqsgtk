import json
import logging
import os
import re
from pathlib import Path

import httpx

logger = logging.getLogger(__name__)

_qa_data: list[dict[str, str]] | None = None

QUESTION_JSON_PATH = Path(__file__).resolve().parent.parent.parent / "question.json"

# 远程 API 配置
REMOTE_API_URL = os.getenv("REMOTE_API_URL", "https://api.qqsgtk.cn/qqsgtkApi/findByQuestion")


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


def find_answers(query: str, limit: int = 10) -> list[dict[str, str]]:
    """
    查找答案：优先调用远程 API，失败时回退到本地 question.json。

    远程 API: POST https://api.qqsgtk.cn/qqsgtkApi/findByQuestion
    Body: {"question": "...", "answer": "..."}
    
    Args:
        query: 查询文本
        limit: 最多返回的结果数量

    Returns:
        匹配的 [{"question": str, "answer": str}, ...] 列表，可能为空
    """
    # 1. 优先尝试远程 API
    try:
        remote_results = _find_by_remote_api(query)
        if remote_results:
            logger.info(f"Remote API found {len(remote_results)} results for query: {query[:20]}...")
            return remote_results[:limit]
    except Exception as e:
        logger.warning(f"Remote API failed for query '{query[:20]}...': {e}. Falling back to local.")

    # 2. 远程 API 失败或无结果，回退到本地 question.json
    logger.info(f"Falling back to local question.json for query: {query[:20]}...")
    return _find_by_local_json(query, limit)


def _find_by_remote_api(query: str) -> list[dict[str, str]]:
    """
    调用远程 API 查找答案。
    
    Returns:
        匹配结果列表，空列表表示无结果或请求失败
    """
    try:
        with httpx.Client(timeout=5.0) as client:
            response = client.post(
                REMOTE_API_URL,
                json={"question": query, "answer": ""},
                headers={"Content-Type": "application/json"},
            )
            
            if response.status_code != 200:
                logger.warning(f"Remote API returned status {response.status_code}")
                return []
            
            data = response.json()
            
            # 检查响应格式
            if not data.get("success") or data.get("code") != 200:
                logger.warning(f"Remote API returned unsuccessful response: {data}")
                return []
            
            results = data.get("data", [])
            if not results:
                return []
            
            # 转换格式：[{question, answer}, ...]
            return [{"question": item["question"], "answer": item["answer"]} for item in results]
            
    except httpx.TimeoutException:
        logger.warning("Remote API timeout")
        return []
    except httpx.RequestError as e:
        logger.warning(f"Remote API request error: {e}")
        return []
    except Exception as e:
        logger.warning(f"Remote API unexpected error: {e}")
        return []


def _find_by_local_json(query: str, limit: int = 10) -> list[dict[str, str]]:
    """
    在本地 question.json 中模糊匹配问题。

    匹配策略（按优先级，结果去重合并）:
    1. 精确匹配（原始文本相等）
    2. 归一化后精确匹配（忽略标点和大小写）
    3. 包含匹配（query 归一化文本是 question 归一化文本的子串，或反过来）
    4. 相似度匹配（最长公共子串比例 >= 50%），按相似度排序

    Args:
        query: 查询文本
        limit: 最多返回的结果数量

    Returns:
        匹配的 [{"question": str, "answer": str}, ...] 列表，可能为空
    """
    data = get_qa_data()
    normalized_query = _normalize(query)

    if not normalized_query:
        return []

    results: list[dict[str, str]] = []
    seen_questions: set[str] = set()

    def add(item: dict[str, str]) -> None:
        key = _normalize(item["question"])
        if key not in seen_questions:
            seen_questions.add(key)
            results.append(item)

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
    scored: list[tuple[float, dict[str, str]]] = []
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
