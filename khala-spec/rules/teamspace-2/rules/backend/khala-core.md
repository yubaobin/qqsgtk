<!-- khala-spec:path-scope: user-project -->
# Khala 核心规范

> 本文件定义 Khala Framework 必须遵守的核心规范
> 详细开发指南请参考 [khala-framework-guide.md](./khala-framework-guide.md)

---

## 1. 必须遵守的约定

| 约定 | 要求 |
|------|------|
| 依赖注入 | **必须**使用 `@Resource`，**禁止**使用 `@Autowired` |
| 返回包装 | **必须**使用 `CommonResult.success(data)` 包装 |
| 参数验证 | 请求参数**必须**使用 `@Valid` 验证 |
| 主键类型 | Entity 主键**必须**使用 `Long` 类型 |
| 逻辑删除 | 删除操作**必须**使用逻辑删除（deleted 字段） |
| 导入命名空间 | **必须**明确导入具体的类，**禁止**使用通配符导入（如 `import java.util.*`） |
| 对象转换 | **必须**使用 MapStruct Convert（`{Feature}Convert`），**禁止**手动 set 或 `BeanUtils.copyProperties` |

---

## 2. 核心基类

### 2.1 Entity - 继承 SuperEntity

```java
import com.eshore.khala.common.model.SuperEntity;
@Data
@TableName("table_name")
public class YourEntity extends SuperEntity<Long, Long, LocalDateTime> {
    // 自动获得：id, createTime, updateTime, createBy, updateBy
}
```

### 2.2 Mapper - 继承 SuperMapper

```java
import com.eshore.khala.db.mybatis.mapper.SuperMapper;
@Mapper
public interface YourMapper extends SuperMapper<YourEntity> {
    // 自动获得 CRUD 方法
}
```

### 2.3 Service - 继承 SuperServiceImpl

```java
import com.eshore.khala.common.service.impl.SuperServiceImpl;
public class YourServiceImpl extends SuperServiceImpl<YourMapper, YourEntity>
        implements IYourService {
    // 自动获得 CRUD 方法
}
```

---

## 3. 命名规范

| 类型 | 格式 | 示例 |
|------|------|------|
| 控制器 | `{Feature}Controller` | `ProjectViewController` |
| 实体 | `{Feature}` | `ProjectView` |
| Mapper | `{Feature}Mapper` | `ProjectViewMapper` |
| 服务接口 | `I{Feature}Service` | `IProjectViewService` |
| 服务实现 | `{Feature}ServiceImpl` | `ProjectViewServiceImpl` |
| 创建请求 | `{Feature}CreateReq` | `ProjectViewCreateReq` |
| 更新请求 | `{Feature}UpdateReq` | `ProjectViewUpdateReq` |
| 分页请求 | `{Feature}PageReq` | `ProjectViewPageReq` |
| 视图对象 | `{Feature}Vo` | `ProjectViewVo` |

---

## 4. 分层架构

```
Controller → Service → Mapper → Database
   ↓            ↓         ↓
  Req对象    Entity    SQL操作

返回: Database → Mapper → Service → Controller
                    ↓         ↓          ↓
               Entity对象   Vo对象   CommonResult<Vo>
```

---

## 5. 事务原则

| 场景 | 事务要求 |
|------|---------|
| 单表 CRUD | 无需显式事务 |
| 多表操作 | 必须 `@Transactional(rollbackFor = Exception.class)` |
| 查询操作 | 不添加事务 |

---

## 6. 项目结构

```
src/main/java/com/eshore/
├── starter/             # 启动类
├── {module}/            # 业务模块
│   ├── controller/      # 控制器层
│   ├── convert/         # 转换层（MapStruct）
│   ├── service/         # 服务接口
│   │   └── impl/        # 服务实现
│   ├── mapper/          # 数据访问层
│   ├── entity/          # 实体类
│   └── pojo/            # 数据传输对象
│       ├── req/         # 请求对象
│       └── vo/          # 视图对象
└── khala/               # Khala 框架集成
```

---

## 7. 数据库规范（database design spec）

