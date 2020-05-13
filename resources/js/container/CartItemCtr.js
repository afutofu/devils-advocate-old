import React from "react";
import styled from "styled-components";

import { CartItem } from "../components";

const CartItemCtr = props => {
  const CartItemCtr = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0;
  `;

  const renderCartItems = () => {
    let cartItems = [];
    for (let i = 0; i < props.items; i++) {
      cartItems.push(<CartItem key={i} />);
    }
    return cartItems;
  };

  return <CartItemCtr>{renderCartItems()}</CartItemCtr>;
};

export default CartItemCtr;
