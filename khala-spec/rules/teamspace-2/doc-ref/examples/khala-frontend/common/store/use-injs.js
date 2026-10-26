// 使用 useXXHook
import { useUserStoreHook } from &#39;@/store/modules/user&#39;

// 路由守卫中使用
router.beforeEach((to, from, next) =&gt; {
  const userStore = useUserStoreHook()
  const token = userStore.token

  if (!token &amp;&amp; to.path !== &#39;/login&#39;) {
    next(&#39;/login&#39;)
  } else {
    next()
  }
})
