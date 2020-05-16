import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

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
  const findFruit = id => {
    let fruit = null;

    for (var fruitType in props.fruits) {
      if (fruit != null) break;

      for (let i = 0; i < props.fruits[fruitType].length; i++) {
        const fruitInArr = props.fruits[fruitType][i];

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
    props.cart.forEach(fruitInArr => {
      const fruit = findFruit(fruitInArr.id);
      if (fruit != null) {
        cartItems.unshift(<CartItem key={fruit.id} fruit={fruit} />);
      }
    });
    return cartItems;
  };

  return <CartItemCtr>{renderCartItems()}</CartItemCtr>;
};

const mapStateToProps = state => {
  return {
    fruits: state.fruits,
    cart: state.cart
  };
};

export default connect(mapStateToProps)(cartItemCtr);
