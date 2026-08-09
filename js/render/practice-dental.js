import { practiceDentalCase } from "../data/practice-dental.js?v=definition-figma04-20260731l";
import { practiceEducationCase } from "../data/practice-education.js?v=practice-education-frame276-20260809e";
import { formatMultiline } from "../utils/format.js";
import { bindPracticeEducationInteractions, renderPracticeEducation } from "./practice-education.js?v=practice-education-frame276-20260809e";
import { practiceBranchCard, practiceInfoItem, practiceStage } from "./practice-shared.js";

function currentPracticeCase() {
  return window.location.hash.replace("#", "") === "practice-education"
    ? practiceEducationCase
    : practiceDentalCase;
}

let activePracticeVariant = "";
let practiceTransitionTimer = 0;

function setPracticeShellVariant(shell, variant) {
  if (!shell) return;
  shell.classList.toggle("is-education", variant === "education");
  shell.classList.toggle("is-dental", variant !== "education");
}

function renderPracticeDentalContent(container, practiceCase) {
  if (practiceCase.variant === "education") {
    container.innerHTML = renderPracticeEducation(practiceCase);
    bindPracticeEducationInteractions(container);
    return;
  }

  container.innerHTML = `
    <section class="practice-case-hero">
      <p class="practice-case-title">${practiceCase.title}</p>
      <div class="practice-branch-row">
        ${practiceCase.branches.map(practiceBranchCard).join("")}
      </div>
      <div class="practice-hero-grid">
        <div class="practice-hero-copy">
          <h1><span>${practiceCase.hero.titleLead}</span> ${practiceCase.hero.title}</h1>
          <p>${practiceCase.hero.descriptionHtml || formatMultiline(practiceCase.hero.description)}</p>
          <div class="practice-tag-row">
            ${practiceCase.hero.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </div>
        <figure class="practice-product-visual">
          <img class="practice-product-main" src="${practiceCase.hero.productImage}" alt="" />
          <img class="practice-product-small" src="${practiceCase.hero.productImageAlt}" alt="" />
        </figure>
        <aside class="practice-info-card">
          ${practiceCase.hero.info.map(practiceInfoItem).join("")}
        </aside>
      </div>
    </section>

    <div class="practice-stage-stack">
      ${practiceCase.sections.map(practiceStage).join("")}
    </div>
  `;
}

export function renderPracticeDental() {
  const container = document.querySelector("#practice-dental-root");
  if (!container) return;
  const practiceCase = currentPracticeCase();
  const shell = document.querySelector("#practice-dental");
  const nextVariant = practiceCase.variant || "dental";
  const shouldTransition =
    activePracticeVariant &&
    activePracticeVariant !== nextVariant &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.clearTimeout(practiceTransitionTimer);

  const mount = () => {
    setPracticeShellVariant(shell, nextVariant);
    renderPracticeDentalContent(container, practiceCase);
    container.dataset.practiceVariant = nextVariant;
    activePracticeVariant = nextVariant;
    container.classList.remove("is-switching-out");
    container.classList.add("is-switching-in");
    window.setTimeout(() => container.classList.remove("is-switching-in"), 620);
  };

  if (shouldTransition) {
    container.classList.remove("is-switching-in");
    container.classList.add("is-switching-out");
    practiceTransitionTimer = window.setTimeout(mount, 220);
    return;
  }

  mount();
}
