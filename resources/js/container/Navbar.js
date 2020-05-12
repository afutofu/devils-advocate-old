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
    background-color: rgb(44, 44, 44);
    display: flex;
    justify-content: center;
    z-index: 100;
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

  // const NavItem = styled.div`
  //   margin: 0 20px;
  //   text-transform: uppercase;
  //   color: white;
  //   font-size: 1rem;

  //   transition: 0.3s;
  //   :hover {
  //   }

  //   :first-of-type {
  //     margin-left: 0;
  //   }
  //   :last-of-type {
  //     margin-right: 0;
  //   }
  //   a {
  //     color: white !important;
  //   }
  // `;

  return (
    <Navbar>
      <Container>
        <NavGroup>
          <NavItem to="/">logo</NavItem>
          <NavItem to="/fruits">fruits</NavItem>
        </NavGroup>
        <NavGroup>
          <NavItem to="/">cart</NavItem>
          <NavItem to="/">login</NavItem>
          <NavItem to="/">register</NavItem>
        </NavGroup>
      </Container>
    </Navbar>
  );
};

export default Navbar;
