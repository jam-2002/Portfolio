import { formatMultiline } from "../utils/format.js";
import { iconSvg } from "../utils/icons.js";
import { practiceBranchCard } from "./practice-shared.js";

function practiceEducationInfoItem(item) {
  return `
    <div class="practice-edu-info-item">
      ${iconSvg(item.icon)}
      <div>
        <strong>${item.label}</strong>
        <p>${item.value}</p>
      </div>
    </div>
  `;
}

function practiceEducationMiniCard(card) {
  return `
    <article class="practice-edu-mini-card ${card.tone ? `is-${card.tone}` : ""}">
      <div class="practice-edu-mini-card-title">
        ${card.icon ? iconSvg(card.icon) : ""}
        <h4>${card.title}</h4>
      </div>
      <p>${formatMultiline(card.text)}</p>
    </article>
  `;
}

function practiceEducationSectionHeader(number, title) {
  return `
    <header class="practice-section-header practice-edu-section-header">
      <span>${number}</span>
      <h2>${title}</h2>
    </header>
  `;
}

function practiceEducationHero(practiceCase) {
  return `
    <section class="practice-case-hero practice-edu-hero">
      <p class="practice-case-title">${practiceCase.title}</p>
      <div class="practice-branch-row">
        ${practiceCase.branches.map(practiceBranchCard).join("")}
      </div>
      <div class="practice-edu-hero-grid">
        <div class="practice-edu-hero-copy">
          <p class="practice-edu-eyebrow"><span>${practiceCase.hero.eyebrow}</span> ${practiceCase.hero.category}</p>
          <h1><span>${practiceCase.hero.titleLead}</span> ${practiceCase.hero.title}</h1>
          <p>${practiceCase.hero.descriptionHtml || formatMultiline(practiceCase.hero.description)}</p>
        </div>
        <figure class="practice-edu-hero-visual">
          <img src="${practiceCase.hero.productImage}" alt="" />
        </figure>
        <div class="practice-tag-row practice-edu-tags">
          ${practiceCase.hero.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <aside class="practice-edu-info-card">
          ${practiceCase.hero.info.map(practiceEducationInfoItem).join("")}
        </aside>
      </div>
    </section>
  `;
}

function practiceEducationMarketSection() {
  const dynamics = [
    {
      title: "方向一：批量化学习资料生产",
      tone: "green",
      image: "./asset/产品实践/image 10.png",
      lead: "AI 批量生成绘本、动画、拼写练习、知识讲解等学习材料。",
      note: "多停留在“内容供给”，互动较弱。",
    },
    {
      title: "方向二：即拍即学类 AI 硬件",
      tone: "red",
      image: "./asset/产品实践/image (1).png",
      lead: "以 AI 拍学机为代表，通过摄像头识别物体，生成百科、故事等内容。",
      note: "硬件成本偏高，且交互方式固定。",
    },
    {
      title: "方向三：AI 陪伴类产品",
      tone: "yellow",
      image: "./asset/产品实践/未标题-1.png",
      lead: "AI 智能手表、AI 玩偶等，强调长期陪伴、语音互动和情绪交流。",
      note: "易出现目标弱化、信任成本问题。",
    },
  ];

  return `
    <section class="practice-stage practice-edu-stage practice-edu-market">
      ${practiceEducationSectionHeader("01", "市场调查与竞品分析")}
      <div class="practice-stage-panel practice-edu-panel">
        <div class="practice-edu-two-column">
          <article>
            <h3>传统教育类产品</h3>
            <p>纸媒类产品为主，存在趣味性弱 / 性价比低 / 内容固定 / 互动深度有限等问题。</p>
          </article>
          <article>
            <h3>儿童教育行业趋势</h3>
            <p>儿童教育产品正在逐步转向AI 辅助学习、个性化陪伴和情境化探索。</p>
          </article>
        </div>
        <article class="practice-edu-glass-card practice-edu-dynamics">
          <h3>AI 教育产品的新动态</h3>
          <div class="practice-edu-dynamic-grid">
            ${dynamics
              .map(
                (item) => `
                  <div class="practice-edu-dynamic is-${item.tone}">
                    <h4>${item.title}</h4>
                    <div class="practice-edu-dynamic-media">
                      <img src="${item.image}" alt="" />
                    </div>
                    <div class="practice-edu-dynamic-copy">
                      <p class="practice-edu-dynamic-lead">${item.lead}</p>
                      <div class="practice-edu-dynamic-divider" aria-hidden="true"></div>
                      <p class="practice-edu-dynamic-note">${item.note}</p>
                    </div>
                  </div>
                `
              )
              .join("")}
          </div>
        </article>
      </div>
    </section>
  `;
}

