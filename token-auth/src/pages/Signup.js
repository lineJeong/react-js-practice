import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import useUniqueNickname from "../hooks/useUniqueNickname";
import * as authValidation from "../util/authValidation";
import * as authApi from "../api/auth";

import classes from "./Signup.module.css";
import PageContent from "../components/UI/PageContent";
import Input from "../components/UI/Input";

function Signup() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(authValidation.isValidEmail);
  const {
    value: nicknameValue,
    isValid: nicknameIsValid,
    hasError: nicknameHasError,
    inputChangeHandler: nicknameChangeHandler,
    inputBlurHandler: nicknameBlurHandler,
  } = useInput(authValidation.isValidNickname);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(authValidation.isValidPassword);
  const {
    value: repasswordValue,
    isValid: repasswordIsValid,
    hasError: repasswordHasError,
    inputChangeHandler: repasswordChangeHandler,
    inputBlurHandler: repasswordBlurHandler,
  } = useInput(authValidation.isValidRepassword.bind(null, passwordValue));
  const {
    nicknameIsUnique,
    nicknameCheckMsg,
    hasNicknameCheckMsg,
    nicknameCheckHandler,
  } = useUniqueNickname(nicknameValue, nicknameIsValid);

  let formIsValid = false;
  if (
    emailIsValid &&
    nicknameIsValid &&
    passwordIsValid &&
    repasswordIsValid &&
    nicknameIsUnique
  ) {
    formIsValid = true;
  }

  const signupFormSubmissionHandler = async (event) => {
    event.preventDefault();
    if (!formIsValid) return;

    const signupReqBody = {
      email: emailValue,
      nickname: nicknameValue,
      password: passwordValue,
    };
    setIsSubmitting(true);
    try {
      await authApi.signup(signupReqBody);
      navigate("/email-auth", {
        state: { emailValue: emailValue, emailIsValid: emailIsValid },
      });
    } catch (error) {
      console.error(error);
    }
    setIsSubmitting(false);
  };

  return (
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
          button="중복 확인"
          onClick={nicknameCheckHandler}
          hasCheckMsg={hasNicknameCheckMsg}
          checkMsg={nicknameCheckMsg}
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
          type="password"
          value={repasswordValue}
          onChange={repasswordChangeHandler}
          onBlur={repasswordBlurHandler}
          hasError={repasswordHasError}
          errorMsg="비밀번호가 일치하지 않습니다."
        />
        <div className={classes["form-actions"]}>
          <button disabled={!formIsValid || isSubmitting}>
            이메일 인증하러 가기
          </button>
        </div>
      </form>
    </PageContent>
  );
}

export default Signup;
