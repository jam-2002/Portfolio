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
  const playIcon = `<svg viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false"><path d="M5 3.5 16 10 5 16.5Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/></svg>`;
  const mediaButton = (work) => `
    <span class="lab-media-shell">
      ${
        work.video
          ? `<video class="lab-media" preload="none" playsinline aria-label="${escape(work.title)}" poster="${work.media}"><source src="${work.video}" type="video/mp4" /></video>`
          : `<img class="lab-media" loading="lazy" decoding="async" src="${work.media}" alt="${escape(work.title)}" />`
      }
      <span class="${work.video ? "lab-play" : "lab-jump"}" aria-hidden="true">${work.video ? playIcon : externalArrow}</span>
    </span>`;
  const featureCard = (work) => {
    const content = `
      ${mediaButton(work)}
      <span class="lab-feature-copy">
        <span class="lab-caption-meta"><span>${escape(work.credit)}</span></span>
        <strong>${escape(work.title)}</strong>
        <span class="lab-description">${escape(work.desc)}</span>
      </span>`;
    return work.href
      ? `<a class="lab-feature-card" href="${work.href}" target="_blank" rel="noreferrer">${content}</a>`
      : `<article class="lab-feature-card lab-video-card" tabindex="0" aria-label="Play ${escape(work.title)}">${content}</article>`;
  };
  const talkCard = (work) => `
    <a class="lab-talk-card" href="${work.href}" target="_blank" rel="noreferrer">
      <span class="lab-talk-cover"><span class="lab-jump" aria-hidden="true">${externalArrow}</span><img loading="lazy" decoding="async" src="${work.media}" alt="${escape(work.title)}" /></span>
      <span class="lab-talk-copy">
        <strong>${escape(work.title)}</strong>
        <span class="lab-description">${escape(work.desc)}</span>
      </span>
    </a>`;
  const appCard = (work) => `
    <figure class="lab-app-card">
      <button class="lab-app-preview" data-image="${work.media}" data-title="${escape(work.title)}" aria-label="放大 ${escape(work.title)}">
        <img loading="lazy" decoding="async" src="${work.media}" alt="${escape(work.title)} APP 设计" />
      </button>
      <figcaption>${escape(work.title)}</figcaption>
    </figure>`;
  const sectionTitle = (section) => `
    <header class="lab-section-heading">
      <span class="lab-section-index">CHAPTER ${section.index}</span>
      <h2>${escape(section.heading)}</h2>
      <span class="lab-section-date">${escape(section.date)}</span>
      ${section.intro ? `<p>${escape(section.intro)}</p>` : ""}
    </header>`;

  container.innerHTML = `
    <div class="lab-scroll-page">
      <section class="lab-static-section lab-apps-section">
        ${sectionTitle(labPage.apps)}
        <div class="lab-app-grid">${labPage.apps.works.map(appCard).join("")}</div>
      </section>
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


    </div>
    <dialog class="lab-image-dialog" aria-label="APP 设计大图">
      <button class="lab-image-close" autofocus aria-label="关闭大图">CLOSE ×</button>
      <img alt="" />
    </dialog>
  `;
  const dialog = container.querySelector(".lab-image-dialog");
  container.querySelectorAll(".lab-app-preview").forEach((button) => {
    button.addEventListener("click", () => {
      const image = dialog.querySelector("img");
      image.src = button.dataset.image;
      image.alt = button.dataset.title;
      dialog.showModal();
    });
  });
  dialog
    .querySelector("button")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

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
