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
    background: #333;
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
    justify-content: flex-start;
    align-items: flex-start;

    * {
      margin: 0;
    }
  `;

  const CartItems = styled.div`
    width: 70%;
    padding-right: 50px;
    box-sizing: border-box;
  `;

  const Checkout = styled.div`
    width: 30%;
    min-width: 270px;
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
