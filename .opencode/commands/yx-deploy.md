---
name: yx:deploy
description: Deploy command for SpringBoot/Vue projects with K8s orchestration
tags:
  - workflow
  - yx
  - deployment
  - k8s
category: Workflow
---

<!-- managed-by: khala-spec -->

运维角色核心部署命令，提供标准化的部署流程指导，支持两种用途。

---

## 两种用途

`/yx:deploy` 命令支持两种用途（通过问答选择或参数指定）：

| 用途 | 说明 | 快捷方式 |
|------|------|----------|
| **生成部署配置** | 生成 Dockerfile、deployment.yaml 等配置文件到 `deploy/` 目录 | `/yx:deploy` 或 `/yx:deploy 生成部署配置` |
| **应用部署** | 完整部署流程：环境检查 → 构建 → 推送 → 部署 → 健康验证 | `/yx:deploy 应用部署` |

## 触发条件

- 用户请求部署相关帮助（如"部署到测试环境"、"生成部署配置"、"K8s编排配置"）
- 用户请求回滚操作（如"回滚到上一版本"、"版本回退"）
- 用户请求健康验证（如"验证服务状态"、"检查部署是否成功"）
- 用户请求 MCP 快速部署（如"使用 MCP 部署"、"快速部署服务"）

## 角色定义

**运维角色 (yx)**

- 负责应用部署、环境管理、容器编排配置
- 关注部署可靠性、健康验证、回滚策略
- 使用 Kubernetes、Docker、Nginx 等运维工具
- 支持 Kubernetes MCP 服务快速操作

## 核心职责

### 0. 用途选择 (mode-selection)

执行 `/yx:deploy` 时，首先进行用途选择：
- 参数指定：根据命令参数直接选择用途
- 问答选择：使用 AskUserQuestion 引导用户选择用途

**用途1：生成部署配置**
- 输出位置：`deploy/` 目录
- 文件迁移：自动移动根目录现有部署文件到 `deploy/k8s/`
- Dockerfile：根据本地环境状态选择构建方式（简单构建或多阶段构建）

**用途2：应用部署**
- MCP 服务检测：检测 kubernetes-mcp-server 配置状态
- 环境检测：检测 Maven/NodeJS/Docker 环境状态
- 镜像管理：清理历史镜像，构建新镜像
- 部署执行：使用 MCP 或 kubectl 执行部署
- 健康验证：四维度检查确认部署成功
- 异常修复：检测异常并提供修复选择

### 1. MCP 服务检测 (mcp-detection)

执行部署前检测 Kubernetes MCP Server 配置状态：
- 检测命令：`claude mcp list 2>/dev/null`
- 结果处理：Connected → MCP 快速操作，NOT_CONFIGURED → 配置建议 + 安全警告

### 2. 部署方式交互选择 (deploy-mode-selection)

使用 AskUserQuestion 提供部署方式选择：
- MCP 快速部署（推荐，已配置 MCP Server）
- 手动 kubectl 部署（MCP 未配置或需要更细粒度控制）

### 3. 部署任务交互选择 (deploy-task-selection)

使用 AskUserQuestion 提供部署任务多选：
- 生成部署脚本（Dockerfile + build.sh）
- 生成 K8s 配置（Deployment/Service/Ingress YAML）
- 执行部署（MCP 快速部署或手动 kubectl）
- 健康验证（Pod/API/日志/事件检查）
- 回滚操作（kubectl rollback 或 MCP 回滚）

### 4. 部署脚本生成 (deploy-script-generation)

根据项目类型生成构建脚本和 Dockerfile：
- **后端项目**：Maven 构建命令、多阶段 Dockerfile 模板
- **前端项目**：npm 构建命令、多阶段 Dockerfile 模板、Nginx 配置

### 5. Kubernetes 编排配置生成 (k8s-orchestration)

