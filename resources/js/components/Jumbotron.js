import React from "react";
import styled from "styled-components";

import { device } from "../utility/deviceWidth";

const Jumbotron = props => {
  const Jumbotron = styled.div`
    position: absolute;
    width: 100%;
    height: 10vh;
    background: rgb(249, 249, 249);
    box-sizing: border-box;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Container = styled.div`
    position: relative;
    width: 70%;
    height: 80%;
    box-sizing: border-box;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 1.5rem;

    @media ${device.mobileM} {
      font-size: 0.65rem;
      line-height: 1.1rem;
    }

    @media ${device.tablet} {
      font-size: 0.9rem;
    }
  `;

  return (
    <Jumbotron>
      <Container>{props.content}</Container>
    </Jumbotron>
  );
};

export default Jumbotron;
