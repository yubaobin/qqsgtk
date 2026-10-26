# Khala Framework 规范

> 本文件定义 Khala 框架的使用规范，基于 Spring Boot 3.5.X + MyBatis Plus

---

## 1. 项目结构

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

src/main/resources/
├── application.yml       # 主配置
├── application-{env}.yml # 环境配置
├── i18n/                 # 国际化资源
├── mapper/               # MyBatis XML
├── sql/                  # 数据库脚本
└── static/               # 静态资源
```

---

## 2. 核心基类

### 2.1 SuperEntity - 实体基类

```java
import com.eshore.khala.common.model.SuperEntity;
@Data
@Accessors(chain = true)
@TableName("table_name")
public class YourEntity extends SuperEntity<Long, Long, LocalDateTime> {
    // 自动获得通用字段：
    // - id (Long) - 主键
    // - createTime (LocalDateTime) - 创建时间
    // - updateTime (LocalDateTime) - 更新时间
    // - createBy (Long) - 创建人
    // - updateBy (Long) - 更新人
    // - deleted (Integer) - 逻辑删除（0=未删除，1=已删除）
    // - tenantId (Long) - 租户 ID

    @TableField("name")
    @Schema(description = "名称")
    private String name;
}
```

### 2.2 SuperMapper - Mapper 基类

```java
import com.eshore.khala.db.mybatis.mapper.SuperMapper;
@Mapper
public interface YourMapper extends SuperMapper<YourEntity> {
    // 自动获得基础 CRUD 方法：
    // - insert, deleteById, updateById
    // - selectById, selectList, selectPage
    // - selectByMap, selectCount 等
}
```

### 2.3 SuperServiceImpl - Service 基类

```java
import com.eshore.khala.common.service.impl.SuperServiceImpl;
@Service
public class YourServiceImpl extends SuperServiceImpl<YourMapper, YourEntity>
        implements IYourService {
    // 自动获得基础 CRUD 方法
    // - save, saveBatch, saveOrUpdate
    // - removeById, removeByIds
    // - getById, list, page 等
}
```

---

## 3. 命名规范

### 3.1 类命名

| 类型 | 格式 | 示例 |
|------|------|------|
| 控制器 | `{Feature}Controller` | `KhalaSysUserController` |
| 实体 | `{Feature}` | `KhalaSysUser` |
| Mapper | `{Feature}Mapper` | `KhalaSysUserMapper` |
| 服务接口 | `I{Feature}Service` | `IKhalaSysUserService` |
| 服务实现 | `{Feature}ServiceImpl` | `KhalaSysUserServiceImpl` |
| 转换器 | `{Feature}Convert` | `KhalaSysUserConvert` |
| 创建请求 | `{Feature}CreateReq` | `KhalaSysUserCreateReq` |
| 更新请求 | `{Feature}UpdateReq` | `KhalaSysUserUpdateReq` |
| 分页请求 | `{Feature}PageReq` | `KhalaSysUserPageReq` |
| 视图对象 | `{Feature}Vo` | `KhalaSysUserVo` |

### 3.2 方法命名

| 操作 | 方法名 |
|------|--------|
| 创建 | `create` |
| 更新 | `update` |
| 删除 | `delete` |
| 查询单个 | `get` |
| 分页查询 | `page` |
| 列表查询 | `listAll` |
| 导出 | `export` |

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

### 4.1 Controller 层

```java
import com.eshore.khala.common.model.CommonResult;
@RestController
@RequestMapping("/khala-sys-user")
@Tag(name = "系统用户管理")
public class KhalaSysUserController {

    @Resource
    private IKhalaSysUserService khalaSysUserService;

    @PostMapping("/create")
    @Operation(summary = "创建用户")
    public CommonResult<Long> create(@Valid @RequestBody KhalaSysUserCreateReq req) {
        return CommonResult.success(khalaSysUserService.create(req));
    }

    @PostMapping("/update")
    @Operation(summary = "更新用户")
    public CommonResult<Void> update(@Valid @RequestBody KhalaSysUserUpdateReq req) {
        khalaSysUserService.update(req);
        return CommonResult.success();
    }

    @PostMapping("/delete")
    @Operation(summary = "删除用户")
    public CommonResult<Void> delete(@RequestParam Long id) {
        khalaSysUserService.delete(id);
        return CommonResult.success();
    }

