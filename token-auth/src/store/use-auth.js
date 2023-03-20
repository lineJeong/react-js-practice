import { useContext } from "react";
import { AuthActionsContext, AuthValueContext } from "./auth-context";

export const useAuthValue = () => {
  const value = useContext(AuthValueContext);
  if (value === undefined) {
    throw new Error("useAuthValue should be used within AuthValueProvider");
  }
  return value;
};

export const useAuthActions = () => {
  const value = useContext(AuthActionsContext);
  if (value === undefined) {
    throw new Error("useAuthActions should be used within authActionProvider");
  }
  return value;
};
