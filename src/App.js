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


export const UserContext = createContext();

function App() {
  
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <h3>email: {loggedInUser.email}</h3>
    <Router>
      <div>
        <Header />
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/manage">
            <Manage />
          </Route>
          <Route path="/addLaptops">
            <AddLaptops />
          </Route>
          <Route path="/laptop/:id">
            <Checkout />
          </Route>
          <Route path="/orders">
          <Orders />
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
