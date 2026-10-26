<!-- khala-spec:path-scope: user-project -->
# 通用查询 + 列表 示例

## 源码参考
| 路径 | 描述 |
|------|------|
|[use-page-list.js](/doc-ref/src/khala-frontend/hooks/use-page-list.js) | 通用列表查询逻辑 |

## html结构
> 注意：操作区域、表格、分页都在统一容器
```html
<div class="common-page">
    <div class="query-form">
        ...
    </div>
    <div class="table-wrapper">
        <div class="operate-wrapper"></div>
        <ux-table>
            ...
        </ux-table>
        <ux-pagination />
    </div>
</div>
```
## 示例代码
[page-list.vue](/doc-ref/examples/khala-frontend/crud-page/crud/page-list.vue)

