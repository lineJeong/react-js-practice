import { Outlet } from "react-router-dom";
// import { useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  // const navigatiton = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigatiton.state === "loading" && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
