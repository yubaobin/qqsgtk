#!/usr/bin/env node
/**
 * khala-rules-audit.js - OpenCode/CodeFree-O 规则补审插件（触发器迁移 2026-09-22）
 *
 * 设计：docs/self-evolution-design.md §3.3。Claude Code/Codex 走 collect.cjs catchup
 * （SessionStart stdout 注入）；OpenCode 的 SessionStart 无 stdout 注入语义，故用
 * khala-change-log.js 已验证的轨道：session.idle -> 隔离会话判定 -> 插件确定性落盘。
 *  - 触发闸（防信号灌水）：最新台账条目距今 >=10min（避开编辑中途的频繁 idle）；
 *    isAuditing 模块级重入闸（判定自身也会触发 session.idle）
 *  - 判定输出仅 {kind:'rules-audit',audits:[...]} 白名单结构；报告由插件写盘 +
 *    合成 write 事件转发 collect.cjs post-tool（khala-telemetry.js 同款 detached 桥），
 *    严格解析/白名单/置信度过闸都在 collect 侧——插件不重复实现
 *  - v1 无 ai_mistake：OpenCode transcript 访问未验证
 *  - 隐私红线：台账/报告只在项目 khala-spec/ 下；判定 prompt 只含路径与编辑
 *    元数据，不含对话内容
 *
 * 双形态导出（OpenCode 2.0 插件 API 迁移 2026-10-13，形态说明见 khala-telemetry.js）：
 *  - v2（OpenCode >= 2.0）setup：事件流 ctx.event.subscribe 收 session.idle，
 *    判定走 ctx.generate.text（无工具、无 session 历史，免建删临时会话）——模型
 *    读不了文件，pending 台账与规则白名单均内联进 prompt（内容与 v1 隔离会话
 *    自行 Read 的相同，信任边界不变）
 *  - v1（CodeFree-O / OpenCode 1.18.29+）server：临时会话 create/prompt/delete
 *    轨道（隔离会话带 Read 工具，可按清单文件路径核对规则原文）
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PENDING_REL = 'khala-spec/.rules-audit-pending';
const MANIFEST_REL = 'khala-spec/manifests/rules.json';
const DEBUG_REL = 'khala-spec/.rules-audit-debug.log';
const QUIET_MS = 10 * 60 * 1000;
const INLINE_ENTRY_CAP = 200; // v2 内联台账条数上限（防 prompt 无界膨胀，保留最新）

/** 回合结束触发集（v1 的 session.idle 等价）：2.0.27 实测 server 驱动的会话
 *  回合完成后不发 session.idle（连等 60s 零事件），session.execution.succeeded/
 *  .failed（data:{sessionID[,error]}）每回合必发；idle 保留兜底 TUI 场景 */
const TURN_END = new Set([
  'session.idle',
  'session.execution.succeeded',
  'session.execution.failed',
]);

let isAuditing = false;

function appendDebug(cwd, line) {
  try {
    fs.appendFileSync(path.join(cwd, DEBUG_REL), `${new Date().toISOString()} ${line}\n`, 'utf8');
  } catch { /* 日志失败静默 */ }
}

/** UTC 'YYYY-MM-DD HH:MM:SS' -> ms（台账 ts 同 change-log 格式） */
function tsToMs(ts) {
  return typeof ts === 'string' ? Date.parse(`${ts.replace(' ', 'T')}Z`) : NaN;
}

/** yyyymmdd_hhmmss（报告文件名） */
function fileStamp(d = new Date()) {
  return d.toISOString().replace(/[-:T]/g, '').slice(0, 14).replace(/(\d{8})(\d{6})/, '$1_$2');
}

function rmPending(cwd) {
  try { fs.rmSync(path.join(cwd, PENDING_REL), { force: true }); } catch { /* 忽略 */ }
}

function readPending(cwd) {
  try {
    const raw = fs.readFileSync(path.join(cwd, PENDING_REL), 'utf8').trim();
    if (!raw) return [];
    return raw.split('\n').filter(Boolean)
      .map((l) => { try { return JSON.parse(l); } catch { return null; } })
      .filter(Boolean);
  } catch {
    return null; // 不存在
  }
}

/** 项目级 telemetry off 时清残留台账（「关了就停」配套） */
function telemetryOff(cwd) {
  try {
    const cfg = JSON.parse(fs.readFileSync(path.join(cwd, 'khala-spec', 'config.json'), 'utf8'));
    return cfg?.telemetry?.enabled === false;
  } catch {
    return false;
  }
}

/** 合成 write 事件转发 collect.cjs（khala-telemetry.js 同款 detached 桥） */
function forward(cwd, payload) {
  const child = spawn('node', ['khala-spec/collect.cjs', 'post-tool', 'opencode'], {
    cwd, detached: true, stdio: ['pipe', 'ignore', 'ignore'],
  });
  child.stdin.end(JSON.stringify(payload));
  child.unref();
}

