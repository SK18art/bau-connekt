const recipient = "r.khaki@bau-connekt.com";
const projectDialog = document.getElementById("project-dialog");

document.querySelectorAll("[data-open-project]").forEach((button) => {
  button.addEventListener("click", () => {
    if (typeof projectDialog.showModal === "function") {
      projectDialog.showModal();
    } else {
      window.location.href = `mailto:${recipient}`;
    }
  });
});

document.querySelector("[data-close-project]").addEventListener("click", () => {
  projectDialog.close();
});

projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) {
    projectDialog.close();
  }
});

document.querySelectorAll("[data-mail-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const lines = [];

    formData.forEach((value, key) => {
      const cleanValue = String(value).trim();
      if (cleanValue) {
        lines.push(`${key}: ${cleanValue}`);
      }
    });

    const subject = form.dataset.subject || "Anfrage über die Website";
    const body = lines.join("\n");
    window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
