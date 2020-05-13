import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ParameciaBox = styled.div`
  position: relative;
  width: 33%;
  height: 100%;
  margin: 0 10px;
  background-color: #a3a3a3;
  cursor: pointer;

  transition: 0.2s;
  :hover {
    background: #d1d1d1;
  }
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

const parameciaBox = props => {
  return (
    <ParameciaBox onClick={props.onClick}>
      <Container>
        <Name>Paramecia</Name>
      </Container>
    </ParameciaBox>
  );
};

export default parameciaBox;
