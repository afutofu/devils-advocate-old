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
  overflow-x: hidden;
`;

const cartItemCtr = props => {
  const renderCartItems = () => {
    let cartItems = [];
    for (let i = 0; i < props.items; i++) {
      cartItems.push(<CartItem key={i} />);
    }
    return cartItems;
  };

  return <CartItemCtr>{renderCartItems()}</CartItemCtr>;
};

export default cartItemCtr;
