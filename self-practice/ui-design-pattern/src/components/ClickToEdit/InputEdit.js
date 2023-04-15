import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

const InputBox = styled.div`
  text-align: center;
  display: inline-block;
  width: 150px;
  height: 30px;
  border: 1px solid black;
  margin-left: 1rem;
  vertical-align: middle;

  > input {
    text-align: center;
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 16px;
  }

  > span {
    display: inline-block;
    line-height: 25px;
  }
`;

function InputEdit({ value, setValue }) {
  const inputRef = useRef(null);
  const [isEditable, setIsEditable] = useState(false);
  const [newValue, setNewValue] = useState(value);

  useEffect(() => {
    if (isEditable) {
      inputRef.current.focus();
    }
  }, [isEditable]);

  const inputClickHandler = () => {
    setIsEditable(true);
  };

  const inputChangeHandler = (e) => {
    setNewValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsEditable(false);
    setValue(newValue);
  };

  return (
    <InputBox onClick={inputClickHandler}>
      {isEditable ? (
        <input
          ref={inputRef}
          type="text"
          value={newValue}
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
        />
      ) : (
        <span>{value}</span>
      )}
    </InputBox>
  );
}

export default InputEdit;
