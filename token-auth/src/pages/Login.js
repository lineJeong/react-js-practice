import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "../store/use-auth";
import useSimpleInputs from "../hooks/useSimpleInputs";
import * as authValidation from "../util/authValidation";

import classes from "./Signup.module.css";
import PageContent from "../components/UI/PageContent";
import Input from "../components/UI/Input";

function Login() {
  const authActions = useAuthActions();
  const navigate = useNavigate();

  const {
    value,
    inputChangeHandler: loginChangeHandler,
    reset: resetLoginForm,
  } = useSimpleInputs({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState(null);

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

    authActions.loginHandler(loginReqBody, tryCatch);
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
    </PageContent>
  );
}

export default Login;
