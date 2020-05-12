import React from "react";
import styled from "styled-components";

import { SectionToggler } from "../components";

const SectionTogglerContainer = () => {
  const SectionTogglerContainer = styled.div`
    position: relative;
    width: 50%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 5vh;
  `;

  return (
    <SectionTogglerContainer>
      <SectionToggler name="logia" type="l" />
      <SectionToggler name="paramecia" type="p" />
      <SectionToggler name="zoan" type="z" />
    </SectionTogglerContainer>
  );
};

export default SectionTogglerContainer;
