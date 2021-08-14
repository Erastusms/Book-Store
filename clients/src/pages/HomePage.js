import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Profile, Cart, Home, Jumbotron, DetailItem, Footer, EditData, EditPassword } from "components";
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
          <Profile login={login}/>
        </Route>
        <Route path="/editData">
          <EditData />
        </Route>
        <Route path="/editPwd">
          <EditPassword />
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
