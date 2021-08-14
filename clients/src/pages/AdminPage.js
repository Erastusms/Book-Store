import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import {
  Home,
  Header,
  ProductsForAdmin,
  UserForAdmin,
  Footer,
  SideBar,
  Profile,
  EditData,
  EditPassword,
  EditProduct,
  AddProduct,
} from "components";
import axios from "axios";

export default function AdminPage({ login, userLogin }) {
  return (
    <div className="col-10">
      <div className="main-section">
        <Header isAdmin userLogin={userLogin} />
        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Profile />
            </Route>
            <Route path="/editData">
              <EditData />
            </Route>
            <Route path="/editPwd">
              <EditPassword />
            </Route>
            <Route exact path="/products">
              <ProductsForAdmin />
            </Route>
            <Route exact path="/addProducts">
              <AddProduct />
            </Route>
            <Route path="/editProducts/:id">
              <EditProduct />
            </Route>
            <Route exact path="/user">
              <UserForAdmin />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </div>
  );
}
