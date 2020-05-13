import React from "react";
import styled from "styled-components";

import { CartItemCtr, CheckoutCard } from "../container";

const Cart = () => {
  const Cart = styled.div`
    min-height: 94vh;
    max-width: 100vw;
    width: 100vw;
    position: relative;
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
    width: 80%;
    min-height: 94vh;
    margin: auto;
    padding-bottom: 20px;
    box-sizing: border-box;
    background: none;
    padding: 20px 50px;
    padding-top: 70px;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    * {
      margin: 0;
    }
  `;

  const CartItems = styled.div`
    width: 65%;
    padding-right: 50px;
    box-sizing: border-box;
  `;

  const Checkout = styled.div`
    width: 35%;
    min-width: 250px;
    float: right;
  `;

  return (
    <Cart>
      <Background />
      <Container>
        <CartItems>
          <CartItemCtr items={5} />
        </CartItems>
        <Checkout>
          <CheckoutCard />
        </Checkout>
      </Container>
    </Cart>
  );
};

export default Cart;