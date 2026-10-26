# 数据库设计规范

本文档规定 Khala 项目数据库表结构设计、字段命名和索引设计的统一规范。

---

## 一、命名规范

### 1.1 表名规范

- 使用小写字母，单词间用下划线 `_` 连接（snake_case）
- 表名使用名词复数形式
- 统一添加 `{系统名}_` 前缀或业务模块前缀


```
# 推荐
khala_sys_user          # 系统用户表
khala_sys_role          # 系统角色表
khala_biz_order         # 业务订单表
khala_biz_order_item    # 业务订单明细表

# 不推荐
sysUser                 # 驼峰命名
SYS_USER                # 全大写
user                    # 无前缀，易冲突
```

### 1.2 字段名规范

- 使用小写字母，单词间用下划线 `_` 连接
- 主键统一命名为 `id`
- 状态字段以 `_status` 结尾
- 时间字段以 `_time` 结尾
- 是否字段以 `is_` 开头

```
# 推荐
id                      # 主键
create_time             # 创建时间
update_time             # 更新时间
creator                 # 创建人
updater                 # 更新人
deleted                 # 是否删除（逻辑删除）
status                  # 状态
user_id                 # 用户 ID（外键）

# 不推荐
userId                  # 驼峰命名
CreateTime              # 大驼峰
isDelete                # 缺少下划线
```

---

## 二、字段设计规范

### 2.1 必备字段

每张业务表必须包含以下字段：

| 字段名 | 类型 |  是否必须 | 说明 |
|--------|------|------|------|
| **id** | BIGINT | 是 | 主键，自增或雪花 ID | 
| **create_time** | DATETIME | 是 | 创建时间 |
| **update_time** | DATETIME | 是 | 更新时间 |
| **create_by** | BIGINT(20) | 是 | 创建人ID |
| **update_by** | BIGINT(20) | 是 | 更新人ID |
| **deleted** | TINYINT | 是 | 逻辑删除标志（0-未删除，1-已删除） |
| **tenant_id** | BIGINT | 是 | 租户 ID（多租户场景），需要多租户隔离的字段 |

### 2.2 常用字段类型

| 数据类型 | 适用场景 | 说明 |
|----------|----------|------|
| **BIGINT** | 主键、外键、大整数 | 使用雪花 ID 时选择，避免 INT 易溢出 |
| **INT** | 状态、枚举值、计数 | 无符号时标注 UNSIGNED |
| **VARCHAR(n)** | 字符串、名称、编码 | n 根据实际业务确定，短文本用 VARCHAR(255)，不宜过大 |
| **TEXT / LONGTEXT** | 长文本 | 仅在必要时使用，避免 VARCHAR 超长度 |
| **DATETIME(3)** | 日期时间 | 统一使用 DATETIME(3) 保留毫秒 |
| **TIMESTAMP** | 时间戳 | 作为 DATETIME 的补充，避免用 VARCHAR 存时间 |
| **DECIMAL(19,4)** | 金额、精确小数 | 避免使用 FLOAT/DOUBLE（精度丢失） |
| **JSON** | JSON 结构数据 | 使用 JSON 类型，避免用 TEXT 存 JSON 字符串 |
| **TINYINT** | 布尔值、小范围状态 | 0/1 表示是/否，避免 BIT、CHAR(1) |

### 2.3 字段注释

- 每个字段必须添加注释，说明字段含义和取值范围
- 枚举类型字段需注明所有可能的取值及含义

### 2.3.1 MySQL 注释规范

```sql
CREATE TABLE khala_sys_user (
    id BIGINT NOT NULL COMMENT '主键',
    username VARCHAR(64) NOT NULL COMMENT '用户名',
    password VARCHAR(128) NOT NULL COMMENT '加密后的密码',
    nickname VARCHAR(64) DEFAULT NULL COMMENT '昵称',
    create_by bigint NOT NULL DEFAULT '0' COMMENT '创建用户id',
    create_time datetime DEFAULT NULL COMMENT '创建时间',
    update_by bigint NOT NULL DEFAULT '0' COMMENT '更新用户id',
    update_time datetime DEFAULT NULL COMMENT '更新时间',
    deleted bit(1) NOT NULL DEFAULT false COMMENT '是否逻辑删除，0:未删除；1:已删除',
    PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='系统用户表';
```
### 2.3.2 postgreSql 注释规范

