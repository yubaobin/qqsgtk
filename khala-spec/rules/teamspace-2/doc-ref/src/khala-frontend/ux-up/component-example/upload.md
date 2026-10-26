# Upload 上传
通过点击或者拖拽上传文件。

## Upload的基础用法
 通过 `slot` 你可以传入自定义的上传按钮类型和文字提示。 可通过设置 `limit` 和 `on-exceed` 来限制上传文件的个数和定义超出限制时的行为。 可通过设置 `before-remove` 来阻止文件移除操作。
```vue
<template>
    <ux-upload
        v-model:file-list="fileList"
       
        action="/upload/file"
        multiple
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :limit="3"
        :on-exceed="handleExceed">
        <ux-button type="primary" size="small">点击上传</ux-button>
        <template #tip>
            <div>只能上传jpg/png文件，且不超过500kb</div>
        </template>
    </ux-upload>
</template>

<script setup>
import { ref } from 'vue'
import { UxMessage, UxMessageBox } from 'ux-up'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})

const fileList = ref([
    { name: 'demo1.png', url: `${props.baseUrl}images/demo/demo1.png` },
    { name: 'demo2.png', url: `${props.baseUrl}images/demo/demo2.png` }
])

const handleRemove = (file, fileList) => {
    console.log(file, fileList)
}

const handlePreview = (uploadFile) => {
    console.log(uploadFile)
}

const handleExceed = (files, fileList) => {
    UxMessage.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
            files.length + fileList.value.length
        } 个文件`
    )
}

const beforeRemove = (file, fileList) => {
    return UxMessageBox.confirm(`确定移除 ${uploadFile.name} ?`).then(
        () => true,
        () => false
    )
}
</script>

```

## Upload的覆盖前一个文件
 设置 `limit` 和 `on-exceed` 可以在选中时自动替换上一个文件。
```vue
<template>
    <ux-upload
        ref="upload"
       
        action="/upload/file"
        :limit="1"
        :on-exceed="handleExceed"
        :auto-upload="false">
        <template #trigger>
            <ux-button type="primary" size="small">选取文件</ux-button>
        </template>
        <ux-button type="success" size="small" @click="submitUpload">上传到服务器</ux-button>
        <template #tip>
            <div>只能上传1个文件，新文件会自动覆盖旧文件</div>
        </template>
    </ux-upload>
</template>

<script setup>
import { ref } from 'vue'
import { genFileId } from 'ux-up'

const upload = ref()

const handleExceed = (files) => {
    upload.value.clearFiles()
    const file = files[0]
    file.uid = genFileId()
    upload.value.handleStart(file)
}

const submitUpload = () => {
    upload.value.submit()
}
</script>

```

## Upload的用户头像上传
 在 `before-upload` 钩子中限制用户上传文件的格式和大小。
```vue
<template>
    <ux-upload
       
        action="/upload/file"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" />
        <ux-svg-icon v-else icon-name="ux-icon-Plus" />
    </ux-upload>
</template>

<script setup>
import { ref } from 'vue'
import { UxMessage } from 'ux-up'

const imageUrl = ref('')

const handleAvatarSuccess = (response, uploadFile) => {
    imageUrl.value = URL.createObjectURL(uploadFile.raw)
}

const beforeAvatarUpload = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
        UxMessage.error('上传头像图片只能是 JPG 格式!')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        UxMessage.error('上传头像图片大小不能超过 2MB!')
        return false
    }
    return true
}
</script>

```

## Upload的照片墙
 使用 `list-type` 属性来设定文件列表的样式。
```vue
<template>
    <div>
        <ux-upload
            v-model:file-list="fileList"
            action="/upload/file"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <ux-svg-icon icon-name="ux-icon-Plus" />
        </ux-upload>

        <ux-dialog v-model="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="预览图片" />
        </ux-dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})

const fileList = ref([
    { name: 'demo1.png', url: `${props.baseUrl}images/demo/demo1.png` },
    { name: 'demo2.png', url: `${props.baseUrl}images/demo/demo2.png` },
    { name: 'demo3.png', url: `${props.baseUrl}images/demo/demo3.png` },
    { name: 'demo3.png', url: `${props.baseUrl}images/demo/demo3.png` },
    { name: 'demo1.png', url: `${props.baseUrl}images/demo/demo1.png` }
])

