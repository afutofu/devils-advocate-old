import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { LogiaBox, ParameciaBox, ZoanBox } from "../components";

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
      console.log("LOGIA SHOW");
      setLogiaShow(true);
      setParameciaShow(false);
      setZoanShow(false);

      setLogiaHide(false);
      setParameciaHide(true);
      setZoanHide(true);
    } else {
      console.log("LOGIA HIDE, CLEAR");
      clear();
    }
  };

  const onParameciaClick = () => {
    if (parameciaHide == true || parameciaShow == false) {
      console.log("PARAMECIA SHOW");
      setLogiaShow(false);
      setParameciaShow(true);
      setZoanShow(false);

      setLogiaHide(true);
      setParameciaHide(false);
      setZoanHide(true);
    } else {
      console.log("PARAMECIA HIDE, CLEAR");
      clear();
    }
  };

  const onZoanClick = () => {
    if (zoanHide == true || zoanShow == false) {
      console.log("ZOAN SHOW");
      setLogiaShow(false);
      setParameciaShow(false);
      setZoanShow(true);

      setLogiaHide(true);
      setParameciaHide(true);
      setZoanHide(false);
    } else {
      console.log("ZOAN HIDE, CLEAR");
      clear();
    }
  };

  return (
    <FruitInfoBoxCtr>
      <LogiaBox onClick={onLogiaClick} show={logiaShow} hide={logiaHide} />
      <ParameciaBox onClick={onParameciaClick} show={parameciaShow} hide={parameciaHide} />
      <ZoanBox onClick={onZoanClick} show={zoanShow} hide={zoanHide} />
    </FruitInfoBoxCtr>
  );
};

export default fruitInfoBoxCtr;
