import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const FruitInfoBox = props => {
  const FruitInfoBox = styled.div`
    position: relative;
    width: 33%;
    height: 100%;
    margin: 0 10px;
    :first-of-type {
      margin-left: 0px;
    }
    :last-of-type {
      margin-right: 0px;
    }
    ${props =>
      props.type === "l" &&
      css`
        background-color: rgb(192, 53, 53);
      `}
    ${props =>
      props.type === "p" &&
      css`
        background-color: rgb(173, 166, 166);
      `}
    ${props =>
      props.type === "z" &&
      css`
        background-color: rgb(61, 216, 236);
      `}
  `;

  const Container = styled.div`
    width: 100%;
    height: 100%;
  `;

  const Name = styled.h1`
    position: absolute;
    top: 50%;
    left: 50%;
    text-transform: uppercase;
    color: white;
    transform: translate(-50%, -100%);
  `;

  return (
    <FruitInfoBox type={props.type}>
      <Link to="/fruits">
        <Container>
          <Name>{props.name}</Name>
        </Container>
      </Link>
    </FruitInfoBox>
  );
};

export default FruitInfoBox;
