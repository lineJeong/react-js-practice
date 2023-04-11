import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContents = styled.div`
  background-color: white;
  text-align: center;
  padding: 20px;
  z-index: 10;
  border-radius: 1rem;
  min-width: 20rem;
`;

function Modal({ isOpen, children, onClose }) {
  if (!isOpen) return null;

  const clickBackdropHandler = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <ModalBackdrop onClick={clickBackdropHandler}>
      <ModalContents>{children}</ModalContents>
    </ModalBackdrop>,
    document.body
  );
}

export default Modal;
