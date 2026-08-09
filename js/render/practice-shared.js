import { formatMultiline } from "../utils/format.js";
import { iconSvg } from "../utils/icons.js";

export function practiceBranchCard(branch) {
  const isActive = branch.status === "active";
  const href = branch.href || "#practice-dental";
  if (branch.cardImage) {
    return `
      <a class="practice-branch-card practice-branch-artwork ${isActive ? "is-active" : "is-inactive"}" href="${href}">
        <img src="${branch.cardImage}" alt="${branch.number} ${branch.title} ${branch.subtitle}" />
        <span class="practice-branch-artwork-copy" aria-hidden="true">
          <strong>${branch.title}</strong>
          <span>${branch.subtitle}</span>
        </span>
      </a>
    `;
  }

  const content = `
    <span class="practice-branch-number">${branch.number}</span>
    <span class="practice-branch-copy">
      <strong>${branch.title}</strong>
      <span>${branch.subtitle}</span>
    </span>
    ${
      branch.image
        ? `<img class="practice-branch-image" src="${branch.image}" alt="" />`
        : ""
    }
    ${isActive ? `<span class="practice-branch-check">${iconSvg("circle-check-big")}</span>` : ""}
  `;

  return isActive
    ? `<a class="practice-branch-card is-active" href="${href}">${content}</a>`
    : `<a class="practice-branch-card is-inactive" href="${href}">${content}</a>`;
}

export function practiceInfoItem(item) {
  return `
    <div class="practice-info-item">
      <span>${iconSvg(item.icon)}</span>
      <div>
        <strong>${item.label}</strong>
        <p>${item.value}</p>
      </div>
    </div>
  `;
}

export function practiceSectionHeader(section) {
  return `
    <header class="practice-section-header">
      <span>${section.number}</span>
      <h2>${section.title}</h2>
    </header>
  `;
}

export function practiceAnalysisSection(section) {
  const body = section.body;
  return `
    <section class="practice-stage practice-stage-analysis">
      ${practiceSectionHeader(section)}
      <div class="practice-stage-panel practice-analysis-layout">
        <div class="practice-analysis-copy">
          <h3>${body.label}</h3>
          <p>${formatMultiline(body.text)}</p>
          <div class="practice-scenario">
            ${iconSvg("map-pin-check")}
            <strong>使用场景：</strong>
            <span>${body.scenario}</span>
          </div>
        </div>
        <div class="practice-need-grid">
          ${body.cards
            .map(
              (card) => `
                <article class="practice-need-card">
                  <img class="${card.imageClass || ""}" src="${card.icon}" alt="" />
                  <h4>${card.title}</h4>
                  <p>${card.desc}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

export function practiceNumberedList(items) {
  return `
    <div class="practice-numbered-list">
      ${items
        .map(
          ([title, text], index) => `
            <div class="practice-numbered-item">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <div>
                <h4>${title}</h4>
                <p>${text}</p>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

export function practiceDefinitionSection(section) {
  const { hardware, software } = section.body;
  return `
    <section class="practice-stage practice-stage-definition">
      ${practiceSectionHeader(section)}
      <div class="practice-stage-panel practice-definition-layout">
        <article class="practice-inner-card practice-hardware-card">
          <header>
            ${iconSvg("check-line")}
            <h3>${hardware.title}</h3>
          </header>
          <p class="practice-card-target">${hardware.target}</p>
          <div class="practice-hardware-body">
            ${practiceNumberedList(hardware.items)}
            <figure class="practice-hardware-figure ${hardware.imageHasLabels ? "is-annotated" : ""}">
              <img src="${hardware.image}" alt="" />
              ${
                hardware.imageHasLabels
                  ? ""
                  : `<figcaption>
                      <span>电子屏</span>
                      <span>手持设备</span>
                    </figcaption>`
              }
            </figure>
          </div>
        </article>
        <article class="practice-inner-card practice-software-card">
          <header>
            ${iconSvg("check-line")}
            <h3>${software.title}</h3>
          </header>
          <p class="practice-card-target">${software.target}</p>
          ${
            software.highlight
              ? `<div class="practice-software-highlight">
                  ${iconSvg("square-star")}
                  <p>${formatMultiline(software.highlight)}</p>
                </div>`
              : ""
          }
          <div class="practice-software-body">
            ${practiceNumberedList(software.items)}
            <figure class="practice-software-figure">
              <img src="${software.image}" alt="" />
            </figure>
          </div>
        </article>
      </div>
    </section>
  `;
}

export function practiceFlow(items, variant = "") {
  return `
    <div class="practice-flow ${variant}">
      ${items
        .map(
          (item) => `
            <div class="practice-flow-item">
              <img src="${item.icon}" alt="" />
              <h4>${formatMultiline(item.title)}</h4>
              ${item.desc ? `<p>${item.desc}</p>` : ""}
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

export function practiceDesignCard(card) {
  if (card.iconBlocks) {
    return `
      <article class="practice-inner-card practice-design-card practice-prototype-card">
        <h3>${card.title}</h3>
        ${card.iconBlocks
          .map(
            (block) => `
              <div class="practice-icon-text">
                ${iconSvg(block.icon)}
                <strong>${block.label}</strong>
                <p>${block.text}</p>
              </div>
            `
          )
          .join("")}
        <p class="practice-design-note">${card.note}</p>
      </article>
    `;
  }

  return `
    <article class="practice-inner-card practice-design-card ${card.metrics ? "practice-metrics-card" : ""} ${card.detail ? "has-split-text" : ""}">
      <h3>${card.title}</h3>
      ${
        card.detail
          ? `<p class="practice-design-lead">${card.lead}</p><p class="practice-design-detail">${card.detail}</p>`
          : `<p>${formatMultiline(card.text)}</p>`
      }
      ${
        card.metrics
          ? `<div class="practice-metrics-list">${card.metrics.map((item) => `<span>${item}</span>`).join("")}</div>`
          : ""
      }
    </article>
  `;
}

export function practiceDesignSection(section) {
  const body = section.body;
  return `
    <section class="practice-stage practice-stage-design">
      ${practiceSectionHeader(section)}
      <div class="practice-stage-panel practice-design-layout">
        <article class="practice-inner-card practice-flow-card">
          <h3>${body.flowTitle}</h3>
          <p>${body.flowDesc}</p>
          ${practiceFlow(body.flow, "practice-product-flow")}
        </article>
        <div class="practice-design-grid">
          ${body.cards.map(practiceDesignCard).join("")}
        </div>
      </div>
    </section>
  `;
}

export function practiceLaunchSection(section) {
  const body = section.body;
  return `
    <section class="practice-stage practice-stage-launch">
      ${practiceSectionHeader(section)}
      <div class="practice-stage-panel practice-launch-layout">
        <article class="practice-inner-card practice-flow-card practice-launch-flow-card">
          <h3>${body.flowTitle}</h3>
          ${practiceFlow(body.flow, "practice-launch-flow")}
        </article>
        <article class="practice-inner-card practice-maintenance-card">
          <h3>${body.maintenanceTitle}</h3>
          <p>${body.maintenanceDesc}</p>
          <div class="practice-table-line">${body.tableHead}</div>
        </article>
      </div>
    </section>
  `;
}

export function practiceStage(section) {
  if (section.kind === "analysis") return practiceAnalysisSection(section);
  if (section.kind === "definition") return practiceDefinitionSection(section);
  if (section.kind === "design") return practiceDesignSection(section);
  return practiceLaunchSection(section);
}
