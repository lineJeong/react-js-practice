import React from "react";

// map() 사용 시 Fragment에 key를 전달할 때
function Column() {
  const todoList = ["밥먹기", "코딩하기", "커피 먹기"];

  return (
    <>
      {todoList.map((todo, i) => (
        <React.Fragment key={i}>
          <td>{todo}</td>
          <td>{todo}</td>
        </React.Fragment>
      ))}
    </>
  );
}

export default Column;
