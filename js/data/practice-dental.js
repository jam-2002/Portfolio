export const practiceDentalCase = {
  title: "AI 产品实践",
  branches: [
    {
      number: "01",
      title: "AI + 口腔医疗",
      subtitle: "Looper自助口扫器",
      status: "active",
      href: "#practice-dental",
      image: "./asset/产品实践/ChatGPT Image 2026年6月8日 15_31_29 1.png",
      cardImage: "./asset/产品实践/Group 37.png",
    },
    {
      number: "02",
      title: "AI + 青少年教育",
      subtitle: "十万个为什么AI问答卡牌",
      status: "inactive",
      href: "#practice-education",
      cardImage: "./asset/产品实践/Group 38.png",
    },
  ],
  hero: {
    titleLead: "Looper",
    title: "自助口腔扫描器",
    descriptionHtml:
      "自主口腔扫描器项目，帮助患者在候诊时自助采集口腔数据，大幅提升医生诊疗效率。<span class=\"practice-metric\">1.5 个月</span>内完成产品闭环，落地<span class=\"practice-metric\"> 3 家</span>医院测试，单次诊疗流程缩短约<span class=\"practice-metric\"> 30 min</span>。",
    tags: ["ToB产品", "智能诊疗", "自助口扫", "口腔五视图"],
    productImage: "./asset/产品实践/ChatGPT Image 2026年6月8日 15_31_29 1.png",
    productImageAlt: "./asset/产品实践/ChatGPT Image 2026年6月8日 16_37_19 1.png",
    info: [
      { icon: "circle-user-round", label: "职位", value: "实习 ｜ AI产品经理" },
      { icon: "building-2", label: "公司", value: "朝厚信息科技有限公司" },
      { icon: "clock-9", label: "时间", value: "2024/10-2025/01" },
    ],
  },
  sections: [
    {
      number: "01",
      title: "需求分析",
      kind: "analysis",
      body: {
        label: "项目背景",
        text:
          "需求来自甲方公司正雅。\n在传统口腔诊疗流程中，患者的影像需要由医生使用专业设备采集，高度依赖医护人员操作，影响诊疗效率。因此，希望通过一款自助式口腔扫描设备，让患者自行完成口腔数据采集，帮助医生快速获得资料。",
        scenario: "门诊大厅 / 候诊区等诊疗起点",
        cards: [
          {
            icon: "./asset/产品实践/jimeng-2026-06-08-8978-未命名项目 1.png",
            title: "自助操作",
            desc: "面向非专业用户",
          },
          {
            icon: "./asset/产品实践/jimeng-2026-06-08-8978-未命名项目 3.png",
            title: "用户匹配",
            desc: "多年龄、体型",
          },
          {
            icon: "./asset/产品实践/jimeng-2026-06-08-8978-未命名项目 2.png",
            imageClass: "is-lower",
            title: "数据留存",
            desc: "数据分类与存储",
          },
          {
            icon: "./asset/产品实践/jimeng-2026-06-08-8978-未命名项目 4.png",
            title: "选限设置",
            desc: "多角色权限管理",
          },
        ],
      },
    },
    {
      number: "02",
      title: "功能定义",
      kind: "definition",
      body: {
        hardware: {
          title: "硬件功能定义",
          target: "核心目标：为患者自助完成口腔扫描提供操作载体",
          image: "./asset/产品实践/Group 39.png",
          imageHasLabels: true,
          items: [
            ["承载电子屏", "展示操作流程、动作提示、拍摄反馈等"],
            ["屏幕高度与角度调节", "考虑不同用户的体态差异，支持调节，提升可达性"],
            ["承载口腔扫描手持设备", "支持用户拾取手持设备，并将采集数据同步至软件系统"],
            ["使用方式示意", "提供站立位置、握持方式和操作姿态提示"],
          ],
        },
        software: {
          title: "软件功能定义",
          target: "核心目标：引导用户使用手持设备完成口腔五视角图像拍摄",
          image: "./asset/产品实践/Group 23.png",
          items: [
            ["基础信息与口腔信息录入", "引导用户绑定基础身份信息、拍摄口腔五视图"],
            ["操作错误指引", "当用户出现操作中断等问题时，给出明确提示"],
            ["用户权限区分", "区分使用者权限：患者、医护人员、管理员"],
            ["患者数据流转逻辑", "数据身份绑定、数据同步方式与路径设定"],
            ["数据类型判别", "判断采集是否有效、标记不完整数据、设置数据留存规则"],
          ],
        },
      },
    },
    {
      number: "03",
      title: "产品设计",
      kind: "design",
      body: {
        flowTitle: "产品动线设计",
        flowDesc:
          "基于功能定义，规划 Looper 的完整用户动线图，明确功能板块之间的逻辑关系、板块细分功能和基础交互等。",
        flow: [
          {
            icon: "./asset/产品实践/jimeng-2026-06-08-6033-未命名项目 2.png",
            title: "进入设备首页",
          },
          {
            icon: "./asset/产品实践/jimeng-2026-06-08-6033-未命名项目 3.png",
            title: "填写或绑定\n基础身份信息",
          },
          {
            icon: "./asset/产品实践/jimeng-2026-06-08-6033-未命名项目 4.png",
            title: "进入口腔\n五视角图像采集",
          },
          {
            icon: "./asset/产品实践/jimeng-2026-06-08-6033-未命名项目 5.png",
            title: "操作错误时\n重新采集",
          },
          {
            icon: "./asset/产品实践/jimeng-2026-06-08-6033-未命名项目 6.png",
            title: "完成采集\n并确认结果",
          },
          {
            icon: "./asset/产品实践/jimeng-2026-06-08-6033-未命名项目 7.png",
            title: "数据同步至\n医院系统和主治医生",
          },
        ],
        cards: [
          {
            title: "交互设计与原型测评",
            iconBlocks: [
              {
                icon: "brush",
                label: "设计",
                text: "绘制低保真原型，还原页面结构、操作路径等。",
              },
              {
                icon: "arrow-left-right",
                label: "对齐",
                text: "拉通设计组和技术组进行功能与交互可行性对齐。",
              },
            ],
            note: "在该项目中，个人参与并完成1/2的高保真界面工作",
          },
          {
            title: "PRD 文档撰写",
            lead: "详细描述功能模块和交互动作的底层逻辑",
            detail:
              "功能目标｜入口与触发条件｜输入数据｜判断逻辑｜输出结果｜异常状态｜验收标准｜开发优先级",
          },
          {
            title: "产品开发",
            text: "根据项目进度要求，跟进开发进展，协调小修",
          },
          {
            title: "数据埋点设计",
            text: "多维埋点表格，覆盖关键页面和交互动作。",
            metrics: [
              "埋点ID ：唯一编号",
              "用户ID ：用户在系统中的编号",
              "用户角色：患者/医护人员/管理员",
              "所属模块：首页、身份绑定、扫描流程、后台管理等",
              "事件名称：“点击开始扫描”“完成正面视角采集”",
              "触发条件：用户点击、页面曝光、设备返回结果等",
              "... ...",
            ],
          },
        ],
      },
    },
    {
      number: "04",
      title: "产品上线与迭代",
      kind: "launch",
      body: {
        flowTitle: "产品上线测试",
        flow: [
          {
            icon: "./asset/产品实践/image 4.png",
            title: "测试环境链接",
            desc: "开发提供测试权限",
          },
          {
            icon: "./asset/产品实践/image 5.png",
            title: "完成流程测试",
            desc: "核心流程、关键场景",
          },
          {
            icon: "./asset/产品实践/image 6.png",
            title: "BUG记录",
            desc: "记录问题与复现信息",
          },
          {
            icon: "./asset/产品实践/image 7.png",
            title: "开发修复",
            desc: "定位问题并修复",
          },
          {
            icon: "./asset/产品实践/image 8.png",
            title: "回归测试",
            desc: "验证修复结果与稳定性",
          },
          {
            icon: "./asset/产品实践/image 9.png",
            title: "版本发布",
            desc: "修复完成 发布上线",
          },
        ],
        maintenanceTitle: "产品迭代与需求维护",
        maintenanceDesc:
          "为提高后续版本迭代效率，构建了需求维护表格，用于记录测试过程中发现的BUG、体验优化点、新增需求。",
        tableHead:
          "提出时间 ｜ 需求来源 ｜ 问题类型 ｜ 所属模块 ｜ 问题说明 ｜ 图片 / 视频材料 ｜ 优先级 ｜ 负责人 ｜ 是否确认 ｜ 当前状态 ｜ 计划版本",
      },
    },
  ],
};
