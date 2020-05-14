import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { SectionToggler } from "../components";
import * as actionTypes from "../store/actions";

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
  const fruitType = useSelector(state => state.fruitType);
  const dispatch = useDispatch();

  return (
    <SectionTogglerCtr>
      <SectionToggler
        name="logia"
        type="l"
        selected={fruitType == "LOGIA" ? true : false}
        onClick={() => dispatch(actionTypes.switchLogia())}
      />
      <SectionToggler
        name="paramecia"
        type="p"
        selected={fruitType == "PARAMECIA" ? true : false}
        onClick={() => dispatch(actionTypes.switchParamecia())}
      />
      <SectionToggler
        name="zoan"
        type="z"
        selected={fruitType == "ZOAN" ? true : false}
        onClick={() => dispatch(actionTypes.switchZoan())}
      />
    </SectionTogglerCtr>
  );
};

export default sectionTogglerCtr;
