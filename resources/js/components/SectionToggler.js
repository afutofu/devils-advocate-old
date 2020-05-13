import React from "react";
import styled, { css } from "styled-components";

const SectionToggler = props => {
  const SectionToggler = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin: 0 20px;
  `;

  const Name = styled.h3`
    position: relative;
    width: 100%;
    margin: 10px 0px;
    margin-bottom: 6px;
    text-transform: uppercase;
    color: white;
    font-weight: 600;
    transition: 0.25s;
    ${SectionToggler}:hover & {
      color: #f50000;
      transform: translateY(-15%);
    }
  `;

  const Underline = styled.div`
    width: 70%;
    height: 5px;
    background-color: #f50000;
    transform: scaleX(0);
    border-radius: 50px;
    transition: 0.25s;
    ${SectionToggler}:active & {
      transform: scaleX(1);
    }
  `;

  return (
    <SectionToggler type={props.type}>
      <Name>{props.name}</Name>
      <Underline type={props.type} />
    </SectionToggler>
  );
};

export default SectionToggler;
