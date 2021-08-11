import React, { Component } from "react";
// import Header from "components/Header";
import LandingPage from "./LandingPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Profile, Cart, Home, Jumbotron, Footer } from "components";
export default function HomePage() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Jumbotron />
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