const dialogImageUrl = ref('')
const dialogVisible = ref(false)

const handleRemove = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
}

const handlePictureCardPreview = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url
    dialogVisible.value = true
}
</script>

```

## Upload的自定义缩略图
 使用 `scoped-slot` 属性来改变默认的缩略图模板样式。
```vue
<template>
    <ux-upload action="#" list-type="picture-card" :auto-upload="false">
        <ux-svg-icon icon-name="ux-icon-Plus" />

        <template #file="{ file }">
            <div>
                <img :src="file.url" alt="" />
                <span>
                    <span @click="handlePictureCardPreview(file)">
                        <ux-svg-icon icon-name="ux-icon-ZoomIn" />
                    </span>
                    <span v-if="!disabled" @click="handleDownload(file)">
                        <ux-svg-icon icon-name="ux-icon-Download" />
                    </span>
                    <span v-if="!disabled" @click="handleRemove(file)">
                        <ux-svg-icon icon-name="ux-icon-Delete" />
                    </span>
                </span>
            </div>
        </template>
    </ux-upload>

    <ux-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image" />
    </ux-dialog>
</template>

<script setup>
import { ref } from 'vue'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (file) => {
    console.log(file)
}

const handlePictureCardPreview = (file) => {
    dialogImageUrl.value = file.url
    dialogVisible.value = true
}

const handleDownload = (file) => {
    console.log(file)
}
</script>

```

## Upload的图片列表缩略图

```vue
<template>
    <ux-upload
        v-model:file-list="fileList"
       
        action="/upload/file"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        list-type="picture">
        <ux-button type="primary" size="small">点击上传</ux-button>
        <template #tip>
            <div>只能上传jpg/png文件，且不超过500kb</div>
        </template>
    </ux-upload>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})
const fileList = ref([
    { name: 'demo1.png', url: `${props.baseUrl}images/demo/demo1.png` },
    { name: 'demo2.png', url: `${props.baseUrl}images/demo/demo2.png` }
])

const handleRemove = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
}

const handlePreview = (file) => {
    console.log(file)
}
</script>

```

## Upload的上传文件列表控制
 通过 `on-change` 钩子函数来对上传文件的列表进行控制。
```vue
<template>
    <ux-upload v-model:file-list="fileList" action="/upload/file" :on-change="handleChange">
        <ux-button type="primary" size="small">点击上传</ux-button>
        <template #tip>
            <div>只能上传jpg/png文件，且不超过500kb</div>
        </template>
    </ux-upload>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    baseUrl: {
        type: String,
        default: '/'
    }
})

const fileList = ref([
    { name: 'demo1.png', url: `${props.baseUrl}images/demo/demo1.png` },
    { name: 'demo2.png', url: `${props.baseUrl}images/demo/demo2.png` }
])

const handleChange = (uploadFile, uploadFiles) => {
    fileList.value = fileList.value.slice(-3)
}
</script>

```

## Upload的拖拽上传
 通过设置 `drag` 属性可以实现文件拖拽到特定区域以进行上传。
```vue
<template>
    <ux-upload drag action="/upload/file" multiple>
        <ux-svg-icon icon-name="ux-icon-UploadFilled" />
        <div>将文件拖到此处，或<em>点击上传</em></div>
        <template #tip>
            <div>只能上传jpg/png文件，且不超过500kb</div>
        </template>
    </ux-upload>
</template>

```

## Upload的手动上传

```vue
<template>
    <ux-upload ref="uploadRef" action="/upload/file" :auto-upload="false">
        <template #trigger>
            <ux-button type="primary" size="small">选取文件</ux-button>
        </template>

        <ux-button type="success" size="small" @click="submitUpload">上传到服务器</ux-button>

        <template #tip>
            <div>只能上传jpg/png文件，且不超过500kb</div>
        </template>
    </ux-upload>
</template>

<script setup>
import { ref } from 'vue'

const uploadRef = ref()

const submitUpload = () => {
    uploadRef.value.submit()
}
</script>

```

