import { defineStore } from &#39;pinia&#39;
import { store } from &#39;../index&#39;
import dictApi from &#39;@/api/modules/dict&#39;

export const useDictStore = defineStore(&#39;dict&#39;, {
    state: () =&gt; {
        return {
            dictCache: {}
        }
    },
    actions: {
        setCache ({ code, list, map } = {}) {
            this.dictCache[code] = { list, map }
        },
        delCache (code) {
            this.dictCache[code] = null
        },
        refreshCache (code) {
            if (this.dictCache[code]) {
                this.getDictListMapNoCache(code)
            }
        },
        getDictListMap (code) {
            if (this.dictCache[code]) {
                return Promise.resolve(this.dictCache[code])
            }
            return this.getDictListMapNoCache(code)
        },
        async getDictListMapNoCache (code) {
            const data = await dictApi.getDictItemByDictCode({ dictCode: code })
            const map = new Map()
            for (const item of data) {
                item.value = item.code
                item.label = item.text
                map.set(item.code, item.text)
            }
            this.dictCache[code] = {
                list: data,
                map
            }
            return { list: data, map: map }
        }
    }
})

/**
 * 在没有注册store的地方, 使用store
 * @returns
 */
export function useDictStoreHook () {
    return useDictStore(store)
}
