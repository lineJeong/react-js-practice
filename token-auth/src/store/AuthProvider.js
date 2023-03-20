import { useCallback, useEffect, useState } from "react";

import { AuthValueContext, AuthActionsContext } from "./auth-context";
import * as authApi from "../api/auth";
import * as authAction from "../util/authAction";

let logoutTimer = null;

const AuthProvider = ({ children }) => {
  const storedTokenInfo = authAction.getAuthTokenInfo();
  const storedUserInfo = authAction.getAuthTokenInfo();

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

  const isLoggined = !!token;

  const loginHandler = async (loginReqBody, tryCatch) => {
    try {
      const response = await authApi.login(loginReqBody);
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

  const authValue = {
    token,
    isLoggined,
    userInfo,
  };
  const authActions = {
    loginHandler,
    logoutHandler,
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
