import indonesianCopyText from "./translations/id.json";
import "./style.css";

const visualTypes = [
  "visual-aurora",
  "visual-cairn",
  "visual-orbit",
  "visual-lumen",
  "visual-field",
  "visual-morrow",
  "visual-nova",
  "visual-afterlight",
  "visual-noir",
];

const getRandomVisual = () =>
  visualTypes[Math.floor(Math.random() * visualTypes.length)];

const ensureProjectVisual = (project) => {
  if (!project.image && !project.visual) {
    project.visual = getRandomVisual();
  }
  return project;
};

const projects = [
  // {
  //   number: "00",
  //   name: "Example project",
  //   type: "Example using image",
  //   description: "This project uses a real image instead of the placeholder visual.",
  //   tags: ["Image", "Example"],
  //   image: "/assets/example-project.jpg",
  //   url: "#",
  // },
  // {
  //   number: "--",
  //   name: "Example project",
  //   type: "Example using random visual and logo",
  //   description: "This project uses a random visual with a logo.",
  //   tags: ["Random", "Visual", "Logo", "Example"],
  //   logo: "/assets/logo.png",
  //   url: "#",
  // },
  // {
  //   number: "--",
  //   name: "Example project",
  //   type: "Example using image",
  //   description: "This project uses a stated visual instead of an image.",
  //   tags: ["Visual", "Example"],
  //   visual: "visual-cairn",
  //   url: "#",
  // },
  {
    id: "gem",
    number: "00",
    name: "Gem",
    type: "Discord bot",
    description:
      "An AI assistant for brainstorming, answers, and smoother Discord conversations.",
    tags: ["Discord", "AI", "Live"],
    url: "https://discord.com/oauth2/authorize?client_id=1496119217366372402",
  },
  // {
  //   number: "01",
  //   name: "The Annoying Web",
  //   type: "Web experiment",
  //   description:
  //     "A silly, intentionally annoying website built for the fun of it.",
  //   tags: ["HTML", "JavaScript"],
  //   visual: "visual-orbit",
  //   url: "https://ctrlaltspace.github.io/the-annoying-web/",
  // },
  {
    id: "captcha",
    number: "01",
    name: "C.A.P.T.C.H.A.",
    type: "Access monitoring",
    description:
      "Computer Protection, Tracking & Camera-based Human Analysis",
    tags: ["Python", "Monitoring", "Auditing", "Access control", "Work in progress"],
    url: "https://github.com/CurioSpaceLabs/CAPTCHA",
  },
  {
    id: "project3",
    number: "02",
    name: "Project 3",
    type: "Crowd control",
    description:
      "Detects, tracks, and analyzes people in real-time even on crowded spaces and only one camera feed.",
    tags: ["Safety", "Security", "Under development"],
    url: "",
  },
  {
    id: "verid",
    number: "03",
    name: "VerID",
    type: "---",
    description: "A standardized identity verification system.",
    tags: ["Verification", "Upcoming demo"],
    url: "",
  },
  {
    id: "serene",
    number: "04",
    name: "Serene AI",
    type: "AI chatbot",
    description: "An AI chatbot focused on mental health and safety.",
    tags: ["AI", "Health", "Safety", "Planned"],
    url: "",
  },
  {
    id: "project6",
    number: "05",
    name: "Project 6",
    type: "Social media",
    description: "---",
    tags: ["Social", "Lifestyle", "Under planning"],
    url: "",
  },
  {
    id: "project7",
    number: "06",
    name: "Project 7",
    type: "Study tutor",
    description: "---",
    tags: ["Education", "AI", "Free", "Under planning"],
    url: "",
  },
  {
    id: "other",
    number: "--",
    name: "Other projects",
    type: "The wider archive",
    description:
      "The rest of the experiments, utilities, and curiosities in the lab.",
    tags: ["GitHub", "Archive", "Other"],
    url: "https://github.com/CurioSpaceLabs?tab=repositories",
  },
  
];

projects.forEach(ensureProjectVisual);

const path = window.location.pathname.replace(/\/+$/, "") || "/";
const knownPaths = ["/", "/projects", "/about"];

if (!knownPaths.includes(path)) {
  window.location.replace("/404.html");
}

const page =
  path === "/projects" ? "projects" : path === "/about" ? "about" : "home";
document.querySelector('link[rel="canonical"]').href =
  `https://curiospacelabs.github.io${path === "/" ? "/" : path}`;

