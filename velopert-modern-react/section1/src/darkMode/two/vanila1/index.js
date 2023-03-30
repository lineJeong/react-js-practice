// 방법 2. CSS Variable 사용하기 (1)
let mode = "light";
function setTheme(theme) {
  mode = theme;
  document.body.dataset.theme = theme;
}

setTheme("light");

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  const nextMode = mode === "light" ? "dark" : "light";
  setTheme(nextMode);
});
