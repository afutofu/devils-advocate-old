import React from "react";
import styled, { keyframes } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { SectionToggler } from "../components";
import { switchLogia, switchParamecia, switchZoan } from "../store/actions";

const slideInFadeIn = keyframes`
  from{
    opacity: 0;
    transform: translateX(-200%)
  }
  to{
    opacity: 1;
    transform:translateX(0%);
  }
`;

const SectionTogglerCtr = styled.div`
  position: relative;
  width: 50%;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 5vh;

  opacity: 0;
  animation: ${slideInFadeIn} 1s 0.1s ease-out forwards;
`;

const sectionTogglerCtr = () => {
  const fruitType = useSelector(state => state.fruitType);
  const dispatch = useDispatch();

  return (
    <SectionTogglerCtr>
      <SectionToggler
        name="logia"
        type="l"
        selected={fruitType == "LOGIA" ? true : false}
        onClick={() => dispatch(switchLogia())}
      />
      <SectionToggler
        name="paramecia"
        type="p"
        selected={fruitType == "PARAMECIA" ? true : false}
        onClick={() => dispatch(switchParamecia())}
      />
      <SectionToggler
        name="zoan"
        type="z"
        selected={fruitType == "ZOAN" ? true : false}
        onClick={() => dispatch(switchZoan())}
      />
    </SectionTogglerCtr>
  );
};

export default sectionTogglerCtr;
