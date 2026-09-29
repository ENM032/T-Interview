/**
 * Storage Utility for T-Interview.
 * Manages user bookmarks, mastered questions, and preferences.
 */

const STORAGE_KEYS = {
  BOOKMARKS: "t_interview_bookmarks",
  MASTERED: "t_interview_mastered",
  THEME: "t_interview_theme",
  ACTIVE_CATEGORY: "t_interview_active_category"
};

export function getBookmarks() {
  const saved = localStorage.getItem(STORAGE_KEYS.BOOKMARKS);
  return saved ? JSON.parse(saved) : [];
}

export function toggleBookmark(questionId) {
  const bookmarks = getBookmarks();
  const exists = bookmarks.includes(questionId);
  const updated = exists
    ? bookmarks.filter(id => id !== questionId)
    : [...bookmarks, questionId];
  
  localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
  return !exists;
}

export function getMastered() {
  const saved = localStorage.getItem(STORAGE_KEYS.MASTERED);
  return saved ? JSON.parse(saved) : [];
}

export function toggleMastered(questionId) {
  const mastered = getMastered();
  const exists = mastered.includes(questionId);
  const updated = exists
    ? mastered.filter(id => id !== questionId)
    : [...mastered, questionId];

  localStorage.setItem(STORAGE_KEYS.MASTERED, JSON.stringify(updated));
  return !exists;
}

export function getTheme() {
  return localStorage.getItem(STORAGE_KEYS.THEME) || "dark";
}

export function saveTheme(theme) {
  localStorage.setItem(STORAGE_KEYS.THEME, theme);
}
