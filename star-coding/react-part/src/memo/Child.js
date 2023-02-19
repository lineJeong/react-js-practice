import { memo } from "react";

function Child({ name, CallMe }) {
  console.log("자식 컴포넌트 랜더링");

  return (
    <div style={{ border: "2px solid powderblue", padding: "10px" }}>
      <h3>자녀</h3>
      <p>이름: {name}</p>
      <button onClick={CallMe}>홍길동 부르기</button>
      {/* <p>성: {name.lastName}</p>
      <p>이름: {name.firstName}</p> */}
    </div>
  );
}

export default memo(Child);
