// 방법 2. CSS Variable 사용하기 (3)
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

let mode = systemPrefersDark ? "dark" : "light";

function setTheme(theme) {
  mode = theme;
  document.body.dataset.theme = theme;
}

setTheme(mode);

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const nextMode = mode === "light" ? "dark" : "light";
  setTheme(nextMode);
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    setTheme(e.matches ? "dark" : "light");
  });
