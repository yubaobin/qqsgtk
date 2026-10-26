import { get, post, upload, download } from &#39;@/utils/fetch.js&#39;

export default {
    /**
     * 获取用户详情
     * @param { object } params
     * @param { number } params.id 用户ID
     * @returns
     */
    getUserDetail: (params) =&gt; get(&#39;/api-admin&#39;, &#39;/user/get&#39;, params),

    /**
     * 新增用户
     * @param { object } data
     * @param { string } data.username 用户名
     * @param { string } data.name 用户姓名
     * @returns
     */
    addUser: (params) =&gt; post(&#39;/api-admin&#39;, &#39;/user/create&#39;, params),

    /**
     * 上传用户头像
     * @param { FormData } formData
     * @returns
     */
    uploadAvatar: params =&gt; upload(&#39;/api-file&#39;, &#39;/file/upload&#39;, params, { encryption: false }),

    /**
     * 导出用户列表
     * @param { object } params
     * @returns
     */
    exportUserList: params =&gt; {
        return download(&#39;/api-file&#39;, &#39;/file/download&#39;, params)
    }
}