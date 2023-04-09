import { Link, Route, Routes } from "react-router-dom";
import WithRouterSample from "../WithRouterSample";
import Profile from "./Profile";

function Profiles() {
  return (
    <>
      <h3>유저 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/velopert">velopert</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">gildong</Link>
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
