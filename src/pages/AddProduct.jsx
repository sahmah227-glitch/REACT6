import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/productSlice";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = async () => {
    if (!name || !price) {
      alert("ممنوع تضيف منتج فاضي ❌");
      return;
    }

    await dispatch(addProduct({
      name,
      price: Number(price)
    }));

    navigate("/");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Product Form</h2>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <br /><br />
      <input type="number" onChange={(e) => setPrice(e.target.value)} />
      <br /><br />

      <button style={btn} onClick={handleAdd}>
        Add Product
      </button>
    </div>
  );
}

const btn = {
  background: "linear-gradient(to right, red, orange)",
  color: "#fff",
  padding: "10px 20px",
  border: "none"
};