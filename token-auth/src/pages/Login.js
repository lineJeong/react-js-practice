import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "../store/use-auth";
import useSimpleInput from "../hooks/useSimpleInput";
import * as authValidation from "../util/authValidation";

import classes from "./Login.module.css";
import PageContent from "../components/UI/PageContent";
import Input from "../components/UI/Input";

function Login() {
  const navigate = useNavigate();
  const authActions = useAuthActions();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const {
    value,
    inputChangeHandler: loginChangeHandler,
    reset: resetLoginForm,
  } = useSimpleInput({ email: "", password: "" });

  useEffect(() => {
    setErrorMsg(null);
  }, [value.email, value.password]);

  const LoginSubmissionHandler = (event) => {
    event.preventDefault();
    const hasError = authValidation.HaveLoginInputsError(value, setErrorMsg);
    if (hasError) return;

    const loginReqBody = {
      email: value.email,
      password: value.password,
    };

    const tryCatch = {
      try() {
        resetLoginForm();
        navigate("/");
      },
      catch() {
        setErrorMsg(
          "등록되지 않은 이메일이거나, 이메일 또는 비밀번호를 잘못 입력하셨습니다."
        );
      },
    };

    setIsSubmitting(true);
    authActions.loginHandler(loginReqBody, tryCatch);
    setIsSubmitting(false);
  };

  return (
    <PageContent>
      <h1>로그인</h1>
      <form onSubmit={LoginSubmissionHandler}>
        <Input
          id="email-login"
          name="email"
          label="이메일"
          type="email"
          value={value.email}
          onChange={loginChangeHandler}
        />
        <Input
          id="password-login"
          name="password"
          label="비밀번호"
          type="password"
          value={value.password}
          onChange={loginChangeHandler}
        />
        {errorMsg && <p>{errorMsg}</p>}
        <div className={classes["form-actions"]}>
          <button>로그인</button>
        </div>
      </form>
      <div className={classes["signup-buttons"]}>
        <button className="signup-button" onClick={() => navigate("/signup")}>
          회원가입
        </button>
        <button
          className="signup-button"
          onClick={() => navigate("/email-auth")}
          disabled={isSubmitting}
        >
          이메일 인증하러 가기
        </button>
      </div>
    </PageContent>
  );
}

export default Login;
