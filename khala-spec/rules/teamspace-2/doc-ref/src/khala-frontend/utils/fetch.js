/**
 * 封装请求
 */
import axios from &#39;axios&#39;
import qs from &#39;qs&#39;
import { UxMessage } from &#39;ux-up&#39;
import config from &#39;@/config&#39;
import { getToken } from &#39;./token&#39;
import { processSignature, buildQueryString } from &#39;./signature&#39;
import { processEncryption, processDecryption } from &#39;./crypto&#39;
import { useUserStoreHook } from &#39;@/store/modules/user&#39;
import * as ParseStreamUtils from &#39;./parse-stream&#39;
import { omit } from &#39;lodash-es&#39;

let instance = axios.create({
    baseURL: config.apiPath,
    method: &#39;post&#39;,
    timeout: 20000,
    // 发送 Cookie
    withCredentials: true,
    headers: {
        Accept: &#39;*&#39;,
        &#39;Content-Type&#39;: &#39;application/json&#39;,
        &#39;x-app-header&#39;: config.app
    },
    paramsSerializer: {
        serialize: buildQueryString
    }
})
// 拦截请求
instance.interceptors.request.use(
    (req) =&gt; {
        const userStore = useUserStoreHook()
        const tenantId = userStore.curTenant?.id

        if (tenantId) {
            req.headers[&#39;x-tenant-header&#39;] = tenantId
        }
        if (req.token !== false &amp;&amp; !req.headers[&#39;Authorization&#39;]) {
            const token = getToken()
            if (token &amp;&amp; token !== &#39;undefined&#39;) {
                req.headers[&#39;Authorization&#39;] = &#39;Bearer &#39; + getToken()
            }
        }

        processSignature(req, config)
        processEncryption(req, config)

        return req
    },
    (err) =&gt; {
        UxMessage({ message: err, type: &#39;error&#39; })
        return Promise.reject(err)
    }
)
// 拦截返回
instance.interceptors.response.use(
    (res) =&gt; {
        if (res.headers[&#39;content-type&#39;] &amp;&amp; !res.headers[&#39;content-type&#39;].includes(&#39;application/json&#39;)) {
            return res
        }

        processDecryption(res)

        if (res.data.code === 1001 || res.data.code === 1000) {
            // 第三方登录成功后未绑定账号的情况
            return res.data.data
        }
        if (res.data.code === 1101) { // 加密配置过期，重新获取加密配置
            UxMessage.error(res.data.message || &#39;加密配置过期&#39;)
            setTimeout(() =&gt; {
                window.location.reload()
            }, 3000)
        }
        if (res.data.code !== 0) {
            UxMessage.error(res.data.message || &#39;接口错误&#39;)
            return Promise.reject(res.data.message || &#39;接口错误&#39;)
        }
        // 待把res.data.data改为res.data后同时改view页面，涉及很多个页面
        return res.data.data
    },
    (error) =&gt; {
        let errorMsg = error.message
        if (error.response.data) {
            if (error.response.data instanceof Blob) {
                errorMsg = &#39;文件导出失败！&#39;
            } else {
                errorMsg = error.response.data.message || error.response.data.error
            }
        }
        if (error.response) {
            const userStore = useUserStoreHook()
            switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    if (error.config &amp;&amp; error.config.ignore401) {
                        UxMessage.error(&#39;请登录&#39;)
                        return Promise.reject(errorMsg)
                    }
                    userStore.clearUserInfo()
                    // 如果状态码为 401，则延迟 3 秒后重新加载页面
                    setTimeout(() =&gt; {
                        window.location.reload()
                    }, 3000)
                    break
                case 403:
                    break
                case 500:
                    break
                default:
                    break
            }
        }
        UxMessage.error(errorMsg)
        return Promise.reject(errorMsg)
    }
)
export const get = (serviceId, url, params, config = {}) =&gt; {
    const reqUrl = jointUrl(serviceId, url)
    return instance.get(reqUrl, { params: params, ...config })
}
export const get1 = (serviceId, url, params, responseType) =&gt; {
    const reqUrl = jointUrl(serviceId, url)
    return instance.get(reqUrl, { params: params, responseType: responseType })
}
export const post = (serviceId, url, params, config = {}) =&gt; {
    const reqUrl = jointUrl(serviceId, url)
    return instance.post(reqUrl, params, config)
}
export const post1 = (serviceId, url, params, headers) =&gt; {
    const reqUrl = jointUrl(serviceId, url)
    return instance.post(reqUrl, params, headers)
}
export const put = (serviceId, url, params) =&gt; {
    const reqUrl = jointUrl(serviceId, url)
    return instance.put(reqUrl, params)
}
export const del = (serviceId, url, params) =&gt; {
    const reqUrl = jointUrl(serviceId, url)
    return instance.delete(reqUrl, params)
}
export const upload = (serviceId, url, params, config = {}) =&gt; {
    const reqUrl = jointUrl(serviceId, url)
    return instance.post(reqUrl, params, {
        headers: {
            &#39;Content-type&#39;: &#39;multipart/form-data&#39;,
            &#39;Content-Security-Policy&#39;: &quot;default-src &#39;self&#39;; script-src &#39;self&#39; &#39;unsafe-inline&#39; https://trusted.cdn.com; style-src &#39;self&#39; &#39;unsafe-inline&#39;; img-src &#39;self&#39; data: https:; font-src &#39;self&#39;; connect-src &#39;self&#39;; frame-ancestors &#39;none&#39;;&quot;,
            &#39;X-XSS-Protection&#39;: &#39;1; mode=block&#39;,
            &#39;X-Content-Type-Options&#39;: &#39;nosniff&#39;,
            &#39;X-Frame-Options&#39;: &#39;DENY&#39;,
            &#39;Referrer-Policy&#39;: &#39;strict-origin-when-cross-origin&#39;
        },
        ...config
    })
}
export const download = (serviceId, url, params) =&gt; {
    const reqUrl = jointUrl(serviceId, url)
    return instance.get(reqUrl, { params: params, responseType: &#39;blob&#39; })
}

export const streamPost = async (serviceId, url, params, config = {}) =&gt; {
    const reqUrl = jointUrl(serviceId, url)
    const controller = config.controller
    const _config = omit(config, [&#39;controller&#39;])
    const response = await instance.post(reqUrl, params, {
        responseType: &#39;stream&#39;,
        adapter: &#39;fetch&#39;,
        timeout: null,
        signal: controller ? controller.signal : undefined,
        ..._config
    })
    const reader = response.data
        .pipeThrough(new TextDecoderStream())
        .pipeThrough(ParseStreamUtils.splitStream(&#39;\n&#39;))
        .getReader()
    return reader
}

export { instance }

export const fetch = instance

export default async (url = &#39;&#39;, params = {}, option = {}) =&gt; {
    if (!url) {
        return Promise.reject(&#39;params url not exist!&#39;)
    }
    let method = option.method || &#39;post&#39;
    // 默认所有接口需要token
    let token = option.token || true
    // 默认所有接口需要签名
    let signature = option.signature || true
    let encryption = option.encryption || true
    switch (method) {
        case &#39;get&#39;:
            return instance.get(url, {
                params: params,
                headers: option.headers || {},
                token: token,
                signature: signature,
                encryption: encryption
            })
        case &#39;upload&#39;:
            return instance.post(url, params, {
                headers: {
                    &#39;Content-Type&#39;: &#39;multipart/form-data&#39;
                }
            })
        case &#39;getDownload&#39;:
            return instance.get(url, {
                params: params,
                responseType: &#39;blob&#39;
            })
        case &#39;download&#39;:
            return instance.post(url, params, {
                responseType: &#39;blob&#39;
            })
        case &#39;postForm&#39;:
            return instance.post(url, qs.stringify(params), {
                headers: {
                    &#39;Content-Type&#39;: &#39;application/x-www-form-urlencoded&#39;
                },
                token: token,
                signature: signature,
                encryption: encryption,
                responseType: option.responseType
            })
        case &#39;postQuery&#39;:
            return instance.post(url, null, Object.assign(option, { params }))
        case &#39;post&#39;:
            return instance.post(url, params, {
                headers: option.headers || {},
                token: token,
                signature: signature,
                encryption: encryption,
                responseType: option.responseType
            })
        case &#39;put&#39;:
            return instance.put(url, params, {
                headers: option.headers || {},
                token: token,
                encryption: encryption,
                signature: signature
            })
        case &#39;patch&#39;:
            return instance.patch(url, params, {
                headers: option.headers || {},
                token: token,
                encryption: encryption,
                signature: signature
            })
        case &#39;delete&#39;:
            return instance.delete(url, {
                params: params,
                token: token,
                encryption: encryption,
                signature: signature
            })
        default:
            return Promise.reject(`unknown request method &#39;${method}&#39;`)
    }
}

export const jointUrl = (serviceId, url) =&gt; {
    if (config.model === &#39;STANDALONE&#39;) {
        return url
    }
    return serviceId + url
}
