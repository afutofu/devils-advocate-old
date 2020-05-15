import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { LogiaBox, ParameciaBox, ZoanBox } from "../components";

import {
  switchFruits,
  switchLogia,
  switchParamecia,
  switchZoan
} from "../store/actions";

const FruitInfoBoxCtr = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const fruitInfoBoxCtr = props => {
  const [logiaHide, setLogiaHide] = useState(false);
  const [parameciaHide, setParameciaHide] = useState(false);
  const [zoanHide, setZoanHide] = useState(false);

  const [logiaShow, setLogiaShow] = useState(false);
  const [parameciaShow, setParameciaShow] = useState(false);
  const [zoanShow, setZoanShow] = useState(false);

  const dispatch = useDispatch();

  const clear = () => {
    setLogiaShow(false);
    setParameciaShow(false);
    setZoanShow(false);

    setLogiaHide(false);
    setParameciaHide(false);
    setZoanHide(false);
  };

  const onLogiaClick = () => {
    if (logiaHide == true || logiaShow == false) {
      setLogiaShow(true);
      setParameciaShow(false);
      setZoanShow(false);

      setLogiaHide(false);
      setParameciaHide(true);
      setZoanHide(true);
    } else {
      clear();
    }
  };

  const onParameciaClick = () => {
    if (parameciaHide == true || parameciaShow == false) {
      setLogiaShow(false);
      setParameciaShow(true);
      setZoanShow(false);

      setLogiaHide(true);
      setParameciaHide(false);
      setZoanHide(true);
    } else {
      clear();
    }
  };

  const onZoanClick = () => {
    if (zoanHide == true || zoanShow == false) {
      setLogiaShow(false);
      setParameciaShow(false);
      setZoanShow(true);

      setLogiaHide(true);
      setParameciaHide(true);
      setZoanHide(false);
    } else {
      clear();
    }
  };

  const onLogiaButtonClick = () => {
    dispatch(switchLogia());
    dispatch(switchFruits());
  };

  const onParameciaButtonClick = () => {
    dispatch(switchParamecia());
    dispatch(switchFruits());
  };

  const onZoanButtonClick = () => {
    dispatch(switchZoan());
    dispatch(switchFruits());
  };

  return (
    <FruitInfoBoxCtr>
      <LogiaBox
        onClick={onLogiaClick}
        onButtonClick={() => onLogiaButtonClick()}
        show={logiaShow}
        hide={logiaHide}
      />
      <ParameciaBox
        onClick={onParameciaClick}
        onButtonClick={() => onParameciaButtonClick()}
        show={parameciaShow}
        hide={parameciaHide}
      />
      <ZoanBox
        onClick={onZoanClick}
        onButtonClick={() => onZoanButtonClick()}
        show={zoanShow}
        hide={zoanHide}
      />
    </FruitInfoBoxCtr>
  );
};

export default fruitInfoBoxCtr;
