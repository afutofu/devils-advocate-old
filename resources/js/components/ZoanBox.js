import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useDispatch } from "react-redux";

import { switchZoan } from "../store/actions";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to{
    opacity:1;
  }
`;

const scaleOut = keyframes`
  from {transform: scaleX(0)}
  to {transform: scaleX(1)}
`;

const fadeInFromBottom = keyframes`
  from{
    opacity:0;
    transform: translateY(50%);
  }
  to{
    opacity:1;
    transform: translateY(0%);
}
`;

const ZoanBox = styled.div`
  position: relative;
  min-width: 50px;
  height: 100%;
  margin-left: 10px;
  background-color: #2cc9c9;
  flex-basis: 0;
  flex: ${props => (props.hide ? 0.1 : 1)};
  cursor: pointer;

  transition: flex 0.5s, background-color 0.2s;
  :hover {
    background: ${props => (props.show ? "#2cc9c9" : "#33f8ff")};
  }
`;

const Container = styled.div`
  display: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 50px;
  box-sizing: border-box;
`;

const getFontSize = props => {
  if (props.hide == false && props.show == false) {
    return "2rem";
  } else if (props.hide == false && props.show == true) {
    return "2rem";
  } else if (props.hide == true && props.show == false) {
    return "0.5rem";
  }
};

const Name = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  text-transform: uppercase;
  color: white;
  box-sizing: border-box;

  transition: 0.2s;
  opacity: ${props => (props.hide || props.show ? 0 : 1)};
  font-size: ${props => getFontSize(props)};
`;

const ShowInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: 0;
  width: 100%;
  font-size: 1.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const ShowName = styled.h1`
  position: relative;
  opacity: 0;
  text-align: center;
  margin: 0;
  width: 100%;
  max-width: 500px;
  font-size: 3rem;
  color: white;
  text-transform: uppercase;
  margin-bottom: 30px;
  animation: ${fadeIn} 0.3s 0.5s linear forwards;
`;

const Underline = styled.div`
  width: 40%;
  height: 3px;
  background-color: #fff;
  transform: scaleX(0);
  border-radius: 50px;
  margin-bottom: 40px;

  animation: ${scaleOut} 1s 0.8s ease forwards;
`;

const Info = styled.div`
  text-align: center;
  margin: 0;
  width: 100%;
  max-width: 700px;
  letter-spacing: 0px;
  font-size: 1.7rem;
  color: white;
  margin-bottom: 40px;
  padding: 0 30px;
  box-sizing: border-box;
  opacity: 0;
  animation: ${fadeInFromBottom} 0.8s 1.3s ease forwards;
`;

const Button = styled.button`
  outline: none;
  text-transform: uppercase;
  background: #222;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 10px 15px;
  border: 3px solid #222;
  cursor: pointer;
  border-radius: 20px;
  box-sizing: border-box;
  color: #fff;
  letter-spacing: 2px;

  transition: 0.2s;
  :hover {
    border: 3px solid #fff;
  }

  opacity: 0;
  transform: translateY(50%);
  animation: ${fadeInFromBottom} 1s 2s ease forwards;
`;

const zoanBox = props => {
  const dispatch = useDispatch();

  const renderContent = () => {
    let showInfo = null;

    if (props.show) {
      showInfo = (
        <ShowInfo>
          <ShowName>Zoan</ShowName>
          <Underline />
          <Info>
            Zoan is one of the three Devil Fruit types. This type of fruit
            allows the user to transform into another species and inter-species
            hybrid forms at will. Zoan types are especially effective in close
            combat.
          </Info>
          <Link to="/fruits">
            <Button onClick={() => props.onButtonClick()}>Browse Zoans</Button>
          </Link>
        </ShowInfo>
      );
    }

    return (
      <ZoanBox onClick={props.onClick} show={props.show} hide={props.hide}>
        <Container>
          <Name show={props.show} hide={props.hide}>
            Zoan
          </Name>
          {showInfo}
        </Container>
      </ZoanBox>
    );
  };

  return renderContent();
};

export default zoanBox;