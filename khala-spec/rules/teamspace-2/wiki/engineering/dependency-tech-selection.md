# 依赖管理与技术选型规范

本文档规定 Khala 项目引入新依赖、升级版本及技术选型的评审流程与约束。

---

## 一、技术选型原则

| 原则 | 说明 |
|------|------|
| **成熟优先** | 优先选择社区活跃、文档完善、生产验证的技术 |
| **简单优先** | 在满足需求前提下，选择实现最简单的方案 |
| **统一优先** | 团队已使用的技术栈优先，避免引入同类替代品 |
| **可控优先** | 选择源码可读、问题可排查、故障可降级的产品 |

---

## 二、技术选型评审流程

### 2.1 决策矩阵

```
                    影响范围小
                        │
           简单决策     │     团队讨论
         （技术负责人）   │   （3人以上评审）
                        │
    ────────────────────┼────────────────────
    低风险              │              高风险
    ────────────────────┼────────────────────
                        │
           团队讨论     │     架构评审会
         （3人以上评审）  │   （+ 架构师 + 运维）
                        │
                    影响范围大
```

### 2.2 评审维度

| 维度 | 权重 | 考察点 |
|------|------|--------|
| **功能匹配** | 30% | 是否满足需求，有无过度设计 |
| **社区活跃度** | 20% | GitHub stars、最近提交、Issue 响应 |
| **生产验证** | 20% | 是否有大规模生产案例 |
| **学习成本** | 15% | 团队掌握所需时间 |
| **运维成本** | 15% | 部署复杂度、监控支持、故障排查 |

### 2.3 评审模板

```markdown
## 技术选型提案：引入 Redis Cluster

### 背景
当前单节点 Redis 存在单点故障风险，需引入集群模式。

### 候选方案
| 方案 | 优点 | 缺点 |
|------|------|------|
| Redis Cluster | 原生支持、无中间件 | 客户端需适配、扩容复杂 |
| Codis | 平滑扩容、Proxy 层透明 | 项目已停止维护 |
| Twemproxy | 轻量 | 不支持动态扩容 |

### 推荐方案
Redis Cluster（官方推荐，社区活跃，与 Spring Data Redis 兼容良好）

### 风险评估
- 数据迁移期间短暂不可用（接受）
- 客户端需升级 lettuce 版本（已验证兼容）

### 决策人
张三（技术负责人）、李四（架构师）、王五（运维负责人）
```

---

## 三、依赖管理规范

### 3.1 版本锁定

在 `parent` 的 `pom.xml` 中统一声明依赖版本：

```xml
<properties>
    <spring-boot.version>3.2.0</spring-boot.version>
    <mybatis-plus.version>3.5.5</mybatis-plus.version>
    <redis.version>7.2</redis.version>
</properties>

<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-boot-starter</artifactId>
            <version>${mybatis-plus.version}</version>
        </dependency>
    </dependencies>
</dependencyManagement>
```

子模块禁止声明版本号：

```xml
<!-- 正确 -->
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
</dependency>

<!-- 错误 -->
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>3.5.5</version>
</dependency>
```

### 3.2 依赖引入审批

| 依赖类型 | 审批人 | 说明 |
|----------|--------|------|
| Spring 官方 Starter | 模块负责人 | 无需额外审批 |
| 第三方开源库（< 1k stars） | 技术负责人 | 需评估维护风险 |
| 第三方开源库（新引入） | 架构评审会 | 需技术选型提案 |
| 商业软件 / 付费组件 | 技术总监 | 涉及预算与授权 |
| 内部私有库 | 架构师 | 需符合内部规范 |

### 3.3 禁止引入的依赖

| 依赖 | 原因 | 替代方案 |
|------|------|----------|
| Apache Commons Lang 2 | 已废弃，存在安全漏洞 | Apache Commons Lang 3 |
| Log4j 1.x | 存在严重安全漏洞 | Logback / Log4j2 |
| Fastjson 1.x | 历史漏洞较多 | Jackson / Fastjson 2 |
| Gson（新项目） | 性能与功能弱于 Jackson | Jackson |
| Hutool（全部引入） | 包体积大，部分工具不稳定 | 按需引入或自研 |
| Lombok（争议） | 需团队统一，不强制 | 已使用者保持 |

---

## 四、版本升级规范

### 4.1 升级类型

| 类型 | 说明 | 流程 |
|------|------|------|
| **Patch 升级** | Bug 修复、安全补丁 | 直接升级，回归核心流程 |
| **Minor 升级** | 功能新增，向下兼容 | 技术负责人审批，全量测试 |
| **Major 升级** | 不兼容变更 | 架构评审会，制定迁移方案 |

### 4.2 安全漏洞响应

```
1. 安全扫描工具（Dependabot/Snyk）发现漏洞
2. 评估漏洞等级（CVSS 评分）
3. 高危急：24 小时内修复
4. 中危急：7 天内修复
5. 低危急：下次常规升级时修复
6. 修复后验证并记录
```

### 4.3 升级检查清单

- [ ] 阅读 Release Notes，确认无破坏性变更
- [ ] 在开发环境验证兼容性
- [ ] 运行全量单元测试
- [ ] 执行核心业务流程回归测试
- [ ] 检查配置文件变更（如属性名变更）
- [ ] 更新技术文档
- [ ] 灰度发布观察

---

## 五、依赖冲突解决

### 5.1 排查命令

```bash
# 查看依赖树
mvn dependency:tree -Dincludes=com.fasterxml.jackson.core

# 查看冲突
mvn dependency:tree -Dverbose
```

### 5.2 解决原则

```xml
<!-- 排除传递依赖 -->
<dependency>
    <groupId>com.example</groupId>
    <artifactId>some-lib</artifactId>
    <exclusions>
        <exclusion>
            <groupId>commons-logging</groupId>
            <artifactId>commons-logging</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```

- 优先使用 `dependencyManagement` 统一版本
- 次选 `<exclusions>` 排除冲突依赖
- 禁止通过直接修改本地 `.m2/repository` 解决冲突

---

## 六、技术雷达更新

团队每季度维护一次技术雷达，标记各项技术状态：

| 象限 | 含义 | 示例 |
|------|------|------|
| **采用** | 生产推荐 | Spring Boot 3.x, MyBatis-Plus |
| **试验** | 试点使用 | GraalVM Native Image |
| **评估** | 持续观察 | WebFlux, R2DBC |
| **暂缓** | 不推荐新项目使用 | Spring Boot 2.x, Vue 2 |

---

## 七、禁止事项

1. **禁止引入未经验证的个人开源项目**（stars < 100，最近半年无提交）
2. **禁止为了解决小问题引入重量级框架**
3. **禁止在业务代码中直接依赖具体实现**，优先依赖接口或抽象
4. **禁止忽略安全扫描告警直接发布**
5. **禁止版本升级不阅读 Release Notes**
