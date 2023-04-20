import { useCallback, useEffect, useState } from "react";

import { AuthValueContext, AuthActionsContext } from "./auth-context";
import * as authApi from "../api/auth";
import * as authAction from "../util/authAction";

let logoutTimer = null;

const AuthProvider = ({ children }) => {
  const storedTokenInfo = authAction.getAuthTokenInfo();
  const storedUserInfo = authAction.getUserInfo();

  let initialToken = null;
  let duration = null;
  let initialUserInfo = { email: "", nickname: "" };
  if (storedTokenInfo && storedUserInfo) {
    initialToken = storedTokenInfo.token;
    duration = storedTokenInfo.duration;
    initialUserInfo = storedUserInfo;
  }

  const [token, setToken] = useState(initialToken);
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  const isLoggedIn = !!token;

  const loginHandler = async (reqBody, tryCatch) => {
    try {
      const response = await authApi.login(reqBody);
      const { email, nickname, jwt } = response.data;

      authAction.setAuthTokenInfo(jwt);
      authAction.setUserInfo(email, nickname);
      setToken(jwt);
      setUserInfo({ email, nickname });
      tryCatch.try();
    } catch (error) {
      tryCatch.catch();
      console.error(error);
    }
  };

  const logoutHandler = useCallback(() => {
    setToken(null);
    setUserInfo({ email: "", nickname: "" });
    authAction.removeStoredTokenInfo();

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  useEffect(() => {
    if (!token || !duration) {
      return;
    }

    logoutTimer = setTimeout(() => {
      logoutHandler();
    }, [duration]);
  }, [token, duration, logoutHandler]);

  const withdrawalHandler = async (reqBody, tryCatch) => {
    try {
      await authApi.withdraw(reqBody);
      logoutHandler();
      tryCatch.try();
    } catch (error) {
      tryCatch.catch();
      console.error(error);
    }
  };

  // const nicknameModificationHandler = async (query, reqBody) => {};

  const authValue = {
    token,
    isLoggedIn,
    userInfo,
  };
  const authActions = {
    login: loginHandler,
    logout: logoutHandler,
    withdrawal: withdrawalHandler,
  };

  return (
    <AuthValueContext.Provider value={authValue}>
      <AuthActionsContext.Provider value={authActions}>
        {children}
      </AuthActionsContext.Provider>
    </AuthValueContext.Provider>
  );
};

export default AuthProvider;