const indonesianCopy = indonesianCopyText;
const translateCopy = (value) => {
  if (typeof value === "string") {
    return indonesianCopy[value] ?? value;
  }
  if (Array.isArray(value)) {
    return value.map(translateCopy);
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, text]) => [key, translateCopy(text)]),
    );
  }
  return value;
};
const copy = {
  en: {
    language: "Language",
    languageLabel: "Select language",
    nav: { home: "Home", projects: "Projects", about: "About", hello: "Say hello" },
    menuOpen: "Open navigation menu",
    menuClose: "Close navigation menu",
    view: "View",
    privacy: "Privacy Notice",
    footer: {
      title: "Let’s build<br /><span>something impactful.</span>",
      contact: "Start a conversation",
      email: "Email",
      values: "Curiosity · Creativity · Progress · Impact",
    },
    home: {
      eyebrow: "Curiosity / Creativity / Progress / Impact",
      title: "Building software<br /><span>that starts with curiosity</span>",
      intro:
        "CurioSpace Labs is an indie software studio aiming to create real impact through curiosity and creativity.",
      projects: "View projects",
      what: "What we do",
      description:
        "We build desktop applications, web projects, Discord bots, and other useful or delightfully silly experiments from scratch that most importantly do good for the people.",
      about: "More about us",
      selected: "Selected work",
      allProjects: "View all projects",
      philosophy: "Our philosophy",
      quote:
        "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.",
      verse: "Colossians 3:23 (NIV)",
    },
    projects: {
      eyebrow: "The archive",
      title: "Our<br /><span>works.</span>",
      intro:
        "Desktop applications, web projects, Discord bots, and experiments built from scratch and published for impact.",
      count: "07 projects",
      sorted: "Sorted by:",
      order: "newest-latest",
    },
    about: {
      eyebrow: "About the lab / Since 2025",
      title: "A little about<br /><span>CurioSpace<br />Labs.</span>",
      intro:
        "CurioSpace Labs is an indie software studio aiming to create real impact through curiosity and creativity. (Formerly CtrlAltSpace Productions.)",
      us: "About us",
      stamp: "hello!",
      paragraphs: [
        "CurioSpace Labs is an indie studio currently operated by a student, building projects driven by curiosity and creativity.",
        "We mostly enjoy building silly stuff, but we make sure there is still an impact to take from it. We build for the fun of it and for the people around us, because software is more meaningful when it gives something back to its environment.",
        "We believe that curiosity is the best starting point for any project. It might not be good, but you have to take risks. Without it, every project will just eventually be similar to each other.",
        "Creativity is also important. It helps make the project better, unique, and original. Here, we just let our mind flow and do whatever we want to make, this is what powers us.",
        "Every project starts from scratch. We plan with curiosity, use AI tools when they help us think through unfamiliar challenges, and keep learning through the process of building, debugging, and publishing.",
      ],
      principlesTitle: [
        "Curiosity first",
        "Develop with creativity",
        "Make it matter",
        "Keep progressing",
      ],
      principlesText: [
        "Questions are where every useful experiment begins.",
        "Creativity is the key to making projects unique and impactful.",
        "Even silly projects should leave people with something.",
        "Start small, learn in public, and keep shipping.",
      ],
      toolkit: "Our toolkit",
      languages: "Languages",
      technologies: "Technologies & libraries",
      tools: "Tools & platforms",
      ctaEyebrow: "Let’s explore",
      ctaTitle: "Let's build something together.",
      ctaButton: "Say hello",
    },
    projectInfo: {
      gem: ["Discord bot", "An AI assistant for brainstorming, answers, and smoother Discord conversations.", ["Discord", "AI", "Live"]],
      captcha: ["Acess monitoring", "Computer Access Protection through Triggered Camera & Human Analysis.", ["Python", "Monitoring", "Auditing", "Access control", "Work in progress"]],
      project3: ["Crowd control", "Detects, tracks, and analyzes people in real-time even on crowded spaces and only one camera feed.", ["Safety", "Security", "Under development"]],
      verid: ["---", "A standardized identity verification system.", ["Verification", "Upcoming demo"]],
      serene: ["AI chatbot", "An AI chatbot focused on mental health and safety.", ["AI", "Health", "Safety", "Planned"]],
      project6: ["Social media", "---", ["Social", "Lifestyle", "Under planning"]],
      project7: ["Study tutor", "---", ["Education", "AI", "Free", "Under planning"]],
      other: ["The wider archive", "The rest of the experiments, utilities, and curiosities in the lab.", ["GitHub", "Archive", "Other"]],
    },
  },
};
copy.id = translateCopy(copy.en);

const getSavedLanguage = () => {
  try {
    return localStorage.getItem("site-language") === "id" ? "id" : "en";
  } catch (error) {
    console.error("Unable to read the saved language preference.", error);
    return "en";
  }
};

let language = getSavedLanguage();
const arrow = '<span aria-hidden="true">↗</span>';

