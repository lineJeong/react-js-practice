import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

function Content() {
  const { isDark } = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div
      className="content"
      style={{
        backgroundColor: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <p>{user}님의 Content</p>
    </div>
  );
}

export default Content;
