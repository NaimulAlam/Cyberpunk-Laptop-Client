import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Admin from "./Components/Admin/Admin";
import Checkout from "./Components/Checkout/Checkout";
import AddLaptops from "./Components/AddLaptops/AddLaptops";
import Login from "./Components/Login/Login";
import Orders from "./Components/Orders/Orders";
import Manage from "./Components/Manage/Manage";
import PrivateRoute from "./Components/PrivetRoute/PrivetRoute";
import NotFound from "./Components/NotFound/NotFound";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/manage">
              <Manage />
            </PrivateRoute>
            <PrivateRoute path="/addLaptops">
              <AddLaptops />
            </PrivateRoute>
            <PrivateRoute path="/laptop/:id">
              <Checkout />
            </PrivateRoute>
            <PrivateRoute path="/orders">
              <Orders />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
