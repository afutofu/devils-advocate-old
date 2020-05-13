import React from "react";
import styled from "styled-components";

import { Card } from "../components";

const CardsCtr = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;
`;

const cardCtr = props => {
  const renderCards = () => {
    let cards = [];
    for (let i = 0; i < props.cards; i++) {
      cards.push(
        <Card key={i} name={"Gura Gura No Mi"} price={"$5,046,000"} />
      );
    }
    return cards;
  };

  return <CardsCtr>{renderCards()}</CardsCtr>;
};

export default cardCtr;
