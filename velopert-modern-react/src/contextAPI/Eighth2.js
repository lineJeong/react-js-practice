// Context가 꼭 전역적이어야 한다는 생각을 버리자 (2) - props (2)
import { useState } from "react";

function Item({ activeId, children, onSelect, id }) {
  const activeStyle = {
    backgroundColor: "black",
    color: "white",
  };
  const style = {
    cursor: "pointer",
    padding: "1rem",
  };
  const active = activeId === id;
  const onClick = () => onSelect(id);
  return (
    <div
      style={active ? { ...style, ...activeStyle } : style}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function Eighth2() {
  const [activeId, setActiveId] = useState(1);
  const items = [
    { id: 1, text: "Hello" },
    { id: 2, text: "World" },
    { id: 3, text: "React" },
  ];
  return (
    <div>
      {items.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          activeId={activeId}
          onSelect={setActiveId}
        >
          {item.text}
        </Item>
      ))}
    </div>
  );
}

export default Eighth2;
