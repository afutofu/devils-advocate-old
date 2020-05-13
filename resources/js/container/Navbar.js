import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { NavItem } from "../components";

const Navbar = () => {
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

  return (
    <Navbar>
      <Container>
        <NavGroup>
          <NavItem to="/">logo</NavItem>
          <NavItem to="/fruits">fruits</NavItem>
        </NavGroup>
        <NavGroup>
          <NavItem to="/cart">cart</NavItem>
          <NavItem to="/login">login</NavItem>
          <NavItem to="/">register</NavItem>
        </NavGroup>
      </Container>
    </Navbar>
  );
};

export default Navbar;
