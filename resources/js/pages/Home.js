import React from "react";
import styled from "styled-components";

import { FruitInfoBox } from "../container";

const Home = () => {
  const Home = styled.div`
    position: relative;
    height: 94vh;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    box-sizing: border-box;
    background: #2a2a2a;
  `;

  return (
    <Home>
      <FruitInfoBox type="l" name="logia" />
      <FruitInfoBox type="p" name="paramecia" />
      <FruitInfoBox type="z" name="zoan" />
    </Home>
  );
};

export default Home;
