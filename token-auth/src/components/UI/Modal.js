import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const clickBackdropHandler = (e) => {
    if (e.target === e.currentTarget) onClose();
  };
  const hasBackDropHandler = onClose ? clickBackdropHandler : null;

  return (
    <>
      {createPortal(
        <div className={classes.backdrop} onClick={hasBackDropHandler}>
          <div className={classes.modal}>{children}</div>
        </div>,
        document.body
      )}
    </>
  );
}

export default Modal;
