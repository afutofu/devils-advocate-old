import React from "react";
import styled from "styled-components";

const SectionHeader = props => {
  const SectionHeader = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px;
    margin-left: 0;
    margin-top: 0;
  `;

  const Name = styled.h3`
    position: relative;
    width: 100%;
    margin: 10px 0px;
    margin-bottom: 6px;
    text-transform: uppercase;
    color: black;
    font-weight: 600;
    margin-top: 0;
  `;

  const Underline = styled.div`
    width: 50px;
    height: 4px;
    background-color: black;
    border-radius: 50px;
  `;

  return (
    <SectionHeader>
      <Name>{props.name}</Name>
      <Underline />
    </SectionHeader>
  );
};

export default SectionHeader;
