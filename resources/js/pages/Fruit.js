import React from "react";
import styled from "styled-components";

import { SectionHeader } from "../components";

const Fruit = () => {
  const Fruit = styled.div`
    position: relative;
    max-width: 100vw;
    min-height: 94vh;
  `;

  const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
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
    * {
      margin: 0;
    }
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
    margin-right: 20px;
  `;

  const Type = styled.h1`
    font-weight: 600;
    text-transform: uppercase;
  `;

  const Price = styled.h2`
    font-weight: 600;
    font-size: 1.5rem;
    transform: translateX(20px);
  `;

  const Button = styled.button`
    outline: none;
    text-transform: uppercase;
    background: none;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 7px 15px;
    border: 3px solid #ff3a1c;
    cursor: pointer;
    border-radius: 20px;
    box-sizing: border-box;
    transform: translateX(-20px);
    color: #ff3a1c;
    letter-spacing: 2px;

    transition: 0.5s;
    &:hover {
      background: #ff3a1c;
      color: white;
    }
  `;

  const Hr = styled.hr`
    overflow: visible; /* For IE */
    width: 75%;
    border: none;
    border-top: medium double rgba(0, 0, 0, 0.8);
    margin: 40px auto;
    margin-top: 50px;
    text-align: center;

    &::after {
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

  const InfoContent = styled.p`
    width: 50%;
    padding-left: ${props => props.padding};
  `;

  const Info = styled.p`
    font-size: 1.3rem;
    letter-spacing: 1px;
    margin-bottom: 20px;
  `;

  const Image = styled.div`
    width: 100%;
    height: 250px;
    height: 30vh;
    background: rgb(149, 149, 149);
    margin-bottom: 20px;
  `;

  return (
    <Fruit>
      <Background />
      <Container>
        <Separator>
          <Name>Gura Gura No Mi</Name>
          <Type>Paramecia</Type>
        </Separator>
        <Separator>
          <Price>PRICE: $5,046,000,000</Price>
          <Button>Add to cart</Button>
        </Separator>
        <Hr />
        <InfoImage>
          <InfoContent>
            <Image />
            <SectionHeader name="english name" />
            <Info>Tremor-Tremor Fruit or Quake-Quake Fruit</Info>
            <SectionHeader name="meaning" />
            <Info>Sound of shaking</Info>
          </InfoContent>
          <InfoContent padding="50px">
            <SectionHeader name="Info" />
            <Info>
              The Gura Gura no Mi is a Paramecia-type Devil Fruit which allows
              the user to create vibrations, or "quakes", making the user a
              Tremor Human (震動人間 Shindō Ningen?). It was eaten by Edward
              "Whitebeard" Newgate, but upon his death, its power was stolen by
              Marshall D. "Blackbeard" Teach.
            </Info>
            <Info>
              This fruit is fearsomely reputed to be able to destroy the world,
              and is considered to be the strongest Devil Fruit within the
              Paramecia class, having powers no weaker than those of a Logia
              Devil Fruit.​​​​​​ ​It is one of the fruits with the reputation of
              being "invincible."
            </Info>
          </InfoContent>
        </InfoImage>
      </Container>
    </Fruit>
  );
};

export default Fruit;
