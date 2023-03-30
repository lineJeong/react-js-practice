import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const [results, setResults] = useState({
    name: "",
    nickname: "",
  });
  const nameInput = useRef();

  const { name, nickname } = results;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onSearch = () => {
    setResults(inputs);
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    setResults({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        ref={nameInput}
        name="name"
        placeholder="이름"
        onChange={onChange}
      />
      <input name="nickname" placeholder="닉네임" onChange={onChange} />
      <button onClick={onSearch}>검색</button>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
