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

    transition: 0.2s;

    ${props =>
      props.type === "l" &&
      css`
        background-color: #c72e2e;
        :hover {
          background: #ff3333;
        }
      `}
    ${props =>
      props.type === "p" &&
      css`
        background-color: #a3a3a3;
        :hover {
          background: #d1d1d1;
        }
      `}
    ${props =>
      props.type === "z" &&
      css`
        background-color: #2cc9c9;
        :hover {
          background: #33f8ff;
        }
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
