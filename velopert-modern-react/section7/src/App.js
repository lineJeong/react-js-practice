// import CounterContainer from "./containers/CounterContainer";
import { Route, Routes } from "react-router-dom";
import PostListPage from "./page/PostListPage";
import PostPage from "./page/PostPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/:id" element={<PostPage />} />
    </Routes>
  );
}

export default App;
