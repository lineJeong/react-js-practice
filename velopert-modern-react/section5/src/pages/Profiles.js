import { NavLink, Route, Routes } from "react-router-dom";
import WithRouterSample from "../WithRouterSample";
import Profile from "./Profile";

function Profiles() {
  return (
    <>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <NavLink
            to="/profiles/velopert"
            style={({ isActive }) => ({
              background: isActive ? "black" : "white",
              color: isActive ? "white" : "black",
            })}
          >
            velopert
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profiles/gildong"
            style={({ isActive }) => ({
              background: isActive ? "black" : "white",
              color: isActive ? "white" : "black",
            })}
          >
            gildong
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route index element="유저를 선택해주세요" />
        <Route path=":username" element={<Profile />} />
      </Routes>
      <WithRouterSample />
    </>
  );
}

export default Profiles;
