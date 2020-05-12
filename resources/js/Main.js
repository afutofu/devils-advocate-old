import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { Navbar } from "./container";
import { Home, Fruits } from "./pages";

const Main = () => {
  const Main = styled.div`
    font-family: "Montserrat", sans-serif;
    letter-spacing: 2px;
    padding-top: 6vh;
    a {
      color: white;
      text-decoration: none;
    }
  `;

  return (
    <Main>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/fruits" exact component={Fruits} />
        </Switch>
      </Router>
    </Main>
  );
};

export default Main;
