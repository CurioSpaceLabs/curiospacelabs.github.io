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
    number: "00",
    name: "Gem",
    type: "Discord companion",
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
    number: "01",
    name: "C.A.P.T.C.H.A.",
    type: "Computer access",
    description:
      "Computer Access Protection through Triggered Camera & Human Analysis.",
    tags: ["Python", "Security", "Work in progress"],
    url: "",
  },
  {
    number: "02",
    name: "Project 3",
    type: "Computer vision",
    description:
      "Detects, tracks, and analyzes people in real-time even on crowded spaces and only one camera feed.",
    tags: ["Safety", "Security", "Under development"],
    url: "",
  },
  {
    number: "03",
    name: "VerID",
    type: "---",
    description: "A standardized identity verification system.",
    tags: ["Verification", "Upcoming demo"],
    url: "",
  },
  {
    number: "04",
    name: "Serene AI",
    type: "AI chatbot",
    description: "An AI chatbot focused on mental health and safety.",
    tags: ["AI", "Health", "Safety", "Planned"],
    url: "",
  },
  {
    number: "05",
    name: "Project 6",
    type: "Social media",
    description: "---",
    tags: ["Social", "Lifestyle", "Under planning"],
    url: "",
  },
  {
    number: "06",
    name: "Project 7",
    type: "Study tutor",
    description: "---",
    tags: ["Education", "AI", "Free", "Under planning"],
    url: "",
  },
  {
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
const arrow = '<span aria-hidden="true">↗</span>';
const projectCard = (project, compact = false) => {
  const safeProject = ensureProjectVisual({ ...project });
  const useLogoFallback = safeProject.logo && !safeProject.image;
  const visualMarkup = safeProject.image
    ? `<div class="project-visual project-visual--image"><img src="${safeProject.image}" alt="${safeProject.name} preview" onerror="this.style.display='none'; this.parentElement.querySelector('.fallback-star').style.opacity='1';" /><span class="visual-mark asset-mark"><span class="fallback-star">✳</span></span></div>`
    : `<div class="project-visual ${safeProject.visual}"><span class="visual-index">${safeProject.number}</span>${useLogoFallback ? `<span class="visual-mark asset-mark"><img src="${safeProject.logo}" alt="${safeProject.name} logo" onerror="this.style.display='none'; this.parentElement.querySelector('.fallback-star').style.opacity='1';" /><span class="fallback-star">✳</span></span>` : `<span class="visual-mark asset-mark visual-mark--fallback"><span class="fallback-star">✳</span></span>`}<div class="visual-lines"></div></div>`;

  return `
    <article class="project-card ${compact ? "project-card--compact" : ""}">
      ${visualMarkup}
      <div class="project-info"><div><p class="eyebrow">${safeProject.type}</p><h3>${safeProject.name}</h3></div><p class="project-description">${safeProject.description}</p><div class="project-footer"><div class="tag-list">${safeProject.tags.map((tag) => `<span>${tag}</span>`).join("")}</div><a class="text-link" href="${safeProject.url}" target="_blank" rel="noreferrer">View ${arrow}</a></div></div>
    </article>`;
};

const header = (active) =>
  `<header class="site-header"><a href="/" class="wordmark"><span class="wordmark-symbol asset-mark"><img src="/assets/logo.png" alt="" onerror="this.style.display='none'; this.parentElement.querySelector('.fallback-star').style.opacity='1';" /><span class="fallback-star">✳</span></span><span>CurioSpace<br /><em>Labs</em></span></a><nav class="site-nav" id="primary-navigation">${[
    ["home", "Index", "/"],
    ["projects", "Projects", "/projects"],
    ["about", "About", "/about"],
  ]
    .map(
      ([key, label, href]) =>
        `<a class="${active === key ? "active" : ""}" href="${href}">${label}</a>`,
    )
    .join(
      "",
    )}</nav><a class="header-contact" href="mailto:curiospace.labs@gmail.com">Say hello ${arrow}</a><button class="menu-toggle" type="button" aria-label="Open navigation menu" aria-expanded="false" aria-controls="primary-navigation"><span></span><span></span><span></span></button></header>`;
const footer = `<footer class="site-footer"><div class="footer-top"><div class="footer-title">Let’s build<br /><span>something impactful.</span></div><a class="round-link" href="mailto:curiospace.labs@gmail.com">Start a conversation ↗</a></div><div class="footer-bottom"><span>© 2026 CurioSpace Labs</span><span>Curiosity · Creativity · Progress · Impact</span><div class="footer-links"><a href="mailto:curiospace.labs@gmail.com" target="_blank" rel="noreferrer">Email</a><a href="https://github.com/CurioSpaceLabs" target="_blank" rel="noreferrer">GitHub</a><a href="https://discord.com/users/1399691329671266304" target="_blank" rel="noreferrer">Discord</a></div></div></footer>`;

const homePage = `<main><section class="hero section-grid"><div class="hero-copy"><p class="eyebrow reveal">Independent software studio <span class="pulse-dot"></span> Est. 2026</p><h1 class="reveal">We build<br /><span>room to think.</span></h1><p class="hero-intro reveal">CurioSpace Labs makes digital tools for curious people — the kind that turn complexity into clarity and everyday work into a little more possibility.</p><a class="button-link reveal" href="/projects">Explore our work ${arrow}</a></div><div class="hero-art reveal"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="orbit-core">C<br /><span>S</span></div><div class="art-caption">A small studio<br />with a wide orbit</div><span class="art-coord">34° 01' N<br />118° 29' W</span></div></section><section class="intro-strip section-grid"><p class="eyebrow">What we do</p><div class="intro-text"><p>We partner with ambitious teams to imagine, shape, and ship digital products that feel obvious in hindsight.</p><a class="text-link" href="/about">More about us ${arrow}</a></div></section><section class="work-section section-grid"><div class="section-heading"><p class="eyebrow">Selected work</p><a class="text-link" href="/projects">View all projects ${arrow}</a></div><div class="project-grid project-grid--home">${projects
  .slice(0, 3)
  .map((project) => projectCard(project))
  .join(
    "",
  )}</div></section><section class="manifesto section-grid"><p class="eyebrow">Our philosophy</p><blockquote>“The best tools don’t ask for your attention. They give it back.”</blockquote><p class="manifesto-signature">Colossians 3:23 (NIV)</p></section></main>${footer}`;
const projectsPage = `<main><section class="page-hero section-grid"><p class="eyebrow">The archive</p><h1>Things we’ve<br /><span>made curious.</span></h1><p class="page-intro">A selection of products, experiments, and places we’ve helped bring to life. Some are out in the world. Some are still becoming.</p></section><section class="archive section-grid"><div class="archive-toolbar"><span>07 projects</span><span>Sorted by: <strong>newest-latest</strong> ↕</span></div><div class="project-grid project-grid--archive">${projects.map((project) => projectCard(project, true)).join("")}</div></section></main>${footer}`;
const aboutPage = `<main><section class="page-hero about-hero section-grid"><p class="eyebrow">About the lab / Since 2025</p><h1>Stay curious.<br /><span>Build carefully.</span></h1><p class="page-intro">CurioSpace is an independent software studio for the in-between spaces: where a question becomes a product, where a messy system becomes a clear one, where technology starts to feel human.</p></section><section class="about-body section-grid"><div class="about-aside"><p class="eyebrow">About us</p><div class="about-stamp asset-mark"><img src="/assets/none.png" alt="" onerror="this.style.display='none'; this.parentElement.querySelector('.fallback-star').style.opacity='1';" /><span class="fallback-star">✳</span><small><br />hello!</small></div></div><div class="about-copy"><p>We started CurioSpace because we believe the world has enough software that demands more from us. More clicks. More context switching. More urgency disguised as progress.</p><p>We’re interested in the opposite: tools that create a little more space. Space to notice, to decide, to make the work your own. We work across product strategy, experience design, and engineering to make that space real.</p><div class="principles"><div><span>01</span><h3>Ask better questions</h3><p>Before we reach for an answer, we find the question underneath it.</p></div><div><span>02</span><h3>Make the complex clear</h3><p>Good design doesn’t oversimplify. It helps people see what matters.</p></div><div><span>03</span><h3>Leave room for surprise</h3><p>The most memorable details are rarely the ones in the brief.</p></div></div></div></section><section class="about-cta section-grid"><p class="eyebrow">Let’s explore</p><div><h2>Have a good question?</h2><a class="button-link" href="mailto:hello@curiospace.studio">Say hello ↗</a></div></section></main>${footer}`;

document.querySelector("#app").innerHTML =
  `${header(page)}${page === "home" ? homePage : page === "projects" ? projectsPage : aboutPage}`;

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const closeMenu = () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
  siteNav.classList.remove("is-open");
};

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute(
    "aria-label",
    isExpanded ? "Open navigation menu" : "Close navigation menu",
  );
  siteNav.classList.toggle("is-open", !isExpanded);
});
siteNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

