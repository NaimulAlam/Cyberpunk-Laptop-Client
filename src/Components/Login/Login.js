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
          {user.isSignedIn && <h2 className="my-5">User: {user.name}</h2>}

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
