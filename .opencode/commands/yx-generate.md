---
name: yx:generate
description: 从 Khala 内部脚手架服务生成项目脚手架代码（开发人员角色）
tags:
  - workflow
  - yx-sdd
  - scaffold
category: Workflow
---

<!-- managed-by: khala-spec -->

## 执行角色
开发人员

## 执行粒度
每个项目一次

## 前置条件
- 可访问 `10.18.96.24:7001` 内部脚手架服务

## 核心目标
通过 AskUserQuestion 工具收集用户配置，自动组装并执行 `khala-spec generate --non-interactive` 命令，生成符合公司规范的项目脚手架。

---

## 步骤

### 0. 检查概要设计文档（可选）

检查项目根目录下是否存在 `khala-spec/rd/design/archive/` 目录（若存在则说明用户已通过 SDD 流程产出过概要设计）。

若文件存在，使用 AskUserQuestion 工具询问是否使用其中的配置作为预填：

```javascript
await AskUserQuestion({
  questions: [{
    question: "检测到概要设计文档，是否使用其中的配置作为默认选项？",
    header: "概要设计",
    options: [
      { label: "使用", description: "使用概要设计中的配置作为预填，可在此基础上修改" },
      { label: "不使用", description: "使用默认配置，重新选择所有选项" }
    ],
    multiSelect: false
  }]
})
```

**重要说明**：
- `khala-spec/rd/design/archive/` 中的配置（项目名称、groupId、artifactId、架构类型、依赖等）仅作为**默认值**填充到后续问题中
- 用户始终对所有选项拥有最终决定权，可保留或修改任何值
- Khala 版本始终自动选择最新版本，无需用户选择

### 1. 获取元数据

使用 curl 获取脚手架服务元数据（保存供后续步骤使用）：

```bash
curl -s http://10.18.96.24:7001/metadata/client
```

将返回的 JSON 保存为 `metadata` 变量，包含: dependencies, type, architecture, packaging, javaVersion 等

### 2. 询问项目类型

使用 AskUserQuestion 工具询问用户想要生成的项目类型：

```javascript
await AskUserQuestion({
  questions: [{
    question: "请选择需要生成的项目类型：",
    header: "项目类型",
    options: [
      { label: "后端 + 前端", description: "同时生成后端和前端项目" },
      { label: "仅后端", description: "仅生成 Java Spring Boot 后端项目" },
      { label: "仅前端", description: "仅生成 Vue 前端项目" }
    ],
    multiSelect: false
  }]
})
```

### 3. 询问架构（统一一次）

使用 AskUserQuestion 工具询问架构类型（前后端统一）：

```javascript
await AskUserQuestion({
  questions: [{
    question: "请选择架构类型：",
    header: "架构类型",
    options: [
      { label: "单体架构", description: "默认选项" },
      { label: "微服务架构", description: "" },
      { label: "工业架构", description: "适用于工业场景" },
      { label: "ITPUB架构", description: "适用于 ITPUB 内部基础脚手架" }
    ],
    multiSelect: false
  }]
})
```

### 4. 询问后端配置（如选择包含后端）

根据架构类型决定后续配置：

