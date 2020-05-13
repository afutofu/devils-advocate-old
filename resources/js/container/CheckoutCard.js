import React from "react";
import styled from "styled-components";

import { ShoppingSummary } from "../components";

const CheckoutCard = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  padding: 20px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  background: #fefefe;
  margin: 0;
  box-sizing: border-box;
`;

const Header = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 20px;
  text-transform: uppercase;
`;

const Hr = styled.hr`
  align-self: center;
  border: none;
  width: 100%;
  border-top: 2px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 100%;
  outline: none;
  text-transform: uppercase;
  background: #f50000;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 7px 15px;
  border: 3px solid #f50000;
  cursor: pointer;
  border-radius: 5px;
  box-sizing: border-box;
  color: white;
  letter-spacing: 2px;
  align-self: center;
  margin-top: 20px;

  transition: 0.3s;
  :hover {
    transition: 0.2s;
    background: #c90000;
    border: 3px solid #c90000;
  }
`;

const checkoutCard = () => {
  return (
    <CheckoutCard>
      <Header>Shopping Summary</Header>
      <Hr />
      <ShoppingSummary />
      <Button>Checkout</Button>
    </CheckoutCard>
  );
};

export default checkoutCard;
