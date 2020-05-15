import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Card } from "../components";

const CardsCtr = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;
`;

const cardCtr = props => {
  const fruitType = useSelector(state => state.fruitType);
  const fruits = useSelector(state => state.fruits);

  const createFruitCards = fruitArr => {
    return fruitArr.map(fruit => {
      return (
        <Card
          key={fruit.id}
          id={fruit.id}
          name={fruit.name}
          price={fruit.price}
        />
      );
    });
  };

  const renderCards = () => {
    switch (fruitType) {
      case "LOGIA":
        return createFruitCards(fruits.logias);
      case "PARAMECIA":
        return createFruitCards(fruits.paramecias);
      case "ZOAN":
        return createFruitCards(fruits.zoans);
      default:
        return [];
    }
  };

  return <CardsCtr>{renderCards()}</CardsCtr>;
};

export default cardCtr;