```javascript
// 架构已在第 3 步统一询问
// 仅工业架构 (industry) 跳过所有配置询问，使用默认值
// ITPUB 架构 (itpub) 与 单体/微服务 一样需要询问 name / groupId / artifactId / dependencies
if (architecture === 'industry') {
  // 工业架构：name=demo, groupId=com.eshore, artifactId=demo, khalaVersion=1.0.1, dependencies=(无)
  // 直接显示摘要确认
} else {
  // 非工业架构（含 itpub）：询问完整配置

  // 项目名称
  await AskUserQuestion({
    questions: [{
      question: "后端项目名称是什么？",
      header: "后端名称",
      options: [
        { label: "demo", description: "使用默认名称 demo" },
        { label: "custom", description: "自定义项目名称" }
      ],
      multiSelect: false
    }]
  })

  // groupId
  await AskUserQuestion({
    questions: [{
      question: "Maven groupId 是什么？",
      header: "GroupId",
      options: [
        { label: "com.eshore", description: "使用默认 groupId" },
        { label: "custom", description: "自定义 groupId" }
      ],
      multiSelect: false
    }]
  })

  // artifactId
  await AskUserQuestion({
    questions: [{
      question: "Maven artifactId 是什么？",
      header: "ArtifactId",
      options: [
        { label: "demo", description: "使用默认 artifactId" },
        { label: "custom", description: "自定义 artifactId" }
      ],
      multiSelect: false
    }]
  })

  // 依赖项：通过选项询问
  // Database 分类：选项模式（2 个选项，未超出限制）
  const dbCategory = metadata.dependencies?.values?.find(d => d.name.includes('Database'));
  const dbOptions = dbCategory?.values || [];
  const defaultDb = presets.dependencies?.find(d => d.startsWith('db/'))?.replace('db/', '') || 'mysql';

  // 通过 AskUserQuestion 选择数据库（2 个选项）
  const dbInput = await AskUserQuestion({
    questions: [{
      question: `请选择数据库（默认 MySQL）：\n可用: ${dbOptions.map(d => d.id).join(', ')}`,
      header: "数据库",
      options: [
        { label: "MySQL（默认）", description: "使用后端默认 MySQL，不传递数据库参数" },
        { label: "自定义", description: "手动输入数据库类型" }
      ],
      multiSelect: false
    }]
  });

  // Messaging 分类：单选（选项模式，未超出 4 个限制）
  const mqCategory = metadata.dependencies?.values?.find(d => d.name.includes('Messaging'));
  const mqOptions = mqCategory?.values || [];

  const mqInput = await AskUserQuestion({
    questions: [{
      question: "请选择消息中间件（默认跳过）：",
      header: "消息中间件",
      options: [
        { label: "无（默认）", description: "不使用消息中间件" },
        ...mqOptions.map(m => ({
          label: m.id,
          description: m.description || ''
        }))
      ],
      multiSelect: false
    }]
  });
  const selectedMq = (mqInput || '').trim();
  const finalMq = selectedMq === '无（默认）' ? '' : selectedMq;

  // Database 分类：基于用户选择的数据库类型
  // - 选择"MySQL（默认）"：selectedDb = 'mysql'（后续不传递）
  // - 选择"自定义"：selectedDb 通过对话获取用户输入
  let selectedDb = dbInput === 'MySQL（默认）' ? 'mysql' : null;
  if (dbInput === '自定义') {
    // 通过对话询问用户具体数据库类型
    // 可用选项：teledb, postgresql, telepg, dm, gbase, kingbase, oscar, openGauss, h2
    // 用户输入后，解析并设置 selectedDb
  }

  // 将各分类选择转换为 --dependencies 参数格式
  // MySQL 不传递，其他数据库按 id 传递
  const deps = [];
  if (selectedDb && selectedDb.toLowerCase() !== 'mysql') {
    deps.push(selectedDb);
  }
  if (finalMq && mqOptions.some(m => m.id === finalMq)) {
    deps.push(finalMq);
  }
}
```

### 5. 询问前端配置（如选择包含前端）

根据架构类型决定后续配置：

```javascript
// 架构已在第 3 步统一询问
// 仅工业架构 (industry) 跳过名称询问，使用默认值
// ITPUB 架构 (itpub) 与 单体/微服务 一样需要询问项目名称
if (architecture === 'industry') {
  // 工业架构：name=demo, khalaVersion=1.0.1
  // 直接显示摘要确认
} else {
  // 非工业架构（含 itpub）：询问项目名称

  // 项目名称
  await AskUserQuestion({
    questions: [{
      question: "前端项目名称是什么？",
      header: "前端名称",
      options: [
        { label: "demo", description: "使用默认名称 demo" },
        { label: "custom", description: "自定义项目名称" }
      ],
      multiSelect: false
    }]
  })

  // 前端框架固定为 Vue3，无需询问
}
```

### 6. 确认配置

**重要：仅执行下方代码块一次，把 `summary` 字符串完整打印一次即可，不要在响应中重复展示代码块本身或任何中间步骤。**

展示配置摘要，然后使用 AskUserQuestion 确认：

```javascript
// 重要：先把整段 summary 字符串拼好，最后只 console.log 一次
let summary = '';

// 后端配置摘要（仅当选择包含后端时）
if (projectType !== 'frontend-only') {
  summary += '\n**后端框架 (maven-project)**\n\n| 字段 | 值 |\n|------|-----|\n';
  if (architecture === 'industry') {
    summary += '| 架构 | 工业架构 |\n| 依赖 | (无) |\n';
  } else if (architecture === 'itpub') {
    summary += '| 架构 | ITPUB架构 |\n| itpubVersion | 3.3.13 |\n| 依赖 | (无) |\n';
  } else {
    summary += '| 项目名称 | ' + (backendName || 'demo') + ' |\n';
    summary += '| groupId | ' + (groupId || 'com.eshore') + ' |\n';
    summary += '| artifactId | ' + (artifactId || 'demo') + ' |\n';
    summary += '| Khala版本 | 自动选择最高版本 |\n';
    summary += '| 架构 | ' + (architecture === 'microservice' ? '微服务' : '单体') + ' |\n';
    summary += '| 依赖 | ' + (deps.length > 0 ? deps.join(', ') : '(无)') + ' |\n';
  }
}

// 前端配置摘要（仅当选择包含前端时）
if (projectType !== 'backend-only') {
  summary += '\n**前端框架 (vue-project)**\n\n| 字段 | 值 |\n|------|-----|\n';
  if (architecture === 'industry') {
    summary += '| 前端框架 | Vue 3 |\n| 架构 | 工业架构 |\n';
  } else if (architecture === 'itpub') {
    summary += '| 前端框架 | Vue 3 |\n| 架构 | ITPUB架构 |\n| itpubVersion | 3.3.13 |\n';
  } else {
    summary += '| 项目名称 | ' + (frontendName || 'demo') + ' |\n';
    summary += '| 前端框架 | Vue 3 |\n';
    summary += '| 架构 | ' + (architecture === 'microservice' ? '微服务' : '单体') + ' |\n';
  }
}

// 只打印一次
console.log(summary);

// 确认
await AskUserQuestion({
  questions: [{
    question: "请确认以上配置，开始生成脚手架：",
    header: "确认",
    options: [
      { label: "确认生成", description: "开始生成脚手架代码" },
      { label: "重新配置", description: "重新选择配置" }
    ],
    multiSelect: false
  }]
})
```

