import { RouterProvider, createBrowserRouter } from "react-router-dom";
import * as authAction from "./util/authAction";

import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import AuthCertification from "./pages/AuthCertification";
import Withdrawal from "./pages/Withdrawal";

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
        loader: authAction.checkProfileLoader,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          { path: "withdraw", element: <Withdrawal /> },
        ],
      },
      {
        path: "/email-auth",
        element: <AuthCertification />,
        loader: authAction.checkLogoutLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
