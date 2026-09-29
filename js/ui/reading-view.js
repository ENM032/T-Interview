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

function renderTakeaways(takeaways) {
  if (!takeaways || takeaways.length === 0) return "";
  return takeaways.map(item => `<li>${item}</li>`).join("");
}

function renderHeader(question, isBookmarked, isMastered) {
  return `
    <header class="reader-header">
      <div class="reader-meta-bar">
        <span class="category-tag">${question.categoryLabel} · ${question.difficulty}</span>
        <div class="reader-actions">
          <button class="btn-icon ${isBookmarked ? 'active-bookmark' : ''}" id="read-bookmark-btn" title="Bookmark (B)" aria-label="Bookmark">
            ★
          </button>
          <button class="btn-icon ${isMastered ? 'active-mastered' : ''}" id="read-master-btn" title="Mark as Mastered (M)" aria-label="Mark as Mastered">
            ✓
          </button>
        </div>
      </div>
      <h1 class="reader-title">${question.title}</h1>
      <div class="tag-list">
        ${question.tags.map(t => `<span class="tag-badge">#${t}</span>`).join("")}
      </div>
    </header>
  `;
}

function renderProgressiveSections(question, htmlContent) {
  return `
    <!-- Tier 1: 30-Second Elevator Pitch -->
    <div class="elevator-pitch-box">
      <div class="box-label">30-Second Elevator Pitch (Interview Answer)</div>
      <p class="elevator-pitch-text">${question.summaryAnswer}</p>
    </div>

    <!-- Tier 2: Key Takeaways -->
    <div class="takeaways-section">
      <div class="takeaways-title">Key Takeaways</div>
      <ul class="takeaways-list">
        ${renderTakeaways(question.keyTakeaways)}
      </ul>
    </div>

    <!-- Tier 3: Technical Deep Dive -->
    <div class="deep-dive-section">
      <div class="markdown-body">
        ${htmlContent}
      </div>
    </div>

    <!-- Tier 4: Interview Tips -->
    ${question.interviewTips ? `
      <div class="interview-tip-card">
        <div class="interview-tip-title">Interview Advice & Trap Avoidance</div>
        <p class="interview-tip-text">${question.interviewTips[0]}</p>
      </div>
    ` : ''}
  `;
}

function renderBottomControls() {
  return `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 32px; padding-top: 16px; border-top: 1px solid var(--border-subtle);">
      <button class="btn-secondary" id="btn-prev-question">
        Previous Question
      </button>
      <button class="btn-primary" id="btn-next-question">
        Next Question
      </button>
    </div>
  `;
}

export async function renderReadingView(container) {
  if (state.filteredQuestions.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 16px; color: var(--text-secondary);">
        <h3>No questions found</h3>
        <p style="margin-top: 8px;">Try clearing your filter or search query.</p>
      </div>
    `;
    return;
  }

  const question = state.filteredQuestions[state.currentIndex];
  let markdownText = await fetchMarkdownContent(question.markdownPath);
  if (!markdownText) {
    markdownText = `## Detailed Explanation\n${question.summaryAnswer}`;
  }

  const htmlContent = parseMarkdown(markdownText);
  const isMastered = getMastered().includes(question.id);
  const isBookmarked = getBookmarks().includes(question.id);

  container.innerHTML = `
    ${renderHeader(question, isBookmarked, isMastered)}
    ${renderProgressiveSections(question, htmlContent)}
    ${renderBottomControls()}
  `;
}
