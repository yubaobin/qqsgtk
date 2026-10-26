---
name: yx:text-to-image
description: 调用豆包 Seedream 文生图 API，根据用户对话中的图像描述生成图片，并把产物落盘到当前工作空间。适用于任意需要「一句话 →
  一张图」的快速出图场景，无需预先准备素材库。
category: Workflow
tags:
  - workflow
  - image
  - generation
  - ai
---

<!-- managed-by: khala-spec -->

<!-- managed-by: khala-spec -->

## 执行角色

产品 / 设计 / 前端 / 任何需要根据自然语言快速产出占位图、概念图、原型素材的角色

## 执行粒度

每次需要根据一句话生成一张图时执行一次

## 前置条件

- 已安装 Node.js（>= 20，调用 `node` 命令可解析）
- 当前工作目录可写（图片将落到 `./text-to-image-output/` 或用户指定的目录）
- 网络可达 `https://t.eshore.cn:10443`（公司内网 / VPN 环境）

## 核心目标

把用户对话里的图像描述（prompt）直接喂给豆包 Seedream 文生图接口，解析返回体中的图片 URL，下载并保存到当前工作空间，便于在原型、文档、PPT 中就近取用。

## 输入

| 参数 | 必填 | 默认 | 说明 |
|------|------|------|------|
| `$ARGUMENTS` | 是 | — | 图像描述（prompt）；若包含空格必须用引号包裹，或通过 `--prompt` 显式传入 |
| `--prompt` | 可选 | 取 `$ARGUMENTS` 第一个非 flag 参数 | 显式覆盖位置参数 |
| `--output-dir` | 可选 | `./text-to-image-output/` | 图片保存目录（相对当前工作目录） |
| `--filename` | 可选 | 时间戳 + prompt 哈希 | 输出文件名（不含扩展名，扩展名按 `output_format` 自动补齐） |
| `--model` | 可选 | `Seedream-5.0-pro` | 调用的模型名 |
| `--size` | 可选 | `2K` | 图像尺寸，可选 `1K`/`2K`/`4K` 等模型支持值 |
| `--watermark` | 可选 | `true` | 是否叠加水印 |
| `--response-format` | 可选 | `url` | 返回格式，`url` 或 `b64_json`（本技能固定按 url 处理） |
| `--count` | 可选 | `1` | 单次生成张数 |

## 执行协议

`/yx:text-to-image` 由 `khala-spec-text-to-image` 技能执行，流程固定为 4 步：

| # | 任务 | 入口 |
|---|------|------|
| T1 | 解析参数（prompt + 可选项），校验必填 | `text-to-image.cjs generate --prompt <text> ...` |
| T2 | 调用豆包文生图 API，获取响应 | 脚本内置 `https.request` |
| T3 | 解析响应，下载 `data[0].url` 到 output-dir/filename | 脚本内置 `https.get` 落盘 |
| T4 | 输出保存路径 + 图像尺寸 + 用量 | stdout 单行 JSON |

调用细节、退出码、跨平台说明见 `skills/khala-spec-text-to-image/SKILL.md`。

## 退出码

| code | 含义 |
|------|------|
| 0 | 成功生成并落盘至少 1 张 |
| 1 | 参数错误（缺 prompt / 参数非法） |
| 2 | API 调用失败（HTTP 非 2xx / 网络异常） |
| 3 | 响应解析失败（缺少 `data[0].url`） |
| 4 | 图片下载失败（落盘失败 / 磁盘不可写） |

---

调用 `khala-spec-text-to-image` 技能执行文生图工作流。
