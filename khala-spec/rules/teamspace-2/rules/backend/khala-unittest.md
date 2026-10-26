# Khala 单元测试配置指南

> 本文档定义 Khala Framework 单元测试的环境配置和代码模板
> 相关规范：[.claude/rules/khala-tdd.md](../.claude/rules/khala-tdd.md)

---

## 1. 添加测试依赖

在模块 `pom.xml` 中添加：

```xml
<!-- Khala 测试 Starter -->
<dependency>
    <groupId>com.eshore.khala</groupId>
    <artifactId>khala-test-spring-boot-starter</artifactId>
    <scope>test</scope>
</dependency>

<!-- MySQL 驱动（测试使用） -->
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
    <scope>test</scope>
</dependency>
```

---

## 2. 测试环境准备

### 2.1 创建测试数据库

```sql
-- 创建测试数据库
CREATE DATABASE khala_test DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

> **为什么用 MySQL 而不是 H2？**
> - 与生产环境一致，避免数据库特性差异
> - SQL 语法完全兼容，无需转换
> - 测试结果更可靠

### 2.2 创建测试资源目录

确保测试模块有以下目录结构：

```
src/test/resources/
├── application-unit-test.yaml
├── logback.xml
└── sql/
    ├── clean.sql
    └── create_tables.sql
```

---

## 3. 配置文件

### 3.1 application-unit-test.yaml

```yaml
spring:
  main:
    lazy-initialization: true  # 开启懒加载，加快速度
    banner-mode: off           # 单元测试禁用 Banner

--- #################### 数据库相关配置 ####################

spring:
  config:
    import:
      - optional:classpath:application-${spring.profiles.active}.yaml
      - optional:nacos:${spring.application.name}.yaml
  datasource:
    name: admin-center
    # MySQL 测试数据库
    url: jdbc:mysql://localhost:3306/khala_test?useUnicode=true&characterEncoding=utf8&zeroDateTimeBehavior=convertToNull&useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: root
    password: root
  messages:
    basename: i18n/admincenter
    use-code-as-default-message: true
  sql:
    init:
      schema-locations: classpath:/sql/create_tables.sql

  # Redis 配置（单元测试使用 16379 端口）
  data:
    redis:
      host: 127.0.0.1
      port: 16379
      database: 0

mybatis:
  lazy-initialization: true  # MyBatis Mapper 延迟加载

mybatis-plus:
  global-config:
    db-config:
      id-type: AUTO  # MySQL 主键自增

khala:
  info:
    base-package: com.eshore.khala
```

### 3.2 logback.xml

```xml
<configuration>
    <!-- 引用 Spring Boot 的 logback 基础配置 -->
    <include resource="org/springframework/boot/logging/logback/defaults.xml" />
