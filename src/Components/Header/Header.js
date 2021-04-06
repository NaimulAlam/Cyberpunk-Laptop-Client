import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <Navbar className="navbarClass" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link className="mx-4 linkStyle" to="/">
        <Navbar.Brand id="BandName">Cyberpunk Gaming Laptops</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto ">
          <Link className="mx-4 linkStyle" to="/">
            home
          </Link>
          <Link className="mx-4 linkStyle" to="/orders">
            Orders
          </Link>
          <Link className="mx-4 linkStyle" to="/admin">
            Admin
          </Link>
        </Nav>
        <Nav>
          {!loggedInUser.email ? (
            <Button mx={5} variant="primary">
              <Link className="linkStyle" to="/login">
                Login
              </Link>
            </Button>
          ) : (
            <Link onClick={() => setLoggedInUser({})} to="/">
              <div className="container">
                <img
                  src={loggedInUser.photo}
                  className="logo"
                  alt="UserPhoto"
                />
                <div className="overlay">
                  <p href='/' className="icon" title="User Profile">
                    Logout
                  </p>
                </div>
              </div>
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
