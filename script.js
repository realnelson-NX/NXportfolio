const filterButtons = document.querySelectorAll(".filter-button");
const cards = document.querySelectorAll(".work-card");
const dialog = document.querySelector(".work-dialog");
const dialogVisual = document.querySelector(".dialog-visual");
const dialogType = document.querySelector(".dialog-type");
const dialogTitle = document.querySelector("#dialog-title");
const dialogDesc = document.querySelector(".dialog-desc");
const dialogClose = document.querySelector(".dialog-close");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    cards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

cards.forEach((card) => {
  const opener = card.querySelector(".work-open");
  const visual = card.querySelector(".work-visual");
  const type = card.querySelector(".work-type").textContent;
  const title = card.querySelector(".work-title").textContent;
  const desc = card.querySelector(".work-desc").textContent;

  opener.addEventListener("click", () => {
    dialogVisual.className = `dialog-visual ${visual.classList[1]}`;
    dialogType.textContent = type;
    dialogTitle.textContent = title;
    dialogDesc.textContent = desc;
    dialog.showModal();
  });
});

dialogClose.addEventListener("click", () => dialog.close());

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dialog.open) {
    dialog.close();
  }
});