> **重要约定**：所有表必须包含以下审计字段

| 规范 | 要求 |
|------|------|
| 表名格式 | `{module}_{feature}`，业务表**不要**加 `khala_` 前缀 |
| 主键 | `id BIGINT` |
| 时间字段 | `create_time`, `update_time DATETIME` |
| 用户字段 | `create_by`, `update_by BIGINT` |
| 逻辑删除 | `deleted TINYINT` (0=未删除，1=已删除) |
| 租户字段 | `tenant_id BIGINT` |

---

## 8. 框架组件查询

> **重要约定**：当需要使用 Khala 框架提供的 SDK 组件或 API 时，**优先在 `khala-spec/doc-ref/` 目录下查找对应组件的源码**，通过源码了解组件的使用方法、接口定义和配置方式。仅在 `khala-spec/doc-ref/` 中找不到相关源码时，才通过 **khala-wiki** skill 查询文档作为回退。

### 8.1 查询顺序

| 优先级 | 查询方式 | 适用场景 |
|--------|---------|---------|
| **1（优先）** | `khala-spec/doc-ref/` 源码目录 | 查找组件源码、接口定义、实现示例 |
| **2（回退）** | khala-wiki skill | doc-ref 无源码时，查询 API 文档、配置说明 |

### 8.2 何时使用 khala-wiki（回退场景）

| 场景 | 操作 |
|------|------|
| doc-ref 中无对应源码 | 通过 khala-wiki 查询组件文档 |
| 需要安全组件 | 查询 XSS 防护、签名验证、加密等组件用法 |
| 需要工具类 | 查询 `KhalaSignatureUtil`、`KhalaCryptoUtil` 等 API |
| 配置组件 | 查询组件的 `application.yaml` 配置示例 |
| 不确定用什么组件 | 描述需求，让 khala-wiki 推荐合适组件 |

### 8.3 khala-wiki 查询示例

```
# 查询签名验证用法
"如何使用 KhalaSignatureUtil 进行 API 签名验证？"

# 查询加密组件配置
"khala-crypto 组件如何配置 AES 加密？"

# 查询安全组件推荐
"防止短信接口被刷，应该用哪个 Khala 组件？"
```

### 8.4 参考来源对照

| 参考来源 | 路径/方式 | 优先级 |
|---------|----------|--------|
| **doc-ref 源码** | `khala-spec/doc-ref/` 下各模块源码目录 | **优先** |
| khala-wiki skill | 通过 skill 查询 | 回退 |
| [khala-components-list.md](./khala-components-list.md) | 浏览完整组件列表（速查） | 辅助 |
| [khala-security.md](./khala-security.md) | 安全规范、检查清单 | 辅助 |

---

## 9. 快速参考

| 需求              | 查看文档                                                            |
|-----------------|-----------------------------------------------------------------|
| 完整代码模板          | [khala-framework-guide.md](./khala-framework-guide.md) |
| 安全组件选择          | [khala-security.md](./khala-security.md)                        |
| API 接口设计        | [khala-api-guide.md](./khala-api-guide.md)                       |
| 组件完整列表          | [khala-components-list.md](./khala-components-list.md)   | 详细用法见 [khala-components-detail.md](./khala-components-detail.md) |
| khala系统用户，角色，组织 | [khala-user-system-guide.md](./khala-user-system-guide.md)   |                          |
---

## 10. 常见错误

| 错误 | 正确做法 |
|------|---------|
| 使用 `@Autowired` | 使用 `@Resource` |
| 直接返回实体 | 使用 `CommonResult.success()` 包装 |
| Controller 写业务逻辑 | 业务逻辑放在 Service 层 |
| 手写基础 CRUD | 继承基类，直接使用 |
| 硬编码 SQL | 使用 `LambdaQueryWrapperX` |
| 使用 `import java.util.*` 通配符导入 | 明确导入具体类，如 `import java.util.List` |
| 手动 set 或 `BeanUtils.copyProperties` 转换对象 | 使用 MapStruct Convert（`{Feature}Convert.INSTANCE`） |
