import { Link, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Profiles from "./pages/Profiles";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profiles">프로필 목록</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/profiles/*" element={<Profiles />} />
      </Routes>
    </>
  );
}

export default App;
