import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LandingPage, HomePage } from "pages";
import "assets/scss/style.scss";

function App() {
  return (
    <Router>
      {/* <Route exact path="/" component={LandingPage} /> */}
      <Route exact path="/" component={HomePage} />
      
    </Router>
  );
}

export default App;
