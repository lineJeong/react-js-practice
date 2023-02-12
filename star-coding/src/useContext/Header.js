import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

function Header() {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? "black" : "lightGray",
        color: isDark ? "white" : "black",
      }}
    >
      <h1>{user}님의 Header</h1>
    </header>
  );
}

export default Header;
