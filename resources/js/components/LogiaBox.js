import React from "react";
import styled from "styled-components";

const LogiaBox = styled.div`
  position: relative;
  width: 33%;
  height: 100%;
  margin-right: 10px;
  transition: 0.2s;
  background-color: #c72e2e;
  cursor: pointer;

  :hover {
    background: #ff3333;
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

const logiaBox = props => {
  return (
    <LogiaBox onClick={props.onClick}>
      <Container>
        <Name>Logia</Name>
      </Container>
    </LogiaBox>
  );
};

export default logiaBox;
