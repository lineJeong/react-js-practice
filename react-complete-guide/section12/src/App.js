import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  const toggleParagraphHandler = () => {
    setShowParagraph((prev) => !prev);
  };

  // 가상 스냅샷 간(변경 전, 후)의 차이점만 real DOM에 반영
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
