import React from "react";

function Hello({ name, isSpecial }) {
  return (
    <div>
      {isSpecial && <b>*</b>} {name}
    </div>
  );
}

// 컴포넌트에 props를 지정하지 않았을 때 기본적으로 사용 할 값을 설정
Hello.defaultProps = {
  name: "name props 전달 X",
};

export default Hello;
