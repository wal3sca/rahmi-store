import { Nav } from "react-bootstrap";
import img from "../../src/assets/RAHMILOGO.png";

const NavBar = () => {
  return (
    <Nav
      activeKey="/"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      justify="true"
    >
      <Nav.Item>
        <Nav.Link href="/">
          <img src={img} className="w-100" />
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/holistics/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/holistics/services">Services</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/holistics/shop">Shop</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/holistics/signup">Sign Up</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/holistics/login">Login</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
