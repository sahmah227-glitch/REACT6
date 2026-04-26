import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  deleteProduct,
  setSearch
} from "../redux/productSlice";
import { Link } from "react-router-dom";

export default function Products() {
  const dispatch = useDispatch();
  const { list, search } = useSelector(s => s.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filtered = list.filter(p =>
    p.id.toString().includes(search) ||
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.price.toString().includes(search)
  );

  return (
    <div style={{ padding: "30px" }}>
      <h2>Our Products</h2>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <input
          placeholder="Search Product..."
          onChange={(e) => dispatch(setSearch(e.target.value))}
          style={{ padding: "10px", width: "250px" }}
        />

        <Link to="/add">
          <button style={btn}>Add New Product</button>
        </Link>
      </div>

      <table style={table}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}$</td>
              <td>
                <Link to={`/edit/${p.id}`}>✏️</Link>{" "}
                <Link to={`/details/${p.id}`}>👁️</Link>{" "}
                <button onClick={() => dispatch(deleteProduct(p.id))}>
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const btn = {
  background: "linear-gradient(to right, red, orange)",
  color: "#fff",
  border: "none",
  padding: "10px 20px"
};

const table = {
  width: "100%",
  marginTop: "20px",
  borderCollapse: "collapse"
};