function practiceEducationTrendSection() {
  const capabilities = [
    { icon: "star", title: "讲解能力", text: "将抽象知识转化为可理解的语言" },
    { icon: "star", title: "生成能力", text: "根据问题、角色和场景生成个性化内容。" },
    { icon: "star", title: "陪伴能力", text: "持续对话提供情绪支持、学习引导和陪伴。" },
  ];
  const logic = [
    { icon: "map-plus", title: "产品逻辑", text: "纸媒产品实现内容引导和场景触发；手机等硬件承担语音交互、记录和个性化分析功能。" },
    { icon: "trending-up", title: "商业逻辑", text: "通过低价、高频的纸媒内容建立使用习惯，为后续 AI 硬件的服务转化留出空间。" },
  ];

  return `
    <section class="practice-stage practice-edu-stage practice-edu-trend">
      ${practiceEducationSectionHeader("02", "趋势洞察")}
      <div class="practice-stage-panel practice-edu-panel">
        <div class="practice-edu-trend-grid">
          <article class="practice-edu-glass-card">
            <h3>大模型能力判断</h3>
            <p>基于AI 教育产品场景，将大模型的核心能力概括为三类：</p>
            <div class="practice-edu-mini-grid is-three">
              ${capabilities.map((item) => practiceEducationMiniCard({ ...item, tone: "green" })).join("")}
            </div>
          </article>
          <article class="practice-edu-glass-card">
            <h3>AI教育产品新方向</h3>
            <p class="practice-edu-combo-badge"><strong>AI 教育产品新组合形态：纸媒产品 + AI 硬件</strong></p>
            <div class="practice-edu-mini-grid is-two">
              ${logic.map((item) => practiceEducationMiniCard({ ...item, tone: "blue" })).join("")}
            </div>
          </article>
        </div>
        <article class="practice-edu-map-card">
          <h3>产品图谱</h3>
          <button class="practice-edu-map-trigger" type="button" data-open-education-map aria-label="展开产品图谱长图">
            <img src="./asset/产品实践/image 11.png" alt="产品图谱预览" />
            <span class="practice-edu-map-mask">
              ${iconSvg("mouse-pointer-click")}
              <strong>点击查看</strong>
            </span>
          </button>
        </article>
      </div>
    </section>
  `;
}

