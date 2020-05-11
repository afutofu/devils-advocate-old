import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { Navbar } from "./container";
import { Home } from "./pages";

const Main = () => {
  const Main = styled.div`
    width: 100%;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 2px;
    a {
      color: white;
      text-decoration: none;
    }
  `;

  return (
    <Router>
      <Main className="main">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Main>
    </Router>
  );
};

export default Main;
