/**
 * 前端图片压缩：上传前缩放到合理尺寸，减少传输量和后端 OCR 处理时间。
 * 截图类图片压缩为 JPEG 质量 0.8，最大边长 1280px。
 */
const MAX_SIDE = 1280
const QUALITY = 0.8

export async function compressImage(file: File): Promise<File> {
  // 非图片或 GIF 不处理
  if (!file.type.startsWith('image/')) return file
  if (file.type === 'image/gif') return file

  // 小文件（< 500KB）不压缩
  if (file.size < 500 * 1024) return file

  return new Promise((resolve) => {
    const img = new Image()
    const url = URL.createObjectURL(file)

    img.onload = () => {
      URL.revokeObjectURL(url)

      const { width, height } = img
      const maxSide = Math.max(width, height)

      // 已足够小，不压缩
      if (maxSide <= MAX_SIDE) {
        resolve(file)
        return
      }

      const scale = MAX_SIDE / maxSide
      const canvas = document.createElement('canvas')
      canvas.width = Math.round(width * scale)
      canvas.height = Math.round(height * scale)

      const ctx = canvas.getContext('2d')
      if (!ctx) {
        resolve(file)
        return
      }

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      canvas.toBlob(
        (blob) => {
          if (!blob) {
            resolve(file)
            return
          }
          const compressed = new File([blob], file.name, {
            type: 'image/jpeg',
            lastModified: Date.now(),
          })
          resolve(compressed)
        },
        'image/jpeg',
        QUALITY,
      )
    }

    img.onerror = () => {
      URL.revokeObjectURL(url)
      resolve(file)
    }

    img.src = url
  })
}
