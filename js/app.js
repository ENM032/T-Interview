import {
  state,
  setTrack,
  setLevel,
  setViewMode,
  setActiveCategory,
  setSearchQuery,
  nextQuestion,
  previousQuestion,
  toggleCardFlip,
  getCurrentQuestion,
  applyFilters
} from "./core/state.js";
import { TRACKS, getCategoriesForTrack } from "./data/questions-manifest.js";
import { renderFlashcardView } from "./ui/flashcard-view.js";
import { renderReadingView } from "./ui/reading-view.js";
import { getTheme, saveTheme, toggleBookmark, toggleMastered } from "./core/storage.js";

const mainContent = document.getElementById("main-content");
const filterContainer = document.getElementById("category-filter-bar");
const searchInput = document.getElementById("search-input");
const trackSelect = document.getElementById("track-select");
const levelSelect = document.getElementById("level-select");
const brandBadge = document.getElementById("brand-track-badge");
const themeToggleBtn = document.getElementById("theme-toggle");

function renderCategories() {
  if (!filterContainer) return;
  const categories = getCategoriesForTrack(state.activeTrack, state.activeLevel);
  filterContainer.innerHTML = categories.map(cat => `
    <button class="category-chip ${state.activeCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
      ${cat.label}
    </button>
  `).join("");
}

function updateBrandBadge() {
  if (!brandBadge) return;
  const trackObj = TRACKS.find(t => t.id === state.activeTrack);
  const trackLabel = trackObj ? trackObj.label : state.activeTrack;
  brandBadge.textContent = `${trackLabel} · ${state.activeLevel.toUpperCase()}`;
}

function renderActiveView() {
  updateBrandBadge();
  if (state.viewMode === "flashcards") {
    renderFlashcardView(mainContent);
  } else if (state.viewMode === "reading") {
    renderReadingView(mainContent);
  }
}

function handleTrackChange(event) {
  const selectedTrack = event.target.value;
  setTrack(selectedTrack);
  renderCategories();
  renderActiveView();
}

function handleLevelChange(event) {
  const selectedLevel = event.target.value;
  setLevel(selectedLevel);
  renderCategories();
  renderActiveView();
}

function handleCategoryClick(event) {
  const target = event.target.closest(".category-chip");
  if (!target) return;
  const categoryId = target.getAttribute("data-category");
  setActiveCategory(categoryId);
  renderCategories();
  renderActiveView();
}

function handleModeSwitch(event) {
  const button = event.target.closest(".mode-button");
  if (!button) return;
  const mode = button.getAttribute("data-mode");

  document.querySelectorAll(".mode-button").forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");

  setViewMode(mode);
  renderActiveView();
}

function handleSearch(event) {
  setSearchQuery(event.target.value);
  renderActiveView();
}

function handleActionClick(event) {
  const current = getCurrentQuestion();
  if (!current) return;

  if (event.target.closest("#btn-flip") || event.target.closest("#flashcard-trigger")) {
    toggleCardFlip();
    renderActiveView();
  } else if (event.target.closest("#btn-next")) {
    nextQuestion();
    renderActiveView();
  } else if (event.target.closest("#btn-prev")) {
    previousQuestion();
    renderActiveView();
  } else if (event.target.closest("#btn-bookmark") || event.target.closest("#read-bookmark-btn")) {
    toggleBookmark(current.id);
    renderActiveView();
  } else if (event.target.closest("#btn-mastered") || event.target.closest("#read-master-btn")) {
    toggleMastered(current.id);
    renderActiveView();
  } else if (event.target.closest(".question-nav-item")) {
    const item = event.target.closest(".question-nav-item");
    state.currentIndex = parseInt(item.getAttribute("data-index"), 10);
    renderActiveView();
  }
}

function handleKeyboard(event) {
  if (event.target.tagName === "INPUT" || event.target.tagName === "SELECT") return;

  if (event.key === "ArrowRight") {
    nextQuestion();
    renderActiveView();
  } else if (event.key === "ArrowLeft") {
    previousQuestion();
    renderActiveView();
  } else if (event.key === " " || event.key === "Enter") {
    if (state.viewMode === "flashcards") {
      event.preventDefault();
      toggleCardFlip();
      renderActiveView();
    }
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
  if (filterContainer) filterContainer.addEventListener("click", handleCategoryClick);
  if (searchInput) searchInput.addEventListener("input", handleSearch);
  if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleTheme);
  document.querySelectorAll(".mode-button").forEach(btn => btn.addEventListener("click", handleModeSwitch));
  if (mainContent) mainContent.addEventListener("click", handleActionClick);
  window.addEventListener("keydown", handleKeyboard);
}

export function initApp() {
  initTheme();
  applyFilters();
  renderCategories();
  renderActiveView();
  initEventListeners();
}

document.addEventListener("DOMContentLoaded", initApp);
