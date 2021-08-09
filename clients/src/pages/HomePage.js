import React, { Component } from "react";
import Header from "components/Header";
import Login from "components/Login";
import Register from "components/Register";
import { BrowserRouter as Router, Route } from "react-router-dom";
export default class HomePage extends Component {
  render() {
    return (
        <Router>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Router>
    );
  }
}
