import { useRef } from "react";
import MyInput from "./MyInput";

function ForwardRef() {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={focus}>포커스</button>
    </div>
  );
}

export default ForwardRef;
