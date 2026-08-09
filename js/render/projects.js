export function projectCard(project) {
  const style = [
    `--project-bg: ${project.theme.bg}`,
    `--project-ink: ${project.theme.ink}`,
    `--project-accent: ${project.theme.accent}`,
    `--project-metric: ${project.theme.metric || project.theme.accent}`,
  ].join("; ");
  const tagName = project.href ? "a" : "article";
  const href = project.href ? ` href="${project.href}"` : "";

  return `
    <${tagName} class="project-card" id="${project.id}" style="${style}"${href}>
      <div class="project-visual" aria-hidden="true"></div>
      <div class="project-content">
        <p class="project-meta">${project.meta}</p>
        <h3>${project.title}</h3>
        <p class="${project.summaryHtml ? "project-summary is-figma-synced" : "project-summary"}">${project.summaryHtml || project.summary}</p>
        <div class="project-tags">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    </${tagName}>
  `;
}
