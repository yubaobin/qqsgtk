#!/usr/bin/env node
// scripts/migrate-paths.js
//
// Mass path-prefix replacement for the .rules/ -&gt; khala-spec/.rules/ migration.
// Reads the file list from scripts/migrate-paths-files.json and applies
// boundary-aware regex replacements to each file.
//
// Usage:
//   node scripts/migrate-paths.js --dry-run
//   node scripts/migrate-paths.js

const fs = require(&#39;fs&#39;);
const path = require(&#39;path&#39;);

const SKIP_LINE_PATTERNS = [
  /~\/\.khala\/wiki\//,
  /https?:\/\/[^\s]*wiki\./,
  /https?:\/\/[^\s]*doc-ref\./,
];

const REPLACE_PATTERNS = [
  { pattern: /(?&lt;![\w\/\-.])(?&lt;!\/khala-spec)\.rules\//g, replacement: &#39;khala-spec/.rules/&#39; },
  { pattern: /(?&lt;![\w\/\-.])(?&lt;!\/khala-spec)doc-ref\//g, replacement: &#39;khala-spec/doc-ref/&#39; },
  { pattern: /(?&lt;![\w\/\-.])(?&lt;!\/khala-spec)tools\//g, replacement: &#39;khala-spec/tools/&#39; },
  { pattern: /(?&lt;![\w\/\-.])(?&lt;!~\/\.khala\/)(?&lt;!\/khala-spec)wiki\//g, replacement: &#39;khala-spec/wiki/&#39; },
];

function processFile(filePath) {
  if (!fs.existsSync(filePath)) return { modified: false, reason: &#39;not found&#39; };
  const original = fs.readFileSync(filePath, &#39;utf-8&#39;);
  const lines = original.split(&#39;\n&#39;);
  const out = [];
  let modified = false;

  for (const line of lines) {
    if (SKIP_LINE_PATTERNS.some((p) =&gt; p.test(line))) { out.push(line); continue; }
    let newLine = line;
    for (const { pattern, replacement } of REPLACE_PATTERNS) {
      newLine = newLine.replace(pattern, replacement);
    }
    if (newLine !== line) modified = true;
    out.push(newLine);
  }
  return { modified, content: modified ? out.join(&#39;\n&#39;) : null };
}

function main() {
  const dryRun = process.argv.includes(&#39;--dry-run&#39;);
  const manifestPath = path.join(__dirname, &#39;migrate-paths-files.json&#39;);
  const manifest = JSON.parse(fs.readFileSync(manifestPath, &#39;utf-8&#39;));
  const files = manifest.userProjectFiles;

  let totalModified = 0, totalNotFound = 0;
  console.log(`${dryRun ? &#39;[DRY-RUN]&#39; : &#39;[APPLY]&#39;} Processing ${files.length} files...\n`);

  for (const file of files) {
    const { modified, content, reason } = processFile(file);
    if (reason === &#39;not found&#39;) { console.log(`[SKIP] ${file} (not found)`); totalNotFound++; continue; }
    if (!modified) { console.log(`[--]   ${file}`); continue; }
    totalModified++;
    if (dryRun) console.log(`[MOD]  ${file}`);
    else { fs.writeFileSync(file, content, &#39;utf-8&#39;); console.log(`[OK]   ${file}`); }
  }
  console.log(`\n${dryRun ? &#39;[DRY-RUN]&#39; : &#39;[APPLY]&#39;} Summary: ${totalModified} modified, ${totalNotFound} not found`);
}

try { main(); } catch (err) { console.error(`Error: ${err.message}`); process.exit(1); }
