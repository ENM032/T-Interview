import { state } from "../core/state.js";
import { getBookmarks, getMastered } from "../core/storage.js";

function renderModeSwitcher() {
  return `
    <div class="quick-actions-card">
      <div class="card-title">Study Mode</div>
      <div style="display: flex; gap: 8px; flex-direction: column;">
        <button class="btn-secondary ${state.viewMode === 'reading' ? 'active' : ''}" data-mode="reading" style="${state.viewMode === 'reading' ? 'border-color: var(--accent-cyan); color: var(--accent-cyan);' : ''}">
          Deep Dive Reader
        </button>
        <button class="btn-secondary ${state.viewMode === 'flashcards' ? 'active' : ''}" data-mode="flashcards" style="${state.viewMode === 'flashcards' ? 'border-color: var(--accent-cyan); color: var(--accent-cyan);' : ''}">
          Flashcard Drill
        </button>
      </div>
    </div>
  `;
}

function renderStats(totalCount, masteredCount, bookmarkCount) {
  return `
    <div class="stats-card">
      <div class="card-title">Track Summary</div>
      <div class="stats-grid">
        <div class="stat-item">
          <div class="stat-number">${totalCount}</div>
          <div class="stat-label">Total</div>
        </div>
        <div class="stat-item">
          <div class="stat-number" style="color: var(--accent-emerald);">${masteredCount}</div>
          <div class="stat-label">Mastered</div>
        </div>
      </div>
    </div>
  `;
}

function renderKeyboardShortcuts() {
  return `
    <div class="keyboard-card">
      <div class="card-title">Keyboard Shortcuts</div>
      <div style="font-size: var(--font-size-xs); color: var(--text-secondary); display: flex; flex-direction: column; gap: 6px;">
        <div style="display: flex; justify-content: space-between;">
          <span>Previous / Next:</span>
          <kbd style="background: var(--bg-secondary); padding: 1px 4px; border-radius: 3px;">Left / Right</kbd>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span>Reveal / Flip:</span>
          <kbd style="background: var(--bg-secondary); padding: 1px 4px; border-radius: 3px;">Space</kbd>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span>Bookmark:</span>
          <kbd style="background: var(--bg-secondary); padding: 1px 4px; border-radius: 3px;">B</kbd>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span>Master:</span>
          <kbd style="background: var(--bg-secondary); padding: 1px 4px; border-radius: 3px;">M</kbd>
        </div>
      </div>
    </div>
  `;
}

export function renderRightSidebar(container) {
  if (!container) return;

  const bookmarks = getBookmarks();
  const mastered = getMastered();

  const totalCount = state.filteredQuestions.length;
  const masteredCount = state.filteredQuestions.filter(q => mastered.includes(q.id)).length;
  const bookmarkCount = state.filteredQuestions.filter(q => bookmarks.includes(q.id)).length;

  container.innerHTML = `
    ${renderModeSwitcher()}
    ${renderStats(totalCount, masteredCount, bookmarkCount)}
    ${renderKeyboardShortcuts()}
  `;
}