</configuration>
```

### 3.3 sql/clean.sql

```sql
-- 清理测试数据（按依赖关系排序）
DELETE FROM khala_sys_api;
DELETE FROM khala_sys_api_authority;
DELETE FROM khala_sys_app;
DELETE FROM khala_sys_developer;
DELETE FROM khala_sys_dict;
DELETE FROM khala_sys_dict_item;
DELETE FROM khala_sys_file_info;
DELETE FROM khala_sys_logger;
DELETE FROM khala_sys_menu;
DELETE FROM khala_sys_org;
DELETE FROM khala_sys_package;
DELETE FROM khala_sys_package_menu;
DELETE FROM khala_sys_package_resource;
DELETE FROM khala_sys_post;
DELETE FROM khala_sys_region;
DELETE FROM khala_sys_role;
DELETE FROM khala_sys_role_data_scope;
DELETE FROM khala_sys_role_menu;
DELETE FROM khala_sys_role_user;
DELETE FROM khala_sys_sensitive_word;
DELETE FROM khala_sys_sms_channel;
DELETE FROM khala_sys_sms_message;
DELETE FROM khala_sys_sms_template;
DELETE FROM khala_sys_social_user;
DELETE FROM khala_sys_social_user_bind;
DELETE FROM khala_sys_tenant;
DELETE FROM khala_sys_tenant_app;
DELETE FROM khala_sys_tenant_app_log;
DELETE FROM khala_sys_tenant_menu;
DELETE FROM khala_sys_tenant_package;
DELETE FROM khala_sys_tenant_resource;
DELETE FROM khala_sys_tenant_user;
DELETE FROM khala_sys_user;
DELETE FROM khala_sys_user_org;
DELETE FROM khala_sys_user_post;
DELETE FROM khala_sys_work_group;
DELETE FROM khala_sys_work_group_rel;
DELETE FROM oauth2_authorization;
DELETE FROM oauth2_registered_client;
```

### 3.4 sql/create_tables.sql

建表脚本内容较大，详见：
[docs/unittest/sql/create_tables.sql](./unittest/sql/create_tables.sql)

---

## 4. 测试代码模板

### 4.1 测试策略对比

| 层级 | Khala 方式（推荐） | 通用方式（ECC Skill） |
|------|-------------------|----------------------|
| **Service** | `BaseDbAndRedisUnitTest` + `@Resource` | `@ExtendWith(MockitoExtension.class)` + `@Mock` |
| **Mapper** | `BaseDbAndRedisUnitTest` + `@Transactional` | `@SpringBootTest` + `@Transactional` |
| **Controller** | `@WebMvcTest` + `@MockBean` | `@WebMvcTest` + `@MockBean` |
| **Convert** | 纯 Java 测试 | 纯 Java 测试 |

> **推荐**：Service/Mapper 使用 Khala 方式（更快、更真实），Controller 使用 `@WebMvcTest`

---

### 4.2 核心原则

| 原则 | 说明 |
|------|------|
| 继承基类 | 必须继承 `BaseDbAndRedisUnitTest` |
| 依赖注入 | 测试类使用 `@Resource`，不用 `@Mock/@InjectMocks` |
| Service 类型 | 使用 Impl 实现类，不用接口 |
| 精确导入 | 使用 `@Import`，不用 `@SpringBootTest` |
| 排除主类 | `@Import` 不要添加主程序类 |

> **为什么用 @Import？**
> `@Import` 精确导入只加载必要的 Bean，比 `@SpringBootTest` 启动更快。

### 4.2 完整示例

详见：[docs/unittest/SysUserServiceImplTest.java](./unittest/SysUserServiceImplTest.java)

```java
package com.eshore.khala.{module}.service;

import com.eshore.khala.starter.test.core.ut.BaseDbAndRedisUnitTest;
import com.eshore.khala.starter.test.core.util.AssertUtils;
import com.eshore.khala.starter.test.core.util.RandomUtils;
import jakarta.annotation.Resource;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.context.annotation.Import;

// 1. 递归导入被测试类及其所有依赖
@Import({
    XxxServiceImpl.class,
    DependentServiceImpl.class,  // 依赖的 Service
    // ... 其他依赖
})
// 2. 继承测试基类
public class XxxServiceImplTest extends BaseDbAndRedisUnitTest {

    // 3. 使用 @Resource 注入
    @Resource
    private XxxServiceImpl service;

    @Resource
    private XxxMapper mapper;

    @Test
    public void testCreate() {
        // 准备参数
        XxxCreateReq req = RandomUtils.randomPojo(XxxCreateReq.class, o -> {
            o.setName(RandomUtils.randomString());
        });

        // 调用
        Xxx result = service.create(req);

        // 断言
        Assertions.assertNotNull(result.getId());
        Xxx dbEntity = mapper.selectById(result.getId());
        AssertUtils.assertPojoEquals(req, dbEntity, "id");
    }

    @Test
    public void testDelete() {
        // 准备数据
        Xxx entity = createTestData();

        // 调用
        CommonResult<Boolean> result = service.delete(entity.getId());

        // 断言
        Assertions.assertTrue(result.isSuccess());
        Assertions.assertNull(mapper.selectById(entity.getId()));
    }

