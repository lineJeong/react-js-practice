import { createContext } from "react";

export const AuthValueContext = createContext({
  token: null,
  isLoggedIn: false,
  userInfo: { email: "", nickname: "" },
});

export const AuthActionsContext = createContext({
  loginHandler: (loginReqBody) => {},
  logoutHandler: () => {},
});