function practiceEducationStrategySection() {
  const needs = [
    { icon: "user-round-check", title: "使用者", text: "7-16岁青少年，\n覆盖小学至初中阶段。", tone: "green" },
    { icon: "user-round-check", title: "决策者", text: "家长，关注教育新趋势、\n为AI产品付费的中产阶级主。", tone: "green" },
    { icon: "send-horizontal", title: "玩中学", text: "具备游戏性和探索感", tone: "blue" },
    { icon: "chart-no-axes-combined", title: "可持续", text: "内容和玩法应支持长期使用", tone: "blue" },
    { icon: "badge-dollar-sign", title: "高性价比", text: "轻量、低成本、可拓展", tone: "blue" },
    { icon: "eye", title: "护眼", text: "减少屏幕使用", tone: "blue" },
  ];

  return `
    <section class="practice-stage practice-edu-stage practice-edu-strategy">
      ${practiceEducationSectionHeader("03", "用户洞察与产品策略")}
      <div class="practice-stage-panel practice-edu-panel">
        <div class="practice-edu-strategy-grid">
          <article class="practice-edu-glass-card">
            <h3>利益相关者分析</h3>
            <p>走访了 <strong class="practice-edu-em">7</strong> 个典型家庭</p>
            <div class="practice-edu-mini-grid is-two">
              ${needs.slice(0, 2).map(practiceEducationMiniCard).join("")}
            </div>
          </article>
          <article class="practice-edu-glass-card">
            <h3>核心需求</h3>
            <div class="practice-edu-mini-grid is-four">
              ${needs.slice(2).map(practiceEducationMiniCard).join("")}
            </div>
          </article>
          <article class="practice-edu-glass-card practice-edu-policy-card">
            <h3>产品策略</h3>
            <div class="practice-edu-policy-body">
              <img src="./asset/产品实践/image (4).png" alt="" />
              <div class="practice-edu-policy-copy">
                <p class="practice-edu-policy-lead">最简单自然的交互：<strong>问答</strong></p>
                <p class="practice-edu-policy-note">借鉴“孩子气聊天盲盒”轻量交互。将儿童好奇心转化为“抽取问题—发起提问—获得回答”的路径。</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
}

function practiceEducationDefinitionSection() {
  const cards = [
    {
      title: "一句话概述",
      layout: "summary",
      text: "以“问题卡”作为对话触发器，通过拍一拍的方式，让AI扮演“角色卡”的形象来回答“问题卡”的问题，引导用户交流思考，并通过“记录卡”记录对话片段。",
      image: "./asset/产品实践/背景2 4.png",
    },
    {
      title: "问题卡",
      tone: "orange",
      layout: "question",
      text: "围绕小学至初中的知识点，覆盖不同科目、年级段，设置趣味性的提问内容。",
      image: "./asset/产品实践/Group 165.png",
    },
    {
      title: "角色卡",
      tone: "blue",
      layout: "role",
      text: "用于赋予 AI 不同身份。AI可以扮演侦探等角色，用不同语气和视角回答问题。",
      image: "./asset/产品实践/Group 164.png",
    },
    {
      title: "记录卡",
      tone: "coral",
      layout: "record",
      text: "由孩子记录自己与 AI 的对话过程、精彩回答、新发现和自己的想法。",
      image: "./asset/产品实践/Group 156.png",
    },
    {
      title: "说明书",
      tone: "lime",
      layout: "manual",
      text: "初期产品体验可直接使用手机等现有设备作为 AI 载体，降低购买成本。\n\n说明书用于指导如何使用“豆包”等平台完成操作。",
      image: "./asset/产品实践/Group 162-1 1.png",
      wide: true,
    },
    {
      title: "硬件载体",
      tone: "cyan",
      layout: "hardware",
      text: "后期可购买专属硬件设备，记录孩子的学习曲线、情绪状态和个性化成长数据，形成长期陪伴式教学。",
      image: "./asset/产品实践/jimeng-2026-06-15-5703-未命名项目.png",
    },
  ];

  return `
    <section class="practice-stage practice-edu-stage practice-edu-definition">
      ${practiceEducationSectionHeader("04", "产品定义：十万个为什么AI对话卡牌")}
      <div class="practice-stage-panel practice-edu-panel">
        <div class="practice-edu-definition-grid">
          ${cards
            .map(
              (card) => `
                <article class="practice-edu-glass-card practice-edu-definition-card ${card.wide ? "is-wide" : ""} ${card.tone ? `is-${card.tone}` : ""} ${card.layout ? `is-${card.layout}` : ""}">
                  <div>
                    <h3>${card.title}</h3>
                    <p>${formatMultiline(card.text)}</p>
                  </div>
                  <figure class="practice-edu-definition-image-frame">
                    <img src="${card.image}" alt="" />
                  </figure>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function practiceEducationTestingSection() {
  return `
    <section class="practice-stage practice-edu-stage practice-edu-testing">
      ${practiceEducationSectionHeader("05", "产品测试")}
      <div class="practice-stage-panel practice-edu-panel">
        <div class="practice-edu-testing-grid">
          <article class="practice-edu-glass-card practice-edu-test-scene">
            <div>
              <h3>线下场景测试</h3>
              <p class="practice-edu-test-date">11月中旬-12月中旬期间</p>
              <p class="practice-edu-test-copy">四度前往 “王炸探索营”PBL科学培训基地，在真实场景中测试产品 Demo。</p>
            </div>
            <figure class="practice-edu-test-image-frame practice-edu-test-scene-image">
              <img src="./asset/产品实践/image (5) 1.png" alt="" />
            </figure>
          </article>
        </div>
      </div>
    </section>
  `;
}

function practiceEducationWorkflowSection() {
  return `
    <section class="practice-stage practice-edu-stage practice-edu-workflow">
      ${practiceEducationSectionHeader("06", "批量化生产工作流")}
      <div class="practice-stage-panel practice-edu-panel">
        <div class="practice-edu-workflow-grid">
          <article class="practice-edu-glass-card practice-edu-workflow-main">
            <h3>自动化卡牌WorkFlow</h3>
            <p>将问题内容、角色设定、卡牌字段、视觉样式等通过飞书多维表格进行整合。<br />使用者只需完成 点击制作+检查 即可完成产品生产。</p>
          </article>
          <article class="practice-edu-pdf-card practice-edu-workflow-preview">
            <iframe src="./asset/产品实践/问题卡_副本.pdf#toolbar=0&navpanes=0" title="问题卡 PDF 预览"></iframe>
          </article>
        </div>
      </div>
    </section>
  `;
}

function practiceEducationModal() {
  return `
    <div class="practice-edu-modal" id="practice-edu-map-modal" aria-hidden="true">
      <div class="practice-edu-modal-backdrop" data-close-education-map></div>
      <div class="practice-edu-modal-dialog" role="dialog" aria-modal="true" aria-label="产品图谱长图">
        <button class="practice-edu-modal-close" type="button" data-close-education-map aria-label="关闭产品图谱">×</button>
        <div class="practice-edu-modal-scroll">
          <img src="./asset/产品实践/image 11.png" alt="产品图谱长图" />
        </div>
      </div>
    </div>
  `;
}

export function renderPracticeEducation(practiceCase) {
  return `
    ${practiceEducationHero(practiceCase)}
    <div class="practice-stage-stack practice-edu-stage-stack">
      ${practiceEducationMarketSection()}
      ${practiceEducationTrendSection()}
      ${practiceEducationStrategySection()}
      ${practiceEducationDefinitionSection()}
      <div class="practice-edu-final-row">
        ${practiceEducationTestingSection()}
        ${practiceEducationWorkflowSection()}
      </div>
    </div>
    ${practiceEducationModal()}
  `;
}

export function bindPracticeEducationInteractions(container) {
  const modal = container.querySelector("#practice-edu-map-modal");
  const openButton = container.querySelector("[data-open-education-map]");
  if (!modal || !openButton) return;

  const setOpen = (open) => {
    modal.classList.toggle("is-open", open);
    modal.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.classList.toggle("has-practice-modal", open);
  };

  openButton.addEventListener("click", () => setOpen(true));
  modal.querySelectorAll("[data-close-education-map]").forEach((closeButton) => {
    closeButton.addEventListener("click", () => setOpen(false));
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}
