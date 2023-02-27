import React, { useContext } from "react";
import { UserDispatch } from "./Immer";

const User = React.memo(function User({ user }) {
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => {
          dispatch({ type: "TOGGLE_USER", id: user.id });
        }}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button
        onClick={() => {
          dispatch({ type: "REMOVE_USER", id: user.id });
        }}
      >
        삭제
      </button>
    </div>
  );
});

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default React.memo(UserList); // 두번째 파라미터를 지웠습니다
