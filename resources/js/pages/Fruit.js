import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { SectionHeader } from "../components";

const Fruit = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100vw;
  min-height: 94vh;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.4); */
  background: #2a2a2a;
  z-index: -100;
`;

const Container = styled.div`
  position: relative;
  width: 70%;
  min-height: 94vh;
  margin: auto;
  padding-bottom: 20px;
  box-sizing: border-box;
  background: #fefefe;
  padding: 20px 50px;
  padding-top: 70px;
`;

const Separator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Name = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3rem;
  margin: 0;
  margin-right: 20px;
`;

const Type = styled.h1`
  font-weight: 600;
  margin: 0;
  text-transform: uppercase;
`;

const Price = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0;
  transform: translateX(20px);
`;

const Button = styled.button`
  outline: none;
  text-transform: uppercase;
  background: none;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 7px 15px;
  border: 3px solid #f50000;
  cursor: pointer;
  border-radius: 20px;
  box-sizing: border-box;
  transform: translateX(-20px);
  color: #f50000;
  letter-spacing: 2px;

  transition: 0.3s;
  :hover {
    background: #f50000;
    color: white;
  }
`;

const Hr = styled.hr`
  overflow: visible; /* For IE */
  width: 75%;
  border: none;
  border-top: medium double rgba(0, 0, 0, 0.8);
  margin: 30px auto;
  margin-top: 50px;
  text-align: center;

  :after {
    content: "$$$";
    display: inline-block;
    position: relative;
    top: -0.7em;
    font-size: 1.5em;
    padding: 0 0.25em;
    background: rgb(249, 249, 249);
  }
`;

const InfoImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const InfoContent = styled.div`
  width: 50%;
  padding-left: ${props => props.padding};
`;

const Info = styled.p`
  font-size: 1.5rem;
  letter-spacing: 0px;
  margin-bottom: 20px;
  line-height: 2.1rem;
  text-align: justify;
`;

const Image = styled.div`
  width: 100%;
  height: 250px;
  height: 30vh;
  background: #ddd;
  margin-bottom: 20px;
`;

const fruit = props => {
  const fruits = useSelector(state => state.fruits);
  let fruit = null;

  for (var fruitType in fruits) {
    if (fruit != null) break;

    for (let i = 0; i < fruits[fruitType].length; i++) {
      const fruitInArr = fruits[fruitType][i];

      if (fruitInArr.id == props.match.params.id) {
        fruit = fruitInArr;
        break;
      }
    }
  }

  const renderInfo = () => {
    return fruit.info.split("\n").map((info, id) => {
      return <Info key={id}>{info}</Info>;
    });
  };

  const renderContent = () => {
    if (fruit == null) {
      return (
        <Fruit>
          <Background />
          <Container>
            <Name>Fruit ID not found</Name>
          </Container>
        </Fruit>
      );
    }

    return (
      <Fruit>
        <Background />
        <Container>
          <Separator>
            <Name>{fruit.name}</Name>
            <Type>{fruit.type}</Type>
          </Separator>
          <Separator>
            <Price>PRICE: {fruit.price}</Price>
            <Button>Add to cart</Button>
          </Separator>
          <Hr />
          <InfoImage>
            <InfoContent>
              <Image />
              <SectionHeader name="english name" />
              <Info>{fruit.englishName}</Info>
              <SectionHeader name="meaning" />
              <Info>{fruit.meaning}</Info>
            </InfoContent>
            <InfoContent padding="50px">
              <SectionHeader name="Info" />
              {renderInfo()}
            </InfoContent>
          </InfoImage>
        </Container>
      </Fruit>
    );
  };

  return renderContent();
};

export default fruit;
