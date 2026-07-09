/**
 * Matrix / AllInAll — توليد PDF احترافي لكل ملف Markdown في docs/
 * Usage: node docs/build-all-pdfs.js
 *        node docs/build-all-pdfs.js path/to/file.md
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const DOCS_ROOT = path.join(__dirname);
const CSS_PATH = path.join(DOCS_ROOT, 'pdf-styles.css');
const PROJECT_ROOT = path.join(DOCS_ROOT, '..');
const GENERATED_DATE = new Date().toLocaleDateString('ar-EG', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const css = fs.readFileSync(CSS_PATH, 'utf8');

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function inlineMd(s) {
  return s
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}

function parseFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) return { meta: {}, body: text };
  const meta = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w+):\s*"?(.+?)"?\s*$/);
    if (m) meta[m[1]] = m[2].replace(/^"|"$/g, '');
  }
  return { meta, body: text.slice(match[0].length) };
}

function extractTitle(body) {
  const m = body.match(/^#\s+(.+)$/m);
  return m ? m[1].trim() : 'Matrix Document';
}

function buildCatalogCover(meta) {
  return `
<div class="cover">
  <div class="cover-badge">PROJECT CATALOG · ${escapeHtml(meta.version || '1.0.0')}</div>
  <h1>Matrix</h1>
  <h2>AllInAll ERP — كتالوج المشروع</h2>
  <dl class="cover-meta">
    <dt>الإصدار</dt><dd>${escapeHtml(meta.version || '1.0.0')}</dd>
    <dt>التاريخ</dt><dd>${escapeHtml(meta.date || GENERATED_DATE)}</dd>
    <dt>الحالة</dt><dd>${escapeHtml(meta.status || 'وثيقة Matrix')}</dd>
    <dt>النوع</dt><dd>كتالوج توثيقي احترافي</dd>
  </dl>
  <div class="cover-footer">Matrix Platform — وثيقة داخلية للتخطيط والتنفيذ</div>
</div>`;
}

function buildSimpleCover(title, subtitle, relPath) {
  return `
<div class="doc-cover">
  <div class="brand">MATRIX / ALLINALL ERP</div>
  <h1>${escapeHtml(title)}</h1>
  ${subtitle ? `<div class="subtitle">${escapeHtml(subtitle)}</div>` : ''}
  <div class="meta-row">
    <span>${escapeHtml(relPath)}</span>
    <span>${escapeHtml(GENERATED_DATE)}</span>
  </div>
</div>`;
}

function mdToHtml(body, options) {
  let html = body;

  html = html.replace(/```([\w-]*)\r?\n([\s\S]*?)```/g, (_, _lang, code) => {
    return `<pre><code>${escapeHtml(code.replace(/\n$/, ''))}</code></pre>`;
  });

  html = html.replace(/\r?\n(\|.+\|)\r?\n(\|[-:| ]+\|)\r?\n((?:\|.+\|\r?\n?)+)/g, (_, header, _sep, tableBody) => {
    const parseRow = (row) => row.trim().slice(1, -1).split('|').map((c) => c.trim());
    const headers = parseRow(header);
    const rows = tableBody.trim().split(/\r?\n/).map(parseRow);
    let t = '<table><thead><tr>';
    t += headers.map((h) => `<th>${inlineMd(h)}</th>`).join('');
    t += '</tr></thead><tbody>';
    for (const row of rows) {
      t += '<tr>' + row.map((c) => `<td>${inlineMd(c)}</td>`).join('') + '</tr>';
    }
    return '\n' + t + '</tbody></table>\n';
  });

  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  html = html.replace(/^---$/gm, '<hr>');

  html = inlineMd(html);

  html = html.replace(/^- \[x\] (.+)$/gim, '<li class="checklist-item checked">$1</li>');
  html = html.replace(/^- \[ \] (.+)$/gm, '<li class="checklist-item">$1</li>');
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li[\s\S]*?<\/li>\s*)+/g, (block) => {
    if (block.includes('checklist-item')) return '<ul class="checklist">' + block + '</ul>';
    return '<ul>' + block + '</ul>';
  });

  html = html.replace(/^\d+\.\s+(.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>(?!.*checklist)[\s\S]*?<\/li>\s*)+/g, (block) => {
    if (block.startsWith('<ul')) return block;
    return '<ol>' + block + '</ol>';
  });

  const lines = html.split(/\r?\n/);
  const out = [];
  let buf = [];
  const flush = () => {
    if (!buf.length) return;
    const p = buf.join(' ').trim();
    if (p && !/^</.test(p)) out.push(`<p>${p}</p>`);
    else if (p) out.push(p);
    buf = [];
  };

  for (const line of lines) {
    const t = line.trim();
    if (!t) {
      flush();
      continue;
    }
    if (/^<(h[1-4]|table|pre|ul|ol|hr|div|dl|p|blockquote)/i.test(t) || /^<\//.test(t)) {
      flush();
      out.push(line);
    } else {
      buf.push(line);
    }
  }
  flush();

  html = out.join('\n');

  if (options.skipFirstH1) {
    html = html.replace(/<h1>[^<]*<\/h1>\s*(<h2>[^<]*<\/h2>\s*)?(<hr>\s*)?/i, '');
  }

  return html;
}

function buildHtml(mdPath) {
  const raw = fs.readFileSync(mdPath, 'utf8');
  const { meta, body } = parseFrontmatter(raw);
  const title = meta.title || extractTitle(body);
  const relPath = path.relative(PROJECT_ROOT, mdPath).replace(/\\/g, '/');
  const baseName = path.basename(mdPath, '.md');
  const isCatalog = baseName === 'PROJECT-CATALOG';

  let cover;
  let skipFirstH1 = false;

  if (isCatalog) {
    cover = buildCatalogCover(meta);
    skipFirstH1 = true;
  } else {
    cover = buildSimpleCover(title, meta.subtitle || '', relPath);
    skipFirstH1 = true;
  }

  const header = `<div class="doc-header"><span>Matrix / AllInAll ERP</span><span>${escapeHtml(relPath)}</span></div>`;
  const footer = `<div class="doc-footer-note">Matrix Platform — ${escapeHtml(GENERATED_DATE)} — ${escapeHtml(relPath)}</div>`;
  const content = mdToHtml(body, { skipFirstH1 });

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>${escapeHtml(title)} — Matrix</title>
  <style>${css}</style>
</head>
<body>
${cover}
${header}
${content}
${footer}
</body>
</html>`;
}

function findBrowser() {
  const candidates = [
    process.env['ProgramFiles(x86)'] + '\\Microsoft\\Edge\\Application\\msedge.exe',
    process.env.ProgramFiles + '\\Microsoft\\Edge\\Application\\msedge.exe',
    process.env.ProgramFiles + '\\Google\\Chrome\\Application\\chrome.exe',
  ];
  return candidates.find((p) => p && fs.existsSync(p));
}

function collectMdFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'extracted' || entry.name === 'node_modules') continue;
      collectMdFiles(full, files);
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(full);
    }
  }
  return files.sort();
}

function generatePdf(mdPath, browser) {
  const pdfPath = mdPath.replace(/\.md$/i, '.pdf');
  const htmlPath = mdPath.replace(/\.md$/i, '.html');
  const html = buildHtml(mdPath);
  fs.writeFileSync(htmlPath, html, 'utf8');

  const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
  execFileSync(
    browser,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--run-all-compositor-stages-before-draw',
      '--virtual-time-budget=15000',
      `--print-to-pdf=${pdfPath}`,
      fileUrl,
    ],
    { stdio: 'pipe' }
  );

  if (!fs.existsSync(pdfPath)) {
    throw new Error(`PDF not created: ${pdfPath}`);
  }

  const sizeKb = Math.round(fs.statSync(pdfPath).size / 1024);
  return { mdPath, pdfPath, htmlPath, sizeKb };
}

function main() {
  const browser = findBrowser();
  if (!browser) {
    console.error('Edge/Chrome not found.');
    process.exit(1);
  }

  const args = process.argv.slice(2);
  const files = args.length
    ? args.map((f) => path.resolve(f))
    : collectMdFiles(DOCS_ROOT);

  console.log(`\nMatrix PDF Builder — ${files.length} file(s)\n${'─'.repeat(50)}`);

  const results = [];
  const errors = [];

  for (const mdPath of files) {
    if (!fs.existsSync(mdPath)) {
      errors.push({ mdPath, error: 'File not found' });
      continue;
    }
    try {
      const r = generatePdf(mdPath, browser);
      results.push(r);
      const rel = path.relative(PROJECT_ROOT, r.pdfPath);
      console.log(`✓ ${rel} (${r.sizeKb} KB)`);
    } catch (err) {
      errors.push({ mdPath, error: err.message });
      console.error(`✗ ${path.relative(PROJECT_ROOT, mdPath)}: ${err.message}`);
    }
  }

  console.log(`${'─'.repeat(50)}`);
  console.log(`Done: ${results.length} PDF(s) | Errors: ${errors.length}`);

  const manifestPath = path.join(DOCS_ROOT, 'pdf-manifest.json');
  fs.writeFileSync(
    manifestPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        count: results.length,
        files: results.map((r) => ({
          md: path.relative(PROJECT_ROOT, r.mdPath),
          pdf: path.relative(PROJECT_ROOT, r.pdfPath),
          sizeKb: r.sizeKb,
        })),
        errors,
      },
      null,
      2
    ),
    'utf8'
  );
  console.log(`Manifest: docs/pdf-manifest.json\n`);

  if (errors.length) process.exit(1);
}

if (require.main === module) {
  main();
}

module.exports = { buildHtml, generatePdf, collectMdFiles, main };
