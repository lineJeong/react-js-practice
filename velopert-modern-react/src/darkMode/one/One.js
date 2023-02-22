// 방법 1. Styled Components의 ThemeProvider 사용하기
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme } from "./themes";
import { GlobalStyle } from "./GlobalStyle";

function One() {
  const [theme, setTheme] = useState("light");
  const isDarkMode = theme === "dark";
  const toggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div>Current Mode: {theme}</div>
      <button onClick={toggle}>Toggle</button>
    </ThemeProvider>
  );
}

export default One;

// 문제점 : SSR과 hydration

// SSR을 사용한다면, 서버에서는 처음 사이트를 방문한 사용자에게 라이트 모드를 보여줘야 할지 다크 모드를 보여줘야 할지 알지 못함 (시스템 다크 모드가 설정이 어떻게 돼있는지 모르기 때문)

// 사용자가 처음 사이트를 방문 했을 때,
// 초반에는 라이트 모드로 렌더링을 하고, 사용자 브라우저에서 JS로 상태를 확인하여 쿠키에 넣어줘야 함
// 한번 라이트 모드로 보여졌다가 JS 로딩 후 다크 모드로 보여주기 때문에 사용자는 화면이 한번 깜빡이는 느낌을 받게 됨
