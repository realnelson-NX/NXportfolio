const filterButtons = document.querySelectorAll(".filter-button");
const workSections = document.querySelectorAll(".work-category-block");
const cards = document.querySelectorAll(".work-card");
const dialog = document.querySelector(".work-dialog");
const dialogVisual = document.querySelector(".dialog-visual");
const dialogType = document.querySelector(".dialog-type");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDesc = document.querySelector(".dialog-desc");
const dialogVideoWrap = document.querySelector(".dialog-video-wrap");
const dialogVideo = document.querySelector(".dialog-video");
const dialogCaseStudy = document.querySelector(".dialog-case-study");
const dialogGallery = document.querySelector(".dialog-gallery");
const dialogNote = document.querySelector(".dialog-note");
const dialogClose = document.querySelector(".dialog-close");
const imageDialog = document.querySelector(".image-dialog");
const imageFull = document.querySelector(".image-full");
const imageCaption = document.querySelector(".image-caption");
const imageClose = document.querySelector(".image-close");
const imagePrev = document.querySelector(".image-prev");
const imageNext = document.querySelector(".image-next");

let activeGalleryItems = [];
let activeImageIndex = 0;

const galleries = {
  watchPhoto: Array.from({ length: 35 }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return {
      alt: `腕表产品拍摄作品 ${number}`,
      full: `assets/works/watch-photo/web/watch-${number}.jpg`,
      thumb: `assets/works/watch-photo/thumbs/watch-${number}.jpg`,
    };
  }),
  jewelryPhoto: Array.from({ length: 35 }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return {
      alt: `珠宝产品拍摄作品 ${number}`,
      full: `assets/works/jewelry-photo/web/jewelry-${number}.jpg`,
      thumb: `assets/works/jewelry-photo/thumbs/jewelry-${number}.jpg`,
    };
  }),
};

galleries.photoCollection = [
  { section: "腕表产品拍摄" },
  ...galleries.watchPhoto,
  { section: "珠宝产品拍摄" },
  ...galleries.jewelryPhoto,
];

