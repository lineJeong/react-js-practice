import { useState, useCallback } from "react";
import Box from "./Box";

function BoxContainer() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  // size 상태가 변경될 때만 함수를 새로 선언함
  // isDark 상태가 변경될 때는 함수를 재사용함
  const createBoxStyle = useCallback(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div style={{ background: isDark ? "black" : "white" }}>
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}

export default BoxContainer;
