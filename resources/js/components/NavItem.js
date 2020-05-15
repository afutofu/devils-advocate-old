import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavItem = styled.div`
  height: 100%;
  margin: 0 20px;
  text-transform: uppercase;
  font-size: 1rem;
  display: flex;
  align-items: center;
  overflow: hidden;

  :first-of-type {
    margin-left: 0;
  }

  :last-of-type {
    margin-right: 0;
  }

  a {
    color: ${props => (props.selected ? "#f50000 !important" : "white")};
    padding: 10px;

    transition: 0.2s;
    ${NavItem}:hover {
      color: #f50000 !important;
    }
  }
`;

const navItem = props => {
  return (
    <NavItem onClick={() => props.onClick()} selected={props.selected}>
      <Link to={props.to}>{props.children}</Link>
    </NavItem>
  );
};

export default navItem;
