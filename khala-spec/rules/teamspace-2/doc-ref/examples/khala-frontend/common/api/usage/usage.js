import userApi from &#39;@/api/modules/user/index.js&#39;

let userInfo = {}
function getUserDetail(id) {
    userApi.getUserDetail({ id }).then((data) =&gt; {
        userInfo = data
    })
}