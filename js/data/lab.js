export const labItems = [
  {
    title: "AI 官方文宣",
    meta: "2024.09 - 2026.02",
    description:
      "曾与中央广播电视台、教育部新闻办公室、浙江大学宣传部等合作，开展AI相关的媒体物料创作工作。",
    works: [
      {
        type: "video",
        title: "杜甫《月夜忆舍弟》AI 视频",
        src: "./asset/月夜忆舍弟.mp4",
        poster: "./asset/pdf-images/月夜忆舍弟封面.png",
      },
      {
        type: "video",
        title: "小初衔接教育系列视频——微言教育",
        src: "./asset/小初学段衔接.mp4",
        poster: "./asset/pdf-images/小初衔接封面.png",
      },
      {
        type: "link",
        title: "《东坡足迹》四部曲——微言教育",
        href: "https://weixin.qq.com/sph/AlPgb6d7aD",
        cover: "./asset/pdf-images/ 《东坡足迹》四部曲封面.png",
      },
      {
        type: "link",
        title: "浙江大学 128 周年庆",
        href: "https://weixin.qq.com/sph/AMr3vmxCZ5",
        cover: "./asset/pdf-images/浙江大学128周年庆封面.png",
      },
    ],
  },
  {
    title: "口播剪辑",
    meta: "2025.08 - 2025.10",
    description:
      "曾与创意书法艺术家朱敬一合作，制作口播视频，关注信息节奏、选题吸引力与视频传播表达。",
    works: [
      {
        type: "link",
        title: "从“土味运动鞋”到巴黎时装周，安踏用艺术实现品牌升维的三大策略",
        href: "https://v.douyin.com/MIWRZ1C6t7k/",
        cover: "./asset/pdf-images/土味运动鞋封面.png",
      },
      {
        type: "link",
        title: "擦边艺术家如何征服奢侈品?空山基的商业密码",
        href: "https://weixin.qq.com/sph/ABNpYom2Ge",
        cover: "./asset/pdf-images/擦边艺术家封面.png",
      },
      {
        type: "link",
        title: '天才少女靠"丧美学"征服全球!Z世代为什么疯狂追捧"丑艺术"?',
        href: "https://weixin.qq.com/sph/AsRWG210mH",
        cover: "./asset/pdf-images/天才少女封面.png",
      },
    ],
  },
  {
    title: "AIGC 概念展览",
    meta: "2024.06",
    description:
      "杭州市西溪银泰城 1F，以 AI 纸质物料与 AI 创作体验为主体，线下概念展览。",
    works: [
      {
        type: "image",
        title: "展览现场与纸质物料",
        src: "./asset/pdf-images/page-3-image-5.png",
      },
      {
        type: "image",
        title: "AIGC 概念展览陈列",
        src: "./asset/pdf-images/page-3-image-6.png",
      },
    ],
  },
  {
    title: "本网页的开发日志",
    meta: "2026.06.01",
    description: "记录作品集从信息架构、统一视觉到内容接入的阶段性迭代。",
    logs: [
      {
        date: "2026.06.01",
        title: "粗开发 v1",
        detail: "确认网页大纲和四个模块结构，搭建首页入口、模块独立界面与项目主题机制。",
      },
      {
        date: "2026.06.01",
        title: "统一视觉规范",
        detail: "建立深蓝星空背景、半透明毛玻璃组件、渐变蓝标题和统一圆角规则。",
      },
      {
        date: "2026.06.01",
        title: "兴趣实验内容接入",
        detail: "从 PDF 中抽取文字与图片素材，接入本地视频、外链封面和展览现场图。",
      },
    ],
  },
];

export const labPage = {
  official: {
    heading: "01 AI 官方文宣",
    date: "2024.09 - 2026.02",
    intro:
      "曾与中央广播电视台、教育部新闻办公室、浙江大学宣传部等合作，开展AI相关的媒体物料创作工作。",
    works: [
      {
        kind: "VIDEO",
        title: "杜甫《月夜忆舍弟》\nAI视频——CCTV10",
        desc: "以AI呈现诗意画境，\n重温经典。",
        media: "./asset/兴趣实验/月夜忆舍弟封面.png",
        video: "./asset/兴趣实验/月夜忆舍弟.mp4",
      },
      {
        kind: "VIDEO",
        title: "小初衔接教育系列视频\n——微言教育",
        desc: "助力衔接，\n陪伴成长每一步。",
        media: "./asset/兴趣实验/小初衔接封面.png",
        video: "./asset/兴趣实验/小初学段衔接.mp4",
      },
      {
        kind: "LINK",
        title: "《东坡足迹》四部曲\n——微言教育",
        desc: "跟随东坡足迹，\n感悟人文之美。",
        media: "./asset/兴趣实验/ 《东坡足迹》四部曲封面.png",
        href: "https://weixin.qq.com/sph/AlPgb6d7aD",
      },
      {
        kind: "LINK",
        title: "浙江大学\n128周年庆",
        desc: "百年风华，求是创新，\n再创辉煌。",
        media: "./asset/兴趣实验/浙江大学128周年庆封面.png",
        href: "https://weixin.qq.com/sph/AMr3vmxCZ5",
      },
    ],
  },
  talk: {
    heading: "02 口播剪辑",
    date: "2025.08 - 2025.10",
    intro:
      "曾与创意书法艺术家朱敬一合作，制作口播视频，关注信息节奏、选题吸引力与视频传播表达。",
    works: [
      {
        kind: "LINK",
        title: "从“土味运动鞋”到巴黎时装周，\n安踏用艺术实现品牌升维的三大策略",
        desc: "品牌如何借助艺术完成价值跃迁。",
        media: "./asset/兴趣实验/从“土味运动鞋”到巴黎时装周.png",
        href: "https://v.douyin.com/MIWRZ1C6t7k/",
      },
      {
        kind: "LINK",
        title: "擦边艺术家如何征服奢侈品?\n空山基的商业密码",
        desc: "从争议到顶流的商业逻辑。",
        media: "./asset/兴趣实验/擦边艺术家如何征服奢侈品%3F.png",
        href: "https://weixin.qq.com/sph/ABNpYom2Ge",
      },
      {
        kind: "LINK",
        title: '天才少女靠"丧美学"征服全球!\nZ世代为什么疯狂追捧"丑艺术"?',
        desc: "丑美学背后的情绪共鸣。",
        media: "./asset/兴趣实验/天才少女靠%22丧美学%22征服全球!.png",
        href: "https://weixin.qq.com/sph/AsRWG210mH",
      },
    ],
  },
  aigc: {
    heading: "03 AI概念展览",
    date: "2024.06",
    intro:
      "杭州市西溪银泰城 1F，以 AI 纸质物料与 AI 创作体验为主体，线下概念展览。",
    cards: [
      {
        title: "AIGC 物料",
        desc: "以AI视觉为核心，打造系列物料与周边，构建沉浸式氛围。",
        visual: "./asset/兴趣实验/jimeng-2026-06-04-4398-未命名项目.png",
        image: "./asset/兴趣实验/page-3-image-5.png",
      },
      {
        title: "AI 创作体验",
        desc: "提供AI生成工具与互动体验，观众可现场创作。",
        visual: "./asset/兴趣实验/jimeng-2026-06-04-2652-未命名项目.png",
        image: "./asset/兴趣实验/page-3-image-6.png",
      },
    ],
    banner: "./asset/兴趣实验/ChatGPT Image 2026年6月4日 11_03_50 (8).png",
  },
};
