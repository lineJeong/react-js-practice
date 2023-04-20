import { useAuthActions } from "../store/use-auth";

function LogoutButton() {
  const authActions = useAuthActions();

  const logoutHandler = () => {
    authActions.logout();
  };

  return <button onClick={logoutHandler}>Logout</button>;
}

export default LogoutButton;