const videos = {
  peraAgentX: {
    title: "《PERA AgentX 宣传片》",
    type: "AI 视频",
    desc:
      "主导国产工业软件企业安世亚太（CAE工程仿真与数字孪生领域）PERA Agent X 宣传项目，搭建从创意、脚本、AI视觉生成到剪辑交付的完整工作流。",
    src: "assets/works/video/AI视频/ai-video-01/ai-video-01.mp4",
    poster: "assets/works/video/AI视频/ai-video-01/ai-video-01-cover.png",
    caseStudy: {
      title: "让每一位 CAE 工程师，拥有自己的智能体团队",
      intro:
        "这支宣传片的核心任务，是把复杂、专业、抽象的 CAE 仿真工作流，转译成一个清晰可信的产品故事：PERA AgentX 不是替代工程师的 AI，而是协同工程师完成仿真流程的智能体团队。",
      meta: [
        ["项目类型", "B2B 产品宣传片 / AI 产品叙事 / CAE 工程仿真可视化"],
        ["我的工作", "创意策略、叙事结构、宣传片脚本、分镜脚本、视觉方向、AI 视频生成规划"],
        ["核心产出", "宣传片脚本、分镜方案、关键场景设计、AI 生成视频方向、成片展示素材"],
        ["成片时长", "约 100-120 秒"],
      ],
      sections: [
        {
          kicker: "Challenge",
          title: "把专业工程产品讲清楚",
          body:
            "CAE 仿真不是简单的软件操作，而是一连串工程判断：几何简化、模型假设、材料与载荷、边界条件、网格策略、求解设置、残差监控、结果验证和报告生成。宣传片需要让工程师觉得专业可信，也要让业务观众快速理解 AgentX 的价值。",
        },
        {
          kicker: "Strategy",
          title: "工程师主导判断，智能体辅助执行",
          body:
            "影片没有从“AI 很强大”开始，而是先展示工程师真实面对的复杂工作。AgentX 随后作为一支协同执行的智能体团队出现，帮助工程师把专业经验转化为可执行、可检查、可追溯、可复用的仿真流程。",
        },
        {
          kicker: "Narrative",
          title: "从复杂性到企业级沉淀",
          body:
            "叙事结构从工程师多窗口工作开始，进入判断链路出错、AgentX 介入、多智能体协同、自动诊断修复，最后扩展到企业级仿真能力网络。过程可追溯，结果可审查，经验可复用。",
        },
      ],
      process: [
        "项目需求",
        "创意策略",
        "脚本结构",
        "分镜设计",
        "关键画面",
        "AI 视频生成",
        "实机素材融合",
        "剪辑成片",
      ],
      images: [
        {
          src: "assets/works/video/AI视频/ai-video-01/case-study/case-01-hero.jpg",
          title: "首屏主视觉",
          caption: "以工程空间和产品主张建立第一眼识别。",
        },
        {
          src: "assets/works/video/AI视频/ai-video-01/case-study/case-02-workflow.jpg",
          title: "工程师多窗口工作",
          caption: "用 CAD、网格、残差、规范和报告窗口呈现 CAE 工作复杂性。",
        },
        {
          src: "assets/works/video/AI视频/ai-video-01/case-study/case-03-risk.jpg",
          title: "判断链路出错",
          caption: "把“仿真可信度”转化为直观的视觉冲突。",
        },
        {
          src: "assets/works/video/AI视频/ai-video-01/case-study/case-05-agents.jpg",
          title: "AgentX 多智能体节点",
          caption: "让观众一眼理解它不是聊天框，而是多智能体工作流。",
        },
        {
          src: "assets/works/video/AI视频/ai-video-01/case-study/case-06-diagnosis.jpg",
          title: "自动诊断与修复",
          caption: "展示求解异常监控、回溯参数和修复建议。",
        },
        {
          src: "assets/works/video/AI视频/ai-video-01/case-study/case-07-multitask.jpg",
          title: "多任务并行",
          caption: "表现工程师像项目负责人一样管理多个智能体任务。",
        },
        {
          src: "assets/works/video/AI视频/ai-video-01/case-study/case-08-enterprise.jpg",
          title: "企业级能力网络",
          caption: "从个人效率扩展到企业流程、模板和仿真资产沉淀。",
        },
        {
          src: "assets/works/video/AI视频/ai-video-01/case-study/case-09-report.jpg",
          title: "报告生成",
          caption: "让过程可追溯，结果可审查，经验可复用。",
        },
        {
          src: "assets/works/video/AI视频/ai-video-01/case-study/case-10-ending.jpg",
          title: "片尾产品主张",
          caption: "回到核心口号：给每位工程师，一个专属的智能体团队。",
        },
      ],
    },
  },
  keepHuman: {
    title: "《保持人类》",
    type: "AI 视频",
    desc: "个人作品，写给未来女儿的一封信，也是表达一种：人类和AI如何相处的思考。",
    src: "assets/works/video/AI视频/ai-video-02/ai-video-02.mp4",
    poster: "assets/works/video/AI视频/ai-video-02/ai-video-02-cover.jpg",
    caseStudy: {
      eyebrow: "Project Review",
      title: "保持人类 —— 写给未来女儿的一封信",
      intro:
        "在人工智能快速发展的时代，人们不断讨论技术将如何改变未来，却很少思考：当机器越来越像人，人该如何保持自己。《保持人类》是一部以未来为背景的个人实验短片。作品以一封父亲写给未来女儿的信为叙事线索，通过诗意化的视觉表达与内心独白，探讨技术进步、成长、自我认知与人性价值之间的关系。影片试图回答一个问题：当世界不断向效率与理性演进，人类最珍贵的东西究竟是什么。",
      meta: [
        ["项目类型", "AI原创短片 / 个人创作项目"],
        ["项目身份", "创意策划、脚本撰写、视觉设计、分镜设计、AI图像生成、AI视频制作、剪辑统筹"],
        ["项目周期", "个人持续创作项目"],
        ["成片时长", "约 3 分钟"],
        ["核心工具", "ChatGPT、Midjourney、Runway、可灵、即梦、Premiere Pro"],
        ["关键词", "成长、父女关系、AI时代、人性、记忆、未来"],
      ],
      sections: [
        {
          kicker: "01",
          title: "创作起点",
          body:
            "随着 AI 能力的快速发展，人们开始关注机器是否会拥有意识、情感与创造力。但比起机器会变成什么样，我更关心另一件事：如果未来的世界越来越智能，人是否会逐渐失去作为人的独特性。作为一名父亲，我试着将这种思考转化为一封写给未来女儿的信。希望在未来某一天，当她看到这段影像时，能够记得那些比知识与效率更重要的东西。",
        },
        {
          kicker: "02",
          title: "核心命题：保持人类",
          body:
            "影片的核心概念并非反对技术，而是重新思考人的价值。在未来，计算、记忆与分析可能都将被机器超越。真正难以被复制的，也许是好奇心、同理心、想象力、悲伤、爱与选择。因此，“保持人类”既是影片标题，也是整部作品试图传达的核心观点。",
        },
        {
          kicker: "03",
          title: "视觉语言探索",
          body:
            "影片采用“视频信件”作为叙事核心。父亲在当下录下一段影像，像一封留给未来女儿的信，也像一枚穿越时间的情感坐标。影片通过这段视频连接三个时间层：当下的父亲时间、女儿成年后的未来时间、以及女儿拥有自己孩子后的更远未来。影像并不只是线性地讲述父女关系，而是让时间形成一次回环：父亲在今天说出的话，被未来的女儿听见；而当她也成为母亲时，这段话又获得了新的意义。最终，影片回到父亲当下录制视频的时刻。这个结构让“保持人类”不只是父亲对女儿的叮嘱，也成为一种跨代传递的价值选择。它强调的不是未来科技本身，而是在技术不断进化的世界里，人类如何通过爱、记忆、理解与传承，继续确认自己仍然是人。",
        },
        {
          kicker: "04",
          title: "AI参与创作流程",
          body:
            "本项目尝试将 AI 作为创作伙伴而非简单工具。从概念讨论、脚本构建、视觉开发到镜头生成，AI 参与了整个创作流程。项目重点并非展示 AI 能力，而是在保证表达完整性的前提下，探索如何利用 AI 扩大个人创作者的创意边界。整个过程更像是一场人与机器共同完成的创作实验。",
        },
        {
          kicker: "05",
          title: "创作反思",
          body:
            "在制作过程中，我不断回到同一个问题：如果未来有一天，我的女儿拥有比我更多的知识、更强大的工具与更高效的能力，那么我真正希望留给她的是什么？最终我发现，答案并不是知识，而是保持感受世界的能力，保持对未知的好奇，保持对他人的善意，保持独立思考的勇气，以及在任何时代，都不失去成为一个完整的人的能力。",
        },
      ],
      processTitle: "从私人命题到个人实验短片",
      process: [
        "命题梳理",
        "信件叙事",
        "脚本撰写",
        "视觉设计",
        "分镜设计",
        "AI图像生成",
        "AI视频制作",
        "剪辑统筹",
      ],
      images: [],
      reflection: [
        "《保持人类》并不是一支关于技术答案的短片，而是一支关于人在技术时代如何继续成为自己的作品。",
        "对我来说，AI 不只是效率工具，也是一种新的创作语境。它让个人创作者能够更快抵达想象中的画面，但真正决定作品价值的，仍然是人提出的问题、保留的情感，以及愿意承担的表达。",
      ],
    },
  },
  aiVideo03: {
    title: "《这一次，说出口》",
    type: "AI 视频",
    desc: "AI视觉生成与动态影像作品",
    src: "assets/works/video/AI视频/ai-video-03/ai-video-03.mp4",
    poster: "assets/works/video/AI视频/ai-video-03/ai-video-03-cover.jpg",
  },
  aiVideo04: {
    title: "力量钻石五一劳动节视频",
    type: "AI 视频",
    desc: "AI视觉生成与动态影像作品",
    src: "assets/works/video/AI视频/ai-video-04/ai-video-04.mp4",
    poster: "assets/works/video/AI视频/ai-video-04/ai-video-04-cover.jpg",
  },
  aiVideo05: {
    title: "元宵节视频",
    type: "AI 视频",
    desc: "AI视觉生成与动态影像作品",
    src: "assets/works/video/AI视频/ai-video-05/ai-video-05.mp4",
    poster: "assets/works/video/AI视频/ai-video-05/ai-video-05-cover.jpg",
  },
  aiVideo06: {
    title: "圣诞节视频",
    type: "AI 视频",
    desc: "AI视觉生成与动态影像作品",
    src: "assets/works/video/AI视频/ai-video-06/ai-video-06-2.mp4",
    poster: "assets/works/video/AI视频/ai-video-06/ai-video-06-cover-2.jpg",
  },
  aiVideo07: {
    title: "母亲节视频",
    type: "AI 视频",
    desc: "AI视觉生成与动态影像作品",
    src: "assets/works/video/AI视频/ai-video-07/ai-video-07.mp4",
    poster: "assets/works/video/AI视频/ai-video-07/ai-video-07-cover.jpg",
  },
  aiVideo08: {
    title: "力量钻石--2026年春节视频",
    type: "AI 视频",
    desc: "AI视觉生成与动态影像作品",
    src: "assets/works/video/AI视频/ai-video-08/ai-video-08.mp4",
    poster: "assets/works/video/AI视频/ai-video-08/ai-video-08-cover.jpg",
  },
  aiVideo09: {
    title: "力量钻石胸针展示视频",
    type: "AI 视频",
    desc: "AI视觉生成与动态影像作品",
    src: "assets/works/video/AI视频/ai-video-09/ai-video-09.mp4",
    poster: "assets/works/video/AI视频/ai-video-09/ai-video-09-cover.jpg",
  },
  aiVideo10: {
    title: "2025年中秋节视频",
    type: "AI 视频",
    desc: "AI视觉生成与动态影像作品",
    src: "assets/works/video/AI视频/ai-video-10/ai-video-10.mp4",
    poster: "assets/works/video/AI视频/ai-video-10/ai-video-10-cover.jpg",
  },
};

