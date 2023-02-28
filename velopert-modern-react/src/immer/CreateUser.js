import { memo, useRef, useContext } from "react";
import { CREATE_USER, UserDispatch } from "./Immer";
import useInputs from "./hooks/useInputs";

function CreateUser() {
  const [{ username, email }, onChange, onReset] = useInputs({
    username: "",
    email: "",
  });
  const nextId = useRef(4);
  const dispatch = useContext(UserDispatch);

  const onCreate = () => {
    dispatch({
      type: CREATE_USER,
      user: {
        id: nextId.current,
        username,
        email,
      },
    });
    nextId.current += 1;
    onReset();
  };

  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        value={username}
        onChange={onChange}
      />
      <input
        name="email"
        placeholder="이메일"
        value={email}
        onChange={onChange}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default memo(CreateUser);
