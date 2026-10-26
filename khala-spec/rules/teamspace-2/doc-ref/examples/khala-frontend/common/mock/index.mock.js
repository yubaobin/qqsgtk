// mock/modules/demo/index.mock.js
import { defineMock } from &#39;vite-plugin-mock-dev-server&#39;
import { resultSuccess, resultError } from &#39;../../_util.js&#39;
import mockList from &#39;./json.js&#39;

export default defineMock([
    // GET请求示例
    {
        url: &#39;/api/demo/get&#39;,
        method: &#39;GET&#39;,
        delay: 200,
        body: resultSuccess({ list: mockList })
    },

    // POST请求示例（带参数处理）
    {
        url: &#39;/api/demo/page&#39;,
        method: &#39;POST&#39;,
        delay: 300,
        body: ({ query, body }) =&gt; {
            const { pageNum = 1, pageSize = 10 } = body
            const start = (pageNum - 1) * pageSize
            const end = pageNum * pageSize

            return resultSuccess({
                list: mockList.slice(start, end),
                total: mockList.length,
                pageNum,
                pageSize
            })
        }
    },

    // 错误返回示例
    {
        url: &#39;/api/demo/error&#39;,
        method: &#39;GET&#39;,
        delay: 200,
        body: resultError(&#39;操作失败&#39;, 500)
    }
])