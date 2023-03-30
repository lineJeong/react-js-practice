import React, { useEffect, memo } from "react";

const User = memo(function User({ user, onToggle, onRemove }) {
  // useEffect 안에서 사용하는 상태나, props 가 있다면, useEffect 의 deps 에 넣어주어야 함
  // 그렇지 않으면 useEffect 에 등록한 함수가 실행 될 때 최신 props / 상태를 가르키지 않음
  useEffect(() => {
    // console.log("user 값이 설정됨");
    // console.log(user);
    // return () => {
    //   console.log("user가 바뀌기 전");
    //   console.log(user);
    // };
  }, [user]);

  const style = {
    cursor: "pointer",
    color: user.active ? "green" : "black",
  };

  return (
    <div>
      <b style={style}>{user.username}</b> <span>{user.email}</span>
      <button onClick={() => onToggle(user.id)}>수정</button>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onToggle, onRemove }) {
  return (
    <div>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}

export default memo(UserList);
