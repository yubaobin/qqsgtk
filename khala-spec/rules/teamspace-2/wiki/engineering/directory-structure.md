# 目录结构规范

本文档规定项目的目录与包组织规范，确保代码结构清晰、职责分明、易于维护。

---

## 一、项目总体结构

项目采用 Maven 多模块聚合架构，按业务域拆分模块。

```
{项目编码}-parent/
├── {项目编码}-common/                    # 公共基础模块
│   ├── {项目编码}-common-core/           # 核心工具、枚举、常量、异常基类
│   ├── {项目编码}-common-web/            # Web 通用组件（拦截器、统一响应、全局异常处理）
│   ├── {项目编码}-common-mybatis/        # MyBatis-Plus 扩展、分页插件、多租户拦截器
│   └── {项目编码}-common-redis/          # Redis 通用封装、分布式锁、缓存工具
│
├── {项目编码}-task/                      # 任务管理业务域
│   ├── {项目编码}-task-api/              # API 契约模块（DTO、VO、RPC 接口）
│   └── {项目编码}-task-biz/              # 业务实现模块
│
├── {项目编码}-approval/                  # 审批流业务域
│   ├── {项目编码}-approval-api/
│   └── {项目编码}-approval-biz/
│
├── {项目编码}-system/                    # 系统管理业务域（用户、角色、权限、租户）
│   ├── {项目编码}-system-api/
│   └── {项目编码}-system-biz/
│
└── {项目编码}-server/                    # 启动聚合模块
    └── src/main/java/
        └── com/eshore/{项目编码}/
            └── {项目编码驼峰}Application.java # 唯一启动类
```

---

## 二、模块命名规范

| 模块类型 | 命名格式 | 示例 |
|----------|----------|------|
| 父模块 | `{项目编码}-parent` | `{项目编码}-parent` |
| 公共模块 | `{项目编码}-common-{能力}` | `{项目编码}-common-core` |
| API 契约模块 | `{项目编码}-{业务域}-api` | `{项目编码}-task-api` |
| 业务实现模块 | `{项目编码}-{业务域}-biz` | `{项目编码}-task-biz` |
| 启动模块 | `{项目编码}-server` | `{项目编码}-server` |

---

## 三、API 模块目录结构（`{项目编码}-{biz}-api`）

该模块**禁止包含业务逻辑和 Spring 依赖**，仅暴露契约：

```
{项目编码}-task-api/
└── src/main/java/com/eshore/{项目编码}/task/
    ├── api/
    │   └── TaskRpcService.java          # RPC 接口定义（Feign/Dubbo）
    ├── dto/
    │   ├── TaskCreateDTO.java           # 创建入参
    │   ├── TaskUpdateDTO.java           # 更新入参
    │   └── TaskQueryDTO.java            # 查询条件
    └── vo/
        ├── TaskVO.java                  # 详情视图
        └── TaskListVO.java              # 列表视图
```

**约束**：
- `dto`/`vo` 必须实现 `Serializable`
- 禁止引入 `spring-boot-starter-web` 等 Web 依赖
- 仅允许依赖 `{项目编码}-common-core`

---

## 四、业务模块目录结构（`{项目编码}-{biz}-biz`）

```
{项目编码}-task-biz/
└── src/main/java/com/eshore/{项目编码}/task/
    ├── controller/                      # 表现层：RESTful API 入口
    │   └── TaskController.java
    │
    ├── service/                         # 应用层接口
    │   └── TaskService.java
    │   └── impl/                        # 应用层实现
    │       └── TaskServiceImpl.java
    │
    ├── mapper/                          # 数据访问层：MyBatis 接口
    │   └── TaskMapper.java
    │
    ├── entity/                          # 实体层：数据库映射
    │   └── TaskEntity.java
    │
    ├── convert/                         # MapStruct 转换器
    │   └── TaskConvert.java
    │
    ├── vo/                              # 请求/响应视图对象（Controller 层使用）
    │   ├── TaskCreateReqVO.java
    │   └── TaskPageRespVO.java
    │
    ├── enums/                           # 枚举定义
    │   └── TaskStatusEnum.java
    │
    ├── config/                          # 模块配置类
    │   └── TaskAutoConfiguration.java
    │
    ├── listener/                        # 消息监听器
    │   └── TaskEventListener.java
    │
    └── job/                             # 定时任务
        └── TaskStatusCleanJob.java
```

**约束**：
- 各层职责参见[分层架构](architecture/layered-architecture.md)
- Controller 禁止直接调用 Mapper
- `service/impl/` 以外的包禁止直接实例化 `impl` 类

---

## 五、资源文件目录结构

### 5.1 Java 模块资源（`src/main/resources`）

```
src/main/resources/
├── application.yml                    # 主配置（仅配置导入，不存业务配置）
├── application-dev.yml                # 开发环境
├── application-test.yml               # 测试环境
├── application-pre.yml                # 预发布环境
├── application-prod.yml               # 生产环境
│
├── mapper/                            # MyBatis XML 映射文件
│   └── task/
│       └── TaskMapper.xml
│
├── META-INF/
│   └── spring.factories               # 自动配置注册（Spring Boot 2.x）
│   └── spring/
│       └── org.springframework.boot.autoconfigure.AutoConfiguration.imports  # Spring Boot 3.x
│
└── logback-spring.xml                 # 日志配置（仅在 server 模块存在）
```

### 5.2 测试资源（`src/test`）

```
src/test/
├── java/
│   └── com/eshore/{项目编码}/task/
│       ├── service/
│       │   └── TaskServiceTest.java   # 单元测试
│       └── controller/
│           └── TaskControllerTest.java
└── resources/
    ├── application-test.yml           # 测试环境专用配置
    └── sql/
        └── init-test-data.sql         # 测试数据脚本
```

---

## 六、新增业务域流程

1. 在根 `pom.xml` 中注册新模块
2. 按规范创建 `{项目编码}-{biz}-api` , `{项目编码}-{biz}-biz` 和 `{项目编码}-{biz}-server`
3. `biz` 模块在 `pom.xml` 中依赖对应的 `api` 模块
4. `server` 模块的 `pom.xml` 中引入 `biz` 模块
5. 遵循本规范初始化包结构

---

## 七、禁止事项

| 禁止项 | 说明 |
|--------|------|
| 循环依赖 | 模块间禁止出现 A → B → A 的循环引用 |
| 跨域直接调用 Mapper | 业务域 A 禁止直接访问业务域 B 的 Mapper |
| 在 `api` 模块写业务逻辑 | `api` 模块仅存放契约，禁止引入 Spring 上下文 |
| 根目录乱放代码 | 所有 Java 代码必须归属到具体模块的 `src/main/java` 下 |
| 资源文件随意命名 | 配置文件必须按 `application-{profile}.yml` 格式命名 |
