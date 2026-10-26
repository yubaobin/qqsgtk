// khala-spec telemetry plugin for OpenCode-compatible tools (OpenCode 2.x, CodeFree-O)
// 瘦桥接：把 edit/write 工具事件、session.idle / command.executed / skill 激活
// 事件转发给 khala-spec/collect.cjs（detached 子进程）。开关门禁、事件适配、缓冲、
// flush 全在 collect.cjs 内，本文件保持哑管道不随版本演进（tool 字段按契约枚举
// 统一上报 'opencode'）。
//
// 双形态导出（OpenCode 2.0 插件 API 迁移 2026-10-13）：同一 default export 上
//  - v2（OpenCode >= 2.0）：读 default.{id, setup}——v2 加载器仅鸭子类型检查
//    .setup 是否存在（2.0.27 二进制 `pluginModule.setup === undefined` 即报
//    "plugin failed"），不 import @opencode/plugin（该虚拟包在 CodeFree-O 不存在，
//    import 会让 v1 侧直接加载失败）
//  - v1（CodeFree-O / OpenCode 1.18.29+）：调 default.server(input) 返回 v1 hooks
//    映射（CodeFree-O 1.7.0 加载器优先找带 server() 方法的导出；旧函数/命名导出
//    形态在 v2 下缺 .setup，正是升级后 "plugins failed" 的根因）
import path from "path"
import { spawn } from "child_process"

const forward = (cwd, sub, payload) => {
  try {
    const child = spawn("node", [path.join(cwd, "khala-spec", "collect.cjs"), sub, "opencode"], {
      cwd,
      detached: true,
      stdio: ["pipe", "ignore", "ignore"],
      windowsHide: true,
    })
    child.stdin.on("error", () => {}) // 子进程早退等场景：静默，绝不抛给宿主
    child.stdin.end(JSON.stringify(payload ?? {}))
    child.unref()
  } catch {}
}

const strOrNull = (v) => (typeof v === "string" ? v : null)

/** 事件 payload：v1 通配符 handler 收 {event} 包装、payload 在 .properties；
 *  v2 事件流直接给事件本体、payload 在 .data（2.0.27 V2Event schema 实证） */
const propsOf = (event) => event?.data ?? event?.properties ?? {}

/** 回合结束触发集（Stop 等价时机）：2.0.27 实测 server 驱动的会话回合完成后
 *  不发 session.idle（连等 60s 零事件），session.execution.succeeded/.failed
 *  （data:{sessionID[,error]}）每回合必发；idle 保留兜底 TUI 场景 */
const TURN_END = new Set([
  "session.idle",
  "session.execution.succeeded",
  "session.execution.failed",
])

export default {
  id: "khala-telemetry",

  // ---- v2（OpenCode >= 2.0）----
  async setup(ctx) {
    const cwd = ctx?.location?.directory || process.cwd()

    // 文件编辑后静态扫描（rule_violation / checklist_hit）。v2 工具钩子事件 =
    // {tool, sessionID, agent, messageID, id, input, status, result, error?}
    // （2.0.27 二进制 trigger 代码实证）：v1 的 input.tool / input.args / output
    // 分别对应 event.tool / event.input / event.result；失败（status:"error"）的
    // 编辑不落盘。v2 skill 不再是工具（激活走 session.skill.activated 事件），
    // 故无 v1 的 skill 工具分支
    await ctx.tool.hook("execute.after", (event) => {
      if (event?.status === "error") return
      const tool = event?.tool
      if (tool !== "edit" && tool !== "write") return
      // filePath 兜底链与 change-log 插件一致（input 优先，result 回退）
      forward(cwd, "post-tool", {
        tool,
        args: event?.input ?? null,
        out_args: event?.result?.args ?? null,
        session_id: strOrNull(event?.sessionID),
      })
    })

    // 事件通道：回合结束（TURN_END）= Stop 等价时机（tool_activity + 量/时阈值
    // 检查 -> flush）；command.executed / session.skill.activated = skill/命令使用
    // 信号（2.0.27 事件 schema：前者 {name,sessionID,arguments,...}、后者
    // {sessionID,id,name,text,...}）。隐私红线：skill 正文（data.text）与命令
    // arguments（用户原始参数）绝不转发，只报名字与 session
    const controller = new AbortController()
    void (async () => {
      try {
        for await (const event of ctx.event.subscribe({ signal: controller.signal })) {
          const type = event?.type
          const props = propsOf(event)
          const sid = strOrNull(props.sessionID ?? props.session_id)
          if (type === "command.executed" || type === "session.skill.activated") {
            forward(cwd, "skill-use", { name: strOrNull(props.name), session_id: sid })
          } else if (TURN_END.has(type)) {
            forward(cwd, "stop", { session_id: sid })
          }
        }
      } catch { /* 流终止/abort 静默，不抛给宿主 */ }
    })()
    return () => controller.abort()
  },

  // ---- v1（CodeFree-O / OpenCode 1.18.29+）----
  async server({ directory }) {
    const cwd = directory || process.cwd()

    return {
      // 文件编辑后静态扫描（rule_violation / checklist_hit）；skill 工具加载 = skill
      // 使用信号（用户手输 "/<skill>" 文本即此路径：文本不作命令解析直达模型，模型经
      // tool/skill 注入指令；模型自主调用同路）。其余工具不转发。
      "tool.execute.after": (input, output) => {
        const tool = input?.tool
        if (tool === "skill") {
          // 入参 schema {name}（"The name of the skill from the available skills list"）；
          // 只转发名字与 session，skill 正文（output.output）绝不转发
          const name = input?.args?.name ?? output?.name ?? output?.args?.name ?? null
          forward(cwd, "skill-use", {
            name: typeof name === "string" ? name : null,
            session_id: typeof input?.sessionID === "string" ? input.sessionID : null,
          })
          return
        }
        if (tool !== "edit" && tool !== "write") return
        // filePath 兜底链与 change-log 插件一致（input.args 优先，output.args 回退）
        forward(cwd, "post-tool", {
          tool,
          args: input?.args ?? null,
          out_args: output?.args ?? null,
          session_id: typeof input?.sessionID === "string" ? input.sessionID : null,
        })
      },
      // 事件通道：command.executed = skill/命令使用信号（1.18 事件总线，消息创建后触发）；
      // session.idle = Stop 等价时机（tool_activity + 量/时阈值检查 -> flush）。
      // 注意：通配符 key 的处理函数收到的是 { event } 包装对象（实测 1.18.x，
      // 事件本体在 .event 里，直接解构参数当事件用会恒空判）
      event: ({ event }) => {
        const type = event?.type
        const sid = event?.properties?.sessionID ?? event?.properties?.session_id
        if (type === "command.executed") {
          // skill 使用信号：只转发命令名与 session；arguments（用户原始参数）绝不转发
          const name = event?.properties?.name
          forward(cwd, "skill-use", {
            name: typeof name === "string" ? name : null,
            session_id: typeof sid === "string" ? sid : null,
          })
          return
        }
        if (type !== "session.idle") return
        forward(cwd, "stop", {
          session_id: typeof sid === "string" ? sid : null,
        })
      },
    }
  },
}
