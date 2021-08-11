import React, { Component } from "react";
import {Login, Register} from "components";
import HomePage from "./HomePage"

import { BrowserRouter as Router, Route } from "react-router-dom";
export default function LandingPage({login, userLogin}) {
  
    return (
        <Router>
          <Route exact path="/">
            <Login login={login} userLogin={userLogin} />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          {/* <Route exact path="/homepage">
            <HomePage />
          </Route> */}
          
        </Router>
    );
  
}
