import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Header,
  Profile,
  Cart,
  Home,
  Jumbotron,
  DetailItem,
  Footer,
  EditData,
  EditPassword,
  Checkout,
  AddCart, Order, AddOrder
} from "components";
export default function HomePage({ login, userLogin }) {
  return (
    <Router>
      <Header userLogin={userLogin} />
      <Switch>
        <Route exact path="/">
          <Jumbotron />
          <Home login={login} />
        </Route>
        <Route path="/profile">
          <Profile login={login} />
        </Route>
        <Route path="/editData">
          <EditData />
        </Route>
        <Route path="/editPwd">
          <EditPassword />
        </Route>
        <Route path="/checkout/:id">
          <Checkout />
        </Route>
        <Route path="/products/:id">
          <DetailItem />
        </Route>
        <Route path="/cart">
          <Cart />
          <Order />
        </Route>
        <Route path="/addCart">
          <AddCart />
        </Route>
        <Route path="/addOrder">
          <AddOrder />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
