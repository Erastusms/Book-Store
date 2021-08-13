import React, { Component } from "react";
// import Header from "components/Header";
import LandingPage from "./LandingPage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Profile, Cart, Home, Jumbotron, DetailItem, Footer } from "components";
export default function HomePage({ login, userLogin }) {
  return (
    <Router>
      <Header userLogin={userLogin}/>
      <Switch>
        <Route exact path="/">
          <Jumbotron />
          <Home login={login}/>
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/products/:id">
          <DetailItem />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
