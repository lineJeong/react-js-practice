import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <div
            className={classes.backdrop}
            onClick={props.onToggle || null}
          ></div>
          <div className={classes.modal}>{props.children}</div>
        </>,
        document.body
      )}
    </>
  );
}

export default Modal;
