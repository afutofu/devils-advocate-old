import React, { useState } from "react";
import styled from "styled-components";

import { Jumbotron } from "../components";
import { SectionTogglerCtr, CardCtr } from "../container";

const Fruits = () => {
  const Fruits = styled.div`
    position: relative;
    width: 100vw;
    max-width: 100vw;
    min-height: 94vh;
    overflow-x: hidden;
  `;

  const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    /* background: rgba(0, 0, 0, 0.4); */
    background: #2a2a2a;
    z-index: -100;
  `;

  const Container = styled.div`
    position: relative;
    width: 80%;
    height: 100%;
    margin: auto;
    padding-bottom: 20px;
    padding-top: 15vh;
    box-sizing: border-box;
  `;

  return (
    <Fruits>
      <Background />
      <Jumbotron
        content="Exercitation veniam labore esse culpa nostrud veniam exercitation ipsum
        nostrud non proident. Do laboris cupidatat cillum officia nostrud
        reprehenderit deserunt ad."
      />
      <Container>
        <SectionTogglerCtr />
        <CardCtr cards={10} />
      </Container>
    </Fruits>
  );
};

export default Fruits;
