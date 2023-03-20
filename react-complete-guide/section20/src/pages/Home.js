import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>HomePage</h1>
      <p>
        Go to <Link to="/products">pruducts</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
}

export default HomePage;
