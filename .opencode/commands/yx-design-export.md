---
name: yx:design-export
description: 将概要设计文档导出为 Word 格式，架构图渲染为专业设计图（架构师角色）
tags:
  - workflow
  - yx-sdd
  - export
  - word
  - diagram
category: Workflow
---

<!-- managed-by: khala-spec -->

<!-- hidden: true -->

## 执行角色
架构师

## 执行粒度
概要设计完成后，需要导出正式文档时执行

## 前置条件
- 至少存在以下一种设计文档目录之一：
  - 主规格设计：`khala-spec/rd/design/specs/`
  - 归档设计：`khala-spec/rd/design/archive/`
  - 变更设计：`khala-spec/rd/design/changes/`

## 核心目标
将概要设计文档导出为格式规范的 Word 文档（.docx）。

---

## 步骤

### 1. 调用 SKILL: khala-spec-export-init — 环境初始化

使用 Skill 工具调用 `khala-spec-export-init` SKILL，完成导出环境初始化。

该 SKILL 完成以下工作：
- 检查 pandoc 是否已安装
- 检查 Puppeteer 是否已安装（HTML 架构图渲染引擎）
- 检查 mermaid-cli (mmdc) 是否已安装
- 创建输出目录结构（`khala-spec/rd/design/export/architecture/diagrams`、`khala-spec/rd/design/export/architecture/mermaid`）

### 2. 扫描设计文档目录并确认导出范围

#### 2.1 扫描设计文档目录

在询问用户前，先扫描以下三个目录，记录每个目录是否存在以及是否包含设计文档：

| 设计类型 | 目录路径 | 说明 |
|----------|----------|------|
| 主规格设计 | `khala-spec/rd/design/specs/` | 当前最新的概要设计主规格 |
| 归档设计 | `khala-spec/rd/design/archive/` | 已归档的历史版本设计 |
| 变更设计 | `khala-spec/rd/design/changes/` | 按版本管理的变更设计 |

仅将**存在且非空**的目录作为后续可选项展示给用户。

#### 2.2 选择设计文档类型

使用 AskUserQuestion 工具询问用户（选项根据 2.1 扫描结果动态生成）：

```
问题: "请选择需要导出的设计文档类型："
选项:
  - 主规格设计（khala-spec/rd/design/specs/）
  - 归档设计（khala-spec/rd/design/archive/）
  - 变更设计（khala-spec/rd/design/changes/）
  - 自定义选择文档
```

#### 2.3 变更设计需进一步选择版本

如果用户在 2.2 选择了「变更设计」，则继续扫描 `khala-spec/rd/design/changes/` 目录下的版本子目录（如 `v1.0.0`、`v1.1.0` 等），并使用 AskUserQuestion 询问用户：

```
问题: "请选择需要导出的变更设计版本："
选项:
  - <version-1>（按目录中实际存在的版本动态生成）
  - <version-2>
  - ...
```

确定版本后，待导出根目录为 `khala-spec/rd/design/changes/{version}/`。

#### 2.4 确定待导出的文档列表

根据用户选择，确定待导出的文档列表 `{source-files}`：

| 用户选择 | {source-files} 内容 |
|----------|---------------------|
| 主规格设计 | `khala-spec/rd/design/specs/` 目录下的设计文档 |
| 归档设计 | `khala-spec/rd/design/archive/` 目录下的设计文档 |
| 变更设计 | `khala-spec/rd/design/changes/{version}/` 目录下的设计文档 |
| 自定义选择 | 用户指定的文件路径列表 |

**注意**：记录用户选择的设计类型、版本（如有）和文档列表，后续步骤将使用 `{source-files}` 变量引用。

### 3. 确认项目名称、模板和封面信息

1. **项目名称**：从 `{source-files}` 中主文档（如 design-overview.md）的"业务背景"章节提取，无法提取时使用 AskUserQuestion 询问
2. **Word 样式模板**：使用 AskUserQuestion 询问用户：
   ```
   问题: "请选择 Word 样式模板："
   选项:
     - 使用默认模板（skills/khala-spec-design-export/templates/architecture.docx）
     - 使用自定义模板（需提供 .docx 模板文件路径）
   ```

**模板优先级：**
1. 用户指定的自定义模板路径
2. 默认模板 `skills/khala-spec-design-export/templates/architecture.docx`

3. **封面信息**：使用 AskUserQuestion 一次性列出封面信息字段供用户确认和补充，AI 无法提取到值的字段留空由用户填写：

   | 字段 | 值来源 | 默认值 |
   |------|--------|--------|
   | 文件编号 | AI 无法提取，留空 | — |
   | 版本号 | 默认 | V1.0 |
   | 编制人 | 从设计文档提取 + 当天日期 | — |
   | 审核人 | AI 无法提取，留空 | — |
   | 批准人 | AI 无法提取，留空 | — |
   | 生效日期 | 默认当天日期 | 当天日期 |

### 4. 调用 SKILL: khala-spec-export-architecture — 执行导出

使用 Skill 工具调用 `khala-spec-export-architecture` SKILL，执行完整的导出流程。

传入以下参数：
- `sourceFiles`：步骤 2 确定的文档列表
- `projectName`：步骤 3 确定的项目名称
- `templatePath`：步骤 3 确定的 Word 样式模板路径
- `fileNumber`：步骤 3 确认的文件编号
- `version`：步骤 3 确认的版本号
- `author`：步骤 3 确认的编制人
- `reviewer`：步骤 3 确认的审核人
- `approver`：步骤 3 确认的批准人
- `coverDate`：步骤 3 确认的生效日期

