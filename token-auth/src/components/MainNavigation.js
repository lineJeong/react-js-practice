import { NavLink } from "react-router-dom";
import { useAuthValue } from "../store/use-auth";

import classes from "./MainNavigation.module.css";
import LogoutButton from "./LogoutButton";

function MainNavigation() {
  const { isLoggedIn, userInfo } = useAuthValue();

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink to="/signup">Signup</NavLink>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <NavLink to={`/profile/${userInfo.nickname}`}>Profile</NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li>
              <LogoutButton />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
