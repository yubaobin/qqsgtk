# crud — 标准增删改查

> **适用版本**: 7.x+
> **最后更新**: 2026-06-08
> **相关规范**: .rules/backend/khala-core.md
> **相关源码**: doc-ref/crud/

## 何时参考此示例

- 需要快速实现单表的标准增删改查接口
- 需要基于 MyBatis Plus 进行分页查询
- 需要自动填充创建人、创建时间等审计字段

## 快速查找

| 我需要... | 查看文件 | 说明 |
|----------|---------|------|
| 实体定义 | master/entity.java | @TableName、@TableId、审计字段 |
| Mapper 层 | master/mapper.java | 继承 BaseMapper |
| Service 接口 | master/service-interface.java | 继承 IService |
| Service 实现 | master/service-impl.java | 继承 ServiceImpl，分页查询 |
| Controller 层 | master/controller.java | RESTful CRUD 接口 |
| 请求/响应 VO | master/req-vo.java | 分页请求、列表响应 |
