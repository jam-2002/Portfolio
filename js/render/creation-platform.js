import { iconSvg } from "../utils/icons.js";

const slides = Array.from(
  { length: 8 },
  (_, index) => `./asset/创作平台/page${index + 1}.png`,
);

const AUTOPLAY_DELAY = 5000;

export function renderCreationPlatform() {
  const root = document.querySelector("#creation-platform-root");
  if (!root || root.dataset.ready === "true") return;

  root.innerHTML = `
    <section class="creation-platform-hero" aria-labelledby="creation-platform-title">
      <div class="creation-platform-copy">
        <div class="creation-platform-heading">
          <h2 id="creation-platform-title">VideoMaker</h2>
          <time datetime="2025-12/2026-09">2025/12 - 2026-09</time>
          <p>支持用户创意转化的AI视频创作平台</p>
        </div>

        <p class="creation-platform-summary">
          结合多风格剧本库、影视知识库与 Agent 种子面板，帮助<br>
          用户将自然语言创意逐步转化为剧本、脚本、分镜与视频。<br>
          拓展创意表达<span>23%</span>，降低操作成本<span>20%</span>
        </p>

        <div class="creation-platform-tags" aria-label="项目标签">
          <span>ToC产品</span>
          <span>创意发散</span>
          <span>叙事转化</span>
          <span>主体性平衡</span>
        </div>
      </div>

      <div
        class="creation-carousel"
        role="region"
        aria-roledescription="轮播图"
        aria-label="VideoMaker 作品展示"
        tabindex="0"
      >
        <div class="creation-carousel-stage">
          ${slides
            .map(
              (src, index) => `
                <button
                  class="creation-carousel-slide"
                  type="button"
                  data-slide="${index}"
                  aria-label="查看第 ${index + 1} 张作品图"
                >
                  <img
                    src="${src}"
                    alt="VideoMaker 产品设计页面 ${index + 1}"
                    ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}
                    decoding="async"
                  >
                </button>
              `,
            )
            .join("")}

          <button
            class="creation-carousel-arrow creation-carousel-arrow-previous"
            type="button"
            data-carousel-previous
            aria-label="查看上一张作品图"
          >
            <img src="./asset/创作平台/箭头.png" alt="" aria-hidden="true">
          </button>
          <button
            class="creation-carousel-arrow creation-carousel-arrow-next"
            type="button"
            data-carousel-next
            aria-label="查看下一张作品图"
          >
            <img src="./asset/创作平台/箭头.png" alt="" aria-hidden="true">
          </button>
        </div>

        <div class="creation-carousel-pagination" aria-label="选择作品图">
          ${slides
            .map(
              (_, index) => `
                <button
                  type="button"
                  data-carousel-dot="${index}"
                  aria-label="选择第 ${index + 1} 张作品图"
                ></button>
              `,
            )
            .join("")}
        </div>
        <p class="sr-only" aria-live="polite" data-carousel-status></p>
      </div>
    </section>

    <section class="creation-research-panel" aria-labelledby="creation-research-title">
      <div class="creation-research-title">
        <span>01</span>
        <h3 id="creation-research-title">用户调研</h3>
      </div>

      <div class="creation-research-content">
        <article class="creation-research-card creation-research-interview">
          <h4>半结构化访谈</h4>
          <p>
            7名初级AI用户 + 5名高<br>
            级AI用户（2名专家），<br>
            时长约1.5h，<br>
            全程录音+文本简记。
          </p>
        </article>

        <article class="creation-research-card creation-research-synthesis">
          <h4>需求提炼</h4>
          <p>
            通过<br>
            录音转写 → 文本清洗 →<br>
            编码标注 → 主题归类 →<br>
            洞察提炼，总结需求。
          </p>
        </article>

        <div class="creation-research-flow" aria-hidden="true">
          <img src="./asset/创作平台/箭头.png" alt="">
        </div>

        <div class="creation-research-insights">
          <article class="creation-research-insight">
            <span class="creation-research-insight-icon" aria-hidden="true">
              ${iconSvg("send-horizontal")}
            </span>
            <div>
              <h4>需求1: 使用户创意可以差异化</h4>
              <p>现有 AI 工具对创意的理解与扩展往往较为同质化，缺乏差异化生成能力。</p>
            </div>
          </article>

          <article class="creation-research-insight">
            <span class="creation-research-insight-icon" aria-hidden="true">
              ${iconSvg("send-horizontal")}
            </span>
            <div>
              <h4>需求2: 支持用户意图渐进式转化为视频叙事</h4>
              <p>用户能够用自然语言描述一个创意，但通常是口语化的，<br>难以直接转化为具有镜头结构、画面表现和叙事逻辑的视频脚本。</p>
            </div>
          </article>

          <article class="creation-research-insight">
            <span class="creation-research-insight-icon" aria-hidden="true">
              ${iconSvg("send-horizontal")}
            </span>
            <div>
              <h4>需求3: 平衡用户创作主体性与 AI 生成自由度</h4>
              <p>用户在创作过程中既希望控制视频的关键要素，又希望 AI 能够带来一定的随机性和启发。</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="creation-innovation-panel" aria-labelledby="creation-innovation-title">
      <div class="creation-innovation-title">
        <span>02</span>
        <h3 id="creation-innovation-title">两大创新</h3>
      </div>

      <article class="creation-innovation-card creation-knowledge-card">
        <h4 class="creation-knowledge-heading">知识增强</h4>

        <div class="creation-knowledge-library">
          <p>
            <strong>▪&nbsp; 多风格剧本库</strong><br>
            <span>100+</span> 精选风格化剧本，支持同一创意的差异化改编
          </p>
          <img
            src="./asset/创作平台/图1.png"
            alt="多风格剧本库，包含语言风格、叙事风格与故事展开方式"
            loading="lazy"
            decoding="async"
          >
        </div>

        <div class="creation-knowledge-theory">
          <p>
            <strong>▪&nbsp; 影视创作核心理论</strong><br>
            根据专家建议及专业书籍，提炼1套涵盖<span>30+专业名词</span>及解释的影视语言库，总结<span>1套</span>适配AI生成工具的创作工作流，用于支持自然语言到专业画面语言的渐进式转化。
          </p>
          <div class="creation-knowledge-visuals">
            <img
              src="./asset/创作平台/图2.png"
              alt="影视语言专业词库"
              loading="lazy"
              decoding="async"
            >
            <img
              src="./asset/创作平台/图3.png"
              alt="适配 AI 生成工具的影视创作工作流"
              loading="lazy"
              decoding="async"
            >
          </div>
        </div>
      </article>

      <article class="creation-innovation-card creation-seed-card">
        <h4>种子面板——融合AI Agent的新型交互</h4>

        <div class="creation-seed-copy">
          <p class="creation-seed-principle">
            通过“种子”锁定用户希望保留关键信息 + 通过Agent提供发散性
          </p>

          <div class="creation-seed-points">
            <div>
              <span aria-hidden="true">${iconSvg("send-horizontal")}</span>
              <p><strong>关键信息：</strong>包含在种子面板内的信息</p>
            </div>
            <div>
              <span aria-hidden="true">${iconSvg("send-horizontal")}</span>
              <p><strong>用户偏好：</strong>通过用户和Agent的长期对话记录捕捉。</p>
            </div>
            <div>
              <span aria-hidden="true">${iconSvg("send-horizontal")}</span>
              <p><strong>创作主体性：</strong>用户确认种子后，要求Agent最终生成必须保留这些种子。</p>
            </div>
            <div>
              <span aria-hidden="true">${iconSvg("send-horizontal")}</span>
              <p><strong>AI 生成自由度：</strong>Agent基于用户偏好主动推荐种子；种子之间的串接由AI自由发挥。</p>
            </div>
          </div>

          <p class="creation-seed-note">
            种子面板复用于剧本生成、脚本编辑、画面生成、视频生成等多个环节。
          </p>
        </div>

        <img
          class="creation-seed-image"
          src="./asset/创作平台/图4.png"
          alt="种子面板与 Agent 交互示意"
          loading="lazy"
          decoding="async"
        >
      </article>
    </section>

    <section class="creation-development-panel" aria-labelledby="creation-development-title">
      <div class="creation-development-title">
        <span>03</span>
        <h3 id="creation-development-title">产品设计与开发</h3>
      </div>

      <div class="creation-development-copy">
        <div class="creation-development-flow">
          <h4>
            <span aria-hidden="true">${iconSvg("send-horizontal")}</span>
            动线图与UI
          </h4>
          <p class="creation-development-intro">
            基于前述工作流，规划6大步骤，figma make快速制作交互原型。
          </p>

          <div class="creation-development-steps" aria-label="六步产品创作流程">
            <span class="creation-development-step step-1">用户输入创意</span>
            <i class="creation-development-step-arrow arrow-1" aria-hidden="true"></i>
            <span class="creation-development-step step-2">AI剧本创作</span>
            <i class="creation-development-step-arrow arrow-2" aria-hidden="true"></i>
            <span class="creation-development-step step-3">AI脚本创作</span>
            <span class="creation-development-step step-4">一致性调整</span>
            <i class="creation-development-step-arrow arrow-3" aria-hidden="true"></i>
            <span class="creation-development-step step-5">AI分镜与视频生成</span>
            <i class="creation-development-step-arrow arrow-4" aria-hidden="true"></i>
            <span class="creation-development-step step-6">剪辑脚本生成</span>
          </div>
        </div>

        <div class="creation-development-context">
          <h4>
            <span aria-hidden="true">${iconSvg("send-horizontal")}</span>
            上下文管理与提示词设计
          </h4>
          <p>
            ▪&nbsp; 基于 SQLite 的项目级上下文管理机制<br>
            采用“业务表结构化存储+projects.flow_state 页面快照”的混合方式。<br>
            ▪&nbsp; 撰写<span>32段</span>提示词，关联知识库，并配合表内容调取进行使用。
          </p>
        </div>

        <h4 class="creation-development-build">
          <span aria-hidden="true">${iconSvg("send-horizontal")}</span>
          前后端开发：Codex快速原型实现
        </h4>
      </div>

      <img
        class="creation-development-image"
        src="./asset/创作平台/图5.png"
        alt="VideoMaker 前端、SQLite 数据库、知识库、提示词组装与 AI 的上下文管理架构"
        loading="lazy"
        decoding="async"
      >
    </section>

    <section class="creation-evaluation-panel" aria-labelledby="creation-evaluation-title">
      <div class="creation-evaluation-title">
        <span>04</span>
        <h3 id="creation-evaluation-title">体验评估</h3>
      </div>

      <article class="creation-evaluation-card creation-evaluation-method">
        <h4>
          <span aria-hidden="true">${iconSvg("circle-user-round")}</span>
          评估方式
        </h4>
        <p>
          邀请<span>31名</span>用户采用随机主题分别体验<br>
          videomaker与对照平台创作视频。<br>
          完成体验后，通过问卷和访谈回收数据。
        </p>
      </article>

      <article class="creation-evaluation-card creation-evaluation-results">
        <h4>
          <span aria-hidden="true">${iconSvg("chart-no-axes-combined")}</span>
          评估方式
        </h4>
        <p class="creation-evaluation-summary">
          VideoMaker在支持创意差异化、支持用户意图渐进式转化为视频叙事和平衡用户创作主体性与 AI 生成自由度均表现出色，所有维度均达到统计显著水平。
        </p>

        <div class="creation-evaluation-metrics" aria-label="体验评估提升数据">
          <div class="creation-evaluation-metric">
            <span>创意差异化</span>
            <strong>23%</strong>
            <i class="creation-evaluation-swoosh" aria-hidden="true"></i>
          </div>
          <div class="creation-evaluation-metric">
            <span>意图渐进式转化</span>
            <strong>20%</strong>
            <i class="creation-evaluation-swoosh" aria-hidden="true"></i>
          </div>
          <div class="creation-evaluation-metric">
            <span>主体与自由平衡</span>
            <strong>18%</strong>
            <i class="creation-evaluation-swoosh" aria-hidden="true"></i>
          </div>
        </div>
      </article>
    </section>
  `;

  root.dataset.ready = "true";
  initializeCarousel(root);
}

