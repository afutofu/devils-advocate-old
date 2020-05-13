import React from "react";
import styled from "styled-components";

import { LoginCard } from "../components";

const Login = () => {
  const Login = styled.div`
    position: relative;
    width: 100vw;
    max-width: 100vw;
    min-height: 94vh;
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
    min-height: 94vh;
    margin: auto;
    padding-bottom: 20px;
    box-sizing: border-box;
    background: none;
    padding: 20px 50px;
    padding-top: 70px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    * {
      margin: 0;
    }
  `;

  return (
    <Login>
      <Background />
      <Container>
        <LoginCard />
      </Container>
    </Login>
  );
};

export default Login;
