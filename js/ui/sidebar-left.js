import { state } from "../core/state.js";
import { getBookmarks, getMastered } from "../core/storage.js";

function renderProgressCard(totalCount, masteredCount) {
  const percentage = totalCount > 0 ? Math.round((masteredCount / totalCount) * 100) : 0;
  return `
    <div class="track-progress-card">
      <div class="progress-header">
        <span>Progress</span>
        <span>${masteredCount} of ${totalCount} mastered (${percentage}%)</span>
      </div>
      <div class="progress-bar-container" role="progressbar" aria-valuenow="${percentage}" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar-fill" style="width: ${percentage}%;"></div>
      </div>
    </div>
  `;
}

function groupQuestionsByCategory(questions) {
  const groups = new Map();
  questions.forEach(question => {
    const categoryName = question.categoryLabel || "General";
    if (!groups.has(categoryName)) {
      groups.set(categoryName, []);
    }
    groups.get(categoryName).push(question);
  });
  return groups;
}

function renderQuestionItem(question, isCurrent, isBookmarked, isMastered) {
  return `
    <button class="question-nav-btn ${isCurrent ? 'active' : ''}" data-id="${question.id}">
      <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
        ${question.order ? `${question.order}. ` : ''}${question.title}
      </span>
      <div class="status-badge-group">
        ${isMastered ? '<span class="status-badge-mastered">✓</span>' : ''}
        ${isBookmarked ? '<span class="status-badge-bookmark">★</span>' : ''}
      </div>
    </button>
  `;
}

function renderCategoryGroups(questions, currentId, bookmarks, mastered) {
  const groups = groupQuestionsByCategory(questions);
  let html = "";

  groups.forEach((categoryQuestions, categoryTitle) => {
    html += `<div class="category-group-title">${categoryTitle}</div><div class="question-list">`;
    categoryQuestions.forEach(question => {
      const isCurrent = question.id === currentId;
      const isBookmarked = bookmarks.includes(question.id);
      const isMastered = mastered.includes(question.id);
      html += renderQuestionItem(question, isCurrent, isBookmarked, isMastered);
    });
    html += `</div>`;
  });

  return html;
}

export function renderLeftSidebar(container) {
  if (!container) return;

  const current = state.filteredQuestions[state.currentIndex];
  const currentId = current ? current.id : null;
  const bookmarks = getBookmarks();
  const mastered = getMastered();

  const totalCount = state.filteredQuestions.length;
  const masteredCount = state.filteredQuestions.filter(q => mastered.includes(q.id)).length;

  container.innerHTML = `
    ${renderProgressCard(totalCount, masteredCount)}
    <input 
      type="search" 
      id="sidebar-search-input" 
      class="search-input" 
      placeholder="Filter questions..." 
      value="${state.searchQuery}"
      aria-label="Filter questions"
    >
    <nav style="display: flex; flex-direction: column; gap: 8px;">
      ${renderCategoryGroups(state.filteredQuestions, currentId, bookmarks, mastered)}
    </nav>
  `;
}