const videoGalleries = {
  watchVideos: Array.from({ length: 9 }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return {
      title: `腕表视频 ${number}`,
      type: "视频拍摄",
      desc: "腕表产品视频作品，呈现微距运动、机械细节与节奏化剪辑。",
      src: `assets/works/video/watch-video/watch-video-${number}/watch-video-${number}.mp4`,
      poster: `assets/works/video/watch-video/watch-video-${number}/watch-video-${number}-cover.jpg`,
    };
  }),
  jewelryVideos: Array.from({ length: 6 }, (_, index) => {
    const number = String(index + 1).padStart(2, "0");
    return {
      title: `珠宝视频 ${number}`,
      type: "视频拍摄",
      desc: "珠宝产品视频作品，呈现光影流动、材质细节与短片化视觉表达。",
      src: `assets/works/video/jewelry-video/jewelry-video-${number}/jewelry-video-${number}.mp4`,
      poster: `assets/works/video/jewelry-video/jewelry-video-${number}/jewelry-video-${number}-cover.jpg`,
    };
  }),
  tvcVideos: [
    {
      title: "TVC广告 01",
      type: "视频拍摄",
      desc: "品牌广告与商业短片作品。",
      src: "assets/works/video/TVC广告/tvc-01/tvc-01.mp4",
      poster: "assets/works/video/TVC广告/tvc-01/tvc-01-cover.jpg",
    },
    {
      title: "TVC广告 02",
      type: "视频拍摄",
      desc: "品牌广告与商业短片作品。",
      src: "assets/works/video/TVC广告/tvc-02/tvc-02.mp4",
      poster: "assets/works/video/TVC广告/tvc-02/tvc-02-cover.jpg",
    },
    {
      title: "TVC广告 03",
      type: "视频拍摄",
      desc: "品牌广告与商业短片作品。",
      src: "assets/works/video/TVC广告/tvc-03/tvc-03.mp4",
      poster: "assets/works/video/TVC广告/tvc-03/tvc-03-cover.jpg",
    },
    {
      title: "TVC广告 04",
      type: "视频拍摄",
      desc: "品牌广告与商业短片作品。",
      src: "assets/works/video/TVC广告/tvc-04/tvc-04.mov",
      poster: "assets/works/video/TVC广告/tvc-04/tvc-04-cover.jpg",
    },
    {
      title: "TVC广告 05",
      type: "视频拍摄",
      desc: "品牌广告与商业短片作品。",
      src: "assets/works/video/TVC广告/tvc-05/tvc-05.mp4",
      poster: "assets/works/video/TVC广告/tvc-05/tvc-05-cover.jpg",
    },
    {
      title: "TVC广告 06",
      type: "视频拍摄",
      desc: "品牌广告与商业短片作品。",
      src: "assets/works/video/TVC广告/tvc-06/tvc-06.mp4",
      poster: "assets/works/video/TVC广告/tvc-06/tvc-06-cover.jpg",
    },
    {
      title: "TVC广告 07",
      type: "视频拍摄",
      desc: "品牌广告与商业短片作品。",
      src: "assets/works/video/TVC广告/tvc-07/tvc-07.mp4",
      poster: "assets/works/video/TVC广告/tvc-07/tvc-07-cover.jpg",
    },
    {
      title: "TVC广告 08",
      type: "视频拍摄",
      desc: "品牌广告与商业短片作品。",
      src: "assets/works/video/TVC广告/tvc-08/藏岁原创饼盒成品.mp4",
      poster: "assets/works/video/TVC广告/tvc-08/tvc-08-cover.jpg",
    },
  ],
};

