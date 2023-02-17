import { forwardRef } from "react";

function MyInput(props, ref) {
  console.log("props: ", props);
  console.log("ref: ", ref);

  return <input ref={ref} />;
}

export default forwardRef(MyInput);

// ref는 prop이 아님! (ref라는 이름의 prop을 받아올 수 없음)
// 그래서 forwardRef를 이용해야 함!

// forwardRef를 쓰지 않을 시, ref가 아닌 다른 이름의 prop으로 전달해도 작동은 하지만 리액트에서는 forwardRef를 사용하기를 권장함

// forwardRef를 사용해서 자녀의 DOM 노드에 접근한다는 것은,
// 자녀 컴포넌트의 캡슐화에 대한 장점을 없애는 일이므로 남발하지 않도록 해야한다.
