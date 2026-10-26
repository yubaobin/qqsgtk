# schedule — 定时任务

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: doc-ref/schedule/

## 何时参考此示例

- 需要分布式定时任务调度
- 需要可视化任务管理、任务分片、故障转移
- 需要替代传统 Quartz/Spring Scheduler

## 版本示例选择

| 你的 Khala 版本 | 查看目录 | 说明 |
|----------------|---------|------|
| 7.1.0+ | [7.1/](7.1/) | 最新写法 |
| 7.0.0+ | [7.0/](7.0/) | 兼容写法 |

## 快速查找（以 7.1/ 为例）

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 基础任务 | 7.1/basic-job.java | 实现 BasicProcessor |
| 分片任务 | 7.1/shard-job.java | 实现 MapReduceProcessor |
| 任务配置 | 7.1/job-config.yml | PowerJob Worker 配置 |
| 任务开关 | 7.1/job-enable.yml | khala.job.enabled 控制 |

## 版本差异说明

| 版本 | 差异说明 |
|------|---------|
| 7.1.0+ | 切换为 PowerJob 4.x，支持更强大的分布式调度 |
| 7.0.0+ | 集成 XXL-JOB |

> **注意**: 示例代码待补充，仅保留目录骨架。
