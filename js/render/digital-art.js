import { iconSvg } from "../utils/icons.js";

const artworkVideos = Array.from(
  { length: 6 },
  (_, index) => `./asset/数字艺术/网页视频/${index + 1}.mp4`,
);

let carouselController;

export function renderDigitalArt() {
  const root = document.querySelector("#digital-art-root");
  if (!root || root.dataset.ready === "true") return;

  root.innerHTML = `
    <section class="digital-art-hero" aria-labelledby="digital-art-title">
      <div class="digital-art-copy">
        <div class="digital-art-heading">
          <h2 id="digital-art-title">AI音乐可视化</h2>
          <time datetime="2025-10/2026-10">华为｜ 2025/10-2026/10</time>
          <p>数字艺术智能设计研究技术合作</p>
        </div>

        <p class="digital-art-summary">
          结合AI音乐分析能力与数字艺术推理能力，提取音乐的风格、情感<br>
          节奏等特征，通过数字艺术动效呈现。打破听觉与视觉的界限，让<br>
          音乐以更直观生动的形式被感知与体验。产出高质量Android端<br>
          Demo，特征<span>毫秒级推理</span>， <span>60 FPS</span> 顺畅运行。
        </p>

        <div class="digital-art-tags" aria-label="项目标签">
          <span>车载场景</span>
          <span>多维特征</span>
          <span>跨感官联想</span>
          <span>沉浸式体验</span>
        </div>
      </div>

      <div
        class="digital-art-carousel"
        role="region"
        aria-roledescription="视频轮播"
        aria-label="AI音乐可视化作品展示"
        tabindex="0"
      >
        <div class="digital-art-carousel-stage">
          ${artworkVideos
            .map(
              (src, index) => `
                <article class="digital-art-slide" data-art-slide="${index}">
                  <video
                    preload="metadata"
                    playsinline
                    muted
                    aria-label="AI音乐可视化作品 ${index + 1}"
                  >
                    <source src="${src}" type="video/mp4">
                    当前浏览器无法播放此视频。
                  </video>
                  <button
                    class="digital-art-slide-action"
                    type="button"
                    data-art-slide-action="${index}"
                    aria-label="选择第 ${index + 1} 个作品视频"
                  ></button>
                </article>
              `,
            )
            .join("")}

          <button
            class="digital-art-carousel-arrow digital-art-carousel-arrow-previous"
            type="button"
            data-art-previous
            aria-label="查看上一个作品视频"
          >
            <img src="./asset/数字艺术/箭头.png" alt="" aria-hidden="true">
          </button>
          <button
            class="digital-art-carousel-arrow digital-art-carousel-arrow-next"
            type="button"
            data-art-next
            aria-label="查看下一个作品视频"
          >
            <img src="./asset/数字艺术/箭头.png" alt="" aria-hidden="true">
          </button>

          <button
            class="digital-art-sound"
            type="button"
            data-art-sound
            aria-pressed="false"
            aria-label="开启作品声音"
          >声音 关</button>
        </div>

        <div class="digital-art-carousel-footer">
          <div class="digital-art-carousel-pagination" aria-label="选择作品视频">
            ${artworkVideos
              .map(
                (_, index) => `
                  <button
                    type="button"
                    data-art-dot="${index}"
                    aria-label="选择第 ${index + 1} 个作品视频"
                  ></button>
                `,
              )
              .join("")}
          </div>
        </div>
        <p class="sr-only" aria-live="polite" data-art-status></p>
      </div>
    </section>

    <section
      class="digital-art-planning-card"
      aria-labelledby="digital-art-planning-title"
    >
      <header class="digital-art-planning-heading">
        <span aria-hidden="true">01</span>
        <h3 id="digital-art-planning-title">项目策划</h3>
      </header>

      <div class="digital-art-planning-module digital-art-planning-module-analysis">
        <h4>音乐分析模块</h4>
        <p>基于音频（歌词）文件，提<br>取节奏、音色、音高、音<br>量、情感（大模型）、风格<br>（大模型）等特征数据。</p>
      </div>

      <div class="digital-art-planning-module digital-art-planning-module-mapping">
        <h4>视听映射模块</h4>
        <p>设计6套适配不同音<br>乐风格的可视化方<br>案，将特征数据转<br>化为视觉表现。</p>
      </div>

      <div class="digital-art-planning-module digital-art-planning-module-rendering">
        <h4>视觉渲染模块</h4>
        <p>基于unity引<br>擎，还原6套方<br>案，并组接音<br>乐分析模块。</p>
      </div>

      <div class="digital-art-planning-team">
        <h4>团队组建</h4>
        <p>设计组：4人-设计类专业；技术组：4人-设计类专业；模型组：3人-计算机类专业。</p>
      </div>

      <img
        class="digital-art-planning-diagram"
        src="./asset/数字艺术/项目策划流程图.png"
        alt="音乐分析、视听映射与视觉渲染三个模块的工作流程图"
      >
    </section>

    <section
      class="digital-art-design-card"
      aria-labelledby="digital-art-design-title"
    >
      <header class="digital-art-design-heading">
        <span aria-hidden="true">02</span>
        <h3 id="digital-art-design-title">设计组工作与成果</h3>
        <small>重点参与</small>
      </header>

      <p class="digital-art-design-task">｜任务：快速设计适配不同音乐风格的可视化方案、产出高保真演示视频。</p>

      <article class="digital-art-design-item digital-art-design-research">
        <span class="digital-art-design-icon" aria-hidden="true">${iconSvg("send-horizontal")}</span>
        <div>
          <h4>音乐特征映射调研</h4>
          <p>
            隐喻联觉映射——通过听觉与视觉之间的跨感官联想表达音乐感受；<br>
            语义叙事映射——结合歌词、情绪和意象生成图像或叙事场景。<br>
            根据上述两类原则，总结<span>10+</span> 音乐特征维度、<span>30+</span> 特征-视觉映射表现
          </p>
        </div>
      </article>

      <article class="digital-art-design-item digital-art-design-solution">
        <span class="digital-art-design-icon" aria-hidden="true">${iconSvg("send-horizontal")}</span>
        <div>
          <h4>方案设计</h4>
          <p>以“高端精致”为设计导向，采用AIGC快速生产的方式，通过筛选获取首眼优质方案，并呈现方案多维度动态效果视频。</p>
        </div>
      </article>

      <article class="digital-art-design-item digital-art-design-result">
        <span class="digital-art-design-icon" aria-hidden="true">${iconSvg("send-horizontal")}</span>
        <div>
          <h4>成果</h4>
          <p>项目期间共计生产约<span>50套</span>设计方案，企业方优选<span>10+</span>方案，最终为6种风格<span>各筛选1套最优</span>方案。</p>
        </div>
      </article>

      <img
        class="digital-art-design-gallery"
        src="./asset/数字艺术/设计组成果.png"
        alt="六组不同音乐风格的可视化设计成果"
      >
    </section>

    <section
      class="digital-art-model-card"
      aria-labelledby="digital-art-model-title"
    >
      <header class="digital-art-card-heading">
        <span aria-hidden="true">03</span>
        <h3 id="digital-art-model-title">模型组工作与成果</h3>
      </header>

      <p class="digital-art-card-task">｜&nbsp;任务：训练模型以实时提取音乐情感、风格数据。</p>

      <div class="digital-art-model-panels">
        <article class="digital-art-model-panel digital-art-model-style">
          <h4>风格分析模型</h4>
          <p>
            风格数据集共 1972 条样本。<br>
            采用机器学习分类：RandomForest 分类器 +音频特征。<br>
            风格模型准确率稳定于 <span>80%–83%</span> ，模型单首歌曲识别耗时约<span>60ms</span>。
          </p>
        </article>

        <article class="digital-art-model-panel digital-art-model-emotion">
          <h4>情感分析模型</h4>
          <p>
            情感数据集共 3745 条样本。<br>
            采用轻量级机器学习与多模态融合思路。<br>
            情感模型识别准确率稳定约 <span>77%</span> ，模型单首歌曲识别耗时约<span>80ms</span>。
          </p>
        </article>
      </div>
    </section>

    <section
      class="digital-art-tech-card"
      aria-labelledby="digital-art-tech-title"
    >
      <header class="digital-art-card-heading digital-art-card-heading-note">
        <span aria-hidden="true">04</span>
        <h3 id="digital-art-tech-title">技术组工作与成果</h3>
        <small>重点参与</small>
      </header>

      <p class="digital-art-card-task digital-art-tech-task-one">｜任务 1：基础特征提取（节奏、音色等）</p>

      <div class="digital-art-tech-metric digital-art-tech-architecture">
        <span class="digital-art-design-icon" aria-hidden="true">${iconSvg("send-horizontal")}</span>
        <h4>技术架构</h4>
        <p>C++ 原生插件计算 + C# 聚合归一化 + JSON 输出驱动可视化</p>
      </div>

      <div class="digital-art-tech-metric digital-art-tech-extraction">
        <span class="digital-art-design-icon" aria-hidden="true">${iconSvg("send-horizontal")}</span>
        <h4>数据提取</h4>
        <p>由 C++ 插件每23ms提取一次flux、pitch、tempo 等特征，再以 0.5 秒窗口聚合，平滑、归一化处理。</p>
      </div>

      <div class="digital-art-tech-metric digital-art-tech-output">
        <span class="digital-art-design-icon" aria-hidden="true">${iconSvg("send-horizontal")}</span>
        <h4>成果</h4>
        <p>110项数据/帧（23ms）&nbsp;&nbsp; 2.04ms响应时长</p>
      </div>

      <p class="digital-art-card-task digital-art-tech-task-two">｜任务 2：引擎开发（还原设计方案）</p>

      <div class="digital-art-tech-flow">
        <article class="digital-art-tech-step digital-art-tech-step-breakdown">
          <h4>方案拆解</h4>
          <p>将每一设计方<br>案拆解为：物<br>理模型、vfx、<br>ShaderGraph</p>
        </article>
        <span class="digital-art-tech-arrow digital-art-tech-arrow-one" aria-hidden="true"></span>

        <article class="digital-art-tech-step digital-art-tech-step-physics">
          <h4>物理模型</h4>
          <p>方案涉及山体等实体<br>时，使用triple等3D<br>生成AI，辅以blender<br>等建模工具微调。</p>
        </article>
        <span class="digital-art-tech-arrow digital-art-tech-arrow-two" aria-hidden="true"></span>

        <article class="digital-art-tech-step digital-art-tech-step-vfx">
          <h4>VFX</h4>
          <p>项目涉及大量粒子特<br>效。区分为有/无外部<br>轮廓两类，前者需定制<br>pcache/SDF资产。</p>
        </article>
        <span class="digital-art-tech-arrow digital-art-tech-arrow-three" aria-hidden="true"></span>

        <article class="digital-art-tech-step digital-art-tech-step-shader">
          <h4>ShaderGraph</h4>
          <p>多用于模型贴图、特效。<br>前者包含纹理、高度细<br>节、动效等；后者包含水<br>流效果、彩带等。</p>
        </article>
        <span class="digital-art-tech-arrow digital-art-tech-arrow-four" aria-hidden="true"></span>

        <article class="digital-art-tech-step digital-art-tech-step-link">
          <h4>特征链接</h4>
          <p>制作资产时按方案<br>要求保留多个数据<br>接口，并通过脚本<br>与JSON绑定。</p>
        </article>
      </div>

      <div class="digital-art-tech-final">
        <span class="digital-art-design-icon" aria-hidden="true">${iconSvg("send-horizontal")}</span>
        <h4>成果</h4>
        <p>高质量视觉效果、帧率可达<span>60FPS</span>的音乐可视化程序。</p>
      </div>
    </section>

    <section
      class="digital-art-short-card"
      aria-labelledby="digital-art-short-title"
    >
      <header class="digital-art-card-heading">
        <span aria-hidden="true">05</span>
        <h3 id="digital-art-short-title">短期成果</h3>
      </header>
      <p>问届M9品牌活动：20车联投 《千里江山》—— 设计方案优质效果应用。</p>
    </section>
  `;

  root.dataset.ready = "true";
  carouselController = initializeVideoCarousel(root);
}