videoGalleries.videoCollection = [
  { section: "腕表视频" },
  ...videoGalleries.watchVideos,
  { section: "珠宝视频" },
  ...videoGalleries.jewelryVideos,
  { section: "TVC广告" },
  ...videoGalleries.tvcVideos,
];

function appendTextElement(parent, tagName, className, text) {
  const element = document.createElement(tagName);
  if (className) element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
}

function renderCaseStudy(caseStudy) {
  dialogCaseStudy.innerHTML = "";

  if (!caseStudy) return;

  const hero = document.createElement("section");
  hero.className = "case-hero";
  appendTextElement(hero, "p", "eyebrow", caseStudy.eyebrow || "Case Study");
  appendTextElement(hero, "h3", "", caseStudy.title);
  appendTextElement(hero, "p", "case-lead", caseStudy.intro);
  dialogCaseStudy.append(hero);

  const metaGrid = document.createElement("dl");
  metaGrid.className = "case-meta-grid";
  caseStudy.meta.forEach(([label, value]) => {
    const item = document.createElement("div");
    appendTextElement(item, "dt", "", label);
    appendTextElement(item, "dd", "", value);
    metaGrid.append(item);
  });
  dialogCaseStudy.append(metaGrid);

  const sections = document.createElement("div");
  sections.className = "case-section-grid";
  caseStudy.sections.forEach((section) => {
    const article = document.createElement("article");
    article.className = "case-section";
    appendTextElement(article, "span", "case-kicker", section.kicker);
    appendTextElement(article, "h3", "", section.title);
    appendTextElement(article, "p", "", section.body);
    sections.append(article);
  });
  dialogCaseStudy.append(sections);

  const process = document.createElement("section");
  process.className = "case-process";
  appendTextElement(process, "p", "eyebrow", caseStudy.processEyebrow || "Production Pipeline");
  appendTextElement(process, "h3", "", caseStudy.processTitle || "从需求到成片的制作路径");
  const processList = document.createElement("ol");
  caseStudy.process.forEach((step) => {
    appendTextElement(processList, "li", "", step);
  });
  process.append(processList);
  dialogCaseStudy.append(process);

  if (caseStudy.images?.length) {
    const imageSection = document.createElement("section");
    imageSection.className = "case-images-section";
    appendTextElement(imageSection, "p", "eyebrow", caseStudy.imagesEyebrow || "Key Frames");
    appendTextElement(imageSection, "h3", "", caseStudy.imagesTitle || "关键画面");

    const imageGrid = document.createElement("div");
    imageGrid.className = "case-image-grid";
    const imageItems = caseStudy.images.map((image) => ({
      alt: image.title,
      full: image.src,
    }));

    caseStudy.images.forEach((image, index) => {
      const button = document.createElement("button");
      const img = document.createElement("img");

      button.className = "case-image";
      button.type = "button";
      button.setAttribute("aria-label", `查看${image.title}`);
      img.src = image.src;
      img.alt = image.title;
      img.loading = "lazy";

      button.append(img);
      appendTextElement(button, "span", "case-image-title", image.title);
      appendTextElement(button, "span", "case-image-caption", image.caption);
      button.addEventListener("click", () => openGalleryImage(imageItems, index));
      imageGrid.append(button);
    });

    imageSection.append(imageGrid);
    dialogCaseStudy.append(imageSection);
  }

  const reflection = document.createElement("section");
  reflection.className = "case-reflection";
  appendTextElement(reflection, "p", "eyebrow", caseStudy.reflectionEyebrow || "Reflection");
  const reflectionText =
    caseStudy.reflection ||
    "这个项目的重点不是把 AI 表达得多炫，而是把一个专业工程产品讲得足够清楚。AgentX 的价值被放回具体工作流中：理解任务、检查模型、配置参数、监控求解、诊断异常、生成报告，并沉淀可复用流程。";
  const reflectionParagraphs = Array.isArray(reflectionText) ? reflectionText : [reflectionText];
  reflectionParagraphs.forEach((paragraph) => {
    appendTextElement(reflection, "p", "", paragraph);
  });
  dialogCaseStudy.append(reflection);
}

