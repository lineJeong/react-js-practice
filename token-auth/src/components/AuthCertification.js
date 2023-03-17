import { useNavigate } from "react-router-dom";

import useInput from "../hooks/useInput";
import * as validateAuth from "../util/validateAuth";
import * as authApi from "../api/auth";

import classes from "./AuthCertification.module.css";
import Modal from "./UI/Modal";

function AuthCertification(props) {
  const navigate = useNavigate();

  const {
    value: authNumberValue,
    isValid: authNumberIsValid,
    hasError: authNumberHasError,
    inputChangeHandler: authNumberChangeHandler,
    inputBlurHandler: authNumberBlurHandler,
    reset: resetAuthNumber,
  } = useInput(validateAuth.validateAuthNumber);

  let formIsValid = false;
  if (authNumberIsValid && props.emailIsValid) {
    formIsValid = true;
  }

  const authNumberSubmissionHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    const authConfirmReqBody = {
      email: props.emailValue,
      authNumber: authNumberValue,
    };

    try {
      const response = await authApi.confirmAuthNumber(authConfirmReqBody);
      if (response.status === 200) {
        resetAuthNumber();
        props.resetForm();
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Modal>
      <form
        className={classes["form-control"]}
        onSubmit={authNumberSubmissionHandler}
      >
        <div className={classes["input-control"]}>
          <label htmlFor="email-modal">이메일</label>
          <input
            id="email-modal"
            type="email"
            value={props.emailValue}
            disabled
          />
        </div>
        <div className={classes["input-control"]}>
          <label htmlFor="certification">인증번호</label>
          <input
            id="certification"
            type="text"
            value={authNumberValue}
            onChange={authNumberChangeHandler}
            onBlur={authNumberBlurHandler}
          />
          {authNumberHasError && <p>인증번호를 입력해주세요.</p>}
        </div>
        <div className={classes["form-actions"]}>
          <button type="button" onClick={props.toggleModal}>
            취소하기
          </button>
          <button disabled={!formIsValid}>회원가입</button>
        </div>
      </form>
    </Modal>
  );
}

export default AuthCertification;
