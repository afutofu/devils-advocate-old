import React from "react";
import styled from "styled-components";

const ZoanBox = styled.div`
  position: relative;
  width: 33%;
  height: 100%;
  margin-left: 10px;
  background-color: #2cc9c9;
  cursor: pointer;

  transition: 0.2s;
  :hover {
    background: #33f8ff;
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

const zoanBox = props => {
  return (
    <ZoanBox onClick={props.onClick}>
      <Container>
        <Name>Zoan</Name>
      </Container>
    </ZoanBox>
  );
};

export default zoanBox;
