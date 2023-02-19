import { useState, useCallback } from "react";
import Child from "./Child";

function Parent() {
  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  };

  console.log("부모 컴포넌트 랜더링");

  // useMemo
  // const name = useMemo(
  //   () => ({
  //     lastName: "홍",
  //     firstName: "길동",
  //   }),
  //   []
  // );

  // useCallback
  const CallMe = useCallback(() => {
    console.log("홍길동!!!!!!!!");
  }, []);

  return (
    <div style={{ border: "2px solid navy", padding: "10px" }}>
      <h1>부모</h1>
      <p>age: {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={"홍길동"} CallMe={CallMe} />
    </div>
  );
}

export default Parent;
