import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  const Navbar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
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
    position: relative;
    display: flex;
    align-items: center;
  `;

  const NavItem = styled.div`
    margin: 0 20px;
    text-transform: uppercase;
    color: white;
    font-size: 1rem;
    :first-of-type {
      margin-left: 0;
    }
    :last-of-type {
      margin-right: 0;
    }
    a {
      color: white !important;
    }
  `;

  return (
    <Navbar>
      <Container>
        <NavGroup>
          <NavItem>
            <Link to="/">logo</Link>
          </NavItem>
          <NavItem>
            <Link to="/fruits">fruits</Link>
          </NavItem>
        </NavGroup>
        <NavGroup>
          <NavItem className="navItem">
            <Link to="/cart">cart</Link>
          </NavItem>
          <NavItem>
            <Link to="/login">login</Link>
          </NavItem>
          <NavItem>
            <Link to="/register">register</Link>
          </NavItem>
        </NavGroup>
      </Container>
    </Navbar>
  );
};

export default Navbar;
