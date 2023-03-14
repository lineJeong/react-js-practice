import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";

import classes from "./Auth.module.css";

const Auth = () => {
  const dispatch = useDispatch();
  const [loginInputs, setLoginInputs] = useState({ email: "", password: "" });

  const loginInputsChangeHandler = (event) => {
    const [id, value] = event.target;
    setLoginInputs((prev) => ({ ...prev, [id]: value }));
  };

  const loginSubmissionHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginSubmissionHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={loginInputs.email}
              onChange={loginInputsChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={loginInputs.password}
              onChange={loginInputsChangeHandler}
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