该 SKILL 完成以下工作：
- 复制模板配置到输出目录
- 渲染架构图（HTML → PNG、Mermaid → PNG、ASCII → PNG，三阶段按优先级处理）
- 准备正文 Markdown（合并文档、移除文档标题、移除标题编号）
- 通过 Lua 过滤器生成带样式的 OpenXML 封面页和目录页
- 生成 Word 文档（pandoc 转换）
- 验证输出

### 5. 自检

导出完成后，检查：

1. **文件存在**：确认 `khala-spec/rd/design/export/概要设计说明书.docx` 已生成且非空
2. **封面正确**：打开文档确认封面页已生成（标题、项目名称、信息表、修订历史表），且封面信息与用户提供的参数一致
3. **目录正确**：打开文档确认目录已生成（右键目录区域 → "更新域"）
4. **图片显示**：确认架构图在 Word 中正确显示
5. **中文正常**：确认中文内容无乱码
6. **表格格式**：确认表格在 Word 中正确渲染
7. **章节编号**：确认章节自动编号正确（1、1.1、1.1.1...）
8. **图表编号连续**：确认所有图表的编号（图1、图2、图3...）连续无跳号

如果验证不通过，排查问题后重新生成。

### 6. 清理临时文件（可选）

使用 AskUserQuestion 询问用户是否保留临时文件：

```
问题: "是否保留渲染中间文件（Mermaid 源文件和 PNG 图片）？"
选项:
  - 保留（便于后续修改和调试）
  - 清理（仅保留最终 .docx 文件）
```

如果选择清理：
```bash
rm -rf khala-spec/rd/design/export/architecture
```

---

## 产出物

```
khala-spec/rd/design/export/
├── 概要设计说明书.docx    # 最终 Word 文档
└── architecture/                         # 架构相关输出目录（可选保留）
    ├── index.md                          # 替换图表后的 Markdown（仅含正文）
    ├── render-html.js                    # HTML→PNG 渲染脚本
    ├── diagrams/                         # 渲染后的架构图 PNG
    │   ├── architecture-diagram.png      # HTML 渲染：总体架构图
    │   ├── logical-view-diagram.png      # HTML 渲染：逻辑视图
    │   ├── implementation-view-diagram.png # HTML 渲染：实现视图
    │   ├── process-view-diagram.png      # HTML 渲染：运行视图
    │   ├── deployment-view-diagram.png   # HTML 渲染：部署视图
    │   ├── 06-er-diagram.png             # Mermaid/ASCII 渲染：ER 图
    │   └── 07-module-dependency.png      # Mermaid/ASCII 渲染：模块依赖
    └── mermaid/                          # Mermaid 源文件
        ├── 06-er-diagram.mmd
        ├── 07-module-dependency.mmd
        └── mermaid.config.json
```

## Guardrails

- 必须先调用 `khala-spec-export-init` SKILL 完成环境初始化，再执行导出流程
- 必须先调用 `khala-spec-export-architecture` SKILL 完成导出，再进行自检
- 图表渲染三阶段必须按优先级顺序执行：HTML → Mermaid → ASCII
- 渲染 HTML 架构图时，禁止用 heredoc（`cat > xxx.js <<'EOF'`）手写渲染脚本（反斜杠会被吞掉导致正则语法错误，如 `/\\/g` 退化为 `/\/g`），必须复制内置脚本 `ai-instructions/skills/render-html-to-png/resources/render-html-puppeteer.js` 后用 `node` 运行
- 图表编号必须按文档中出现顺序统一递增，不可跳号
- 封面页和目录必须由 `cover-filter.lua` Lua 过滤器通过 OpenXML 生成，不得在 Markdown 中编写封面内容
- 封面字段必须通过 pandoc 的 `--metadata` 参数传递，使用自定义字段名（`project-name` / `cover-author` / `cover-date`），不得使用 Pandoc 标准字段（`title` / `author` / `date`）
- 不得使用 `--toc` 参数（目录由 Lua 过滤器生成），不得使用 `--metadata-file` 参数（封面字段通过 `--metadata` 传递）
- 字体、字号、页边距等样式由 `--reference-doc` 模板控制
- `index.md` 只包含正文内容，必须移除 `# 概要设计` 文档标题行（封面标题由 Lua 过滤器生成）
- 移除标题编号时只移除数字编号（如 `## 1 引言` → `## 引言`），不得移除非编号标题
- `--shift-heading-level-by=-1` 必须配合 Word 模板的标题列表编号（`numPr`）使用，不得使用 `--number-sections`，否则会产生双重编号
- 导出前必须确认至少存在一种设计文档目录（`khala-spec/rd/design/specs/`、`khala-spec/rd/design/archive/` 或 `khala-spec/rd/design/changes/`）
- 当用户选择「变更设计」时，必须扫描 `khala-spec/rd/design/changes/` 下的版本子目录，并由用户选择具体版本，不得默认导出全部版本
- 项目名称不得为空，必须从文档提取或向用户确认
- 不允许出现 TBD、TODO、待补充 等占位符
- 中文内容必须正常显示，不得出现乱码或方块

## 与其他命令的协作

| 命令 | 协作方式 |
|------|----------|
| `/yx:design` | 设计完成后可执行本命令导出 |
| `/yx:design-archive` | 归档后可执行本命令导出最终版 Word（前置条件） |
| `khala-spec-export-init` SKILL | 本命令步骤 1 调用，完成环境初始化 |
| `khala-spec-export-architecture` SKILL | 本命令步骤 4 调用，完成导出执行 |
| `render-html-to-png` SKILL | 导出 SKILL 内部调用，渲染 HTML 架构图 |
| `diagram-renderer` SKILL | 导出 SKILL 内部调用，渲染 ASCII/Mermaid 架构图 |


---

**阶段隔离**:本阶段产物已落盘 khala-spec/rd/design/export/。下一阶段请新开会话执行,无需依赖本会话历史。。
