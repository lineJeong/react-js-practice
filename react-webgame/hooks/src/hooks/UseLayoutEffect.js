import React, { useLayoutEffect, useState } from "react";

function UseLayoutEffect() {
  const [name, setName] = useState("");

  // useEffect 사용 시, 2번(초기값, set함수 실행 후의 값)의 paint가 발생할 때 화면 깜빡임 발생
  // useLayoutEffect는 화면을 그리기(paint) 전에 실행되므로 화면 깜빡임을 방지함
  useLayoutEffect(() => {
    setName("제로초");
  }, []);

  return (
    <div>
      <div>{name}</div>
      <div>{name}</div>
      <div>{name}</div>
      <div>{name}</div>
      <div>{name}</div>
    </div>
  );
}

export default UseLayoutEffect;