```sql
CREATE TABLE khala_sys_user(
                               id BIGSERIAL NOT NULL,
                               username VARCHAR(64) NOT NULL,
                               password VARCHAR(128) NOT NULL,
                               nickname VARCHAR(64),
                               create_by BIGINT DEFAULT  0 NOT NULL,
                               create_time TIMESTAMP,
                               update_by BIGINT DEFAULT  0 NOT NULL,
                               update_time TIMESTAMP,
                               deleted BOOLEAN DEFAULT false NOT NULL,
                               PRIMARY KEY (id)
);

COMMENT ON TABLE khala_sys_user IS '用户表';
COMMENT ON COLUMN khala_sys_user.id IS '用户id';
COMMENT ON COLUMN khala_sys_user.username IS '用户名';
COMMENT ON COLUMN khala_sys_user.password IS '密码';
COMMENT ON COLUMN khala_sys_user.nickname IS '昵称';
COMMENT ON COLUMN khala_sys_user.create_by IS '创建人id';
COMMENT ON COLUMN khala_sys_user.create_time IS '创建时间';
COMMENT ON COLUMN khala_sys_user.update_by IS '更新人id';
COMMENT ON COLUMN khala_sys_user.update_time IS '更新时间';
COMMENT ON COLUMN khala_sys_user.deleted IS '是否过期';
```

---

## 三、索引设计规范

### 3.1 索引命名

| 索引类型 | 命名格式 | 示例 |
|----------|----------|------|
| 主键索引 | `PRIMARY` | - |
| 唯一索引 | `uk_表名_字段名` | `uk_sys_user_username` |
| 普通索引 | `idx_表名_字段名` | `idx_sys_user_status` |
| 组合索引 | `idx_表名_字段1_字段2` | `idx_sys_user_status_create_time` |

### 3.2 索引设计原则

- 主键必须使用索引
- 唯一约束字段必须创建唯一索引
- 频繁作为查询条件的字段应创建索引
- 频繁用于排序的字段应创建索引
- 组合索引遵循最左前缀原则，将区分度高的字段放在前面
- 单表索引数量不宜超过 5 个，避免影响写入性能
- 禁止在频繁更新的字段上创建索引

```sql
-- 唯一索引
CREATE UNIQUE INDEX uk_sys_user_username ON khala_sys_user(username);

-- 普通索引
CREATE INDEX idx_sys_user_status ON khala_sys_user(status);

-- 组合索引
CREATE INDEX idx_sys_user_status_create_time ON khala_sys_user(status, create_time);
```

### 3.3 必须加索引的场景

1. 主键、外键、唯一约束自动创建索引
2. WHERE 条件高频字段
3. ORDER BY、GROUP BY 字段
4. JOIN 关联字段

### 3.4 联合索引顺序

遵循 **最左前缀原则**，将区分度高的字段放在前面：

```sql
-- 好：tenant_id 区分度高，status 区分度低
CREATE INDEX idx_task_tenant_status ON task(tenant_id, status, create_time);

-- 差：status 只有几个值，放在前面浪费索引前缀
CREATE INDEX idx_task_status_tenant ON task(status, tenant_id);
```

### 3.5 索引禁忌

1. **禁止冗余索引**：`(a,b)` 和 `(a)` 同时存在时，后者冗余
2. **控制索引数量**：单表索引不超过 5 个，过多影响写入性能
3. **不在低基数字段建单独索引**：如性别、是否删除标志
4. **长字符串前缀索引**：`VARCHAR(255)` 字段查询时考虑前缀索引

---

## 四、SQL 编写规范

### 4.1 基本规范

- 使用小写关键字（SELECT、FROM、WHERE 等）
- 关键字与字段名之间保留一个空格
- 多行 SQL 时，每个子句单独一行
- 表名和字段名使用反引号包裹（避免与关键字冲突）

```sql
-- 推荐
SELECT `id`, `username`, `nickname`
FROM `khala_sys_user`
WHERE `status` = 1
  AND `deleted` = 0
ORDER BY `create_time` DESC
LIMIT 10;

-- 不推荐
SELECT id,username,nickname FROM khala_sys_user WHERE status=1 AND deleted=0;
```

### 4.2 分页查询

- 必须指定排序字段，避免数据乱序
- 大数据量分页使用游标分页或延迟关联优化

```sql
-- 推荐：指定排序
SELECT `id`, `username`
FROM `khala_sys_user`
WHERE `status` = 1
ORDER BY `create_time` DESC
LIMIT 0, 10;

-- 不推荐：无排序
SELECT `id`, `username`
FROM `khala_sys_user`
WHERE `status` = 1
LIMIT 0, 10;
```

### 4.3 深分页优化

当数据量较大时，常规 `LIMIT offset, size` 会因深度偏移导致性能下降，应采用以下优化方案。

#### 4.3.1 游标分页（推荐用于移动端、无限滚动）

```sql
-- 基于上一页最后一条记录的 create_time
SELECT * FROM task
WHERE tenant_id = ? AND create_time < ?
ORDER BY create_time DESC
LIMIT ?;
```

优点：无深度偏移问题，性能稳定。

缺点：不支持跳页，只能上一页/下一页。

#### 4.3.2 延迟关联

