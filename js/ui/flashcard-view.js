import { state } from "../core/state.js";
import { getBookmarks, getMastered } from "../core/storage.js";

function renderTakeaways(takeaways) {
  if (!takeaways || takeaways.length === 0) return "";
  return takeaways.map(item => `<li>${item}</li>`).join("");
}

function renderAnswerPane(question) {
  return `
    <div class="drill-answer-pane">
      <div class="box-label" style="margin-bottom: 8px;">Quick Answer</div>
      <p style="font-size: var(--font-size-base); color: var(--text-primary); margin-bottom: 12px; line-height: 1.6;">
        ${question.summaryAnswer}
      </p>
      <div class="box-label" style="margin-bottom: 6px;">Key Points</div>
      <ul class="takeaways-list">
        ${renderTakeaways(question.keyTakeaways)}
      </ul>
    </div>
  `;
}

export function renderFlashcardView(container) {
  if (state.filteredQuestions.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 48px 16px; color: var(--text-secondary);">
        <h3>No questions available</h3>
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
    <div class="flashcard-drill-container">
      <div style="display: flex; justify-content: space-between; font-size: var(--font-size-sm); color: var(--text-secondary);">
        <span>Card ${state.currentIndex + 1} of ${state.filteredQuestions.length}</span>
        <span class="category-tag">${question.categoryLabel}</span>
      </div>

      <div class="drill-card">
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span class="tag-badge">${question.difficulty}</span>
            <div style="display: flex; gap: 8px;">
              <button class="btn-icon ${isBookmarked ? 'active-bookmark' : ''}" id="btn-bookmark" title="Bookmark (B)">★</button>
              <button class="btn-icon ${isMastered ? 'active-mastered' : ''}" id="btn-mastered" title="Mark Mastered (M)">✓</button>
            </div>
          </div>
          <h2 class="drill-question">${question.title}</h2>
        </div>

        ${state.isFlipped ? renderAnswerPane(question) : `
          <div style="text-align: center; padding: 32px; color: var(--text-muted); font-size: var(--font-size-sm);">
            Press Space or click Reveal Answer to check knowledge
          </div>
        `}

        <div class="drill-controls">
          <button class="btn-secondary" id="btn-prev">Previous</button>
          <button class="btn-primary" id="btn-flip">
            ${state.isFlipped ? 'Hide Answer' : 'Reveal Answer'}
          </button>
          <button class="btn-secondary" id="btn-next">Next</button>
        </div>
      </div>
    </div>
  `;
}
