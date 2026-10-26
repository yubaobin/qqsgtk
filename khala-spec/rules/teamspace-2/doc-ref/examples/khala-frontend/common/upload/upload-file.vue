<template>
    <div>
        <ux-form :model="form">
            <ux-form-item label="上传文件" prop="url">
                <ux-upload
                    action=""
                    :http-request="onUpload"
                    ref="uploadRef" >
                </ux-upload>
            </ux-form-item>
        </ux-form>
    </div>
</template>
<script setup>
import fileApi from '@/api/modules/file/index.js'
const form = ref({
    url: ''
})
const uploadRef = ref()
const onUpload = ({ file }) => {
    const formData = new FormData()
    formData.append('file', file)
    fileApi.uploadFile(formData).then((result) => {
        // 上传成功
        form.url = file.presignedUrl
    }).finally(() => {
        // 清空缓存
        uploadRef.value && uploadRef.value.clearFiles()
    })
}
</script>
