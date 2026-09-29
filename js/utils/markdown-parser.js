/**
 * Lightweight, robust client-side Markdown Parser.
 * Converts GitHub-Flavored Markdown to sanitized HTML without external dependencies.
 */

function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function parseCodeBlocks(text) {
  return text.replace(/```([a-z]*)\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<pre><code class="language-${lang}">${escapeHtml(code.trim())}</code></pre>`;
  });
}

function parseInlineFormatting(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>");
}

function parseHeaders(text) {
  return text
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>");
}

function parseBlockquotes(text) {
  return text.replace(/^\> (.*$)/gim, "<blockquote>$1</blockquote>");
}

function parseHorizontalRules(text) {
  return text.replace(/^---$/gim, "<hr />");
}

function parseUnorderedLists(text) {
  return text.replace(/^\s*[-*]\s+(.*$)/gim, "<li>$1</li>");
}

function parseTables(text) {
  const tableRegex = /\|(.+)\|\n\|[-:\s|]+\|\n((?:\|.+\|\n?)+)/g;
  return text.replace(tableRegex, (match, headerRow, bodyRows) => {
    const headers = headerRow.split("|").filter(c => c.trim().length > 0);
    const headerHtml = headers.map(h => `<th>${h.trim()}</th>`).join("");
    
    const rows = bodyRows.trim().split("\n").map(row => {
      const cells = row.split("|").filter(c => c.trim().length > 0);
      const cellsHtml = cells.map(c => `<td>${c.trim()}</td>`).join("");
      return `<tr>${cellsHtml}</tr>`;
    }).join("");

    return `<table><thead><tr>${headerHtml}</tr></thead><tbody>${rows}</tbody></table>`;
  });
}

function removeFrontmatter(markdown) {
  if (!markdown.startsWith("---")) return markdown;
  const secondDividerIndex = markdown.indexOf("---", 3);
  if (secondDividerIndex === -1) return markdown;
  return markdown.slice(secondDividerIndex + 3).trim();
}

/**
 * Main parseMarkdown function
 */
export function parseMarkdown(rawMarkdown) {
  if (!rawMarkdown) return "";

  let content = removeFrontmatter(rawMarkdown);
  content = parseCodeBlocks(content);
  content = parseTables(content);
  content = parseHeaders(content);
  content = parseBlockquotes(content);
  content = parseHorizontalRules(content);
  content = parseUnorderedLists(content);
  content = parseInlineFormatting(content);

  // Wrap lists
  content = content.replace(/(<li>.*<\/li>)/gms, "<ul>$1</ul>");
  // Clean multiple ul wraps
  content = content.replace(/<\/ul>\s*<ul>/g, "");

  // Wrap remaining paragraphs
  const paragraphs = content.split(/\n\s*\n/).map(chunk => {
    const trimmed = chunk.trim();
    if (!trimmed) return "";
    if (/^<(h[1-6]|ul|ol|pre|table|blockquote|hr)/i.test(trimmed)) {
      return trimmed;
    }
    return `<p>${trimmed.replace(/\n/g, "<br>")}</p>`;
  });

  return paragraphs.join("\n");
}
