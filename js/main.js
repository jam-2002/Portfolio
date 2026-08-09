import { projects } from "./data/projects.js";
import { renderLab } from "./render/lab.js?v=lab-intro-20260809a";
import { renderPracticeDental } from "./render/practice-dental.js?v=practice-education-frame276-20260809e";
import { renderCreationPlatform } from "./render/creation-platform.js?v=creation-platform-20260731a";
import {
  renderDigitalArt,
  setDigitalArtActive,
} from "./render/digital-art.js?v=digital-art-spacing-arrow-20260804k";
import { projectCard } from "./render/projects.js";

let labHeaderFrame;

const viewIds = ["home", "practice-dental", "practice-education", "research", "art", "lab"];

function getCurrentView() {
  const hash = window.location.hash.replace("#", "");
  if (hash === "practice") return "practice-dental";
  return viewIds.includes(hash) ? hash : "home";
}

function setActiveView(viewId = getCurrentView()) {
  const isPracticeCase = viewId === "practice-dental" || viewId === "practice-education";
  const activeViewId = isPracticeCase ? "practice-dental" : viewId;
  const navView = isPracticeCase ? "practice" : viewId;

  document.querySelectorAll("[data-view]").forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === activeViewId);
  });

  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.dataset.nav === navView) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  document.body.dataset.currentView = viewId;
  setDigitalArtActive(viewId === "art");
  if (isPracticeCase) renderPracticeDental();
  window.scrollTo({ top: 0, behavior: "auto" });
  window.requestAnimationFrame(syncPinnedHeaders);
}

function syncPinnedHeader(selector, viewId) {
  const header = document.querySelector(selector);
  if (!header) return;

  const currentView = document.body.dataset.currentView;
  const targetViews = Array.isArray(viewId) ? viewId : [viewId];
  if (!targetViews.includes(currentView)) {
    header.classList.remove("is-pinned");
    return;
  }

  const topOffset = parseFloat(getComputedStyle(header).top) || 0;
  const isPinned = header.getBoundingClientRect().top <= topOffset + 0.5;
  header.classList.toggle("is-pinned", isPinned);
}

function syncPinnedHeaders() {
  syncPinnedHeader("#lab .module-header", "lab");
  syncPinnedHeader("#practice-dental .practice-case-nav", ["practice-dental", "practice-education"]);
  syncPinnedHeader("#research .creation-platform-nav", "research");
  syncPinnedHeader("#art .digital-art-nav", "art");
}

function scheduleHeaderPinSync() {
  if (labHeaderFrame) return;
  labHeaderFrame = window.requestAnimationFrame(() => {
    labHeaderFrame = 0;
    syncPinnedHeaders();
  });
}

function render() {
  const groups = {
    practice: document.querySelector("#practice-projects"),
  };

  Object.entries(groups).forEach(([module, container]) => {
    container.innerHTML = projects
      .filter((project) => project.module === module)
      .map(projectCard)
      .join("");
  });

  renderLab();
  renderPracticeDental();
  renderCreationPlatform();
  renderDigitalArt();
  setActiveView();
}

render();
window.addEventListener("hashchange", () => setActiveView());
window.addEventListener("scroll", scheduleHeaderPinSync, { passive: true });
window.addEventListener("resize", scheduleHeaderPinSync);
