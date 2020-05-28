import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavItem = styled.div`
  position: relative;
  height: 100%;
  margin: ${props => (props.logo ? "0" : "0 20px")};
  text-transform: uppercase;
  font-size: 1rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;

  :first-of-type {
    margin-left: 0;
  }

  :last-of-type {
    margin-right: 0;
  }

  a {
    color: ${props => (props.selected ? "#f50000 !important" : "white")};
    padding: 10px;
    cursor: pointer;
    font-weight: 700;
    box-sizing: border-box;

    transition: 0.2s;
    ${NavItem}:hover {
      color: #f50000 !important;
    }
  }
`;

const navItem = props => {
  const renderContent = () => {
    if (props.onLogout) {
      return (
        <NavItem onClick={() => props.onLogout()}>
          <Link to={props.to}>{props.children}</Link>
        </NavItem>
      );
    }

    return (
      <NavItem selected={props.selected} logo={props.logo}>
        <Link to={props.to}>{props.children}</Link>
      </NavItem>
    );
  };

  return renderContent();
};

export default navItem;
