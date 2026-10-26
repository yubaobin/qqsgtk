# Khala TDD 规范

> **执行前必读**：生成测试用例前，必须先阅读 [khala-unittest.md](./khala-unittest.md) 获取完整配置和代码模板

---

## 文档引用

| 文档                                                              | 用途 | 何时触发 |
|-----------------------------------------------------------------|------|---------|
| **[khala-unittest.md](./khala-unittest.md)**      | 完整测试配置、代码模板、示例 | **生成测试前必读** |

> **关键约定**：
> - Khala 项目使用 `BaseDbAndRedisUnitTest` + `@Resource`（非 @Mock）
> - 必须使用 Khala 工具类：`RandomUtils`、`AssertUtils`
> - Service/Mapper/Entity/POJO/Convert/Enums 不需要单独测试

> **TDD 执行配置**：详见 `khala-spec/config.yaml` → `execution` 节点

---

## TDD 执行流程

`opsx:apply-tdd` 会自动触发 `khala-apply-tdd` skill，执行以下流程：

```
RED (先写失败测试) → GREEN (写最小实现) → REFACTOR (重构)
```

**详细流程**：参见 [khala-unittest.md](./khala-unittest.md)

### 覆盖率要求

| 层级 | 覆盖率目标 |
|------|-----------|
| Service | >= 80% |
| Controller | >= 70% |

### 不需要测试的层

| 层级 | 说明 |
|------|------|
| Entity / POJO / Enums | 纯数据类，通过上层测试覆盖 |
| Convert | MapStruct 自动生成 |
| Mapper | 继承 SuperMapper，由框架保证 |

---

## 禁止事项

| 禁止 | 必须 |
|------|------|
| `new XxxCreateReq()` 手动构造 | `RandomUtils.randomPojo()` |
| `@Mock` / `@InjectMocks`（Service 层） | `@Resource` 注入真实 Bean |
| `assertEquals` 对比对象 | `AssertUtils.assertPojoEquals()` |
| `@SpringBootTest` | `@Import` 精确导入 |

---

## 测试资源检查清单

生成测试前，确认以下文件存在：

```
src/test/resources/
├── application-unit-test.yaml    测试配置
├── logback.xml                    日志配置
└── sql/
    ├── clean.sql                  清理数据
    └── create_tables.sql          建表脚本
```

> **详细配置和代码模板**：参见 [khala-unittest.md](./khala-unittest.md)

---

## 快速决策树

```
创建什么文件？
├── Service / Controller   → 需要测试，先读 khala-unittest.md
├── Mapper / Entity / POJO / Convert / Enums → 不需要测试
└── 工具类                → 根据复杂度决定
```

---

## 完整内容索引

| 内容 | 位置                                                   |
|------|------------------------------------------------------|
| 依赖配置 | [khala-unittest.md §1](./khala-unittest.md) |
| 测试环境准备 | [khala-unittest.md §2](./khala-unittest.md) |
| 配置文件模板 | [khala-unittest.md §3](./khala-unittest.md) |
| Service 测试模板 | [khala-unittest.md §4.2](./khala-unittest.md) |
| Controller 测试模板 | [khala-unittest.md §4.5](./khala-unittest.md) |
| 工具类说明 | [khala-unittest.md §5](./khala-unittest.md) |
| 常见问题 | [khala-unittest.md §6](./khala-unittest.md) |

---

**记住：测试不是"之后补充"，而是"先行设计"。**
