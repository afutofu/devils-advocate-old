import React from "react";
import styled from "styled-components";

const ShoppingSummary = () => {
  const ShoppingSummary = styled.div`
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `;

  const ItemsCalc = styled.div`
    width: 100%;
  `;

  const ItemCalc = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
  `;

  const Calc = styled.p``;

  const Result = styled.p``;

  const TotalCtr = styled.div``;

  const Total = styled.p`
    border-top: 2px solid rgba(0, 0, 0, 0.2);
    padding-top: 10px;
    align-self: flex-end;
  `;

  return (
    <ShoppingSummary>
      <ItemsCalc>
        <ItemCalc>
          <Calc>$5,046,000 X 1</Calc>
          <Result>$5,046,000</Result>
        </ItemCalc>
        <ItemCalc>
          <Calc>$200,046 X 2</Calc>
          <Result>$400,092</Result>
        </ItemCalc>
      </ItemsCalc>
      <Total>$5,446,092</Total>
    </ShoppingSummary>
  );
};

export default ShoppingSummary;