通过直接输入 Q&A 流程生成 K8s 配置：
- 命名空间配置（测试/生产环境）
- 镜像拉取 Secret 配置（输入制品库全称，提取域名用于 Secret）
- Deployment YAML（挂载宿主机本地时间、健康检查、资源限制）
- K8s Probes 配置（livenessProbe/readinessProbe/startupProbe）
- Service YAML（ClusterIP 类型）
- Ingress YAML（域名可选、路径配置、敏感接口拦截）

### 6. 部署执行 (deploy-execution)

标准化部署步骤指导：
- MCP 快速部署：调用 MCP 工具执行 Deployment 创建/更新
- 手动 kubectl：输出部署命令指导用户手动执行

### 7. 健康验证 (health-verification)

部署后四维度健康验证：
- Pod 状态检查（数量、Ready 状态）
- 启动日志检查（ERROR 日志、启动关键字）
- API 健康端点验证（HTTP 状态码、响应内容）
- 事件检查（Warning 事件）

### 8. 回滚策略 (rollback-strategy)

完整的回滚支持：
- kubectl rollback 操作指导（上一版本/指定版本）
- 镜像版本更新回滚指导（kubectl set image）
- Helm rollback 指导
- MCP 快速回滚调用示例
- 回滚验证集成（自动健康验证）

## 技能调用

执行部署任务时，调用以下技能：

```
/yx:deploy → khala-spec-deploy skill
  ├── mode-selection.md          → 用途选择问答流程
  ├── service-discovery.md       → 微服务服务发现（@SpringBootApplication扫描、服务多选界面）
  ├── mandatory-services.md      → 强制服务处理（-uaa、admin-center、sc-gateway优先部署）
  ├── deploy-execution.md        → MCP检测、交互选择、部署执行
  ├── backend-deploy.md          → 后端项目部署指导
  ├── frontend-deploy.md         → 前端项目部署指导
  ├── k8s-orchestration.md       → K8s 编排配置生成 + Probes配置
  ├── health-verification.md     → 健康验证流程（四维度检查）
  ├── rollback-guide.md          → 回滚策略指导
  ├── k8s-mcp-integration.md     → MCP 服务集成指导（权限+安全警告）
  └── assets/                    → 模板文件
```

## 执行流程

### 步骤 1：MCP 服务检测

```bash
claude mcp list 2>/dev/null
```

检测结果处理：
- Connected → 继续执行，使用 MCP 快速操作模式
- NOT_CONFIGURED → 输出配置建议 + 安全警告 + 询问继续方式

### 步骤 2：交互选择部署方式

使用 AskUserQuestion 单选：
- MCP 快速部署（推荐）
- 手动 kubectl 部署

### 步骤 3：交互选择部署任务

使用 AskUserQuestion 多选：
- 生成部署脚本
- 生成 K8s 配置
- 执行部署
- 健康验证
- 回滚操作

### 步骤 4：项目类型检测

1. 检测 `pom.xml` 中 Spring Boot 相关依赖 → 后端项目
2. 检测 `package.json` 中 Vue 相关依赖 → 前端项目

### 步骤 5：执行对应任务

根据用户选择执行对应任务：
- **生成部署脚本** → 调用 backend-deploy.md 或 frontend-deploy.md
- **生成 K8s 配置** → 调用 k8s-orchestration.md，收集输入参数
- **执行部署** → MCP 快速部署 或 手动 kubectl
- **健康验证** → 调用 health-verification.md
- **回滚操作** → MCP 快速回滚 或 调用 rollback-guide.md

## 输出格式

### MCP 配置建议输出

当 MCP 未配置时，输出配置建议 + 安全警告：

```
## MCP 配置建议

### 步骤 1：创建 ServiceAccount（Write 权限）
...

⚠️ **重要安全提示**
- MCP 直接操作仅适用于开发/测试环境
- 生产环境存在环境隔离，不适用此方式直接部署
- 操作无命令历史记录，不适合审计场景
```

### 部署脚本输出

```bash
# 构建脚本 (build.sh)
# Dockerfile（多阶段构建）
# 构建命令指导
```

### K8s 配置输出

