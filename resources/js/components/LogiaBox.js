import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import akainu from "../assets/images/akainu.jpg";
import ace from "../assets/images/ace.jpg";

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

const slideIn = keyframes`
  from{transform: translateY(-100%); pointer-events: none}
  to{transform:translateY(0%); pointer-events: auto }
`;

const slideInStretchOut = keyframes`
  0%{
    transform: translateY(-101%) scaleX(0.5); 
    pointer-events: none
  }
  50%{
    transform:translateY(0%) scaleX(0.5); 
    pointer-events: none
  }
  100%{
    transform:translateY(0%) scaleX(1); 
    pointer-events: auto 
  }
`;

const OuterContainer = styled.div`
  position: relative;
  min-width: 50px;
  height: 100%;
  margin-right: 10px;
  overflow: hidden;
  flex-basis: 0;
  flex: ${props => (props.hide ? 0.1 : 1)};
  transition: flex 0.5s, background-color 0.2s;
`;

const LogiaBox = styled.div`
  transform: translateY(-101%) scaleX(0.5);
  width: 100%;
  height: 100%;
  /* background-color: #c72e2e; */
  animation: ${slideInStretchOut} 1s 0.5s forwards;
  cursor: pointer;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  /* background: #2a2a2a; */
  z-index: -50;
  transition: 0.5s;
  ${LogiaBox}:hover & {
    background: ${props =>
      props.show ? "rgba(0,0,0, 0.5)" : "rgba(0,0,0, 0.3)"};
  }
`;

const BackgroundImage = styled.img.attrs(props => ({
  src: props.src || ""
}))`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -100;
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

  opacity: 0;
  transition: 0.5s;
  ${LogiaBox}:hover & {
    opacity: 1;
  }
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

const logiaBox = props => {
  const renderContent = () => {
    let showInfo = null;

    if (props.show) {
      showInfo = (
        <ShowInfo>
          <ShowName>Logia</ShowName>
          <Underline />
          <Info>
            Logia is one of the three Devil Fruit types. In essence, this type
            allows the user to completely alter their form into a natural
            element and manipulate it at will.
          </Info>
          <Link to="/fruits">
            <Button onClick={() => props.onButtonClick()}>Browse Logias</Button>
          </Link>
        </ShowInfo>
      );
    }

    return (
      <OuterContainer
        hide={props.hide}
        onClick={props.onClick}
        show={props.show}
      >
        <LogiaBox show={props.show}>
          <BackgroundImage src={ace} />
          <Background show={props.show} />
          <Container>
            <Name show={props.show} hide={props.hide}>
              Logia
            </Name>
            {showInfo}
          </Container>
        </LogiaBox>
      </OuterContainer>
    );
  };

  return renderContent();
};

export default logiaBox;