    @GetMapping("/get")
    @Operation(summary = "查询用户")
    public CommonResult<KhalaSysUserVo> get(@RequestParam Long id) {
        return CommonResult.success(khalaSysUserService.get(id));
    }

    @PostMapping("/page")
    @Operation(summary = "分页查询用户")
    public CommonResult<IPage<KhalaSysUserVo>> page(@Valid @RequestBody KhalaSysUserPageReq req) {
        return CommonResult.success(khalaSysUserService.page(req));
    }
}
```

**关键点：**
- 必须使用 `@Resource` 注入（不能用 `@Autowired`）
- 必须返回 `CommonResult<T>` 包装
- 请求参数使用 `@Valid` 验证

### 4.2 Service 层

```java
public interface IKhalaSysUserService extends IService<KhalaSysUser> {
    Long create(KhalaSysUserCreateReq req);
    void update(KhalaSysUserUpdateReq req);
    void delete(Long id);
    KhalaSysUserVo get(Long id);
    IPage<KhalaSysUserVo> page(KhalaSysUserPageReq req);
}

@Service
public class KhalaSysUserServiceImpl extends SuperServiceImpl<KhalaSysUserMapper, KhalaSysUser>
        implements IKhalaSysUserService {

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Long create(KhalaSysUserCreateReq req) {
        KhalaSysUser entity = KhalaSysUserConvert.INSTANCE.toEntity(req);
        this.save(entity);
        return entity.getId();
    }

    @Override
    public KhalaSysUserVo get(Long id) {
        KhalaSysUser entity = this.getById(id);
        return KhalaSysUserConvert.INSTANCE.toVo(entity);
    }
}
```

**关键点：**
- 继承 `SuperServiceImpl<Mapper, Entity>` 获得通用 CRUD 能力
- 继承 `IService<Entity>` 接口
- 涉及多表操作时添加 `@Transactional` 注解

### 4.3 Mapper 层

```java
import com.eshore.khala.db.mybatis.mapper.SuperMapper;
@Mapper
public interface KhalaSysUserMapper extends SuperMapper<KhalaSysUser> {

    default PageResult<KhalaSysUser> selectPage(KhalaSysUserPageReq req) {
        return selectPage(PageUtil.build(req), new LambdaQueryWrapperX<KhalaSysUser>()
                .likeIfPresent(KhalaSysUser::getName, req.getName())
                .eqIfPresent(KhalaSysUser::getStatus, req.getStatus())
                .orderByDesc(KhalaSysUser::getCreateTime));
    }
}
```

**关键点：**
- 继承 `SuperMapper<Entity>` 获得通用 CRUD 能力
- 简单查询使用 `default` 方法 + `LambdaQueryWrapperX`
- 复杂 SQL 使用 XML 文件
- 条件查询使用 `xxxIfPresent` 方法，自动过滤空值

### 4.4 Convert 层（MapStruct）

```java
@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface KhalaSysUserConvert {
    KhalaSysUserConvert INSTANCE = Mappers.getMapper(KhalaSysUserConvert.class);

    KhalaSysUser toEntity(KhalaSysUserCreateReq req);
    KhalaSysUserVo toVo(KhalaSysUser entity);
    List<KhalaSysUserVo> toVoList(List<KhalaSysUser> entities);
}
```

---

## 5. 数据对象规范

### 5.1 Entity 实体

```java
import com.eshore.khala.common.model.SuperEntity;
@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper = true)
@TableName("sys_user")
public class KhalaSysUser extends SuperEntity<Long, Long, LocalDateTime> {

    @TableField("name")
    @Schema(description = "用户名")
    private String name;

    @TableField("status")
    @Schema(description = "状态")
    private Integer status;
}
```

### 5.2 Req 请求对象

```java
// 创建请求
@Data
public class KhalaSysUserCreateReq {
    @NotBlank(message = "用户名不能为空")
    @Size(min = 2, max = 20, message = "用户名长度 2-20 位")
    @Schema(description = "用户名")
    private String name;

    @NotNull(message = "状态不能为空")
    @Schema(description = "状态")
    private Integer status;
}

// 更新请求
@Data
public class KhalaSysUserUpdateReq {
    @NotNull(message = "ID 不能为空")
    @Schema(description = "ID")
    private Long id;