function setActiveGalleryImage(items, activeIndex) {
  const item = items[activeIndex];
  activeGalleryItems = items;
  activeImageIndex = activeIndex;
  imageFull.src = item.full;
  imageFull.alt = item.alt;
  imageCaption.textContent = `${item.alt} / ${activeIndex + 1} of ${items.length}`;

  dialogGallery.querySelectorAll(".gallery-thumb").forEach((button, index) => {
    button.classList.toggle("is-active", index === activeIndex);
  });
}

function openGalleryImage(items, activeIndex) {
  setActiveGalleryImage(items, activeIndex);
  imageDialog.showModal();
}

function stepGalleryImage(direction) {
  if (!activeGalleryItems.length) return;
  const nextIndex =
    (activeImageIndex + direction + activeGalleryItems.length) % activeGalleryItems.length;
  setActiveGalleryImage(activeGalleryItems, nextIndex);
}

function loadDialogVideo(videoItem) {
  dialogVideo.pause();
  dialogVideo.src = videoItem.src;
  dialogVideo.poster = videoItem.poster;
  dialogVideo.load();
  dialogType.textContent = videoItem.type;
  dialogTitle.textContent = videoItem.title;
  dialogDesc.textContent = videoItem.desc;
}

function focusDialogVideo() {
  dialog.scrollTo({ top: 0, behavior: "smooth" });
  dialogVideoWrap.scrollIntoView({ behavior: "smooth", block: "start" });
  dialogVideo.play().catch(() => {});
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    workSections.forEach((section) => {
      const shouldShow = filter === "all" || section.dataset.category === filter;
      section.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

cards.forEach((card) => {
  const opener = card.querySelector(".work-open");
  const visual = card.querySelector(".work-visual");
  const galleryName = visual.dataset.gallery;
  const videoName = visual.dataset.video;
  const videoGalleryName = visual.dataset.videoGallery;
  const type = card.querySelector(".work-type").textContent;
  const title = card.querySelector(".work-title").textContent;
  const desc = card.querySelector(".work-desc").textContent;

  opener.addEventListener("click", () => {
    const galleryItems = galleries[galleryName] || [];
    const videoItem = videos[videoName];
    const videoGalleryItems = videoGalleries[videoGalleryName] || [];

    dialogVisual.className = `dialog-visual ${visual.classList[1]}`;
    dialogVisual.style.backgroundImage = "";
    dialogGallery.innerHTML = "";
    dialogCaseStudy.innerHTML = "";
    dialogVideo.pause();
    dialogVideo.removeAttribute("src");
    dialogVideo.removeAttribute("poster");
    dialogVideo.load();
    dialogType.textContent = videoItem?.type || type;
    dialogTitle.textContent = videoItem?.title || title;
    dialogDesc.textContent = videoItem?.desc || desc;
    dialog.classList.toggle("has-gallery", galleryItems.length > 0 || videoGalleryItems.length > 0);
    dialog.classList.toggle("has-video", Boolean(videoItem));
    dialog.classList.toggle("has-case-study", Boolean(videoItem?.caseStudy));

    if (videoItem) {
      loadDialogVideo(videoItem);
      renderCaseStudy(videoItem.caseStudy);
      dialogNote.textContent = videoItem.caseStudy
        ? "点击关键画面可放大查看。"
        : "点击播放器即可播放或暂停视频。";
    } else if (videoGalleryItems.length) {
      dialogNote.textContent = "点击任意缩略图，可在上方播放器查看对应视频。";
    } else {
      dialogNote.textContent = galleryItems.length
        ? "点击任意缩略图，可进入单张大图查看界面。"
        : "这里可以替换为真实作品说明、拍摄年份、客户名称、设备参数或视频链接。";
    }

    if (galleryItems.length) {
      const imageItems = galleryItems.filter((item) => !item.section);

      galleryItems.forEach((item) => {
        if (item.section) {
          const heading = document.createElement("h3");
          heading.className = "gallery-section-title";
          heading.textContent = item.section;
          dialogGallery.append(heading);
          return;
        }

        const button = document.createElement("button");
        const image = document.createElement("img");
        const imageIndex = imageItems.indexOf(item);

        button.className = "gallery-thumb";
        button.type = "button";
        button.setAttribute("aria-label", `查看${item.alt}`);
        image.src = item.thumb;
        image.alt = item.alt;
        image.loading = "lazy";

        button.append(image);
        button.addEventListener("click", () => openGalleryImage(imageItems, imageIndex));
        dialogGallery.append(button);
      });
    }

    if (videoGalleryItems.length) {
      const playableVideoItems = videoGalleryItems.filter((item) => !item.section);

      videoGalleryItems.forEach((item) => {
        if (item.section) {
          const heading = document.createElement("h3");
          heading.className = "gallery-section-title";
          heading.textContent = item.section;
          dialogGallery.append(heading);
          return;
        }

        const button = document.createElement("button");
        const image = document.createElement("img");
        const videoIndex = playableVideoItems.indexOf(item);

        button.className = "gallery-thumb video-thumb";
        button.type = "button";
        button.setAttribute("aria-label", `播放${item.title}`);
        image.src = item.poster;
        image.alt = item.title;
        image.loading = "lazy";

        button.append(image);
        button.addEventListener("click", () => {
          dialog.classList.add("has-video");
          loadDialogVideo(item);
          focusDialogVideo();
          dialogGallery.querySelectorAll(".gallery-thumb").forEach((thumb, thumbIndex) => {
            thumb.classList.toggle("is-active", thumbIndex === videoIndex);
          });
        });
        dialogGallery.append(button);
      });
    }

    dialog.showModal();
  });
});

dialogClose.addEventListener("click", () => dialog.close());
imageClose.addEventListener("click", () => imageDialog.close());
imagePrev.addEventListener("click", () => stepGalleryImage(-1));
imageNext.addEventListener("click", () => stepGalleryImage(1));

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

dialog.addEventListener("close", () => {
  dialogVideo.pause();
});

imageDialog.addEventListener("click", (event) => {
  if (event.target === imageDialog) {
    imageDialog.close();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" && imageDialog.open) {
    stepGalleryImage(-1);
  }

  if (event.key === "ArrowRight" && imageDialog.open) {
    stepGalleryImage(1);
  }

  if (event.key === "Escape") {
    if (imageDialog.open) {
      imageDialog.close();
    } else if (dialog.open) {
      dialog.close();
    }
  }
});
