import { useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import InputEdit from "./InputEdit";

const InputContainer = styled.div`
  &:not(:first-child) {
    margin-top: 1rem;
  }

  > label {
    display: inline-block;
    min-width: 50px;
    text-align: center;
  }
`;

function ClickToEdit() {
  const [name, setName] = useState("성이름");
  const [age, setAge] = useState(20);

  return (
    <>
      <InputContainer>
        <label>NAME</label>
        <InputEdit value={name} setValue={setName} />
      </InputContainer>
      <InputContainer>
        <label>AGE</label>
        <InputEdit value={age} setValue={setAge} />
      </InputContainer>
    </>
  );
}

export default ClickToEdit;
