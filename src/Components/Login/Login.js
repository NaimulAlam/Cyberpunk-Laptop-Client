import React, { useContext, useState } from "react";
import googleIcon from "../../icons/goo.png";
import "./Login.css";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import {
  initializeLogin,
  handleGoogleSignIn,
  handleSignOut,
} from "./LoginManager";
import { Button, Container, ModalFooter } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
  });

  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/login" } };

  initializeLogin();

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const signOut = () => {
    handleSignOut().then((res) => {
      handleResponse(res, false);
    });
  };

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  return (
    <>
      <Container className="my-5" fluid>
        <div className="loginContainer">
          {user.isSignedIn && (
            <Container className="my-5" fluid>
              <h2>Welcome! {user.name}</h2>
              <hr></hr>
              <h6>Thank you for visiting our Website.</h6>
              <h4>Ready to make some purchase?</h4>
              <Link to="/"><Button className="my-4" variant="primary">Products</Button></Link>
            </Container>
          )}

          {user.isSignedIn ? (
            <Button onClick={signOut} variant="danger" size="lg">
              <img className="iconClass" src={googleIcon} alt="icon" />
              Google Sign Out
            </Button>
          ) : (
            <Button onClick={googleSignIn} variant="light" size="lg">
              <img className="iconClass" src={googleIcon} alt="icon" />
              Google Sign In
            </Button>
          )}
        </div>
      </Container>
      <ModalFooter>
        <Footer></Footer>
      </ModalFooter>
    </>
  );
};

export default Login;
