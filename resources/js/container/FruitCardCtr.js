import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import { Card } from "../components";
import { fetchFruits } from "../store/actions";

const CardsCtr = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;
`;

const cardCtr = props => {
  const fruitType = props.fruitType;
  const fruits = props.fruits;

  useEffect(() => {
    if (fruits.length == 0) {
      props.fetchFruits();
    }
  }, []);

  const createFruitCards = fruitArr => {
    if (fruitArr == undefined) {
      return null;
    }

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

  return (
    <CardsCtr>{props.fruits.loading ? "loading" : renderCards()}</CardsCtr>
  );
};

const mapStateToProps = state => {
  return {
    fruitType: state.fruitType,
    loading: state.fruits.loading,
    fruits: state.fruits.fruits
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFruits: () => dispatch(fetchFruits())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cardCtr);
