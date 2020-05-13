import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { device } from "../utility/deviceWidth";

const Card = styled.div`
  min-width: 200px;
  max-width: 450px;
  height: 270px;
  margin: 0 1vw;
  margin-bottom: 8vh;
  padding: 2px;
  box-sizing: border-box;
  border-radius: 5px 5px 0 0;
  background: #fefefe;
  border-bottom: 5px solid #aaa;
  overflow: hidden;

  transition: 0.3s;
  &:hover {
    transform: translateY(-5%);
  }

  @media ${device.mobileM} {
    min-width: 250px;
  }

  @media ${device.tablet} {
    min-width: 300px;
  }

  @media ${device.laptopL} {
    min-width: 350px;
  }

  @media ${device.laptopL} {
    min-width: 400px;
  }

  @media ${device.desktop} {
    width: 450px;
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;

//  const Image = styled.img.attrs(props => ({
//      src: props.src || ""
//    }))`
const Image = styled.div`
  flex-grow: 1;
  width: 100%;
  height: 150px;
  background: rgb(89, 255, 247);
  border-radius: 5px 5px 0px 0px;
  border: 0;
`;

const Content = styled.div`
  flex-grow: 0.3;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  border: none;
`;

const Name = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  color: black;
`;

const Price = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  color: black;
`;

const card = props => {
  return (
    <Card>
      <Link to="/fruits/1">
        <Image src="" />
        <Content>
          <Name>{props.name}</Name>
          <Price>{props.price}</Price>
        </Content>
      </Link>
    </Card>
  );
};

export default card;
