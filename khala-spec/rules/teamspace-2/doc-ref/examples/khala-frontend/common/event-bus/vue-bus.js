/**
 * @typedef {object} Events
 * @property {string} stop-chating 停止对话
 * @property {object} user-info-updated 用户信息更新，参数为用户对象
 * @property {number} table-refresh 表格刷新事件，参数为页码
 */
/**
 * @type {import(&#39;mitt&#39;).Emitter&lt;Events&gt;}
 */
const emitter = mitt()

export default {
    $on: emitter.on,
    $off: emitter.off,
    $emit: emitter.emit
}