function initializeCarousel(root) {
  const carousel = root.querySelector(".creation-carousel");
  const slideElements = [...root.querySelectorAll("[data-slide]")];
  const dotElements = [...root.querySelectorAll("[data-carousel-dot]")];
  const status = root.querySelector("[data-carousel-status]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let activeIndex = 0;
  let autoplayTimer = 0;
  let isPaused = false;

  const getPreviousIndex = () => (activeIndex - 1 + slides.length) % slides.length;
  const getNextIndex = () => (activeIndex + 1) % slides.length;

  function updateCarousel(nextIndex, announce = true) {
    activeIndex = (nextIndex + slides.length) % slides.length;
    const previousIndex = getPreviousIndex();
    const followingIndex = getNextIndex();

    slideElements.forEach((slide, index) => {
      const state =
        index === activeIndex
          ? "current"
          : index === previousIndex
            ? "previous"
            : index === followingIndex
              ? "next"
              : "hidden";

      slide.dataset.state = state;
      slide.setAttribute("aria-hidden", state === "hidden" ? "true" : "false");
      slide.tabIndex = state === "hidden" ? -1 : 0;
    });

    dotElements.forEach((dot, index) => {
      const isCurrent = index === activeIndex;
      dot.classList.toggle("is-active", isCurrent);
      dot.setAttribute("aria-current", isCurrent ? "true" : "false");
    });

    if (announce) {
      status.textContent = `正在查看第 ${activeIndex + 1} 张，共 ${slides.length} 张`;
    }
  }

  function stopAutoplay() {
    window.clearInterval(autoplayTimer);
    autoplayTimer = 0;
  }

  function startAutoplay() {
    stopAutoplay();
    if (isPaused || reduceMotion.matches || document.hidden) return;
    autoplayTimer = window.setInterval(() => {
      updateCarousel(activeIndex + 1, false);
    }, AUTOPLAY_DELAY);
  }

  function selectSlide(index) {
    updateCarousel(index);
    startAutoplay();
  }

  slideElements.forEach((slide) => {
    slide.addEventListener("click", () => {
      const index = Number(slide.dataset.slide);
      const state = slide.dataset.state;
      if (state === "previous") selectSlide(activeIndex - 1);
      if (state === "next") selectSlide(activeIndex + 1);
      if (state === "current") selectSlide(index);
    });
  });

  dotElements.forEach((dot) => {
    dot.addEventListener("click", () => selectSlide(Number(dot.dataset.carouselDot)));
  });

  root.querySelector("[data-carousel-previous]").addEventListener("click", () => {
    selectSlide(activeIndex - 1);
  });

  root.querySelector("[data-carousel-next]").addEventListener("click", () => {
    selectSlide(activeIndex + 1);
  });

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectSlide(activeIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectSlide(activeIndex + 1);
    }
  });

  carousel.addEventListener("mouseenter", () => {
    isPaused = true;
    stopAutoplay();
  });

  carousel.addEventListener("mouseleave", () => {
    isPaused = false;
    startAutoplay();
  });

  carousel.addEventListener("focusin", () => {
    isPaused = true;
    stopAutoplay();
  });

  carousel.addEventListener("focusout", (event) => {
    if (carousel.contains(event.relatedTarget)) return;
    isPaused = false;
    startAutoplay();
  });

  document.addEventListener("visibilitychange", startAutoplay);
  reduceMotion.addEventListener("change", startAutoplay);

  updateCarousel(0, false);
  startAutoplay();
}
