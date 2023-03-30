import React from "react";

// 컴포넌트 태그 사이에 넣은 값을 조회하고 싶을 땐, props.children 을 조회
function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: "16px",
    marginTop: "40px",
    marginBottom: "40px",
  };

  return <div style={style}>{children}</div>;
}

export default Wrapper;
