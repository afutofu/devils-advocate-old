import React from "react";
import styled from "styled-components";

import { RegisterCard } from "../components";

const Register = () => {
  const Register = styled.div`
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
    height: 100%;
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
    <Register>
      <Background />
      <Container>
        <RegisterCard />
      </Container>
    </Register>
  );
};

export default Register;
