# 数据备份与容灾规范

本文档规定 Khala 项目的数据备份策略、灾难恢复目标及运维流程，保障数据安全与业务连续性。

---

## 一、灾难恢复目标

| 指标 | 目标值 | 说明 |
|------|--------|------|
| **RTO**（恢复时间目标） | <= 30 分钟 | 系统不可用至恢复服务的最长时间 |
| **RPO**（恢复点目标） | <= 5 分钟 | 灾难发生时允许丢失的最长数据时间 |
| **备份保留周期** | 30 天 | 本地备份保留时长 |
| **归档保留周期** | 1 年 | 冷数据归档保留时长 |

---

## 二、数据库备份

### 2.1 MySQL 备份策略

| 备份类型 | 频率 | 保留周期 | 存储位置 | 工具 |
|----------|------|----------|----------|------|
| **全量备份** | 每日 02:00 | 30 天 | 本地 NAS + 异地 OSS | xtrabackup |
| **增量备份** | 每小时 | 7 天 | 本地 NAS | xtrabackup |
| **Binlog 备份** | 实时同步 | 7 天 | 本地 + 异地 | mysqlbinlog |
| **逻辑备份** | 每周日 03:00 | 90 天 | 异地 OSS | mysqldump |

### 2.2 全量备份脚本

```bash
#!/bin/bash
# mysql_full_backup.sh

BACKUP_DIR="/data/backup/mysql/full"
DATE=$(date +%Y%m%d_%H%M%S)
DB_NAME="khala"

mkdir -p ${BACKUP_DIR}/${DATE}

# 执行全量备份
innobackupex --defaults-file=/etc/my.cnf \
  --user=backup \
  --password='xxxx' \
  --socket=/var/run/mysqld/mysqld.sock \
  --no-timestamp \
  ${BACKUP_DIR}/${DATE}

# 验证备份
if [ $? -eq 0 ]; then
  # 打包压缩
  tar czf ${BACKUP_DIR}/${DATE}.tar.gz -C ${BACKUP_DIR} ${DATE}
  rm -rf ${BACKUP_DIR}/${DATE}

  # 上传至异地 OSS
  ossutil cp ${BACKUP_DIR}/${DATE}.tar.gz oss://khala-backup/mysql/full/

  # 清理 30 天前备份
  find ${BACKUP_DIR} -name "*.tar.gz" -mtime +30 -delete

  echo "[$(date)] 全量备份成功: ${DATE}.tar.gz" >> /var/log/mysql_backup.log
else
  echo "[$(date)] 全量备份失败" >> /var/log/mysql_backup.log
  # 发送告警
  curl -X POST "https://alert.khala.io/webhook" -d '{"level":"P1","msg":"MySQL全量备份失败"}'
fi
```

### 2.3 Binlog 实时备份

```bash
# 启动 Binlog 实时同步
mysqlbinlog --read-from-remote-server \
  --host=master.mysql.khala.svc \
  --user=repl \
  --password='xxxx' \
  --raw \
  --stop-never \
  mysql-bin.000001 &
```

---

## 三、Redis 备份

| 备份类型 | 频率 | 说明 |
|----------|------|------|
| **RDB 持久化** | 每 5 分钟（修改 >= 100 键） | 默认开启，可快速恢复 |
| **AOF 持久化** | 每秒 fsync | 数据完整性更高 |
| **异地备份** | 每小时同步 RDB | 通过 rsync 同步至备份节点 |

```yaml
# redis.conf
save 900 1
save 300 10
save 60 100
appendonly yes
appendfsync everysec
```

---

## 四、对象存储备份

| 数据类型 | 备份策略 | 说明 |
|----------|----------|------|
| **文件存储（OSS）** | 跨区域复制 | 主区域 <-> 备区域双向同步 |
| **版本控制** | 开启版本保留 | 误删后可恢复历史版本 |
| **生命周期** | 30 天转低频，90 天转归档 | 降低成本 |

---

## 五、容灾架构

### 5.1 同城双活

```
          用户流量
             |
        [ DNS / 负载均衡 ]
         /              \
    可用区 A          可用区 B
    (主)               (备)
      |                  |
   [MySQL主]  <----> [MySQL从]
      |     同步复制      |
   [Redis主]  <----> [Redis从]
      |                  |
   [应用集群]         [应用集群]
```

### 5.2 故障切换流程

```
1. 监控告警触发（数据库连接失败 / 主库宕机）
2. 人工确认或自动判定（需配置自动切换）
3. 切换 DNS / 负载均衡指向备库
4. 提升 MySQL 从库为主库
5. 验证应用连接正常
6. 通知相关方，记录故障报告
7. 修复原主库，恢复双活架构
```

### 5.3 MySQL 主从切换

```bash
# 在从库上执行
STOP SLAVE;
RESET SLAVE ALL;

# 提升为主库
SET GLOBAL read_only = OFF;
SET GLOBAL super_read_only = OFF;

# 更新应用配置指向新主库
# 重启应用或刷新连接池
```

---

## 六、恢复演练

### 6.1 演练频率

| 演练类型 | 频率 | 参与方 |
|----------|------|--------|
| 备份恢复验证 | 每月 | DBA |
| 主从切换演练 | 每季度 | DBA + 运维 |
| 全链路容灾演练 | 每半年 | 全技术团队 |

### 6.2 恢复验证清单

- [ ] 备份文件可正常解压
- [ ] 备份数据可成功恢复至测试实例
- [ ] 恢复后数据完整性校验通过（校验和比对）
- [ ] 应用可正常连接恢复后的数据库
- [ ] 核心业务流程验证通过

---

## 七、数据归档

### 7.1 归档策略

| 数据类型 | 归档条件 | 归档方式 | 保留时长 |
|----------|----------|----------|----------|
| 操作日志 | 90 天前 | 迁移至日志库（ClickHouse） | 1 年 |
| 已完成任务 | 180 天前 | 迁移至归档表 /  OSS | 3 年 |
| 审批历史 | 1 年前 | 迁移至归档库 | 5 年 |
| 消息记录 | 30 天前 | 删除或压缩归档 | 90 天 |

### 7.2 归档实现

```java
@Service
public class DataArchiveService {

    @Autowired
    private TaskMapper taskMapper;
    @Autowired
    private TaskArchiveMapper archiveMapper;

    /**
     * 每月 1 日执行归档
     */
    @XxlJob("taskArchiveJob")
    public ReturnT<String> archive() {
        LocalDateTime before = LocalDateTime.now().minusDays(180);
        int batchSize = 1000;
        int total = 0;

        while (true) {
            List<TaskEntity> list = taskMapper.selectCompletedBefore(before, batchSize);
            if (CollUtil.isEmpty(list)) break;

            archiveMapper.batchInsert(list);
            taskMapper.batchDelete(list.stream().map(TaskEntity::getId).collect(Collectors.toList()));
            total += list.size();
        }

        log.info("归档完成，共 {} 条", total);
        return ReturnT.SUCCESS;
    }
}
```

---

## 八、禁止事项

1. **禁止将备份数据存储在应用服务器本地磁盘**
2. **禁止未经加密的备份文件传输**
3. **禁止生产环境直接恢复备份覆盖现有数据**，必须先恢复至测试环境验证
4. **禁止关闭 Binlog 或 RDB/AOF 持久化**
5. **禁止超过 RPO 目标时间未进行备份**
