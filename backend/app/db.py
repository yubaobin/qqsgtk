import sqlite3
import logging
from pathlib import Path

logger = logging.getLogger(__name__)

DB_PATH = Path(__file__).resolve().parent.parent / "data" / "questions.db"


def get_connection() -> sqlite3.Connection:
    """获取 SQLite 连接，每次请求新建连接（SQLite 轻量，无需连接池）。"""
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(str(DB_PATH))
    conn.row_factory = sqlite3.Row
    return conn


def init_db() -> None:
    """初始化数据库表。"""
    with get_connection() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS questions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                question TEXT NOT NULL,
                answer TEXT NOT NULL,
                indexes TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        """)
        conn.commit()
    logger.info(f"SQLite initialized at {DB_PATH}")


# ===== CRUD 操作 =====


def list_questions(limit: int = 100, offset: int = 0, search: str = "") -> list[dict]:
    """列出数据库中的题目（分页，支持搜索）。"""
    with get_connection() as conn:
        if search:
            rows = conn.execute(
                "SELECT id, question, answer, indexes FROM questions "
                "WHERE question LIKE ? OR answer LIKE ? OR indexes LIKE ? "
                "ORDER BY id DESC LIMIT ? OFFSET ?",
                (f"%{search}%", f"%{search}%", f"%{search}%", limit, offset),
            ).fetchall()
        else:
            rows = conn.execute(
                "SELECT id, question, answer, indexes FROM questions ORDER BY id DESC LIMIT ? OFFSET ?",
                (limit, offset),
            ).fetchall()
    return [dict(r) for r in rows]


def create_question(question: str, answer: str, indexes: str) -> dict:
    """新增题目，返回新增的记录。"""
    with get_connection() as conn:
        cursor = conn.execute(
            "INSERT INTO questions (question, answer, indexes) VALUES (?, ?, ?)",
            (question, answer, indexes),
        )
        conn.commit()
        new_id = cursor.lastrowid
    return {"id": new_id, "question": question, "answer": answer, "indexes": indexes}


def update_question(qid: int, question: str, answer: str, indexes: str) -> dict | None:
    """编辑题目，返回更新后的记录，不存在返回 None。"""
    with get_connection() as conn:
        cursor = conn.execute(
            "UPDATE questions SET question = ?, answer = ?, indexes = ? WHERE id = ?",
            (question, answer, indexes, qid),
        )
        conn.commit()
        if cursor.rowcount == 0:
            return None
    return {"id": qid, "question": question, "answer": answer, "indexes": indexes}


def delete_question(qid: int) -> bool:
    """删除题目，返回是否删除成功。"""
    with get_connection() as conn:
        cursor = conn.execute("DELETE FROM questions WHERE id = ?", (qid,))
        conn.commit()
        return cursor.rowcount > 0


def get_all_questions() -> list[dict]:
    """获取所有题目，供 answer_engine 查询使用。"""
    with get_connection() as conn:
        rows = conn.execute(
            "SELECT id, question, answer, indexes FROM questions",
        ).fetchall()
    return [dict(r) for r in rows]
