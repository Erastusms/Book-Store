import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AdminPage, HomePage } from "pages";
import { Login, Register, SideBar } from "components";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

function App() {
  const [login, setLogin] = useState(false);

  const userLogin = (param) => {
    setLogin(param);
  };
  const getToken = (token) => {
    localStorage.setItem("access_token", token);
  };
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [login]);

  return (
    <Router>
      {login ? (
        <HomePage login={login} userLogin={userLogin} />

        // <div className="main-page">
        //   <div className="row">
        //     <SideBar />
        //     <AdminPage login={login} userLogin={userLogin} />
        //   </div>
        // </div>
      ) : (
        <Switch>
          <Route exact path="/">
            <Login login={login} userLogin={userLogin} getToken={getToken} />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
        </Switch>
      )}
    </Router>
  );
}

export default App;
