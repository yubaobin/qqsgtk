from unittest.mock import patch
from app.answer_engine import find_answers


def test_exact_match():
    """精确匹配问题，返回对应答案。"""
    fake_data = [
        {"question": "三国演义是谁的著作", "answer": "罗贯中"},
        {"question": "民间所说的鬼火其实是哪种化学元素的作用", "answer": "磷"},
    ]
    with patch("app.answer_engine.get_qa_data") as mock_get:
        mock_get.return_value = fake_data
        result = find_answers("三国演义是谁的著作")
    assert len(result) >= 1
    assert result[0]["answer"] == "罗贯中"


def test_no_match_returns_empty():
    """无匹配时返回空列表。"""
    fake_data = [
        {"question": "三国演义是谁的著作", "answer": "罗贯中"},
    ]
    with patch("app.answer_engine.get_qa_data") as mock_get:
        mock_get.return_value = fake_data
        result = find_answers("完全不相关的问题xyz")
    assert result == []


def test_fuzzy_match_partial_question():
    """OCR 文本包含部分问题内容时能模糊匹配。"""
    fake_data = [
        {"question": "三国演义是谁的著作", "answer": "罗贯中"},
        {"question": "民间所说的鬼火其实是哪种化学元素的作用", "answer": "磷"},
    ]
    with patch("app.answer_engine.get_qa_data") as mock_get:
        mock_get.return_value = fake_data
        result = find_answers("三国演义是谁的著作？")
    assert len(result) >= 1
    assert result[0]["answer"] == "罗贯中"


def test_fuzzy_match_ocr_text_in_question():
    """OCR 识别文本是问题的一部分时能模糊匹配。"""
    fake_data = [
        {"question": "清朝道光年间在虎门销近鸦片的民族英雄是谁", "answer": "林则徐"},
    ]
    with patch("app.answer_engine.get_qa_data") as mock_get:
        mock_get.return_value = fake_data
        result = find_answers("虎门销近鸦片的民族英雄")
    assert len(result) >= 1
    assert result[0]["answer"] == "林则徐"


def test_fuzzy_match_ignores_punctuation():
    """模糊匹配忽略标点符号差异。"""
    fake_data = [
        {"question": "三国演义是谁的著作", "answer": "罗贯中"},
    ]
    with patch("app.answer_engine.get_qa_data") as mock_get:
        mock_get.return_value = fake_data
        result = find_answers("三国演义,是谁的著作!!")
    assert len(result) >= 1
    assert result[0]["answer"] == "罗贯中"


def test_returns_multiple_matches():
    """包含匹配应返回多个结果。"""
    fake_data = [
        {"question": "三国演义是谁的著作", "answer": "罗贯中"},
        {"question": "三国演义共有多少回", "answer": "一百二十回"},
        {"question": "水浒传是谁的著作", "answer": "施耐庵"},
    ]
    with patch("app.answer_engine.get_qa_data") as mock_get:
        mock_get.return_value = fake_data
        result = find_answers("三国演义")
    assert len(result) >= 2
    answers = [r["answer"] for r in result]
    assert "罗贯中" in answers
    assert "一百二十回" in answers


def test_limit_parameter():
    """limit 参数限制返回数量。"""
    fake_data = [
        {"question": f"三国演义问题{i}", "answer": f"答案{i}"} for i in range(20)
    ]
    with patch("app.answer_engine.get_qa_data") as mock_get:
        mock_get.return_value = fake_data
        result = find_answers("三国演义", limit=5)
    assert len(result) <= 5