const projectCard = (project, compact = false) => {
  const safeProject = ensureProjectVisual({ ...project });
  const [type, description, tags] = copy[language].projectInfo[project.id];
  const useLogoFallback = safeProject.logo && !safeProject.image;
  const projectLink = safeProject.url
    ? `<a class="text-link" href="${safeProject.url}" target="_blank" rel="noreferrer">${copy[language].view} ${arrow}</a>`
    : `<span class="text-link project-link-disabled" aria-disabled="true">${copy[language].view} ${arrow}</span>`;
  const visualMarkup = safeProject.image
    ? `<div class="project-visual project-visual--image"><img src="${safeProject.image}" alt="${safeProject.name} preview" onerror="this.style.display='none'; this.parentElement.querySelector('.fallback-star').style.opacity='1';" /><span class="visual-mark asset-mark"><span class="fallback-star">✳</span></span></div>`
    : `<div class="project-visual ${safeProject.visual}"><span class="visual-index">${safeProject.number}</span>${useLogoFallback ? `<span class="visual-mark asset-mark"><img src="${safeProject.logo}" alt="${safeProject.name} logo" onerror="this.style.display='none'; this.parentElement.querySelector('.fallback-star').style.opacity='1';" /><span class="fallback-star">✳</span></span>` : `<span class="visual-mark asset-mark visual-mark--fallback"><span class="fallback-star">✳</span></span>`}<div class="visual-lines"></div></div>`;

  return `
    <article class="project-card ${compact ? "project-card--compact" : ""}">
      ${visualMarkup}
      <div class="project-info"><div><p class="eyebrow">${type}</p><h3>${safeProject.name}</h3></div><p class="project-description">${description}</p><div class="project-footer"><div class="tag-list">${tags.map((tag) => `<span>${tag}</span>`).join("")}</div>${projectLink}</div></div>
    </article>`;
};

const header = (active) => {
  const text = copy[language];
  return `<header class="site-header"><a href="/" class="wordmark"><span class="wordmark-symbol asset-mark"><img src="/assets/logo.png" alt="" onerror="this.style.display='none'; this.parentElement.querySelector('.fallback-star').style.opacity='1';" /><span class="fallback-star">✳</span></span><span>CurioSpace<br /><em>Labs</em></span></a><nav class="site-nav" id="primary-navigation">${[
    ["home", text.nav.home, "/"],
    ["projects", text.nav.projects, "/projects"],
    ["about", text.nav.about, "/about"],
  ]
    .map(
      ([key, label, href]) =>
        `<a class="${active === key ? "active" : ""}" href="${href}">${label}</a>`,
    )
    .join("")}</nav><label class="language-control"><span class="visually-hidden">${text.languageLabel}</span><select class="language-select" aria-label="${text.languageLabel}"><option value="en" ${language === "en" ? "selected" : ""}>English</option><option value="id" ${language === "id" ? "selected" : ""}>Bahasa Indonesia</option></select></label><button class="menu-toggle" type="button" aria-label="${text.menuOpen}" aria-expanded="false" aria-controls="primary-navigation"><span></span><span></span><span></span></button></header>`;
};

const footer = (showTop = true) => {
  const text = copy[language];
  const top = showTop
    ? `<div class="footer-top"><div class="footer-title">${text.footer.title}</div><a class="round-link" href="mailto:curiospace.labs@gmail.com">${text.footer.contact} ↗</a></div>`
    : "";
  return `<footer class="site-footer">${top}<div class="footer-bottom"><span>© 2026 CurioSpace Labs</span><span>${text.footer.values}</span><div class="footer-links"><a href="mailto:curiospace.labs@gmail.com" target="_blank" rel="noreferrer">${text.footer.email}</a><a href="https://github.com/CurioSpaceLabs" target="_blank" rel="noreferrer">GitHub</a><a href="https://discord.com/users/1399691329671266304" target="_blank" rel="noreferrer">Discord</a><a href="/privacy.html">${text.privacy}</a></div></div></footer>`;
};

const homePage = () => {
  const text = copy[language].home;
  return `<main><section class="hero section-grid"><div class="hero-copy"><p class="eyebrow reveal">${text.eyebrow} <span class="pulse-dot"></span> CurioSpace Labs</p><h1 class="reveal">${text.title}</h1><p class="hero-intro reveal">${text.intro}</p><a class="button-link reveal" href="/projects">${text.projects} ↗</a></div></section><section class="intro-strip section-grid"><p class="eyebrow">${text.what}</p><div class="intro-text"><p>${text.description}</p><a class="text-link" href="/about">${text.about} ${arrow}</a></div></section><section class="work-section section-grid"><div class="section-heading"><p class="eyebrow">${text.selected}</p><a class="text-link" href="/projects">${text.allProjects} ${arrow}</a></div><div class="project-grid project-grid--home">${projects.slice(0, 3).map((project) => projectCard(project)).join("")}</div></section><section class="manifesto section-grid"><p class="eyebrow">${text.philosophy}</p><blockquote>${text.quote}</blockquote><p class="manifesto-signature">${text.verse}</p></section></main>${footer()}`;
};

