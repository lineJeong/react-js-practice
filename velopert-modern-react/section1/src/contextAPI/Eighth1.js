// Context가 꼭 전역적이어야 한다는 생각을 버리자 (1) - props (1)
import { useState } from "react";

function Item({ active, children, onClick }) {
  const activeStyle = {
    backgroundColor: "black",
    color: "white",
  };
  const style = {
    cursor: "pointer",
    padding: "1rem",
  };

  return (
    <div
      style={active ? { ...style, ...activeStyle } : style}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function Eighth1() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div>
      <Item active={activeId === 1} onClick={() => setActiveId(1)}>
        Hello
      </Item>
      <Item active={activeId === 2} onClick={() => setActiveId(2)}>
        World
      </Item>
      <Item active={activeId === 3} onClick={() => setActiveId(3)}>
        React
      </Item>
    </div>
  );
}

export default Eighth1;
