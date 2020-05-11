import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./container/Navbar/Navbar";
import Home from "./pages/Home/Home";

import "./Main.module.css";

const Main = () => {
  return (
    <Router>
      <div className="main">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