document.querySelector(".hero-art")?.remove();

if (page === "home") {
  const hero = document.querySelector(".hero-copy");
  hero.querySelector(".eyebrow").innerHTML =
    'Curiosity / Creativity / Progress / Impact <span class="pulse-dot"></span> CurioSpace Labs';
  hero.querySelector("h1").innerHTML =
    "Building software<br /><span>that starts with curiosity</span>";
  hero.querySelector(".hero-intro").textContent =
    "CurioSpace Labs is an indie software studio aiming to create real impact through curiosity and creativity.";
  hero.querySelector(".button-link").textContent = "View projects ↗";
  document.querySelector(".intro-text > p").textContent =
    "We build desktop applications, web projects, Discord bots, and other useful or delightfully silly experiments from scratch that most importantly does good for the people.";
  document.querySelector(".manifesto blockquote").textContent =
    "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.";
}

if (page === "about") {
  document.querySelector(".site-footer .footer-top")?.remove();
  document.querySelector(".page-hero h1").innerHTML =
    "A little about<br /><span>CurioSpace<br />Labs.</span>";
  document.querySelector(".page-intro").textContent =
    "CurioSpace Labs is an indie software studio aiming to create real impact through curiosity and creativity. (Formerly CtrlAltSpace Productions.)";
  document.querySelector(".about-copy").innerHTML = `
    <p>CurioSpace Labs is an indie studio currently operated by a student, building projects driven by curiosity and creativity.</p>
    <p>We mostly enjoy building silly stuff, but we make sure there is still an impact to take from it. We build for the fun of it and for the people around us, because software is more meaningful when it gives something back to its environment.</p>
    <p>We believe that curiosity is the best starting point for any project. It might not be good, but you have to take risks. Without it, every project will just eventually be similar to each other.</p>
    <p>Creativity is also important. It helps make the project better, unique, and original. Here, we just let our mind flow and do whatever we want to make, this is what powers us.</p>
    <p>Every project starts from scratch. We plan with curiosity, use AI tools when they help us think through unfamiliar challenges, and keep learning through the process of building, debugging, and publishing.</p>
    <div class="principles"><div><span>01</span><h3>Curiosity first</h3><p>Questions are where every useful experiment begins.</p></div><div><span>02</span><h3>Develop with creativity</h3><p>Creativity is the key to making projects unique and impactful.</p></div><div><span>03</span><h3>Make it matter</h3><p>Even silly projects should leave people with something.</p></div><div><span>04</span><h3>Keep progressing</h3><p>Start small, learn in public, and keep shipping.</p></div></div>
    <div class="toolkit"><p class="eyebrow">Our toolkit</p><div class="toolkit-grid"><div><h3>Languages</h3><p>Python · HTML · CSS · JavaScript</p></div><div><h3>Technologies & libraries</h3><p>Node.js · Discord.py · PyQt6 · Flask · SQLite · Vite</p></div><div><h3>Tools & platforms</h3><p>VS Code · Git · GitHub · Netlify · Wasmer · GitHub Copilot · Codex</p></div></div></div>`;
  document.querySelector(".about-cta h2").textContent =
    "Let's build something together.";
  document.querySelector(".about-cta .button-link").href =
    "mailto:curiospace.labs@gmail.com";
}

if (page === "projects") {
  document.querySelector(".page-hero h1").innerHTML =
    "Our<br /><span>works.</span>";
  document.querySelector(".page-intro").textContent =
    "Desktop applications, web projects, Discord bots, and experiments built from scratch and published for impact.";
}

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
