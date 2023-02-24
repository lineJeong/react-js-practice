// 방법 2. CSS Variable 사용하기 (2)
// 초기 테마가 무엇이었는지 다음과 같이 조회
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

let mode = systemPrefersDark ? "dark" : "light";

function setTheme(theme) {
  mode = theme;
  document.body.dataset.theme = theme;
}

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  const nextMode = mode === "dark" ? "light" : "dark";
  setTheme(nextMode);
});
