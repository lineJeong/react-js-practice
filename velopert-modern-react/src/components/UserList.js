import React from "react";

function User({ user, onRemove, onToggle }) {
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
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
