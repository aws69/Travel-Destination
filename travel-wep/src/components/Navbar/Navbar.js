import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

function Navbar() {
  return (
    <nav>
      <h1>NavBar</h1>
      <Link to="/">Home</Link><br />
    </nav>
  );
}
export default Navbar;