const themeButtons = Array.from(document.querySelectorAll("[data-theme-choice]"));
const copyTargets = Array.from(document.querySelectorAll("[data-copy]"));
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector("[data-form-status]");
const year = document.querySelector("[data-year]");

const versions = {
  simple: {
    eyebrow: "AI operations, under control",
    headline: "Safe AI operations for IT.",
    lede: "Run approved tools through a local gateway. Keep secrets protected. Audit every action.",
    primaryCta: "See the features",
    panelTitle: "Main features",
    panelOne: "Local gateway.",
    panelTwo: "Protected secrets.",
    panelThree: "Audit trail.",
    featureOneLabel: "Local",
    featureOneTitle: "Runs at the site",
    featureOneBody: "The Core can operate without a cloud control plane.",
    featureTwoLabel: "Controlled",
    featureTwoTitle: "Gateway approved",
    featureTwoBody: "Agents never receive domain admin passwords, SSH keys, or SaaS tokens.",
    featureThreeLabel: "Audited",
    featureThreeTitle: "Every action recorded",
    featureThreeBody: "Tool calls, approvals, actors, and results are kept for review.",
    ctaEyebrow: "Start small",
    ctaTitle: "Deploy one Core first.",
    ctaBody: "Prove safe local automation at one site, then add memory, agents, and Central when they are useful."
  },
  core: {
    eyebrow: "Standalone appliance for each site",
    headline: "Run a Core at every site.",
    lede: "FastAPI, dashboard, worker, database, tools, agents, secrets, backups, and audit logs in one portable Core.",
    primaryCta: "View Core basics",
    panelTitle: "Core appliance",
    panelOne: "Docker Compose runtime.",
    panelTwo: "Local network access.",
    panelThree: "Works without Central.",
    featureOneLabel: "Appliance",
    featureOneTitle: "Rebuildable by design",
    featureOneBody: "Runs on small Debian hardware or a hosted pilot environment.",
    featureTwoLabel: "Execution",
    featureTwoTitle: "Typed tool registry",
    featureTwoBody: "Network, Windows, SSH, AD, Graylog, PDQ, doctor, backup, and connector tools.",
    featureThreeLabel: "Controls",
    featureThreeTitle: "Tokens and approvals",
    featureThreeBody: "Low-risk reads can run fast. High-risk actions pause for approval.",
    ctaEyebrow: "Core first",
    ctaTitle: "Put the gateway close to the network.",
    ctaBody: "Start with one local Core, then add more sites only when the first one is useful."
  },
  central: {
    eyebrow: "Fleet view when you need it",
    headline: "Manage every Core from Central.",
    lede: "Central is optional. It adds visibility, templates, updates, and backup aggregation without making Cores dependent on it.",
    primaryCta: "See fleet model",
    panelTitle: "Central model",
    panelOne: "Cores keep running locally.",
    panelTwo: "Central aggregates health.",
    panelThree: "Policies and updates stay visible.",
    featureOneLabel: "Fleet",
    featureOneTitle: "Health in one place",
    featureOneBody: "See which Cores are online, degraded, backed up, or waiting for updates.",
    featureTwoLabel: "Templates",
    featureTwoTitle: "Reuse good defaults",
    featureTwoBody: "Push known-good policies, tool settings, and deployment templates.",
    featureThreeLabel: "Rollback",
    featureThreeTitle: "Safer updates",
    featureThreeBody: "Coordinate upgrades, backups, and recovery across a fleet.",
    ctaEyebrow: "Central later",
    ctaTitle: "Add fleet management after Core works.",
    ctaBody: "Central should make many Cores easier to manage, never become a requirement for one Core to operate."
  }
};

if (year) {
  year.textContent = String(new Date().getFullYear());
}

function setTheme(theme) {
  const version = versions[theme] || versions.simple;
  document.body.dataset.theme = theme;
  copyTargets.forEach((target) => {
    const key = target.dataset.copy;
    if (key && key in version) {
      target.textContent = version[key];
    }
  });
  themeButtons.forEach((button) => {
    const isActive = button.dataset.themeChoice === theme;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  window.localStorage.setItem("opscmd-site-theme", theme);
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setTheme(button.dataset.themeChoice || "simple");
  });
});

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Thanks. This demo form is ready to connect to a CRM or onboarding flow.";
    formStatus.classList.add("is-sent");
  });
}

setTheme(window.localStorage.getItem("opscmd-site-theme") || "simple");