```yaml
# deployment-with-probes.yaml（含 liveness/readiness/startup Probe）
# service.yaml
# ingress.yaml  # 支持无域名配置
# secret.yaml   # 严格遵循 Kubernetes 规范
```

### 健康验证报告输出

```
## 健康验证报告

### Pod 状态检查
- Pod 数量: 3/3 (PASS)
- Ready 状态: 3/3 Running 1/1 (PASS)

### 启动日志检查
- ERROR 日志数: 0 (PASS)
- 启动关键字: "Started Application" 已检测 (PASS)

### API 健康端点验证
- HTTP 状态码: 200 (PASS)
- 响应内容: status=UP (PASS)

### 事件检查
- Warning 事件数: 0 (PASS)

---

VERDICT: DEPLOY HEALTHY ✓
```

### 回滚报告输出

```
## 回滚报告

### 回滚操作
- 应用名称: <app-name>
- 回滚版本: revision <N>

### 回滚验证
- Pod 状态: 3/3 Running 1/1 (PASS)
- 健康端点: HTTP 200, status=UP (PASS)

---

VERDICT: ROLLBACK SUCCESSFUL ✓
```

## 使用示例

### 用途1：生成部署配置

**问答方式**：
```
/yx:deploy
```
系统使用 AskUserQuestion 展示用途选择，选择"生成部署配置（默认）"

**参数方式**：
```
/yx:deploy 生成部署配置
```
或
```
/yx:deploy --generate
```
直接进入配置生成流程，跳过问答

**输出结果**：
```
deploy/
├── docker/
│   ├── Dockerfile              # 根据环境状态选择构建方式
│   └── build.sh                # 构建脚本
├── k8s/
│   ├── deployment.yaml         # Deployment 配置
│   ├── service.yaml            # Service 配置
│   ├── ingress.yaml            # Ingress 配置（可选）
│   └── secret.yaml             # Secret 配置
└── scripts/
    └── health-check.sh         # 健康检查脚本
```

### 用途2：应用部署

**问答方式**：
```
/yx:deploy
```
系统使用 AskUserQuestion 展示用途选择，选择"应用部署"

**参数方式**：
```
/yx:deploy 应用部署
```
或
```
/yx:deploy --deploy
```
直接进入应用部署流程，跳过问答

**执行流程**：
```
1. MCP 服务检测 → 检测 kubernetes-mcp-server 配置状态
2. 环境检测 → 检测 Maven/NodeJS/Docker 环境状态
3. 镜像管理 → 清理历史镜像，构建新镜像
4. 部署执行 → 使用 MCP 工具应用 K8s 配置
5. 健康验证 → 四维度检查确认部署成功
6. 异常修复 → 若检测异常，提供修复选择
```

**完整流程说明文档**

详细流程说明参考以下技能文档：
- [mode-selection.md](skills/khala-spec-deploy/mode-selection.md) - 用途选择流程
- [service-discovery.md](skills/khala-spec-deploy/service-discovery.md) - 微服务服务发现流程
- [mandatory-services.md](skills/khala-spec-deploy/mandatory-services.md) - 强制服务处理流程
- [environment-check.md](skills/khala-spec-deploy/environment-check.md) - 环境检测流程
- [image-management.md](skills/khala-spec-deploy/image-management.md) - 镜像管理流程
- [deploy-execution.md](skills/khala-spec-deploy/deploy-execution.md) - 部署执行流程
- [health-verification.md](skills/khala-spec-deploy/health-verification.md) - 健康验证流程

## 注意事项

- 本命令仅提供指导和建议，不执行实际部署操作（MCP 集成除外）
- K8s 配置采用直接输入模式，不提供选项列表
- Secret YAML key 使用域名部分（从制品库全称提取），全称用于镜像拼接
- Ingress 支持无域名配置（仅路径路由）
- MCP 服务使用 Write 权限，仅适用于开发/测试环境
- 生产环境存在环境隔离，不建议通过 MCP 直接部署
- 健康验证需等待 Pod 完全启动后执行
