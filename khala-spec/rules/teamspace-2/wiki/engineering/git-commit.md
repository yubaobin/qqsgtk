# Git 提交规范

本文档规定项目 Git 提交信息的统一格式，目的是规范提交记录、便于代码审查、版本回溯及自动化生成 CHANGELOG，适用于团队所有开发人员。

---

## 一、提交格式

提交信息需遵循以下格式，核心部分（type、subject）必须填写，body 和 footer 可选：

```plaintext
<type>(<scope>): <subject>

<body>

<footer>
```

---

## 二、各字段详解

### 2.1 type（提交类型，必填，小写）

描述提交的核心目的，严格对应以下类型，不可自定义：

| 类型 | 说明 | 版本影响 |
|------|------|----------|
| **feat** | 新增功能 | MINOR |
| **fix** | 修复 Bug | PATCH |
| **docs** | 仅修改文档（README、注释等，不涉及代码逻辑） | 无 |
| **style** | 代码格式调整（空格、缩进、分号等，不影响代码运行逻辑） | 无 |
| **refactor** | 代码重构（非新增功能、非修复 Bug，仅优化代码结构） | 无 |
| **perf** | 性能优化（提升代码运行效率、减少资源占用） | PATCH |
| **test** | 新增/修改测试用例（单元测试、集成测试等） | 无 |
| **build** | 构建相关修改（pom.xml 依赖修改、构建工具配置等） | PATCH |
| **ci** | 持续集成配置修改（GitHub Actions、Jenkins 脚本等） | 无 |
| **chore** | 其他不影响 src/test 目录的杂项（清理临时文件、修改 .gitignore 等） | 无 |
| **revert** | 回退之前的提交 | PATCH |

### 2.2 scope（影响范围，可选）

说明提交影响的模块/组件，便于快速定位修改范围，推荐填写，无明确范围可省略。

项目常用 scope：

| Scope | 说明 |
|-------|------|
| **deps** | 依赖相关（最常用，如 pom.xml 依赖修改） |
| **maven** | Maven 构建配置调整 |
| **user** | 用户模块 |
| **order** | 订单模块 |
| **common** | 公共模块 |
| **api** | 接口模块 |
| **frontend** | 前端整体 |
| **component** | 前端组件 |
| **auth** | 认证授权模块 |
| **sys** | 系统管理模块 |

### 2.3 subject（提交主题，必填）

- 简洁描述提交内容，核心是"做了什么"，不超过 50 个字符
- 以祈使句开头（如 add、fix、update、remove），小写开头
- 结尾不加句号，避免模糊表述（如禁止使用 "update code""fix bug"）

### 2.4 body（提交正文，可选）

- 与 subject 空一行分隔，每行不超过 72 个字符
- 详细说明"为什么改、改了什么、影响是什么"，客观清晰即可

### 2.5 footer（脚注，可选）

- **关联 Issue**：使用 `Closes #xxx`、`Fixes #xxx`、`Resolves #xxx`（xxx 为 Issue 编号）
- **破坏性变更**：标注 `BREAKING CHANGE:` 描述变更内容（将触发语义化版本 MAJOR）

---

## 三、提交示例

### 3.1 依赖修改（高频）

```plaintext
build(deps): 升级 Spring Boot 至 3.5.13

升级 Spring Boot 版本以修复安全漏洞，同步更新相关 starter 依赖版本。
```

### 3.2 功能开发

```plaintext
feat(user): 新增用户头像上传接口

支持 JPG、PNG 格式，最大 2MB，上传后返回 CDN 访问地址。

Closes #123
```

### 3.3 Bug 修复

```plaintext
fix(order): 修复订单支付超时未关闭问题

支付状态在 30 分钟后未自动取消，原因是定时任务未正确配置 cron 表达式。

Fixes #456
```

### 3.4 文档更新

```plaintext
docs: 更新 README 部署说明

补充 Docker Compose 部署步骤和环境变量配置说明。
```

### 3.5 代码重构

```plaintext
refactor(common): 重构工具类，优化代码可读性

将 DateUtils 中的重复逻辑提取为私有方法，减少代码冗余。
```

### 3.6 回退提交

```plaintext
revert: 回退 "feat(user): 新增用户头像上传接口"

该功能存在文件类型校验绕过漏洞，回退后重新设计。

Reverts abc1234
```

---

## 四、分支管理规范

### 4.1 分支命名

| 分支类型 | 命名格式 | 示例 |
|----------|----------|------|
| 主分支 | `main` / `master` | `main` |
| 开发分支 | `develop` | `develop` |
| 功能分支 | `feature/<功能描述>` | `feature/user-avatar-upload` |
| 修复分支 | `fix/<Bug描述>` | `fix/order-timeout-bug` |
| 发布分支 | `release/<版本号>` | `release/7.4.3` |
| 热修复分支 | `hotfix/<描述>` | `hotfix/security-patch` |

### 4.2 工作流程

```
main ─────┬─────────────────────────┬───────────────────
          │                         │
develop ──┼────┬────┬────┬──────────┼────┬──────────────
             │    │    │             │    │
feature/A ───┘    │    │             │    │
                  │    │             │    │
feature/B ────────┘    │             │    │
                       │             │    │
fix/C ─────────────────┘             │    │
                                     │    │
release/7.4.0 ───────────────────────┘    │
                                          │
hotfix/security ──────────────────────────┘
```

### 4.3 合并要求

- 功能开发完成后，需通过 Code Review 方可合并到 `develop`
- 合并前需解决所有冲突，确保 CI 流水线通过
- 禁止直接向 `main` 分支推送代码，必须通过 Pull Request/Merge Request

---

## 五、注意事项

1. **提交粒度**：一次提交只做一件事，避免大而全的提交
2. **提交频率**：完成一个独立功能点即可提交，不必等到全部完成
3. **提交前检查**：执行代码格式化、静态检查，确保无编译错误
4. **敏感信息**：禁止提交密码、密钥、Token 等敏感信息到代码仓库
