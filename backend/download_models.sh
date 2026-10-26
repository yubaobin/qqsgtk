#!/usr/bin/env bash
# 下载 PaddleOCR 模型文件到本地缓存
# 当 paddleocr.bj.bcebos.com DNS 无法解析时，使用 --resolve 手动指定 IP
#
# 用法: ./download_models.sh

set -euo pipefail

PADDLE_OCR_HOME="${HOME}/.paddleocr/whl"
BASE_DOMAIN="paddleocr.bj.bcebos.com"

# 通过 Google DNS 解析 IP（本地 DNS 可能无法解析百度 CDN）
echo "解析 ${BASE_DOMAIN} 的 IP 地址..."
RESOLVED_IP=$(dig +short "${BASE_DOMAIN}" @8.8.8.8 2>/dev/null | tail -1)

if [ -z "${RESOLVED_IP}" ]; then
    echo "错误: 无法解析 ${BASE_DOMAIN}，请检查网络连接"
    echo "可尝试手动: curl --resolve ${BASE_DOMAIN}:443:<IP> https://${BASE_DOMAIN}/..."
    exit 1
fi

echo "解析到 IP: ${RESOLVED_IP}"
echo ""

# 定义需要下载的模型
declare -a MODELS=(
    "det/ch/ch_PP-OCRv4_det_infer|PP-OCRv4/chinese/ch_PP-OCRv4_det_infer.tar"
    "rec/ch/ch_PP-OCRv4_rec_infer|PP-OCRv4/chinese/ch_PP-OCRv4_rec_infer.tar"
    "cls/ch_ppocr_mobile_v2.0_cls_infer|dygraph_v2.0/ch/ch_ppocr_mobile_v2.0_cls_infer.tar"
)

for entry in "${MODELS[@]}"; do
    LOCAL_DIR="${PADDLE_OCR_HOME}/$(echo "${entry}" | cut -d'|' -f1)"
    REMOTE_PATH=$(echo "${entry}" | cut -d'|' -f2)
    MODEL_NAME=$(basename "${LOCAL_DIR}")

    # 检查模型是否已存在
    if [ -f "${LOCAL_DIR}/inference.pdmodel" ]; then
        echo "✅ ${MODEL_NAME} 已存在，跳过"
        continue
    fi

    echo "⬇️  下载 ${MODEL_NAME}..."
    mkdir -p "${LOCAL_DIR}"

    TAR_FILE="${LOCAL_DIR}/${MODEL_NAME}.tar"
    curl -L --resolve "${BASE_DOMAIN}:443:${RESOLVED_IP}" \
        -o "${TAR_FILE}" \
        "https://${BASE_DOMAIN}/${REMOTE_PATH}" 2>&1 | tail -1

    # 解压并移动文件到正确位置
    cd "${LOCAL_DIR}"
    tar xf "${TAR_FILE}"
    rm "${TAR_FILE}"

    # tar 解压后多一层目录，需要把文件移上来
    INNER_DIR=$(find . -maxdepth 1 -type d ! -name "." | head -1)
    if [ -n "${INNER_DIR}" ] && [ -d "${INNER_DIR}" ]; then
        mv "${INNER_DIR}"/* .
        rmdir "${INNER_DIR}"
    fi

    echo "✅ ${MODEL_NAME} 下载完成"
done

echo ""
echo "=== 所有模型已就绪 ==="
echo "模型缓存目录: ${PADDLE_OCR_HOME}"
