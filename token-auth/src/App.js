import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as authAction from "./util/authAction";

import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/signup",
        element: <Signup />,
        loader: authAction.checkLogoutLoader,
      },
      {
        path: "/login",
        element: <Login />,
        loader: authAction.checkLogoutLoader,
      },
      {
        path: "/profile/:nickname",
        element: <Profile />,
        loader: authAction.checkLoginLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
