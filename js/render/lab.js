import { labItems, labPage } from "../data/lab.js?v=lab-intro-20260809a";
import { hostName } from "../utils/format.js";

let activeLabIndex = 0;
let labWheelDelta = 0;
let labPeekTimer;

function labWorkCard(work) {
  if (work.type === "video") {
    return `
      <article class="lab-work-card">
        <video controls preload="metadata" playsinline poster="${work.poster || ""}">
          <source src="${work.src}" type="video/mp4" />
        </video>
        <div class="lab-work-copy">
          <p class="lab-work-type">Video</p>
          <h4>${work.title}</h4>
        </div>
      </article>
    `;
  }

  if (work.type === "image") {
    return `
      <article class="lab-work-card">
        <img src="${work.src}" alt="${work.title}" />
        <div class="lab-work-copy">
          <p class="lab-work-type">Image</p>
          <h4>${work.title}</h4>
        </div>
      </article>
    `;
  }

  return `
    <a class="lab-work-card" href="${work.href}" target="_blank" rel="noreferrer">
      <span class="lab-work-cover">
        ${work.cover ? `<img src="${work.cover}" alt="" />` : `<span>Preview</span>`}
      </span>
      <span class="lab-work-copy">
        <span class="lab-work-type">${hostName(work.href)}</span>
        <strong>${work.title}</strong>
      </span>
    </a>
  `;
}

function labLogCard(log) {
  return `
    <article class="lab-log-card">
      <span>${log.date}</span>
      <h4>${log.title}</h4>
      <p>${log.detail}</p>
    </article>
  `;
}

function labPanel(item, index) {
  const works = item.works
    ? `<div class="lab-work-grid">${item.works.map(labWorkCard).join("")}</div>`
    : "";

  const logs = item.logs
    ? `<div class="lab-log-list">${item.logs.map(labLogCard).join("")}</div>`
    : "";

  return `
    <article class="lab-panel lab-panel-${index}">
      <div class="lab-panel-heading">
        <span class="lab-index">${String(index + 1).padStart(2, "0")}</span>
        ${item.meta ? `<p class="lab-meta">${item.meta}</p>` : ""}
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
      ${works}
      ${logs}
    </article>
  `;
}

function labPeekPanel(item, index, position) {
  if (!item) return "";
  const firstWork = item.works?.[0];
  const previewImage = firstWork?.poster || firstWork?.cover || firstWork?.src || "";

  return `
    <article class="lab-peek lab-peek-${position}" aria-hidden="true">
      ${previewImage ? `<img src="${previewImage}" alt="" />` : ""}
      <div>
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${item.title}</strong>
      </div>
    </article>
  `;
}

export function renderLab() {
  const container = document.querySelector("#lab-items");
  if (!container) return;

  const lineBreaks = (text) => text.replaceAll("\n", "<br />");
  const mediaButton = (work) => `
    <span class="lab-media-shell">
      ${
        work.video
          ? `<video class="lab-media" preload="metadata" playsinline poster="${work.media}">
              <source src="${work.video}" type="video/mp4" />
            </video>`
          : `<img class="lab-media" src="${work.media}" alt="" />`
      }
      <span class="${work.video ? "lab-play" : "lab-jump"}" aria-hidden="true"></span>
    </span>
  `;
  const featureCard = (work) => {
    const content = `
      ${mediaButton(work)}
      <span class="lab-feature-copy">
        <span class="lab-kind">${work.kind}</span>
        <strong>${lineBreaks(work.title)}</strong>
        <span>${lineBreaks(work.desc)}</span>
      </span>
    `;
    return work.href
      ? `<a class="lab-glass-card lab-feature-card" href="${work.href}" target="_blank" rel="noreferrer">${content}</a>`
      : `<article class="lab-glass-card lab-feature-card lab-video-card" tabindex="0">${content}</article>`;
  };
  const talkCard = (work) => `
    <a class="lab-glass-card lab-talk-card" href="${work.href}" target="_blank" rel="noreferrer">
      <span class="lab-talk-cover">
        <img src="${work.media}" alt="" />
        <span class="lab-jump lab-arrow" aria-hidden="true"></span>
      </span>
      <span class="lab-talk-copy">
        <span class="lab-kind">${work.kind}</span>
        <strong>${lineBreaks(work.title)}</strong>
        <span>${work.desc}</span>
      </span>
    </a>
  `;
  const aigcCard = (card) => `
    <article class="lab-glass-card lab-aigc-card">
      <img class="lab-aigc-ornament" src="${card.visual}" alt="" />
      <h4>${card.title}</h4>
      <p>${card.desc}</p>
      <img class="lab-aigc-photo" src="${card.image}" alt="" />
    </article>
  `;
  const sectionTitle = (section) => `
    <div class="lab-section-heading">
      <div>
        <h3>${section.heading}</h3>
        <span>${section.date}</span>
      </div>
      <p>${section.intro}</p>
    </div>
  `;

  container.innerHTML = `
    <div class="lab-scroll-page">
      <section class="lab-static-section lab-official-section">
        ${sectionTitle(labPage.official)}
        <div class="lab-feature-grid">
          ${labPage.official.works.map(featureCard).join("")}
        </div>
      </section>

      <section class="lab-static-section lab-talk-section">
        ${sectionTitle(labPage.talk)}
        <div class="lab-talk-grid">
          ${labPage.talk.works.map(talkCard).join("")}
        </div>
      </section>

      <section class="lab-static-section lab-aigc-section">
        ${sectionTitle(labPage.aigc)}
        <div class="lab-aigc-grid">
          ${labPage.aigc.cards.map(aigcCard).join("")}
          <article class="lab-glass-card lab-aigc-banner">
            <img src="${labPage.aigc.banner}" alt="" />
          </article>
        </div>
      </section>
    </div>
  `;

  container.querySelectorAll(".lab-video-card").forEach((card) => {
    const video = card.querySelector("video");
    if (!video) return;
    const play = () => {
      video.controls = true;
      card.classList.add("is-playing");
      video.play();
    };
    card.addEventListener("click", play);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        play();
      }
    });
  });
}

export function setActiveLab(index) {
  const nextIndex = Math.max(0, Math.min(labItems.length - 1, index));
  if (nextIndex === activeLabIndex) return;
  activeLabIndex = nextIndex;
  labWheelDelta = 0;
  window.clearTimeout(labPeekTimer);
  renderLab();
}
