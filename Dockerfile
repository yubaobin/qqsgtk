# ===== 阶段 1：前端构建 =====
FROM node:20-slim AS frontend-build

ARG VITE_BASE_PATH=/

WORKDIR /app/frontend

COPY frontend/package.json frontend/package-lock.json ./
# 使用淘宝 npm 镜像加速
RUN npm config set registry https://registry.npmmirror.com && npm ci

COPY frontend/ ./
RUN VITE_BASE_PATH=$VITE_BASE_PATH npm run build

# ===== 阶段 2：最终镜像（后端 + Nginx） =====
FROM python:3.10-slim

LABEL maintainer="OCR System"
LABEL description="OCR Q&A - frontend + backend in one container"

# 使用阿里云 Debian 镜像源加速 apt
RUN sed -i 's|deb.debian.org|mirrors.aliyun.com|g' /etc/apt/sources.list.d/debian.sources \
    && sed -i 's|security.debian.org|mirrors.aliyun.com|g' /etc/apt/sources.list.d/debian.sources

# 安装系统依赖：PaddlePaddle 运行库 + Nginx + supervisord
RUN apt-get update && apt-get install -y --no-install-recommends \
        libgomp1 \
        libglib2.0-0 \
        libsm6 \
        libxext6 \
        libxrender-dev \
        libgl1 \
        nginx \
        supervisor \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# 先复制依赖文件，利用 Docker 层缓存
COPY backend/pyproject.toml ./backend/

# 安装 Python 依赖（使用清华 PyPI 镜像加速）
RUN pip install --no-cache-dir -i https://pypi.tuna.tsinghua.edu.cn/simple -e "./backend[dev]"

# 复制后端源码
COPY backend/app/ ./backend/app/

# 复制题库
COPY question.json ./question.json

# 复制前端构建产物到 Nginx 目录
# 前缀路径时（如 /qqsgtk）放到子目录，配合 Nginx root 指令
ARG VITE_BASE_PATH=/
COPY --from=frontend-build /app/frontend/dist /tmp/frontend-dist
RUN if [ "$VITE_BASE_PATH" != "/" ] && [ -n "$VITE_BASE_PATH" ]; then \
      PREFIX="$(echo "$VITE_BASE_PATH" | sed 's|^/||; s|/*$||')"; \
      mkdir -p "/usr/share/nginx/html/$PREFIX"; \
      cp -r /tmp/frontend-dist/* "/usr/share/nginx/html/$PREFIX/"; \
    else \
      cp -r /tmp/frontend-dist/* /usr/share/nginx/html/; \
    fi && \
    rm -rf /tmp/frontend-dist

# 根据 VITE_BASE_PATH 生成 Nginx 配置
COPY deploy/nginx.conf.template /tmp/nginx.conf.template
RUN BASE_PATH="/" && \
    TRY_FILES="/index.html" && \
    REDIRECT="" && \
    if [ "$VITE_BASE_PATH" != "/" ] && [ -n "$VITE_BASE_PATH" ]; then \
      BASE_PATH="$(echo "$VITE_BASE_PATH" | sed 's|/*$||')/"; \
      TRY_FILES="${BASE_PATH}index.html"; \
      REDIRECT="location = / { return 302 ${BASE_PATH}; }"; \
    fi && \
    sed -e "s|__BASE_PATH__|${BASE_PATH}|g" \
        -e "s|__TRY_FILES__|${TRY_FILES}|g" \
        -e "s|__ROOT_REDIRECT__|${REDIRECT}|" \
        /tmp/nginx.conf.template > /etc/nginx/conf.d/default.conf && \
    rm /tmp/nginx.conf.template && \
    cat /etc/nginx/conf.d/default.conf

# 删除 Nginx 默认站点配置（避免冲突）
RUN rm -f /etc/nginx/sites-enabled/default

# 复制 supervisord 配置
COPY deploy/supervisord.conf /etc/supervisor/conf.d/app.conf

EXPOSE 80

CMD ["supervisord", "-n", "-c", "/etc/supervisor/supervisord.conf"]
