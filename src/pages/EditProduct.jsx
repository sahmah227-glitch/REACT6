import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateProduct } from "../redux/productSlice";

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useSelector(s =>
    s.products.list.find(p => p.id == id)
  );

  const [name, setName] = useState(product?.name);
  const [price, setPrice] = useState(product?.price);

  const handleUpdate = () => {
    dispatch(updateProduct({ id, data: { name, price } }));
    navigate("/");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Edit Product</h2>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br /><br />
      <input value={price} onChange={(e) => setPrice(e.target.value)} />
      <br /><br />

      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}