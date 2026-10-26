<template>
    <div>
        <ux-form :model="form">
            <ux-form-item label="上传图片" prop="image">
                <ux-upload
                    action=""
                    list-type="picture-card"
                    :http-request="onUpload"
                    ref="uploadRef" >
                    <ux-svg-icon :icon-name="AddFill" />
                </ux-upload>
            </ux-form-item>
        </ux-form>
    </div>
</template>
<script setup>
import fileApi from '@/api/modules/file/index.js'
import { AddFill } from '@ux-up/icons-vue-plus'
import { UxMessage } from 'ux-up'

const form = ref({
    image: ''
})
const uploadRef = ref()
const onUpload = ({ file }) => {
      // 校验文件类型
    const isValidType = ['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)
    if (!isValidType) {
        UxMessage.error('仅支持 jpg、png 格式的图片')
        return
    }

     // 校验文件大小
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
        UxMessage.error('图片大小不能超过 2MB')
        return
    }

    const formData = new FormData()
    formData.append('file', file)
    fileApi.uploadFile(formData).then((result) => {
        // 上传成功
        form.image = file.presignedUrl
    }).finally(() => {
        // 清空缓存
        uploadRef.value && uploadRef.value.clearFiles()
    })
}
</script>
