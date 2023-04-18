import { useNavigate, useLocation } from "react-router-dom";

import useInput from "../hooks/useInput";
import * as authValidation from "../util/authValidation";
import * as authApi from "../api/auth";

import classes from "./AuthCertification.module.css";

function AuthCertification(props) {
  const navigate = useNavigate();
  const { state } = useLocation();

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(authValidation.isNotEmpty);
  const {
    value: authNumberValue,
    isValid: authNumberIsValid,
    hasError: authNumberHasError,
    inputChangeHandler: authNumberChangeHandler,
    inputBlurHandler: authNumberBlurHandler,
  } = useInput(authValidation.isNotEmpty);

  let formIsValid = false;
  if (state) {
    if (authNumberIsValid && state.emailIsValid) {
      formIsValid = true;
    }
  } else {
    if (authNumberIsValid && emailIsValid) {
      formIsValid = true;
    }
  }

  const authNumberSubmissionHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    const authConfirmReqBody = {
      email: emailValue,
      authNumber: authNumberValue,
    };

    try {
      const response = await authApi.confirmAuthNumber(authConfirmReqBody);
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      className={classes["form-control"]}
      onSubmit={authNumberSubmissionHandler}
    >
      <div className={classes["input-control"]}>
        <label htmlFor="email-modal">이메일</label>
        <input
          id="email-modal"
          type="email"
          value={state ? state.emailValue : emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          disabled={state}
        />
        {!state && emailHasError && <p>유효한 이메일 양식을 입력해주세요.</p>}
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
        <button disabled={!formIsValid}>회원가입 완료</button>
      </div>
    </form>
  );
}

export default AuthCertification;
