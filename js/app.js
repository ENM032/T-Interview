import {
  state,
  setTrack,
  setLevel,
  setViewMode,
  setSearchQuery,
  nextQuestion,
  previousQuestion,
  toggleCardFlip,
  getCurrentQuestion,
  applyFilters
} from "./core/state.js";
import { renderLeftSidebar } from "./ui/sidebar-left.js";
import { renderRightSidebar } from "./ui/sidebar-right.js";
import { renderReadingView } from "./ui/reading-view.js";
import { renderFlashcardView } from "./ui/flashcard-view.js";
import { getTheme, saveTheme, toggleBookmark, toggleMastered } from "./core/storage.js";

const leftSidebarContainer = document.getElementById("sidebar-left");
const centerContentContainer = document.getElementById("main-content");
const rightSidebarContainer = document.getElementById("sidebar-right");
const trackSelect = document.getElementById("track-select");
const levelSelect = document.getElementById("level-select");
const themeToggleBtn = document.getElementById("theme-toggle");

function renderApp() {
  renderLeftSidebar(leftSidebarContainer);
  renderRightSidebar(rightSidebarContainer);

  if (state.viewMode === "flashcards") {
    renderFlashcardView(centerContentContainer);
  } else {
    renderReadingView(centerContentContainer);
  }
}

function handleTrackChange(event) {
  setTrack(event.target.value);
  renderApp();
}

function handleLevelChange(event) {
  setLevel(event.target.value);
  renderApp();
}

function handleSearch(event) {
  setSearchQuery(event.target.value);
  renderApp();
}

function handleModeChange(mode) {
  setViewMode(mode);
  renderApp();
}

function handleQuestionSelect(questionId) {
  const index = state.filteredQuestions.findIndex(q => q.id === questionId);
  if (index !== -1) {
    state.currentIndex = index;
    state.isFlipped = false;
    renderApp();
  }
}

function handleActionClick(event) {
  const current = getCurrentQuestion();
  if (!current) return;

  if (event.target.closest("#btn-flip")) {
    toggleCardFlip();
    renderApp();
  } else if (event.target.closest("#btn-next") || event.target.closest("#btn-next-question")) {
    nextQuestion();
    renderApp();
  } else if (event.target.closest("#btn-prev") || event.target.closest("#btn-prev-question")) {
    previousQuestion();
    renderApp();
  } else if (event.target.closest("#btn-bookmark") || event.target.closest("#read-bookmark-btn")) {
    toggleBookmark(current.id);
    renderApp();
  } else if (event.target.closest("#btn-mastered") || event.target.closest("#read-master-btn")) {
    toggleMastered(current.id);
    renderApp();
  }
}

function handleSidebarClick(event) {
  const navBtn = event.target.closest(".question-nav-btn");
  if (navBtn) {
    const questionId = navBtn.getAttribute("data-id");
    handleQuestionSelect(questionId);
  }
}

function handleRightSidebarClick(event) {
  const modeBtn = event.target.closest("[data-mode]");
  if (modeBtn) {
    handleModeChange(modeBtn.getAttribute("data-mode"));
  }
}

function handleKeyboard(event) {
  if (event.target.tagName === "INPUT" || event.target.tagName === "SELECT") return;

  const current = getCurrentQuestion();
  if (event.key === "ArrowRight") {
    nextQuestion();
    renderApp();
  } else if (event.key === "ArrowLeft") {
    previousQuestion();
    renderApp();
  } else if (event.key === " " && state.viewMode === "flashcards") {
    event.preventDefault();
    toggleCardFlip();
    renderApp();
  } else if ((event.key === "b" || event.key === "B") && current) {
    toggleBookmark(current.id);
    renderApp();
  } else if ((event.key === "m" || event.key === "M") && current) {
    toggleMastered(current.id);
    renderApp();
  }
}

function initTheme() {
  const currentTheme = getTheme();
  document.documentElement.setAttribute("data-theme", currentTheme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const nextTheme = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", nextTheme);
  saveTheme(nextTheme);
}

function initEventListeners() {
  if (trackSelect) trackSelect.addEventListener("change", handleTrackChange);
  if (levelSelect) levelSelect.addEventListener("change", handleLevelChange);
  if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleTheme);

  if (leftSidebarContainer) {
    leftSidebarContainer.addEventListener("input", event => {
      if (event.target.id === "sidebar-search-input") handleSearch(event);
    });
    leftSidebarContainer.addEventListener("click", handleSidebarClick);
  }

  if (centerContentContainer) centerContentContainer.addEventListener("click", handleActionClick);
  if (rightSidebarContainer) rightSidebarContainer.addEventListener("click", handleRightSidebarClick);

  window.addEventListener("keydown", handleKeyboard);
}

export function initApp() {
  initTheme();
  applyFilters();
  renderApp();
  initEventListeners();
}

document.addEventListener("DOMContentLoaded", initApp);