### 7. 执行命令

根据用户确认状态，执行相应命令。

**重要**：Claude Code 必须先获取当前项目路径，通过 `--cwd` 参数传递给 CLI，避免脚手架解压到错误目录：

```bash
# 1. 先获取当前项目目录
pwd

# 2. 执行 generate 命令（通过 --cwd 指定项目根目录）
khala-spec generate --non-interactive \
  --cwd <项目根目录> \
  --project-types maven-project,vue-project \
  --backend-name demo \
  --group-id com.eshore \
  --artifact-id demo \
  --khala-version 7.4.1 \
  --architecture single \
  --dependencies ${deps.join(',')} \
  --frontend-name demo \
  --language-type vue3
```

---

## 产出物

**仅后端时**（直接出现在项目根目录）：
```
<project>/
├── src/
├── pom.xml
├── Dockerfile
└── ...
```

**仅前端时**（直接出现在项目根目录）：
```
<project>/
├── src/
├── package.json
└── ...
```

**同时包含前后端时**（子目录区分）：
```
<project>/
├── backend/                    # 后端脚手架
│   ├── src/
│   ├── pom.xml
│   └── ...
└── frontend/                   # 前端脚手架
    ├── src/
    ├── package.json
    └── ...
```

---

## 非交互模式参数参考

| 参数 | 说明 | 示例 |
|------|------|------|
| `--non-interactive` | 启用非交互模式（必须） | `--non-interactive` |
| `--cwd` | 目标项目根目录（建议传递） | `D:\project` |
| `--project-types` | 项目类型，逗号分隔 | `maven-project` / `vue-project` / `maven-project,vue-project` |
| `--backend-name` | 后端项目名称 | `demo` |
| `--group-id` | Maven groupId | `com.eshore` |
| `--artifact-id` | Maven artifactId | `demo` |
| `--khala-version` | 脚手架支持的最高版本（默认取元数据中版本列表的最高版本） | `7.4.1` |
| `--architecture` | 架构类型（默认单体） | `single` / `microservice` / `industry` / `itpub` |
| `--dependencies` | 依赖项（简单 ID 格式，逗号分隔） | `teledb,ctgmq` |
| `--frontend-name` | 前端项目名称 | `demo` |
| `--language-type` | 前端语言类型 | `vue3` |

---

## 注意事项

1. **版本默认策略**：不指定 `--khala-version` 时使用脚手架支持的最高版本（取自元数据 `javaVersion.values` 中的最高版本）
2. **工业架构版本**：当选择工业架构时，`khalaVersion` 自动设置为 `1.0.1`（跟随工业基础），跳过名称/groupId/artifactId/dependencies 询问
3. **ITPUB架构版本**：当选择 ITPUB 架构时，`itpubVersion` 取元数据中 `itpubVersion.values` 的最高版本（默认 `3.3.13`）。ITPUB 架构与 Khala 版本无关，无 `khalaVersion` 概念；下载 URL 中 `khalaVersion` 参数只是对接参数名占位（实际由后端用作 `param.version` 与 ITPUB 框架版本校验），值为 `itpubVersion`（3.3.13）。ITPUB 架构**不跳过**后端 name/groupId/artifactId/dependencies 与前端 name 询问（与单体/微服务一致），配置摘要中不展示 `bootVersion`。
3. **前端默认语言**：强制使用 `vue3`，忽略元数据中的默认值
4. **目录冲突**：如果 `backend/` 或 `frontend/` 目录已存在，非交互模式会自动覆盖
5. **依赖互斥**：同类别依赖只能选一个
6. **网络要求**：需要能访问 `10.18.96.24` 内部服务
7. **dependencies 参数格式**：简单 ID 格式，多个用逗号分隔（如 `teledb,ctgmq`）
8. **获取元数据命令**：使用 `curl -s http://10.18.96.24:7001/metadata/client`
9. **交互方式**：使用 AskUserQuestion 工具进行选择交互
