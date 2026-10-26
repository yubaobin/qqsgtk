import { defineStore } from &#39;pinia&#39;
import { store } from &#39;@/store&#39;

export const useUserStore = defineStore(&#39;UserStore&#39;, {
    state: () =&gt; {
        return {
            // 用户信息
            userInfo: null,
            // 令牌
            token: &#39;&#39;,
            // 权限列表
            permissions: []
        }
    },
    getters: {
        // 计算属性：获取用户名
        userName: (state) =&gt; state.userInfo?.name || &#39;未登录&#39;
    },
    actions: {
        // 设置用户信息
        setUserInfo (info) {
            this.userInfo = info
        },
        // 登录
        async login (loginForm) {
            const res = await api.login(loginForm)
            this.token = res.data.token
            this.userInfo = res.data.userInfo
            return res
        },
        // 退出登录
        logout () {
            this.token = &#39;&#39;
            this.userInfo = null
            this.permissions = []
        }
    }
})

/**
 * 在没有注册store的地方使用（工具函数、路由守卫等非组件场景）
 * @returns {ReturnType&lt;typeof useUserStore&gt;}
 */
export function useUserStoreHook () {
    return useUserStore(store)
}