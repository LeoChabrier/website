// DOM helpers:
const el = (sel, par = document) => document.querySelector(sel);
const els = (sel, par = document) => document.querySelectorAll(sel);

const popup = (popupId) => {
  el(".popup.open")?.classList.remove("open"); // Close any opened 
  popupId && el(popupId).classList.add("open");
};

els("[data-popup]").forEach((elBtn) => {
  elBtn.addEventListener("click", (evt) => {
    if (evt.target.closest(".popup-content")) return;
    popup(elBtn.dataset.popup);
  });
});