export function setDigitalArtActive(isActive) {
  if (!carouselController) return;
  carouselController.setViewActive(isActive);
}

function initializeVideoCarousel(root) {
  const carousel = root.querySelector(".digital-art-carousel");
  const slides = [...root.querySelectorAll("[data-art-slide]")];
  const videos = slides.map((slide) => slide.querySelector("video"));
  const slideActions = [...root.querySelectorAll("[data-art-slide-action]")];
  const dots = [...root.querySelectorAll("[data-art-dot]")];
  const soundButton = root.querySelector("[data-art-sound]");
  const status = root.querySelector("[data-art-status]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  let activeIndex = 0;
  let viewActive = false;
  let userPaused = false;
  let muted = true;

  const normalizeIndex = (index) =>
    (index + artworkVideos.length) % artworkVideos.length;

  function getState(index) {
    if (index === activeIndex) return "current";
    if (index === normalizeIndex(activeIndex - 1)) return "previous";
    if (index === normalizeIndex(activeIndex + 1)) return "next";
    return "hidden";
  }

  function updateInterface(announce = true) {
    slides.forEach((slide, index) => {
      const state = getState(index);
      const action = slideActions[index];
      slide.dataset.state = state;
      slide.setAttribute("aria-hidden", state === "hidden" ? "true" : "false");
      action.tabIndex = state === "hidden" ? -1 : 0;
      action.setAttribute(
        "aria-label",
        state === "current"
          ? `当前为第 ${index + 1} 个作品视频`
          : `选择第 ${index + 1} 个作品视频`,
      );
      action.disabled = state === "current";
    });

    dots.forEach((dot, index) => {
      const isCurrent = index === activeIndex;
      dot.classList.toggle("is-active", isCurrent);
      dot.setAttribute("aria-current", isCurrent ? "true" : "false");
    });

    if (announce) {
      status.textContent = `已选择第 ${activeIndex + 1} 个作品视频，共 ${artworkVideos.length} 个`;
    }
  }

  function pauseInactiveVideos() {
    videos.forEach((video, index) => {
      if (index !== activeIndex) video.pause();
    });
  }

  async function playActiveVideo() {
    if (!viewActive) return;
    const video = videos[activeIndex];
    video.muted = muted;

    try {
      await video.play();
      userPaused = false;
    } catch {
      userPaused = true;
      updateInterface(false);
      status.textContent = `已切换到第 ${activeIndex + 1} 个作品视频，请点击播放`;
    }
  }

  function selectVideo(index, { announce = true, autoplay = true } = {}) {
    const nextIndex = normalizeIndex(index);
    const previousVideo = videos[activeIndex];
    previousVideo.pause();

    activeIndex = nextIndex;
    pauseInactiveVideos();

    const activeVideo = videos[activeIndex];
    if (activeVideo.readyState > 0) {
      activeVideo.currentTime = 0;
    } else {
      activeVideo.addEventListener(
        "loadedmetadata",
        () => {
          activeVideo.currentTime = 0;
        },
        { once: true },
      );
    }

    updateInterface(announce);
    if (autoplay && !reduceMotion.matches) {
      userPaused = false;
      void playActiveVideo();
    }
  }

  slideActions.forEach((action, index) => {
    action.addEventListener("click", () => {
      if (index !== activeIndex) selectVideo(index);
    });
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => selectVideo(index));
  });

  root.querySelector("[data-art-previous]").addEventListener("click", () => {
    selectVideo(activeIndex - 1);
  });

  root.querySelector("[data-art-next]").addEventListener("click", () => {
    selectVideo(activeIndex + 1);
  });

  soundButton.addEventListener("click", () => {
    muted = !muted;
    videos.forEach((video) => {
      video.muted = muted;
    });
    soundButton.textContent = muted ? "声音 关" : "声音 开";
    soundButton.setAttribute("aria-pressed", muted ? "false" : "true");
    soundButton.setAttribute("aria-label", muted ? "开启作品声音" : "关闭作品声音");
    status.textContent = muted ? "作品声音已关闭" : "作品声音已开启";
  });

  carousel.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectVideo(activeIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectVideo(activeIndex + 1);
    }
  });

  videos.forEach((video, index) => {
    video.addEventListener("play", () => {
      if (index !== activeIndex) return;
      slides[index].classList.add("is-playing");
      updateInterface(false);
      status.textContent = `正在播放第 ${index + 1} 个作品视频`;
    });

    video.addEventListener("pause", () => {
      slides[index].classList.remove("is-playing");
      if (index === activeIndex) updateInterface(false);
    });

    video.addEventListener("ended", () => {
      if (index !== activeIndex) return;
      selectVideo(activeIndex + 1);
    });
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      videos[activeIndex].pause();
    } else if (viewActive && !userPaused && !reduceMotion.matches) {
      void playActiveVideo();
    }
  });

  reduceMotion.addEventListener("change", () => {
    if (reduceMotion.matches) {
      videos[activeIndex].pause();
    } else if (viewActive && !userPaused) {
      void playActiveVideo();
    }
  });

  updateInterface(false);

  return {
    setViewActive(isActive) {
      viewActive = isActive;
      if (!viewActive) {
        videos.forEach((video) => video.pause());
        return;
      }

      if (!reduceMotion.matches && !userPaused) {
        void playActiveVideo();
      }
    },
  };
}
