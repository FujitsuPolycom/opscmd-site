const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector("[data-form-status]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "Thanks. This demo form is ready to connect to a CRM or onboarding flow.";
    formStatus.classList.add("is-sent");
  });
}
