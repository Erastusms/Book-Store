import React, { useState, useEffect } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import { LandingPage, HomePage } from "pages";
// import { Tooltip, Toast, Popover } from 'bootstrap';
// import { Login, Register, Header, Profile, Cart } from "components";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  // const [login, setLogin] = useState(false);
  // const userLogin = (param) => {
  //   setLogin(param);
  // };
  // useEffect(() => {
  //   setLogin(false);
  // }, [login]);

  return (
    <Router>
      <HomePage />
      {/* <Login /> */}
    </Router>
  );
}

export default App;
