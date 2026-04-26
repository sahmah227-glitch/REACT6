import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={nav}>
      <h2>Admin-dashboard</h2>

      <div>
        <Link to="/" style={link}>Home</Link>
        <Link to="/" style={{ ...link, color: "red" }}>Products</Link>
        <Link to="/add" style={link}>Add</Link>
      </div>
    </nav>
  );
}

const nav = {
  display: "flex",
  justifyContent: "space-between",
  padding: "15px 30px",
  background: "#1e1e2f",
  color: "#fff"
};

const link = {
  margin: "0 10px",
  color: "#fff",
  textDecoration: "none"
};