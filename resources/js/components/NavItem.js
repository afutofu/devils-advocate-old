import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavItem = props => {
  const NavItem = styled.div`
    height: 100%;
    margin: 0 20px;
    text-transform: uppercase;
    color: white;
    font-size: 1rem;
    display: flex;
    align-items: center;

    :first-of-type {
      margin-left: 0;
    }
    :last-of-type {
      margin-right: 0;
    }
    a {
      color: white !important;

      transition: 0.2s;
      :hover {
        color: #ff4a4a !important;
      }
    }
  `;

  return (
    <NavItem>
      <Link to={props.to}>{props.children}</Link>
    </NavItem>
  );
};

export default NavItem;
