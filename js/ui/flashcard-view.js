import { state } from "../core/state.js";
import { getBookmarks, getMastered } from "../core/storage.js";

function renderTakeaways(takeaways) {
  if (!takeaways || takeaways.length === 0) return "";
  return takeaways.map(item => `<li>${item}</li>`).join("");
}

function renderCardFront(question, isBookmarked, isMastered) {
  return `
    <div class="card-face card-face-front">
      <div class="card-header-badge">
        <span class="card-category-tag">${question.categoryLabel}</span>
        <div style="display: flex; gap: 8px; align-items: center;">
          <span class="card-difficulty">${question.difficulty}</span>
          ${isMastered ? '<span style="color: var(--accent-emerald); font-size: 0.8rem; font-weight: 700;">✓ Mastered</span>' : ''}
        </div>
      </div>
      <div>
        <h2 class="card-question-text">${question.title}</h2>
        <div class="article-tags" style="margin-top: 12px;">
          ${question.tags.map(t => `<span class="tag-pill">#${t}</span>`).join("")}
        </div>
      </div>
      <div class="card-hint-notice">
        <span>💡 Tap or click card to reveal answer</span>
      </div>
    </div>
  `;
}

function renderCardBack(question) {
  return `
    <div class="card-face card-face-back">
      <div class="card-header-badge">
        <span class="card-category-tag">${question.categoryLabel} · Answer</span>
        <span class="card-difficulty">${question.difficulty}</span>
      </div>
      <div style="overflow-y: auto; flex: 1; padding-right: 4px;">
        <p class="card-answer-summary"><strong>Summary:</strong> ${question.summaryAnswer}</p>
        <div style="margin-top: 12px;">
          <strong style="color: var(--accent-cyan); font-size: 0.85rem; text-transform: uppercase;">Key Takeaways:</strong>
          <ul class="card-takeaways-list" style="margin-top: 8px;">
            ${renderTakeaways(question.keyTakeaways)}
          </ul>
        </div>
        ${question.interviewTips ? `
          <div style="margin-top: 12px; background: rgba(56, 189, 248, 0.1); padding: 10px; border-radius: 8px; border-left: 3px solid var(--accent-cyan);">
            <strong style="color: var(--accent-cyan); font-size: 0.8rem;">🎯 Interview Tip:</strong>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;">${question.interviewTips[0]}</p>
          </div>
        ` : ''}
      </div>
      <div class="card-hint-notice" style="margin-top: 12px;">
        <span>🔄 Tap to flip back</span>
      </div>
    </div>
  `;
}

export function renderFlashcardView(container) {
  if (state.filteredQuestions.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 16px; color: var(--text-secondary);">
        <h3>No questions found matching your filter</h3>
        <p style="margin-top: 8px;">Try clearing your search or selecting "All Questions"</p>
      </div>
    `;
    return;
  }

  const question = state.filteredQuestions[state.currentIndex];
  const bookmarks = getBookmarks();
  const mastered = getMastered();
  const isBookmarked = bookmarks.includes(question.id);
  const isMastered = mastered.includes(question.id);

  container.innerHTML = `
    <div class="flashcard-section">
      <div class="flashcard-meta">
        <span>Question ${state.currentIndex + 1} of ${state.filteredQuestions.length}</span>
        <span>Keyboard: ← Previous | Space Flip | Next →</span>
      </div>

      <div class="flashcard-container" id="flashcard-trigger">
        <div class="flashcard ${state.isFlipped ? 'is-flipped' : ''}" id="flashcard-element">
          ${renderCardFront(question, isBookmarked, isMastered)}
          ${renderCardBack(question)}
        </div>
      </div>

      <div class="card-controls">
        <button class="btn-icon ${isBookmarked ? 'active' : ''}" id="btn-bookmark" title="Bookmark question">
          ★
        </button>
        <button class="btn-secondary" id="btn-prev">
          ← Prev
        </button>
        <button class="btn-primary" id="btn-flip">
          ${state.isFlipped ? 'Show Question' : 'Reveal Answer'}
        </button>
        <button class="btn-secondary" id="btn-next">
          Next →
        </button>
        <button class="btn-icon ${isMastered ? 'active' : ''}" id="btn-mastered" title="Mark as mastered">
          ✓
        </button>
      </div>
    </div>
  `;
}
