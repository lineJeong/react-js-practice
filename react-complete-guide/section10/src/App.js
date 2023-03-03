import React from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { useAuthContext } from "./store/auth-context";

function App() {
  const authCtx = useAuthContext();

  return (
    <>
      <MainHeader />
      <main>
        {!authCtx.isLoggedIn && <Login />}
        {authCtx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
