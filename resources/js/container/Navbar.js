import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { NavItem } from "../components";
import {
  switchLogo,
  switchFruits,
  switchCart,
  switchLogin,
  switchRegister
} from "../store/actions";
import * as actionTypes from "../store/actions/actionTypes";

const Navbar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100vw;
  width: 100%;
  height: 6vh;
  background-color: #222;
  display: flex;
  justify-content: center;
  z-index: 100;
  margin: 0;
  border-bottom: 2px solid #111;
  box-sizing: border-box;
`;

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: space-between;
`;

const NavGroup = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const navbar = () => {
  const navItem = useSelector(state => state.navItem);
  const dispatch = useDispatch();

  return (
    <Navbar>
      <Container>
        <NavGroup>
          <NavItem
            to="/"
            selected={navItem == "LOGO" ? true : false}
            onClick={() => dispatch(switchLogo())}
          >
            logo
          </NavItem>
          <NavItem
            to="/fruits"
            selected={navItem == "FRUITS" ? true : false}
            onClick={() => dispatch(switchFruits())}
          >
            fruits
          </NavItem>
        </NavGroup>
        <NavGroup>
          <NavItem
            to="/cart"
            selected={navItem == "CART" ? true : false}
            onClick={() => dispatch(switchCart())}
          >
            cart
          </NavItem>
          <NavItem
            to="/login"
            selected={navItem == "LOGIN" ? true : false}
            onClick={() => dispatch(switchLogin())}
          >
            login
          </NavItem>
          <NavItem
            to="/register"
            selected={navItem == "REGISTER" ? true : false}
            onClick={() => dispatch(switchRegister())}
          >
            register
          </NavItem>
        </NavGroup>
      </Container>
    </Navbar>
  );
};

export default navbar;