/** 从判定文本提取 JSON：全量 -> 首尾大括号切片，两级回退 */
function extractJson(text) {
  const t = String(text ?? '').trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
  try { return JSON.parse(t); } catch { /* 回退 */ }
  const s = t.indexOf('{');
  const e = t.lastIndexOf('}');
  if (s >= 0 && e > s) {
    try { return JSON.parse(t.slice(s, e + 1)); } catch { /* 放弃 */ }
  }
  return null;
}

/** v2 事件 payload 在 .data（2.0.27 V2Event schema 实证）；双读防御 */
const propsOf = (event) => event?.data ?? event?.properties ?? {};

/** 触发闸（v1/v2 共用）：返回台账条目（可判定）或 null（无事可做/已清理） */
function prepare(cwd) {
  const entries = readPending(cwd);
  if (entries === null || entries.length === 0) return null; // 无待审
  if (telemetryOff(cwd)) {
    rmPending(cwd);
    return null;
  }
  const newest = entries
    .map((e) => tsToMs(e.ts))
    .filter(Number.isFinite)
    .reduce((a, b) => Math.max(a, b), 0);
  if (Date.now() - newest < QUIET_MS) return null; // 仍在编辑，等下次 idle
  if (!fs.existsSync(path.join(cwd, MANIFEST_REL))) {
    // 无清单 = 无可审规则：清残留退出（与 catchup 同约定）
    rmPending(cwd);
    appendDebug(cwd, 'no rules manifest, pending cleared');
    return null;
  }
  return entries;
}

/**
 * 白名单内联（耗时治理 2026-09-24）：插件侧 fs 读清单拼 `id — file` 行，
 * 判定模型不再整读 manifests/rules.json（sections 元数据占实测 184KB 的 95%）。
 * file 缺失时只报 id（白名单核心是合法 id 集，文件映射仅供 v1 通道读原文用）。
 * @param {string} cwd
 */
function readWhitelist(cwd) {
  try {
    const doc = JSON.parse(fs.readFileSync(path.join(cwd, MANIFEST_REL), 'utf8'));
    const lines = (Array.isArray(doc?.rules) ? doc.rules : [])
      .map((r) => {
        if (typeof r?.id !== 'string' || !r.id.startsWith('rule:')) return null;
        return typeof r?.file === 'string' && r.file ? `${r.id} — ${r.file}` : r.id;
      })
      .filter(Boolean);
    return lines.length > 0 ? lines.join('\n') : null;
  } catch {
    return null;
  }
}

/**
 * 判定 prompt。entriesInline 非空时（v2）内联台账（最新条目截尾 INLINE_ENTRY_CAP）；
 * 否则（v1）指令模型自行 Read 台账文件。canRead 决定白名单行是否附「读规则原文」
 * 指令（v2 通道无工具，读不了）。
 */
function buildPrompt(cwd, whitelist, entriesInline, canRead) {
  return [
    'You are a code-rule auditor. Work strictly from the inputs below.',
    entriesInline
      ? `1. Pending edits (JSONL entries, newest last; "file" is relative to ${cwd}): ${entriesInline}`
      : `1. Pending edits: ${path.join(cwd, PENDING_REL)} (JSONL; each line {"ts","op":"EDIT"|"WRITE","file","wf":bool,"old":"...","new":"..."}, old/new capped at 500 chars; "file" is relative to ${cwd}).`,
    canRead
      ? (whitelist
        ? "2. Whitelist of valid rule ids is embedded below (ids outside it are invalid). To check a rule's actual content, Read its file under khala-spec/rules/:"
        : `2. Rule manifest: ${path.join(cwd, MANIFEST_REL)} — take rules[].id as the whitelist of valid rule ids (ids outside the list are invalid).`)
      : '2. Whitelist of valid rule ids is embedded below (ids outside it are invalid). Judge from the rule ids, the pending edits, and your knowledge of the rule conventions; when unsure, give a low confidence.',
    ...(whitelist ? [whitelist] : []),
    "First identify the 3 most suspicious spots in these edits (checked against the rules), then give a verdict for every rule that plausibly applies to them — omit rules that clearly don't apply (no n/a entries) — rubber-stamping everything as followed without actually checking is forbidden.",
    'Reply with ONLY a JSON object, no prose, no markdown fences:',
    '{"kind":"rules-audit","audits":[{"rule_id":"rule:...","verdict":"followed","confidence":0.9,"sections":["..."],"note":"..."}]}',
    'verdict is "followed" / "violation". confidence is 0~1 (give a low value when unsure). "sections" is optional (the specific rule-doc headings, at most 3, original Chinese). "note" is required for every violation — at most 2 sentences stating what was done wrong, no code snippets, no file paths — and is omitted for followed. No other fields.',
  ].join('\n');
}