const projectsPage = () => {
  const text = copy[language].projects;
  return `<main><section class="page-hero section-grid"><p class="eyebrow">${text.eyebrow}</p><h1>${text.title}</h1><p class="page-intro">${text.intro}</p></section><section class="archive section-grid"><div class="archive-toolbar"><span>${text.count}</span><span>${text.sorted} <strong>${text.order}</strong> ↕</span></div><div class="project-grid project-grid--archive">${projects.map((project) => projectCard(project, true)).join("")}</div></section></main>${footer()}`;
};

const aboutPage = () => {
  const text = copy[language].about;
  const paragraphs = text.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
  const principles = text.principlesTitle
    .map(
      (title, index) =>
        `<div><span>${String(index + 1).padStart(2, "0")}</span><h3>${title}</h3><p>${text.principlesText[index]}</p></div>`,
    )
    .join("");
  return `<main><section class="page-hero about-hero section-grid"><p class="eyebrow">${text.eyebrow}</p><h1>${text.title}</h1><p class="page-intro">${text.intro}</p></section><section class="about-body section-grid"><div class="about-aside"><p class="eyebrow">${text.us}</p><div class="about-stamp asset-mark"><img src="/assets/none.png" alt="" onerror="this.style.display='none'; this.parentElement.querySelector('.fallback-star').style.opacity='1';" /><span class="fallback-star">✳</span><small><br />${text.stamp}</small></div></div><div class="about-copy">${paragraphs}<div class="principles">${principles}</div><div class="toolkit"><p class="eyebrow">${text.toolkit}</p><div class="toolkit-grid"><div><h3>${text.languages}</h3><p>Python · HTML · CSS · JavaScript</p></div><div><h3>${text.technologies}</h3><p>Node.js · Discord.py · PyQt6 · Flask · SQLite · Vite · OpenCV</p></div><div><h3>${text.tools}</h3><p>VS Code · Git · GitHub · Netlify · Wasmer · GitHub Copilot · Codex</p></div></div></div></div></section><section class="about-cta section-grid"><p class="eyebrow">${text.ctaEyebrow}</p><div><h2>${text.ctaTitle}</h2><a class="button-link" href="mailto:curiospace.labs@gmail.com">${text.ctaButton} ↗</a></div></section></main>${footer(false)}`;
};

document.documentElement.lang = language === "id" ? "id" : "en";
document.querySelector('meta[name="description"]').content =
  copy[language].home.intro;
document.title =
  page === "home"
    ? "CurioSpace Labs"
    : `${copy[language].nav[page]} — CurioSpace Labs`;
document.querySelector("#app").innerHTML = `${header(page)}${
  page === "home"
    ? homePage()
    : page === "projects"
      ? projectsPage()
      : aboutPage()
}`;

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const languageSelect = document.querySelector(".language-select");
const languageOptions = languageSelect.options;
const mobileLanguageQuery = window.matchMedia("(max-width: 760px)");
const updateLanguageOptionLabels = () => {
  languageOptions[0].textContent = mobileLanguageQuery.matches ? "EN" : "English";
  languageOptions[1].textContent = mobileLanguageQuery.matches
    ? "ID"
    : "Bahasa Indonesia";
};
updateLanguageOptionLabels();
mobileLanguageQuery.addEventListener("change", updateLanguageOptionLabels);

const closeMenu = () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", copy[language].menuOpen);
  siteNav.classList.remove("is-open");
};

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute(
    "aria-label",
    isExpanded ? copy[language].menuOpen : copy[language].menuClose,
  );
  siteNav.classList.toggle("is-open", !isExpanded);
});
siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

languageSelect.addEventListener("change", (event) => {
  try {
    localStorage.setItem("site-language", event.target.value);
    window.location.reload();
  } catch (error) {
    console.error("Unable to save the language preference.", error);
  }
});

if (
  "IntersectionObserver" in window &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const motionTargets = document.querySelectorAll(
    "main > section:not(.hero), .site-footer, .project-card",
  );
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );

  motionTargets.forEach((target, index) => {
    target.classList.add("motion-reveal");
    if (target.matches(".project-card")) {
      const cardIndex = [...target.parentElement.children].indexOf(target);
      target.style.setProperty("--reveal-delay", `${(cardIndex % 3) * 90}ms`);
    }
    observer.observe(target);
  });
}