    @Schema(description = "用户名")
    private String name;

    @Schema(description = "状态")
    private Integer status;
}

// 分页请求
@Data
public class KhalaSysUserPageReq extends PageParam {
    @Schema(description = "用户名（模糊查询）")
    private String name;

    @Schema(description = "状态")
    private Integer status;
}
```

### 5.3 Vo 视图对象

```java
@Data
public class KhalaSysUserVo {
    @Schema(description = "用户ID")
    private Long id;

    @Schema(description = "用户名")
    private String name;

    @Schema(description = "状态")
    private Integer status;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    @Schema(description = "创建时间")
    private LocalDateTime createTime;
}
```

---

## 6. 数据库规范

### 6.1 表名

- 格式：`{module}_{feature}`
- 示例：`sys_user`、`biz_order`
- **注意：** 业务表不要加 `khala_` 前缀

### 6.2 通用字段

| 字段 | 类型 | 说明 |
|------|------|------|
| id | BIGINT | 主键 |
| create_time | DATETIME | 创建时间 |
| update_time | DATETIME | 更新时间 |
| create_by | BIGINT | 创建人 |
| update_by | BIGINT | 更新人 |
| deleted | TINYINT | 逻辑删除（0=未删除，1=已删除） |
| tenant_id | BIGINT | 租户 ID |

这些字段由 `SuperEntity` 自动提供，无需手动定义。

---

## 7. 常用注解

| 类型 | 注解 | 说明 |
|------|------|------|
| Lombok | `@Data` | 自动生成 getter/setter |
| Lombok | `@Accessors(chain=true)` | 链式调用 |
| Lombok | `@EqualsAndHashCode(callSuper=true)` | 包含父类字段 |
| OpenAPI | `@Tag(name="")` | Controller 级别描述 |
| OpenAPI | `@Operation(summary="")` | 方法级别描述 |
| OpenAPI | `@Schema(description="")` | 字段描述 |
| 验证 | `@NotNull` | 不能为 null |
| 验证 | `@NotBlank` | 不能为空字符串 |
| 验证 | `@Size` | 大小范围 |
| 验证 | `@Email` | 邮箱格式 |
| 验证 | `@Pattern` | 正则表达式 |
| 验证 | `@Min` / `@Max` | 数值范围 |
| Jackson | `@JsonFormat` | 日期格式化 |
| Jackson | `@JsonIgnore` | 忽略序列化 |
| Jackson | `@JsonProperty` | 重命名字段 |
| Jackson | `@JsonInclude` | 空值处理 |
| MyBatis | `@TableName` | 表名映射 |
| MyBatis | `@TableId` | 主键映射 |
| MyBatis | `@TableField` | 字段映射 |
| MyBatis | `@TableLogic` | 逻辑删除 |

---

## 8. 常见错误

| 错误 | 正确做法 |
|------|---------|
| 使用 `@Autowired` | 使用 `@Resource` |
| 直接返回实体 | 使用 `CommonResult.success()` 包装 |
| Controller 写业务逻辑 | 业务逻辑放在 Service 层 |
| 手写基础 CRUD 方法 | 继承基类，直接使用 |
| 硬编码 SQL | 使用 `LambdaQueryWrapperX` |
| 字符串拼接 SQL | 使用参数化查询 |

---

## 9. 事务管理

```java
@Service
public class YourServiceImpl extends SuperServiceImpl<YourMapper, YourEntity> implements IYourService {

    // 单表操作无需显式事务
    @Override
    public Long create(YourCreateReq req) {
        YourEntity entity = YourConvert.INSTANCE.toEntity(req);
        this.save(entity);
        return entity.getId();
    }

    // 多表操作需要显式事务
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void complexOperation(ComplexReq req) {
        // 多个数据库操作
        this.save(entity1);
        yourMapper2.save(entity2);
        // 任意操作失败，全部回滚
    }
}
```

**事务使用原则：**
- 单表操作：无需显式添加事务
- 多表操作：必须添加 `@Transactional(rollbackFor = Exception.class)`
- 查询操作：不添加事务

---

## 10. 代码模板

完整的新增功能代码模板可参考 [api-standards.md](./api-standards.md) 中的 Controller 完整示例。
