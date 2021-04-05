import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Cyberpunk Gaming Laptops</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto ">
          <Link className="mx-4 linkStyle" to="/">
            Home
          </Link>
          <Link className="mx-4 linkStyle" to="/orders">
            Orders
          </Link>
          <Link className="mx-4 linkStyle" to="/admin">
            Admin
          </Link>
        </Nav>
        <Nav>
          { !loggedInUser.email ? (
            <Button mx={5} variant="primary">
              <Link className="linkStyle" to="/login">
                Login
              </Link>
            </Button>
          ) : (
            <Button mx={5} variant="primary">
              <Link
                onClick={() => setLoggedInUser({})}
                className="linkStyle"
                to="/"
              >
                Logout
              </Link>
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
