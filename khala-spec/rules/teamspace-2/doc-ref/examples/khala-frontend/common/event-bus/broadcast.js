import vueBus from &#39;@/vue-bus&#39;
// 发送事件（通知其他组件用户信息已更新）
function updateUserInfo() {
  const userInfo = {
    id: 1,
    name: &#39;张三&#39;,
    avatar: &#39;xxx.jpg&#39;
  }
  vueBus.$emit(&#39;user-info-updated&#39;, userInfo)
}
