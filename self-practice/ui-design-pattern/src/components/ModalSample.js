import { useState } from "react";
import styled from "styled-components";

import Modal from "./Modal";

const BlackButton = styled.button`
  background-color: black;
  color: white;
  padding: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
`;

const BlueButton = styled(BlackButton)`
  background-color: blue;
`;

const ModalSample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const oepnModalHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <BlackButton onClick={oepnModalHandler}>OPEN MODAL</BlackButton>
      <Modal isOpen={isOpen} onClose={oepnModalHandler}>
        <h2>Hello World!</h2>
        <BlueButton onClick={oepnModalHandler}>CLOSE</BlueButton>
      </Modal>
    </>
  );
};

export default ModalSample;
