import React, { memo, useContext } from "react";
import { UserDispatch } from "../pages/CustomHooks";
import { REMOVE_USER, TOGGLE_USER } from "../pages/UseReducer";

const User = memo(function User({ user }) {
  const dispatch = useContext(UserDispatch);

  const style = {
    cursor: "pointer",
    color: user.active ? "green" : "black",
  };

  return (
    <div>
      <b style={style}>{user.username}</b> <span>{user.email}</span>
      <button onClick={() => dispatch({ type: TOGGLE_USER, id: user.id })}>
        수정
      </button>
      <button onClick={() => dispatch({ type: REMOVE_USER, id: user.id })}>
        삭제
      </button>
    </div>
  );
});

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default memo(UserList);
