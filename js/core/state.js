import { ALL_QUESTIONS } from "../data/questions-manifest.js";

/**
 * Multi-Track Application State Container
 */
export const state = {
  allQuestions: ALL_QUESTIONS,
  filteredQuestions: [],
  activeTrack: "cybersecurity",
  activeLevel: "intern",
  activeCategory: "all",
  searchQuery: "",
  currentIndex: 0,
  viewMode: "flashcards",
  isFlipped: false
};

export function setTrack(trackId) {
  state.activeTrack = trackId;
  state.activeCategory = "all";
  state.currentIndex = 0;
  state.isFlipped = false;
  applyFilters();
}

export function setLevel(levelId) {
  state.activeLevel = levelId;
  state.activeCategory = "all";
  state.currentIndex = 0;
  state.isFlipped = false;
  applyFilters();
}

export function setViewMode(mode) {
  state.viewMode = mode;
  state.isFlipped = false;
}

export function setActiveCategory(categoryId) {
  state.activeCategory = categoryId;
  state.currentIndex = 0;
  state.isFlipped = false;
  applyFilters();
}

export function setSearchQuery(query) {
  state.searchQuery = query.toLowerCase().trim();
  state.currentIndex = 0;
  applyFilters();
}

function matchesSearch(question, query) {
  if (!query) return true;
  const inTitle = question.title.toLowerCase().includes(query);
  const inSummary = question.summaryAnswer.toLowerCase().includes(query);
  const inTags = question.tags.some(tag => tag.toLowerCase().includes(query));
  return inTitle || inSummary || inTags;
}

export function applyFilters() {
  state.filteredQuestions = state.allQuestions.filter(question => {
    const matchesTrack = question.track === state.activeTrack;
    const matchesLevel = question.level === state.activeLevel;
    const matchesCategory = state.activeCategory === "all" || question.category === state.activeCategory;

    if (!matchesTrack || !matchesLevel || !matchesCategory) {
      return false;
    }

    return matchesSearch(question, state.searchQuery);
  });

  if (state.currentIndex >= state.filteredQuestions.length) {
    state.currentIndex = Math.max(0, state.filteredQuestions.length - 1);
  }
}

export function getCurrentQuestion() {
  if (state.filteredQuestions.length === 0) return null;
  return state.filteredQuestions[state.currentIndex];
}

export function nextQuestion() {
  if (state.filteredQuestions.length <= 1) return;
  state.currentIndex = (state.currentIndex + 1) % state.filteredQuestions.length;
  state.isFlipped = false;
}

export function previousQuestion() {
  if (state.filteredQuestions.length <= 1) return;
  state.currentIndex = (state.currentIndex - 1 + state.filteredQuestions.length) % state.filteredQuestions.length;
  state.isFlipped = false;
}

export function toggleCardFlip() {
  state.isFlipped = !state.isFlipped;
}
