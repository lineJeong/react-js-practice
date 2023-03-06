import React, { useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  const toggleParagraphHandler = () => {
    setShowParagraph((prev) => !prev);
  };

  // 가상 스냅샷 간(변경 전, 후)의 차이점만 Real DOM에 반영
  // real DOM에서는 DemoOutput의 <p> 요소만 변경되지만, App 컴포넌트에서 상태 관리를 하고 있기 때문에 App 컴포넌트도 재실행, 재평가가 발생함
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