    // 辅助方法：创建测试数据
    private Xxx createTestData() {
        XxxCreateReq req = RandomUtils.randomPojo(XxxCreateReq.class, ...);
        return service.create(req);
    }
}
```

### 4.3 Mock 方式 Service 测试（通用 Spring Boot 项目）

> 适用于非 Khala 框架的通用 Spring Boot 项目，使用 Mockito 隔离依赖。

```java
package com.eshore.khala.projectview.service;

import com.eshore.khala.projectview.entity.ProjectView;
import com.eshore.khala.projectview.mapper.ProjectViewMapper;
import com.eshore.khala.projectview.pojo.req.ProjectViewCreateReq;
import com.eshore.khala.projectview.pojo.vo.ProjectViewVo;
import com.eshore.khala.projectview.convert.ProjectViewConvert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
@DisplayName("ProjectViewService 单元测试")
class ProjectViewServiceTest {

    @Mock
    private ProjectViewMapper projectViewMapper;

    @InjectMocks
    private ProjectViewServiceImpl projectViewService;

    private ProjectViewCreateReq createReq;
    private ProjectView entity;

    @BeforeEach
    void setUp() {
        createReq = new ProjectViewCreateReq();
        createReq.setName("测试项目视图");
        createReq.setStatus(1);

        entity = ProjectViewConvert.INSTANCE.toEntity(createReq);
        entity.setId(1L);
    }

    @Test
    @DisplayName("创建 - 成功")
    void create_Success() {
        // Given
        when(projectViewMapper.insert(any())).thenReturn(1);
        when(projectViewMapper.selectById(any())).thenReturn(entity);

        // When
        Long id = projectViewService.create(createReq);

        // Then
        assertThat(id).isEqualTo(1L);
        verify(projectViewMapper).insert(any());
    }

    @Test
    @DisplayName("创建 - 名称重复抛异常")
    void create_NameExists_ThrowsException() {
        // Given
        when(projectViewMapper.selectByName(any())).thenReturn(entity);

        // When & Then
        assertThatThrownBy(() -> projectViewService.create(createReq))
            .isInstanceOf(RuntimeException.class)
            .hasMessageContaining("名称已存在");
    }

    @Test
    @DisplayName("查询 - 成功")
    void get_Success() {
        // Given
        when(projectViewMapper.selectById(1L)).thenReturn(entity);

        // When
        ProjectViewVo vo = projectViewService.get(1L);

        // Then
        assertThat(vo).isNotNull();
        assertThat(vo.getName()).isEqualTo("测试项目视图");
    }

    @Test
    @DisplayName("更新 - 成功")
    void update_Success() {
        // Given
        ProjectViewUpdateReq updateReq = new ProjectViewUpdateReq();
        updateReq.setId(1L);
        updateReq.setName("更新后的名称");

        // When
        projectViewService.update(updateReq);

        // Then
        verify(projectViewMapper).updateById(any());
    }

    @Test
    @DisplayName("删除 - 逻辑删除成功")
    void delete_Success() {
        // When
        projectViewService.delete(1L);

        // Then
        verify(projectViewMapper).updateById(any());
    }
}
```

测试要点：

| 要点 | 说明 |
|------|------|
| **@ExtendWith** | 使用 MockitoExtension |
| **@Mock** | Mock 依赖的 Mapper |
| **@InjectMocks** | 自动注入 Mock 依赖到被测类 |
| **@BeforeEach** | 每个测试前初始化数据 |
| **Given-When-Then** | 结构化测试代码 |
| **verify()** | 验证方法调用 |

---

### 4.4 测试方法模式

| 方法类型 | 模式 |
|----------|------|
| 创建 | 准备参数 → 调用方法 → 断言 ID 非空 → 查库验证 |
| 更新 | 创建数据 → 准备参数 → 调用方法 → 查库验证变更 |
| 删除 | 创建数据 → 调用删除 → 断言成功 → 查库确认删除 |
| 查询 | 创建多条数据 → 调用查询 → 断言数量/内容 |

---

### 4.5 Controller 层测试

```java
@WebMvcTest(XxxController.class)
public class XxxControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private IXxxService service;

    @Test
    public void testCreate() throws Exception {
        // Given
        XxxCreateReq req = new XxxCreateReq();
        req.setName("test");
        when(service.create(any())).thenReturn(1L);

        // When & Then
        mockMvc.perform(post("/xxx/create")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(req)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.code").value(0))
                .andExpect(jsonPath("$.data").value(1L));
    }
}
```

### 4.6 Convert 层测试

```java
public class XxxConvertTest {

