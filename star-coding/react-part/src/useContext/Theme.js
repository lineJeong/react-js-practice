import { useState } from "react";
import "./Theme.css";
import Page from "./Page";
import { ThemeContext } from "./context/ThemeContext";
import { UserContext } from "./context/UserContext";

function Theme() {
  const [isDark, setIsDark] = useState(false);
  const value = { isDark, setIsDark };

  return (
    <UserContext.Provider value={"사용자"}>
      <ThemeContext.Provider value={value}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default Theme;
