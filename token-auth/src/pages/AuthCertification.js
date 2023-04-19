import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import useInput from "../hooks/useInput";
import * as authValidation from "../util/authValidation";
import * as authApi from "../api/auth";

import classes from "./AuthCertification.module.css";
import PageContent from "../components/UI/PageContent";
import Input from "../components/UI/Input";

function AuthCertification() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      email: state ? state.emailValue : emailValue,
      authNumber: authNumberValue,
    };

    setIsSubmitting(true);
    try {
      await authApi.confirmAuthNumber(authConfirmReqBody);
      window.alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } catch (error) {
      window.alert("이메일 또는 인증번호가 올바르지 않습니다.");
      console.error(error);
    }
    setIsSubmitting(false);
  };

  return (
    <PageContent>
      <h1>이메일 인증</h1>
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
        <Input
          id="authNumber"
          label="인증번호"
          type="text"
          value={authNumberValue}
          onChange={authNumberChangeHandler}
          onBlur={authNumberBlurHandler}
          hasError={authNumberHasError}
          errorMsg="인증번호를 입력해주세요."
        />
        <div className={classes["form-actions"]}>
          <button disabled={!formIsValid || isSubmitting}>회원가입 완료</button>
        </div>
      </form>
    </PageContent>
  );
}

export default AuthCertification;
