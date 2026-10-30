#!/usr/bin/env python3
"""OCR 测试脚本 - 在服务器上运行"""

import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from backend.app.ocr_engine import recognize

if len(sys.argv) < 2:
    print("用法：python3 test_ocr.py <图片路径>")
    print("示例：python3 test_ocr.py test-pic/image.png")
    sys.exit(1)

image_path = sys.argv[1]

with open(image_path, "rb") as f:
    image_bytes = f.read()

print(f"测试图片：{image_path}")
print("=" * 60)

result = recognize(image_bytes)

print("识别结果:")
for i, line in enumerate(result, 1):
    print(f"  {i}. {line}")

print("=" * 60)
print(f"共识别 {len(result)} 行")

# 合并结果
full_text = "".join(result)
print(f"\n合并文本:\n  {full_text}")
