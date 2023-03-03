import React, { useEffect, useState, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const initialEmailState = {
  enteredEmail: "",
  emailIsValid: null,
};
const initialPasswordState = {
  enteredPassword: "",
  passwordIsValid: null,
};

export const USER_INPUT = "USER_INPUT";
export const INPUT_BLUR = "INPUT_BLUR";

const emailReducer = (state, action) => {
  switch (action.type) {
    case USER_INPUT:
      return {
        enteredEmail: action.value,
        emailIsValid: action.value.includes("@"),
      };
    case INPUT_BLUR:
      return { ...state, emailIsValid: state.enteredEmail.includes("@") };
    default:
      return state;
  }
};
const passwordReducer = (state, action) => {
  switch (action.type) {
    case USER_INPUT:
      return {
        enteredPassword: action.value,
        passwordIsValid: action.value.trim().length > 6,
      };
    case INPUT_BLUR:
      return {
        ...state,
        passwordIsValid: state.enteredPassword.trim().length > 6,
      };
    default:
      return state;
  }
};

const Login = (props) => {
  const [{ enteredEmail, emailIsValid }, dispatchEmail] = useReducer(
    emailReducer,
    initialEmailState
  );
  const [{ enteredPassword, passwordIsValid }, dispatchPassword] = useReducer(
    passwordReducer,
    initialPasswordState
  );
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("checking form validity");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("cleanup");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: USER_INPUT, value: event.target.value });
    // setFormIsValid(emailIsValid && passwordIsValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: USER_INPUT, value: event.target.value });
    // setFormIsValid(emailIsValid && passwordIsValid);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: INPUT_BLUR });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: INPUT_BLUR });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
