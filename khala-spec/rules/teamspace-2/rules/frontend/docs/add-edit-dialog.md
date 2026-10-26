<!-- khala-spec:path-scope: user-project -->
# 新增编辑弹窗模板

## 源码参考
| 路径 | 描述 |
|------|------|
| [dialog-component.js](/doc-ref/src/khala-frontend/hooks/dialog-component.js) | 新增/编辑弹窗hooks封装 |
| [rules.js](/doc-ref/src/khala-frontend/utils/rules.js) | 表单验证规则封装 |

## html结构
> 表单类名为 class="edit-form__wrapper"
> 当使用 ux-select 时，需要添加 `full-width` `<ux-select class="full-width" ></ux-select>
```html
<ux-dialog>
    <ux-form class="edit-form__wrapper">
        ...
    </ux-form>
    <template #footer>
        <div class="dialog-footer">
            <ux-button >取消</ux-button>
            <ux-button type="primary" >确定</ux-button>
        </div>
    </template>
</ux-dialog>
```

## 示例代码
[add-edit-dialog.vue](/doc-ref/examples/khala-frontend/crud-page/crud/add-edit-dialog.vue)
