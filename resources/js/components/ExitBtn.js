import React from "react";
import styled from "styled-components";

const ExitBtn = () => {
  const ExitBtn = styled.div`
    font-size: 1.6rem;
    width: 40px;
    height: 40px;
    padding: 2px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
      transition: 0.2s;
      color: #bd1e1e;
    }

    :active {
      transition: 0s;
      color: #ff1919;
    }

    i {
      width: 22px;
      height: 23px;
    }
  `;
  return (
    <ExitBtn>
      <i class="fa fa-times"></i>
    </ExitBtn>
  );
};

export default ExitBtn;
