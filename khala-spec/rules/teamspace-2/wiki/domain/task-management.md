# 任务管理

## 概述

任务管理是协同系统中的核心领域，涵盖任务的创建、分配、跟踪、状态流转及闭环处理。

## 核心实体

### Task（任务）

| 属性 | 类型 | 说明 |
|------|------|------|
| id | Long | 主键 |
| title | String | 标题 |
| description | String | 描述 |
| status | TaskStatus | 状态 |
| priority | Priority | 优先级 |
| assigneeId | Long | 负责人 |
| reporterId | Long | 创建人 |
| dueDate | LocalDateTime | 截止日期 |
| projectId | Long | 所属项目 |
| tenantId | Long | 租户 |

### TaskStatus（状态枚举）

```
TODO → IN_PROGRESS → REVIEW → DONE
   ↓        ↓           ↓
CANCELLED  BLOCKED    REJECTED
```

## 状态机规则

| 当前状态 | 可流转至 | 触发条件 |
|----------|----------|----------|
| TODO | IN_PROGRESS / CANCELLED | 开始处理 / 取消任务 |
| IN_PROGRESS | REVIEW / BLOCKED | 提交审核 / 受阻 |
| REVIEW | DONE / REJECTED | 审核通过 / 打回 |
| BLOCKED | IN_PROGRESS | 阻塞解除 |
| REJECTED | IN_PROGRESS | 重新处理 |
| DONE | — | 终态 |
| CANCELLED | — | 终态 |

## 核心用例

1. **创建任务**：录入基本信息，初始状态为 TODO
2. **分配任务**：指定负责人，发送通知
3. **更新状态**：按状态机规则流转，记录变更历史
4. **批量操作**：支持批量指派、批量关闭（需权限校验）
5. **任务查询**：按状态、负责人、项目、时间范围筛选

## 业务规则

- 已关闭（DONE/CANCELLED）的任务禁止修改
- 截止日期前 24 小时未处理，触发提醒
- 任务变更需记录操作日志（谁、何时、改了什么）
- 支持子任务：父任务完成需所有子任务完成

## 扩展点

- **自定义字段**：租户可配置扩展属性
- **自动化规则**：如“创建 3 天未处理自动升级优先级”
- **工时统计**：记录预估工时与实际工时
