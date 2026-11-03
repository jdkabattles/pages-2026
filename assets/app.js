// Shared enhancement for the draft guide pages. No tracking, no cookies,
// no external requests. Theme only is stored, in localStorage.
// Article text stays in the light DOM so it remains readable and indexable
// with JavaScript disabled; this script only adds buttons and a theme toggle.
const state = { theme: "system", reduced: false, ready: false };
const THEMES = ["system", "light", "dark"];
const yieldToMain = async () => {
  if (typeof scheduler !== "undefined" && scheduler.yield) {
    await scheduler.yield();
  } else {
    await new Promise((r) => setTimeout(r, 0));
  }
};
const applyTheme = () => {
  const root = document.documentElement;
  if (state.theme === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", state.theme);
  }
  const btn = document.querySelector("[data-theme-toggle]");
  if (btn) btn.textContent = "Theme: " + state.theme;
};
const loadTheme = () => {
  try {
    const saved = localStorage.getItem("guide-theme");
    if (THEMES.includes(saved)) state.theme = saved;
  } catch (_) { /* storage unavailable: stay on system theme */ }
  applyTheme();
};
const slug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "section";
const addCopyButtons = async () => {
  const heads = [...document.querySelectorAll("article h2, guide-card h2")];
  for (const h of heads) {
    if (!h.id) h.id = slug(h.textContent);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-link";
    btn.dataset.copyLink = "#" + h.id;
    btn.textContent = "Copy link";
    h.append(btn);
    await yieldToMain();
  }
};
const syncDetails = () => {
  document.querySelectorAll("details").forEach((d) => {
    const s = d.querySelector("summary");
    if (s) s.setAttribute("aria-expanded", d.open ? "true" : "false");
  });
};
class GuideCard extends HTMLElement {
  connectedCallback() {
    // Intentionally no shadow DOM: card text must stay in the light DOM.
    this.setAttribute("data-guide-card", "");
  }
}
if (!customElements.get("guide-card")) customElements.define("guide-card", GuideCard);
document.addEventListener("click", async (ev) => {
  const themeBtn = ev.target.closest("[data-theme-toggle]");
  if (themeBtn) {
    state.theme = THEMES[(THEMES.indexOf(state.theme) + 1) % THEMES.length];
    try { localStorage.setItem("guide-theme", state.theme); } catch (_) {}
    applyTheme();
    return;
  }
  const topBtn = ev.target.closest("[data-to-top]");
  if (topBtn) {
    window.scrollTo({ top: 0, behavior: state.reduced ? "auto" : "smooth" });
    return;
  }
  const copyBtn = ev.target.closest("[data-copy-link]");
  if (copyBtn) {
    const url = location.origin + location.pathname + copyBtn.dataset.copyLink;
    try { await navigator.clipboard.writeText(url); } catch (_) { location.hash = copyBtn.dataset.copyLink; }
    copyBtn.textContent = "Copied";
    setTimeout(() => { copyBtn.textContent = "Copy link"; }, 1500);
    return;
  }
  const summary = ev.target.closest("details > summary");
  if (summary) setTimeout(syncDetails, 0);
});
const sentinel = document.getElementById("top-sentinel");
const topBtn = document.querySelector("[data-to-top]");
if (sentinel && topBtn && "IntersectionObserver" in window) {
  new IntersectionObserver(([e]) => { topBtn.hidden = e.isIntersecting; }).observe(sentinel);
} else if (topBtn) {
  topBtn.hidden = false;
}
state.reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
loadTheme();
syncDetails();
addCopyButtons();
state.ready = true;