    @Test
    public void testToEntity() {
        // Given
        XxxCreateReq req = new XxxCreateReq();
        req.setName("test");

        // When
        XxxEntity entity = XxxConvert.INSTANCE.toEntity(req);

        // Then
        Assertions.assertEquals("test", entity.getName());
    }

    @Test
    public void testToVo() {
        // Given
        XxxEntity entity = new XxxEntity();
        entity.setId(1L);
        entity.setName("test");

        // When
        XxxVo vo = XxxConvert.INSTANCE.toVo(entity);

        // Then
        Assertions.assertEquals(1L, vo.getId());
        Assertions.assertEquals("test", vo.getName());
    }
}
```

### 4.7 Mapper 层测试模板

> 使用真实数据库验证 SQL 与映射，测试后自动回滚。

```java
package com.eshore.khala.projectview.mapper;

import com.eshore.khala.projectview.entity.ProjectView;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.transaction.annotation.Transactional;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@ActiveProfiles("test")
@Transactional
@DisplayName("ProjectViewMapper 数据访问测试")
class ProjectViewMapperTest {

    @Autowired
    private ProjectViewMapper projectViewMapper;

    @Test
    @DisplayName("CRUD - 成功")
    void crud_Success() {
        // Given
        ProjectView entity = new ProjectView();
        entity.setName("测试项目");
        entity.setStatus(1);

        // When: 插入
        projectViewMapper.insert(entity);
        Long id = entity.getId();

        // Then: 查询
        ProjectView found = projectViewMapper.selectById(id);
        assertThat(found).isNotNull();
        assertThat(found.getName()).isEqualTo("测试项目");

        // When: 更新
        entity.setName("更新后的项目");
        projectViewMapper.updateById(entity);

        // Then: 验证更新
        ProjectView updated = projectViewMapper.selectById(id);
        assertThat(updated.getName()).isEqualTo("更新后的项目");

        // When: 删除（逻辑删除）
        projectViewMapper.deleteById(id);

        // Then: 验证删除
        ProjectView deleted = projectViewMapper.selectById(id);
        assertThat(deleted.getDeleted()).isEqualTo(1);
    }

    @Test
    @DisplayName("分页查询 - 成功")
    void page_Success() {
        // Given
        ProjectViewPageReq req = new ProjectViewPageReq();
        req.setPage(1);
        req.setSize(10);

        // When
        PageResult<ProjectView> result = projectViewMapper.selectPage(req);

        // Then
        assertThat(result).isNotNull();
    }
}
```

测试要点：

| 要点 | 说明 |
|------|------|
| **@SpringBootTest** | 加载完整应用上下文 |
| **@ActiveProfiles("test")** | 使用测试配置 |
| **@Transactional** | 测试后自动回滚，不污染数据库 |
| **逻辑删除验证** | 检查 `deleted` 字段变更 |

---

## 5. 测试工具类

| 工具类 | 用途 | 示例 |
|--------|------|------|
| `RandomUtils` | 生成随机测试数据 | `RandomUtils.randomPojo(UserCreateReq.class)` |
| `AssertUtils` | 对象属性断言 | `AssertUtils.assertPojoEquals(req, dbEntity, "id")` |
| `PasswordUtils` | 密码相关 | `PasswordUtils.getRandomPassword(12)` |

---

## 6. JaCoCo 覆盖率配置

在 `pom.xml` 中添加 `jacoco-maven-plugin`，最低要求 80% 行覆盖率：

```xml
<plugin>
    <groupId>org.jacoco</groupId>
    <artifactId>jacoco-maven-plugin</artifactId>
    <version>0.8.11</version>
    <executions>
        <execution>
            <id>prepare-agent</id>
            <goals><goal>prepare-agent</goal></goals>
        </execution>
        <execution>
            <id>check</id>
            <goals><goal>check</goal></goals>
            <configuration>
                <rules>
                    <rule>
                        <limits>
                            <limit>
                                <counter>LINE</counter>
                                <value>COVEREDRATIO</value>
                                <minimum>0.80</minimum>
                            </limit>
                        </limits>
                    </rule>
                </rules>
            </configuration>
        </execution>
    </executions>
