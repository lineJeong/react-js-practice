import { useNavigate } from "react-router-dom";
import { useAuthActions } from "../store/use-auth";

function LogoutButton() {
  const navigate = useNavigate();
  const authActions = useAuthActions();

  const logout = () => {
    authActions.logoutHandler();
    return navigate("/");
  };

  return <button onClick={logout}>Logout</button>;
}

export default LogoutButton;
