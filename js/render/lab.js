import { labPage } from "../data/lab.js";

export function renderLab() {
  const container = document.querySelector("#lab-items");
  if (!container) return;

  const escape = (text) =>
    String(text)
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");
  const externalArrow = `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false"><path d="M4 16 16 4M5 4h11v11" stroke="currentColor" stroke-width="1.3"/></svg>`;
  const mediaButton = (work) => `
    <span class="lab-media-shell">
      ${
        work.video
          ? `<video class="lab-media" preload="none" playsinline aria-label="${escape(work.title)}" poster="${work.media}"><source src="${work.video}" type="video/mp4" /></video>`
          : `<img class="lab-media" loading="lazy" decoding="async" src="${work.media}" alt="${escape(work.title)}" />`
      }
      <span class="${work.video ? "lab-play" : "lab-jump"}" aria-hidden="true">${work.video ? "" : externalArrow}</span>
    </span>`;
  const featureCard = (work, index) => {
    const content = `
      ${mediaButton(work)}
      <span class="lab-feature-copy">
        <span class="lab-caption-meta"><span>${escape(work.credit)}</span><span>0${index + 1}</span></span>
        <strong>${escape(work.title)}</strong>
        <span class="lab-description">${escape(work.desc)}</span>
        <span class="lab-work-action">${work.video ? "PLAY FILM" : "VIEW PROJECT"}${externalArrow}</span>
      </span>`;
    return work.href
      ? `<a class="lab-feature-card" href="${work.href}" target="_blank" rel="noreferrer">${content}</a>`
      : `<article class="lab-feature-card lab-video-card" tabindex="0" aria-label="Play ${escape(work.title)}">${content}</article>`;
  };
  const talkCard = (work, index) => `
    <a class="lab-talk-card" href="${work.href}" target="_blank" rel="noreferrer">
      <span class="lab-talk-cover"><img loading="lazy" decoding="async" src="${work.media}" alt="${escape(work.title)}" /></span>
      <span class="lab-talk-copy">
        <span class="lab-kind">EDITING STUDY / 0${index + 1}</span>
        <strong>${escape(work.title)}</strong>
        <span class="lab-description">${escape(work.desc)}</span>
        <span class="lab-work-action">WATCH FILM${externalArrow}</span>
      </span>
    </a>`;
  const aigcCard = (card, index) => `
    <figure class="lab-aigc-card">
      <img loading="lazy" decoding="async" class="lab-aigc-photo" src="${card.image}" alt="${escape(card.title)}展览现场" />
      <figcaption>
        <span class="lab-kind">EXHIBITION / 0${index + 1}</span>
        <h4>${escape(card.title)}</h4>
        <p class="lab-description">${escape(card.desc)}</p>
      </figcaption>
    </figure>`;
  const sectionTitle = (section) => `
    <header class="lab-section-heading">
      <span class="lab-section-index">CHAPTER ${section.index}</span>
      <h2>${escape(section.heading)}</h2>
      <span class="lab-section-date">${escape(section.date)}</span>
      <p>${escape(section.intro)}</p>
    </header>`;

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
        </div>
      </section>
    </div>
  `;

  container.querySelectorAll(".lab-video-card").forEach((card) => {
    const video = card.querySelector("video");
    if (!video) return;
    const play = (event) => {
      if (event.target === video && video.controls) return;
      video.controls = true;
      card.classList.add("is-playing");
      video.play().catch(() => {
        card.classList.remove("is-playing");
      });
    };
    card.addEventListener("click", play);
    card.addEventListener("keydown", (event) => {
      if (event.target === video && video.controls) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        play(event);
      }
    });
  });
}
