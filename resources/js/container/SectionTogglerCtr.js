import React from "react";
import styled from "styled-components";

import { SectionToggler } from "../components";

const SectionTogglerCtr = styled.div`
  position: relative;
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 5vh;
`;

const sectionTogglerCtr = () => {
  return (
    <SectionTogglerCtr>
      <SectionToggler name="logia" type="l" />
      <SectionToggler name="paramecia" type="p" />
      <SectionToggler name="zoan" type="z" />
    </SectionTogglerCtr>
  );
};

export default sectionTogglerCtr;
