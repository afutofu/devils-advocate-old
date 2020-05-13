import React, { useState } from "react";
import styled from "styled-components";

import { FruitInfoBoxCtr } from "../container";
import { LogiaBox, ParameciaBox, ZoanBox } from "../components";

const Home = styled.div`
  position: relative;
  height: 94vh;
  width: 100vw;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #2a2a2a;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
`;

const home = () => {
  return (
    <Home>
      <Background />
      <Container>
        <FruitInfoBoxCtr />
      </Container>
    </Home>
  );
};

export default home;
