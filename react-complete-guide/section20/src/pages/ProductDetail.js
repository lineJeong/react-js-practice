import { Link, useParams } from "react-router-dom";

function ProductDetailPage() {
  const { productId } = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetailPage;