/** 判定通过后的落盘/转发/清理（v1/v2 共用） */
function finish(cwd, report) {
  fs.mkdirSync(path.join(cwd, 'khala-spec', 'rules-audit'), { recursive: true });
  const filePath = path.join(cwd, 'khala-spec', 'rules-audit', `rules-audit-${fileStamp()}.json`);
  fs.writeFileSync(filePath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
  forward(cwd, { tool: 'write', args: { filePath, content: JSON.stringify(report) } });
  rmPending(cwd);
  appendDebug(cwd, `SUCCESS: report with ${report.audits.length} audit(s) forwarded, pending deleted`);
}

/** v2 内联台账（generate.text 无工具读不了文件；截尾保最新） */
function inlineEntries(entries) {
  const capped = entries.length > INLINE_ENTRY_CAP
    ? entries.slice(-INLINE_ENTRY_CAP) : entries;
  return JSON.stringify(capped);
}

/** v2 判定模型解析：全局默认（ctx.model.default()）优先，未配置时回退取该回合
 *  会话自身模型（SessionInfo.model，server/serve 场景常无全局默认，2.0.27 实测） */
async function resolveModel(ctx, sessionID) {
  try {
    const def = await ctx.model.default();
    if (def?.providerID) return { providerID: def.providerID, id: def.modelID ?? def.id };
  } catch { /* 回退 */ }
  if (typeof sessionID === 'string' && sessionID) {
    try {
      const info = await ctx.session.get({ sessionID });
      const m = info?.model ?? info?.data?.model;
      if (m?.providerID) return { providerID: m.providerID, id: m.id ?? m.modelID };
    } catch { /* 放弃 */ }
  }
  return null;
}

const plugin = {
  id: 'khala-rules-audit',

  // ---- v2（OpenCode >= 2.0）----
  async setup(ctx) {
    const cwd = ctx?.location?.directory ?? process.cwd();
    const controller = new AbortController();
    void (async () => {
      try {
        for await (const event of ctx.event.subscribe({ signal: controller.signal })) {
          if (!TURN_END.has(event?.type) || isAuditing) continue;
          const entries = prepare(cwd);
          if (entries === null) continue;
          // v2 通道无工具：白名单拼不出（无清单/解析失败）即保 pending 下次再试
          const whitelist = readWhitelist(cwd);
          if (!whitelist) {
            appendDebug(cwd, 'no inline whitelist, keep pending');
            continue;
          }
          isAuditing = true;
          try {
            const model = await resolveModel(ctx, propsOf(event).sessionID);
            if (!model) {
              appendDebug(cwd, 'ERROR: no default model, keep pending');
              continue; // finally 复位重入闸
            }
            const prompt = buildPrompt(cwd, whitelist, inlineEntries(entries), false);
            let report = null;
            for (let attempt = 1; attempt <= 2 && !report; attempt += 1) {
              const res = await ctx.generate.text({ model, prompt });
              const doc = extractJson(res?.text);
              if (doc && doc.kind === 'rules-audit' && Array.isArray(doc.audits)) report = doc;
              else appendDebug(cwd, `attempt ${attempt} produced no valid report, retrying`);
            }
            if (!report) {
              appendDebug(cwd, 'ERROR: no valid report after 2 attempts, keep pending');
              continue;
            }
            finish(cwd, report);
          } catch (e) {
            appendDebug(cwd, `ERROR: ${e?.message ?? e}`);
          } finally {
            isAuditing = false;
          }
        }
      } catch { /* 流终止/abort 静默，不抛给宿主 */ }
    })();
    return () => controller.abort();
  },

  // ---- v1（CodeFree-O / OpenCode 1.18.29+）----
  async server({ directory, client }) {
    const cwd = directory ?? process.cwd();
    return {
      event: async ({ event }) => {
        if (event?.type !== 'session.idle' || isAuditing) return;
        if (prepare(cwd) === null) return;
        // 白名单内联，读取失败（whitelist=null）退回「指令读文件」形态
        const whitelist = readWhitelist(cwd);
        const prompt = buildPrompt(cwd, whitelist, null, true);
        isAuditing = true;
        let sessionId = null;
        try {
          const created = await client.session.create({ body: { title: 'khala-rules-audit' } });
          sessionId = created?.data?.id ?? created?.id;
          let report = null;
          for (let attempt = 1; attempt <= 2 && !report; attempt += 1) {
            const res = await client.session.prompt({ path: { id: sessionId }, body: { parts: [{ type: 'text', text: prompt }] } });
            const text = (res?.data?.parts ?? []).map((p) => p?.text ?? '').join('');
            const doc = extractJson(text);
            if (doc && doc.kind === 'rules-audit' && Array.isArray(doc.audits)) report = doc;
            else appendDebug(cwd, `attempt ${attempt} produced no valid report, retrying`);
          }
          if (!report) {
            appendDebug(cwd, 'ERROR: no valid report after 2 attempts, keep pending');
            return; // finally 清理会话；pending 留待下次 idle 重试
          }
          finish(cwd, report);
        } catch (e) {
          appendDebug(cwd, `ERROR: ${e?.message ?? e}`);
        } finally {
          isAuditing = false;
          if (sessionId) {
            try { await client.session.delete({ path: { id: sessionId } }); } catch { /* 清理失败不影响 */ }
          }
        }
      },
    };
  },
};

export default plugin;
