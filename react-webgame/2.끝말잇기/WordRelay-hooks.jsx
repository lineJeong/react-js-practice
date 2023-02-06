const React = require("react");
const { useState, useRef } = React;

const WordRelayHooks = () => {
  const [word, setWord] = useState("제시어");
  // const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === e.target.children.wordInput.value[0]) {
      // setWord(value);
      setWord(e.target.children.wordInput.value);
      setResult("딩동댕");
    } else {
      setResult("땡");
    }
    // setValue("");
    e.target.children.wordInput.value = "";
    inputRef.current.focus();
  };

  // const onChangeInput = (e) => {
  //   setValue(e.currentTarget.value);
  // };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="wordInput">글자를 입력하세요.</label>
        {/* 언컨트롤드 인풋 */}
        <input id="wordInput" ref={inputRef} type="text" />
        {/* 컨트롤드 인풋 */}
        {/* <input
          id="wordInput"
          className="wordInput"
          ref={inputRef}
          type="text"
          value={value}
          onChange={onChangeInput}
        /> */}
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelayHooks;