```sql
SELECT t.* FROM task t
INNER JOIN (
    SELECT id FROM task
    WHERE tenant_id = ? AND status = ?
    ORDER BY create_time DESC
    LIMIT 100000, 20
) tmp ON t.id = tmp.id;
```

先查主键，再回表取数据，减少回表次数。

#### 4.3.3 禁止无限制导出

导出功能必须限制最大条数（如 1 万条），超限走异步任务。

### 4.4 批量操作

- 批量插入数据量控制在 500-1000 条/次
- 批量更新使用 `CASE WHEN` 或临时表方式

```sql
-- 批量插入（推荐）
INSERT INTO `khala_sys_user` (`username`, `nickname`)
VALUES ('user1', '用户1'),
       ('user2', '用户2'),
       ('user3', '用户3');
```

### 4.5 查询规范

1. **禁止使用 `SELECT *`**：明确列出需要的字段
2. **禁止在索引字段上使用函数**：`WHERE DATE(create_time) = '2024-01-01'` 会导致索引失效
3. **禁止隐式类型转换**：字段是 VARCHAR 时，传入值也必须是字符串
4. **IN 子句限制**：元素数量不超过 1000，超限分批或改用临时表
5. **大事务拆分**：单事务操作数据量不超过 1 万条

### 4.6 更新规范

1. **UPDATE/DELETE 必须带 WHERE**：禁止无条件的更新或删除
2. **批量更新优先用 CASE WHEN**：

```sql
UPDATE task SET
    status = CASE id
        WHEN 1 THEN 2
        WHEN 2 THEN 3
    END,
    update_time = NOW()
WHERE id IN (1, 2);
```

3. **大批量更新走异步任务**：避免长时间锁表

---

## 五、乐观锁与悲观锁

### 5.1 乐观锁（推荐用于读多写少）

MyBatis-Plus 内置支持：

```java
@Data
@TableName("tsk_task")
public class TaskEntity {
    @Version
    private Integer version;
}
```

```sql
UPDATE task SET status = 1, version = version + 1
WHERE id = ? AND version = ?;
```

更新失败时抛出 `OptimisticLockException`，业务层决定重试或提示。

### 5.2 悲观锁（适用于写冲突频繁）

```sql
SELECT * FROM task WHERE id = ? FOR UPDATE;
```

**注意**：
- 必须在事务内使用
- 尽量缩小锁定范围（精确到主键）
- 避免长事务持有锁

---

## 六、读写分离

### 6.1 路由策略

| 操作类型 | 目标 | 说明 |
|----------|------|------|
| INSERT/UPDATE/DELETE | 主库 | 保证数据一致性 |
| SELECT | 从库 | 分担读压力 |

### 6.2 强制走主库

以下场景必须强制走主库，避免主从延迟导致数据不一致：

1. 刚写入后立即查询（读己之写）
2. 对数据一致性要求极高的查询
3. 报表统计、对账类查询

```java
// MyBatis-Plus 动态数据源示例
@DS("master")
public TaskEntity getByIdImmediately(Long id) {
    return taskMapper.selectById(id);
}
```

---

## 七、多租户规范

### 7.1 租户字段

- 所有业务表必须包含 `tenant_id` 字段
- 租户 ID 在数据操作时必须作为过滤条件

### 7.2 隔离策略

Khala 支持以下多租户隔离策略：

| 策略 | 说明 | 适用场景 |
|------|------|----------|
| **字段隔离** | 同一数据库、同一表，通过 tenant_id 区分 | 数据量较小、共享资源 |
| **Schema 隔离** | 同一数据库，不同 Schema | 中等数据量、部分隔离 |
| **数据库隔离** | 不同数据库实例 | 大数据量、强隔离要求 |

---

## 八、数据迁移规范

### 8.1 版本管理

- 使用 Flyway 或 Liquibase 管理数据库版本
- 脚本命名遵循版本号规则：`V{版本号}__{描述}.sql`

```
V1.0.0__init_schema.sql
V1.0.1__add_user_index.sql
V1.1.0__add_order_table.sql
```

### 8.2 脚本规范

- 每个脚本只包含一个变更操作
- 脚本必须可重复执行（幂等性）
- 禁止直接修改已发布的脚本
- 数据迁移脚本与结构变更脚本分离

---

## 九、注意事项

1. **字符集统一**：数据库、表、字段统一使用 `utf8mb4`，支持 emoji 和生僻字
2. **时区处理**：数据库使用 UTC 或统一时区，应用层负责时区转换
3. **大表预警**：单表数据量超过 500 万时，评估分表或归档策略
4. **SQL 审查**：核心 SQL 变更必须经过 DBA 或技术负责人审查

---

> **参考**：更多细节可参考阿里巴巴《Java 开发手册》数据库章节。
