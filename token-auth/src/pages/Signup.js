import { useState } from "react";

import useInput from "../hooks/useInput";
import * as validateAuth from "../util/validateAuth";
import * as authApi from "../api/auth";

import classes from "./Signup.module.css";
import PageContent from "../components/UI/PageContent";
import AuthCertification from "../components/AuthCertification";

function Signup() {
  const [showCertificationModal, setSowCertificationModal] = useState(false);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(validateAuth.validateEmail);
  const {
    value: nicknameValue,
    isValid: nicknameIsValid,
    hasError: nicknameHasError,
    inputChangeHandler: nicknameChangeHandler,
    inputBlurHandler: nicknameBlurHandler,
    reset: resetNickname,
  } = useInput(validateAuth.validateNickname);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(validateAuth.validatePassword);
  const {
    value: repasswordValue,
    isValid: repasswordIsValid,
    hasError: repasswordHasError,
    inputChangeHandler: repasswordChangeHandler,
    inputBlurHandler: repasswordBlurHandler,
    reset: resetRepassword,
  } = useInput(validateAuth.validateRepassword.bind(null, passwordValue));

  let formIsValid = false;
  if (emailIsValid && nicknameIsValid && passwordIsValid && repasswordIsValid) {
    formIsValid = true;
  }
  const toggleModalHandler = () => {
    setSowCertificationModal((prev) => !prev);
  };

  const signupFormSubmissionHandler = async (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    const signupReqBody = {
      email: emailValue,
      nickname: nicknameValue,
      password: passwordValue,
    };

    try {
      const response = await authApi.signup(signupReqBody);
      if (response.status === 200) {
        toggleModalHandler();
      }
    } catch (error) {
      console.error(error);
    }
  };

  const resetSignupForm = () => {
    resetEmail();
    resetNickname();
    resetPassword();
    resetRepassword();
  };

  return (
    <>
      {showCertificationModal && (
        <AuthCertification
          emailValue={emailValue}
          emailIsValid={emailIsValid}
          toggleModal={toggleModalHandler}
          resetForm={resetSignupForm}
        />
      )}
      <PageContent>
        <h1>회원가입</h1>
        <form onSubmit={signupFormSubmissionHandler}>
          <div className={classes["input-control"]}>
            <label htmlFor="email">이메일</label>
            <input
              id="email"
              type="email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && <p>유효한 이메일 양식을 입력해주세요.</p>}
          </div>
          <div className={classes["input-control"]}>
            <label htmlFor="nickname">닉네임</label>
            <input
              id="nickname"
              type="text"
              value={nicknameValue}
              onChange={nicknameChangeHandler}
              onBlur={nicknameBlurHandler}
            />
            {nicknameHasError && (
              <p>닉네임은 2글자 이상, 10글자 이하로 설정해주세요.</p>
            )}
          </div>
          <div className={classes["input-control"]}>
            <label htmlFor="password">비밀번호</label>
            <input
              id="password"
              type="password"
              value={passwordValue}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            {passwordHasError && <p>비밀번호는 6글자 이상으로 설정해주세요.</p>}
          </div>
          <div className={classes["input-control"]}>
            <label htmlFor="repassword">비밀번호 확인</label>
            <input
              id="repassword"
              type="password"
              value={repasswordValue}
              onChange={repasswordChangeHandler}
              onBlur={repasswordBlurHandler}
            />
            {repasswordHasError && <p>비밀번호가 일치하지 않습니다.</p>}
          </div>
          <div className={classes["form-actions"]}>
            <button disabled={!formIsValid}>인증하기</button>
          </div>
        </form>
      </PageContent>
    </>
  );
}

export default Signup;