</plugin>
```

---

## 7. 测试命令

```bash
# 运行所有测试
mvn test

# 运行指定测试类
mvn test -Dtest=ProjectViewServiceTest

# 运行指定测试方法
mvn test -Dtest=ProjectViewServiceTest#create_Success

# 生成覆盖率报告
mvn jacoco:report

# 验证覆盖率（低于 80% 构建失败）
mvn clean verify

# 跳过测试（不推荐）
mvn clean install -DskipTests
```

---

## 8. 常用断言

### 8.1 AssertJ 断言

```java
// 对象断言
assertThat(obj).isNotNull();
assertThat(obj).isNull();
assertThat(obj).isEqualTo(expected);

// 字符串断言
assertThat(str).isNotEmpty();
assertThat(str).startsWith("prefix");
assertThat(str).endsWith("suffix");
assertThat(str).contains("substring");

// 数值断言
assertThat(num).isGreaterThan(10);
assertThat(num).isLessThan(100);
assertThat(num).isBetween(1, 100);

// 集合断言
assertThat(list).isNotEmpty();
assertThat(list).hasSize(5);
assertThat(list).contains(element);
assertThat(list).doesNotContain(element);

// 异常断言
assertThatThrownBy(() -> someMethod())
    .isInstanceOf(RuntimeException.class)
    .hasMessageContaining("错误信息");
```

### 8.2 MockMvc 验证

```java
// 状态验证
.andExpect(status().isOk())
.andExpect(status().isBadRequest())
.andExpect(status().isNotFound())

// JSON Path 验证
.andExpect(jsonPath("$.code").value(0))
.andExpect(jsonPath("$.data.name").value("test"))
.andExpect(jsonPath("$.data.items[0].id").value(1))

// 响应头验证
.andExpect(header().string("Content-Type", "application/json"))
```

---

## 9. 最佳实践

| 实践 | 说明 |
|------|------|
| **测试命名** | 使用 `@DisplayName` 描述测试意图 |
| **AAA 模式** | Arrange（准备）、Act（执行）、Assert（断言） |
| **单一职责** | 每个测试只验证一个行为 |
| **独立性** | 测试之间互不依赖 |
| **可读性** | 使用 Given-When-Then 注释 |
| **边界测试** | 测试正常、边界、异常情况 |
| **Mock 使用** | 只 Mock 外部依赖，不测试 Mock |
| **事务回滚** | Mapper 测试使用 `@Transactional` |

---

## 10. 常见问题

### Q1: @Import 需要添加哪些类？

**A:** 递归添加被测试 Service 及其所有依赖的 Service Impl 类。

```
被测试类: XxxServiceImpl
    依赖: YyyServiceImpl
        依赖: ZzzServiceImpl
```

需要 `@Import({XxxServiceImpl.class, YyyServiceImpl.class, ZzzServiceImpl.class})`

### Q2: 为什么不用接口类型？

**A:** 测试需要真实 Bean，接口无法实例化。

### Q3: 测试失败如何调试？

**A:**
1. 检查 `@Import` 是否包含所有依赖
2. 检查测试数据是否合法（如必填字段）
3. 查看详细错误日志

---

## 11. 相关文档

| 文档 | 说明 |
|------|------|
| [.claude/rules/khala-tdd.md](../.claude/rules/khala-tdd.md) | TDD 流程规范（强制执行规则） |
| [unittest/SysUserServiceImplTest.java](./unittest/SysUserServiceImplTest.java) | Service 层完整示例 |
| [unittest/application-unit-test.yaml](./unittest/application-unit-test.yaml) | 测试配置文件 |
