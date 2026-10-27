# PaddlePaddle CPU 版本
FROM python:3.10-slim

LABEL maintainer="OCR System"
LABEL description="PaddleOCR backend API"

WORKDIR /app

# 安装系统依赖（PaddlePaddle/PaddleOCR 运行所需）
RUN apt-get update && apt-get install -y --no-install-recommends \
        libgomp1 \
        libglib2.0-0 \
        libsm6 \
        libxext6 \
        libxrender-dev \
        libgl1 \
    && rm -rf /var/lib/apt/lists/*

# 先复制依赖文件，利用 Docker 层缓存
COPY pyproject.toml ./

# 安装 Python 依赖
RUN pip install --no-cache-dir -e ".[dev]"

# 复制源码
COPY app/ ./app/

EXPOSE 8000

# 环境变量：远程 API 地址（可选，默认使用内置地址）
ENV REMOTE_API_URL=https://api.qqsgtk.cn/qqsgtkApi/findByQuestion

# 健康检查
HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
    CMD python -c "import urllib.request; urllib.request.urlopen('http://localhost:8000/health')" || exit 1

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
