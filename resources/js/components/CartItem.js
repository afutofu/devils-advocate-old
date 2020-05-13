import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Counter, ExitBtn } from "./index";

const CartItem = () => {
  const CartItem = styled.div`
    position: relative;
    width: 100%;
    max-width: 800px;
    height: 175px;
    margin-bottom: 50px;
    border-radius: 5px;
    padding: 5px;
    box-sizing: border-box;
    background: #fefefe;
    display: flex;
    align-self: flex-end;
  `;

  const Image = styled.div`
    min-width: 200px;
    width: 200px;
    height: 100%;
    border-radius: 5px;
    background: #f23f3f;
    box-sizing: border-box;
  `;

  const Info = styled.div`
    flex-grow: 1;
    padding: 10px;
    padding-left: 20px;
    padding-top: 20px;
    box-sizing: border-box;
    * {
      margin: 0;
    }
  `;

  const Name = styled.h1`
    width: 100%;
    font-weight: 700;
    font-size: 1.7rem;
    text-transform: uppercase;
    margin-right: 20px;
    margin-bottom: 10px;
    box-sizing: border-box;
    cursor: pointer;

    a {
      color: black;
    }
  `;

  const Price = styled.h2`
    width: 100%;
    font-weight: 500;
    font-size: 1.3rem;
    box-sizing: border-box;
  `;

  const ExitPos = styled.div`
    margin: 0;
    position: absolute;
    top: 10px;
    right: 10px;
    box-sizing: border-box;
  `;

  const CounterPos = styled.div`
    margin: 0;
    position: absolute;
    bottom: 5px;
    right: 20px;
    box-sizing: border-box;
  `;

  return (
    <CartItem>
      <Image />
      <Info>
        <Name>
          <Link to="/fruits/1">Gura Gura No Mi</Link>
        </Name>
        <Price>$5,046,000,000</Price>
      </Info>
      <ExitPos>
        <ExitBtn />
      </ExitPos>
      <CounterPos>
        <Counter />
      </CounterPos>
    </CartItem>
  );
};

export default CartItem;
