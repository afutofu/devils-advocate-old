import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import styled from "styled-components";
import thunk from "redux-thunk";

import { Navbar } from "./container";
import { Home, Fruits, Fruit, Cart, Login, Register } from "./pages";
import ScrollToTop from "./shared/ScrollToTop";
import allReducers from "./store/reducers";

const Main = styled.div`
  font-family: "Montserrat", sans-serif;
  letter-spacing: 2px;
  padding-top: 6vh;
  a {
    color: white;
    text-decoration: none;
  }
`;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);

const main = () => {
  return (
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <Main>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/fruits" exact component={Fruits} />
              <Route path="/fruits/:id" exact component={Fruit} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
            </Switch>
          </Main>
        </ScrollToTop>
      </Router>
    </Provider>
  );
};

export default main;
