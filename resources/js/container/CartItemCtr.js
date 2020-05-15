import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { CartItem } from "../components";

const CartItemCtr = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  box-sizing: border-box;
`;

const cartItemCtr = props => {
  const fruits = useSelector(state => state.fruits);
  const cart = useSelector(state => state.cart);

  const findFruit = id => {
    let fruit = null;

    for (var fruitType in fruits) {
      if (fruit != null) break;

      for (let i = 0; i < fruits[fruitType].length; i++) {
        const fruitInArr = fruits[fruitType][i];

        if (fruitInArr.id == id) {
          fruit = fruitInArr;
          break;
        }
      }
    }

    return fruit != null ? fruit : null;
  };

  const renderCartItems = () => {
    let cartItems = [];

    for (var fruitId in cart) {
      const fruit = findFruit(fruitId);
      if (fruit != null) {
        cartItems.push(<CartItem key={fruitId} fruit={fruit} />);
      }
    }

    return cartItems;
  };

  return <CartItemCtr>{renderCartItems()}</CartItemCtr>;
};

export default cartItemCtr;
