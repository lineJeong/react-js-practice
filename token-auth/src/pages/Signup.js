import { useState } from "react";
import useInput from "../hooks/useInput";
import * as authValidation from "../util/authValidation";
import * as authApi from "../api/auth";

import classes from "./Signup.module.css";
import PageContent from "../components/UI/PageContent";
import AuthCertification from "../components/AuthCertification";
import Input from "../components/UI/Input";

function Signup() {
  const [showCertificationModal, setSowCertificationModal] = useState(false);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(authValidation.isValidEmail);
  const {
    value: nicknameValue,
    isValid: nicknameIsValid,
    hasError: nicknameHasError,
    inputChangeHandler: nicknameChangeHandler,
    inputBlurHandler: nicknameBlurHandler,
    reset: resetNickname,
  } = useInput(authValidation.isValidNickname);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(authValidation.isValidPassword);
  const {
    value: repasswordValue,
    isValid: repasswordIsValid,
    hasError: repasswordHasError,
    inputChangeHandler: repasswordChangeHandler,
    inputBlurHandler: repasswordBlurHandler,
    reset: resetRepassword,
  } = useInput(authValidation.isValidRepassword.bind(null, passwordValue));

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
          <Input
            id="email-signup"
            label="이메일"
            type="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            hasError={emailHasError}
            errorMsg="유효한 이메일 양식을 입력해주세요."
          />
          <Input
            id="nickname-signup"
            label="닉네임"
            type="text"
            value={nicknameValue}
            onChange={nicknameChangeHandler}
            onBlur={nicknameBlurHandler}
            hasError={nicknameHasError}
            errorMsg="닉네임은 2글자 이상, 10글자 이하로 설정해주세요."
          />
          <Input
            id="password-signup"
            label="비밀번호"
            type="password"
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            hasError={passwordHasError}
            errorMsg="비밀번호는 6글자 이상으로 설정해주세요."
          />
          <Input
            id="repassword-signup"
            label="비밀번호"
            type="repassword"
            value={repasswordValue}
            onChange={repasswordChangeHandler}
            onBlur={repasswordBlurHandler}
            hasError={repasswordHasError}
            errorMsg="비밀번호가 일치하지 않습니다."
          />
          <div className={classes["form-actions"]}>
            <button disabled={!formIsValid}>인증하기</button>
          </div>
        </form>
      </PageContent>
    </>
  );
}

export default Signup;
