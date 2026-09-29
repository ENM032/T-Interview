import { state } from "../core/state.js";
import { parseMarkdown } from "../utils/markdown-parser.js";
import { getBookmarks, getMastered } from "../core/storage.js";

async function fetchMarkdownContent(path) {
  try {
    const response = await fetch(path);
    if (!response.ok) throw new Error("Fetch failed");
    return await response.text();
  } catch (err) {
    return null;
  }
}

function renderSidebarItems() {
  return state.filteredQuestions.map((q, idx) => {
    const isActive = idx === state.currentIndex;
    return `
      <button class="question-nav-item ${isActive ? 'active' : ''}" data-index="${idx}">
        <span class="question-nav-category">${q.categoryLabel}</span>
        <span>${idx + 1}. ${q.title}</span>
      </button>
    `;
  }).join("");
}

function generateFallbackMarkdown(question) {
  return `
## Summary
${question.summaryAnswer}

## Key Takeaways
${question.keyTakeaways.map(t => `- ${t}`).join("\n")}

## Interview Guidance
${question.interviewTips ? question.interviewTips.map(tip => `> ${tip}`).join("\n\n") : ''}
  `;
}

export async function renderReadingView(container) {
  if (state.filteredQuestions.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 16px; color: var(--text-secondary);">
        <h3>No questions found</h3>
      </div>
    `;
    return;
  }

  const question = state.filteredQuestions[state.currentIndex];
  let markdownText = await fetchMarkdownContent(question.markdownPath);
  
  if (!markdownText) {
    markdownText = generateFallbackMarkdown(question);
  }

  const htmlContent = parseMarkdown(markdownText);
  const isMastered = getMastered().includes(question.id);
  const isBookmarked = getBookmarks().includes(question.id);

  container.innerHTML = `
    <div class="reading-container">
      <aside class="questions-sidebar">
        <h4 style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; margin-bottom: 8px;">
          Questions (${state.filteredQuestions.length})
        </h4>
        ${renderSidebarItems()}
      </aside>

      <article class="reading-content-pane">
        <header class="article-header">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="article-category-badge">${question.categoryLabel}</span>
            <div style="display: flex; gap: 8px;">
              <button class="btn-icon ${isBookmarked ? 'active' : ''}" id="read-bookmark-btn" title="Bookmark">★</button>
              <button class="btn-icon ${isMastered ? 'active' : ''}" id="read-master-btn" title="Mark as Mastered">✓</button>
            </div>
          </div>
          <h1 class="article-title">${question.title}</h1>
          <div class="article-tags">
            ${question.tags.map(t => `<span class="tag-pill">#${t}</span>`).join("")}
          </div>
        </header>

        <div class="markdown-body">
          ${htmlContent}
        </div>
      </article>
    </div>
  `;
}
