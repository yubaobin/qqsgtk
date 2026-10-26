## Upload的 API
### Upload 属性

|名称|说明|类型|默认值|
|----|-------------|----------------------|-------------|
|action^(required)|请求URL|string|#|
|headers|设置上传的请求头部|Headers\|Record<string,any>|—|
|method|设置上传请求方法|string|post|
|multiple|是否支持多选文件|boolean|false|
|data|上传时附带的额外参数|Record<string,any>\|Awaitable<Record<string,any>>/(rawFile:UploadRawFile)=>Awaitable<Record<string,any>>|{}|
|name|上传的文件字段名|string|file|
|with-credentials|支持发送cookie凭证信息|boolean|false|
|show-file-list|是否显示已上传文件列表|boolean|true|
|drag|是否启用拖拽上传|boolean|false|
|accept|接受上传的[文件类型](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#attr-accept)（thumbnail-mode模式下此参数无效）|string|''|
|crossorigin|原生属性[crossorigin](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/crossorigin)|''\|'anonymous'\|'use-credentials'|—|
|on-preview|点击文件列表中已上传的文件时的钩子|(uploadFile:UploadFile)=>void|—|
|on-remove|文件列表移除文件时的钩子|(uploadFile:UploadFile,uploadFiles:UploadFiles)=>void|—|
|on-success|文件上传成功时的钩子|(response:any,uploadFile:UploadFile,uploadFiles:UploadFiles)=>void|—|
|on-error|文件上传失败时的钩子|(error:Error,uploadFile:UploadFile,uploadFiles:UploadFiles)=>void|—|
|on-progress|文件上传时的钩子|(evt:UploadProgressEvent,uploadFile:UploadFile,uploadFiles:UploadFiles)=>void|—|
|on-change|文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用|(uploadFile:UploadFile,uploadFiles:UploadFiles)=>void|—|
|on-exceed|当超出限制时，执行的钩子函数|Function`(files:File[],uploadFiles:UploadUserFile[])=>void`|—|
|before-upload|上传文件之前的钩子，参数为上传的文件，若返回`false`或者返回`Promise`且被reject，则停止上传。|(rawFile:UploadRawFile)=>Awaitable<void\|undefined\|null\|boolean\|File\|Blob>|—|
|before-remove|删除文件之前的钩子，参数为上传的文件和文件列表，若返回`false`或者返回`Promise`且被reject，则停止删除。|(uploadFile:UploadFile,uploadFiles:UploadFiles)=>Awaitable<boolean>|—|
|file-list/v-model:file-list|默认上传文件|object`UploadUserFile[]`|[]|
|list-type|文件列表的类型|'text'\|'picture'\|'picture-card'|text|
|auto-upload|是否自动上传文件|boolean|true|
|http-request|覆盖默认的Xhr行为，允许自行实现上传文件的请求|(options:UploadRequestOptions)=>XMLHttpRequest\|Promise<unknown>|[请参考类型声明](#类型声明)|
|disabled|是否禁用上传|boolean|false|
|limit|允许上传文件的最大数量|number|—|

### Upload 插槽

|名称|说明|类型|
|-------|----------|---------------------|
|default|自定义默认内容|-|
|trigger|触发文件选择框的内容|-|
|tip|提示说明文字|-|
|file|缩略图模板的内容|{file:UploadFile,index:number}|

### Upload 暴露方法/属性

|名称|说明|类型|
|------------|-------|----------|
|abort|取消上传请求|(file:UploadFile)=>void|
|submit|手动上传文件列表|()=>void|
|clearFiles|清空已上传的文件列表（该方法不支持在`before-upload`中调用）|Function`(status?:UploadStatus[])=>void`|
|handleStart|手动选择文件|(rawFile:UploadRawFile)=>void|
|handleRemove|手动移除文件|(file:UploadFile\|UploadRawFile,rawFile?:UploadRawFile)=>void|

