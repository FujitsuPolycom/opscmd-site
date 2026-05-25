const themeButtons = Array.from(document.querySelectorAll("[data-theme-choice]"));
const copyTargets = Array.from(document.querySelectorAll("[data-copy]"));
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector("[data-form-status]");
const year = document.querySelector("[data-year]");

const versions = {
  community: {
    eyebrow: "Local-first IT automation",
    headline: "Local IT helper. Safe fix buttons.",
    lede: "See what broke, what changed, what is risky, and what can be safely fixed.",
    primaryCta: "See the features",
    panelTitle: "What OpsCMD does",
    panelOne: "Finds broken checks.",
    panelTwo: "Explains risky changes.",
    panelThree: "Runs approved fixes.",
    featureOneLabel: "Daily brief",
    featureOneTitle: "What broke?",
    featureOneBody: "A plain-English view of failures, risk, approvals, and recent fixes.",
    featureTwoLabel: "Safe actions",
    featureTwoTitle: "Fix the boring stuff",
    featureTwoBody: "Agents ask for tools. The local gateway checks policy before anything runs.",
    featureThreeLabel: "Proof",
    featureThreeTitle: "Show the work",
    featureThreeBody: "Reports, evidence, approvals, and audit history for owners and clients.",
    ctaEyebrow: "Recommended start",
    ctaTitle: "Run Community first. Add hosted proof when it matters.",
    ctaBody:
      "The free appliance should be useful on its own. Paid OpsCMD should sell reports, history, convenience, connector packs, support, and scale."
  },
  hosted: {
    eyebrow: "Paid hosting for reports and visibility",
    headline: "Hosted reports, alerts, and proof.",
    lede:
      "Keep local execution local. Add hosted alerts, daily brief history, branded reports, evidence, and multi-site visibility.",
    primaryCta: "View hosted value",
    panelTitle: "Hosted adds",
    panelOne: "Email and web alerts.",
    panelTwo: "Report history.",
    panelThree: "MSP-ready proof.",
    featureOneLabel: "Lite",
    featureOneTitle: "Status and alerts",
    featureOneBody: "Low monthly hosted visibility for one site without running another server.",
    featureTwoLabel: "Solo IT",
    featureTwoTitle: "Daily proof",
    featureTwoBody: "Scheduled reports, alert history, and owner-ready summaries.",
    featureThreeLabel: "MSP",
    featureThreeTitle: "Multi-client view",
    featureThreeBody: "Branded reports, client history, and proof of work across sites.",
    ctaEyebrow: "Hosted path",
    ctaTitle: "Charge for proof, reporting, alerts, and history.",
    ctaBody:
      "Hosted without inference should be the default. Hosted inference can be an add-on, while the local gateway still approves every action."
  },
  appliance: {
    eyebrow: "Optional prebuilt OpsCMD boxes",
    headline: "Plug-in OpsCMD boxes.",
    lede:
      "Run OpsCMD locally, on a VPS, or on a prebuilt box. Add local inference only for privacy-heavy or offline-heavy sites.",
    primaryCta: "View appliance options",
    panelTitle: "Appliance options",
    panelOne: "Self-hosted image.",
    panelTwo: "Prebuilt small box.",
    panelThree: "GPU inference model.",
    featureOneLabel: "Standard",
    featureOneTitle: "Plug-in local box",
    featureOneBody: "Known-good mini PC, Debian, Docker, encrypted disk, and OpsCMD preinstalled.",
    featureTwoLabel: "VPS",
    featureTwoTitle: "Self-hosted cloud",
    featureTwoBody: "Run an offsite dashboard, archive, or lightweight control plane on your own VPS.",
    featureThreeLabel: "Private AI",
    featureThreeTitle: "Local inference option",
    featureThreeBody: "Use a local GPU or customer-hosted model when cloud inference is not acceptable.",
    ctaEyebrow: "Appliance path",
    ctaTitle: "Hardware is optional. Local-first is not.",
    ctaBody:
      "Appliances should make deployment easier, but OpsCMD must always support self-hosted installs, VPS installs, and swappable model providers."
  }
};

if (year) {
  year.textContent = String(new Date().getFullYear());
}

function setTheme(theme) {
  const version = versions[theme] || versions.community;
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
    setTheme(button.dataset.themeChoice || "community");
  });
});

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Thanks. This demo form is ready to connect to a CRM or onboarding flow.";
    formStatus.classList.add("is-sent");
  });
}

setTheme(window.localStorage.getItem("opscmd-site-theme") || "community");
