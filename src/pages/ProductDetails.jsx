import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = useSelector(s =>
    s.products.list.find(p => p.id == id)
  );

  if (!product) return <h2>Not Found</h2>;

  return (
    <div style={{ padding: "30px" }}>
      <h2>Product Details</h2>

      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>

      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
}