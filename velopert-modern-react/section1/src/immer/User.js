import { memo, useContext } from "react";
import { REMOVE_USER, TOGGLE_USER, UserDispatch } from "./Immer";

function User({ user }) {
  const dispatch = useContext(UserDispatch);
  const { id, username, email, active } = user;

  const style = {
    cursor: "pointer",
    color: active ? "green" : "black",
  };

  const onToggle = () => dispatch({ type: TOGGLE_USER, id });
  const onRemove = () => dispatch({ type: REMOVE_USER, id });

  return (
    <div>
      <strong style={style} onClick={onToggle}>
        {username}
      </strong>
      &nbsp;
      <span>{email}</span>
      <button onClick={onRemove}>삭제</button>
    </div>
  );
}

export default memo(User);
