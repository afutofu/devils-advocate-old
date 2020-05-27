import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import _ from "lodash";

import { Card, Spinner } from "../components";
import { fetchFruits } from "../store/actions";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity:1;
  }
`;

const CardsCtr = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;

  opacity: 0;
  animation: ${fadeIn} 1.5s 1.25s forwards;
`;

const cardCtr = props => {
  const fruitType = props.fruitType;
  const fruits = props.fruits;

  useEffect(() => {
    if (_.isEmpty(fruits)) {
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
          imagelink={fruit.imagelink}
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

  return <CardsCtr>{props.loading ? <Spinner /> : renderCards()}</CardsCtr>;
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
