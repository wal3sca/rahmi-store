import img from "../../src/assets/RAHMILOGO.png";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Nav className="nav" activeKey="/" justify="true">
      <Nav.Item>
        <Link to="/">
          <img src={img} className="w-100" />
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link to="/" className="nav-link" style={{ color: "#ffdead" }}>
          Home
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link
          to="/holistics/about"
          className="nav-link"
          style={{ color: "#ffdead" }}
        >
          About
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link
          to="/holistics/services"
          className="nav-link"
          style={{ color: "#ffdead" }}
        >
          Services
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link
          to="/holistics/shop"
          className="nav-link"
          style={{ color: "#ffdead" }}
        >
          Shop
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link
          to="/holistics/signup"
          className="nav-link"
          style={{ color: "#ffdead" }}
        >
          Sign Up
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link
          to="/holistics/login"
          className="nav-link"
          style={{ color: "#ffdead" }}
        >
          Login
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link to="/cart" className="nav-link" style={{ color: "#ffdead" }}>
          Cart
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
