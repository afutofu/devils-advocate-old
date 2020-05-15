import React from "react";
import styled from "styled-components";

const RegisterCard = styled.div`
  position: relative;
  width: 50%;
  min-width: 200px;
  max-width: 400px;
  padding: 20px;
  padding-top: 30px;
  padding-bottom: 0;
  background: #fefefe;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;

  a {
    width: 100%;
  }
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

const Input = styled.input.attrs(props => ({
  placeholder: props.name,
  name: props.name,
  type: props.type
}))`
  width: 100%;
  height: 40px;
  font-size: 1rem;
  border-radius: 5px;
  margin-bottom: 20px;
  outline: none;
  padding: 5px 10px;
  box-sizing: border-box;
  letter-spacing: 1px;
  background: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-family: "Montserrat", sans-serif;

  :focus {
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
`;

const Button = styled.button`
  width: 100%;
  outline: none;
  text-transform: uppercase;
  background: ${props => (props.inverse ? "white" : "#f50000")};
  font-weight: 600;
  font-size: 0.9rem;
  padding: 7px 15px;
  border: 3px solid #f50000;
  cursor: pointer;
  border-radius: 5px;
  box-sizing: border-box;
  color: ${props => (props.inverse ? "#f50000" : "white")};
  letter-spacing: 2px;
  align-self: center;
  margin-bottom: 20px;

  transition: 0.3s;
  :hover {
    background: ${props => (props.inverse ? "white" : "#c90000")};
    border: ${props =>
      props.inverse ? "3px solid #f50000" : "3px solid #c90000"};
  }
`;

const registerCard = () => {
  return (
    <RegisterCard>
      <Header>Register</Header>
      <Hr />
      <Input name="Username" type="text" />
      <Input name="Email" type="text" />
      <Input name="Password" type="password" />
      <Input name="Retype Password" type="password" />
      <Button>Register</Button>
    </RegisterCard>
  );
};

export default registerCard;
