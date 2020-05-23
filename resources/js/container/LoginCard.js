import React, { useState } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

import { attemptLogin } from "../store/actions";
import { FormInput } from "../components";
import { isEmpty } from "../shared/validateInput";
import * as actions from "../store/actions/actionTypes";

const LoginCard = styled.div`
  position: relative;
  width: 50%;
  min-width: 300px;
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

  a {
    width: 100%;
  }
`;

const ErrorBox = styled.button`
  width: 100%;
  height: 40px;
  font-size: 0.8rem;
  border-radius: 5px;
  margin-bottom: 20px;
  outline: none;
  padding: 5px 10px;
  box-sizing: border-box;
  letter-spacing: 1px;
  background: rgba(255, 0, 0, 0.15);
  border: 1px solid rgba(255, 0, 0, 0.6);
  font-family: "Montserrat", sans-serif;
`;

const Header = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  margin-bottom: 10px;
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
  placeholder: props.placeholder,
  type: props.type,
  name: props.name
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
    background: none;
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

const loginCard = props => {
  let users = [
    { id: 0, username: "test", email: "test@test.com", password: "test" }
  ];

  const [emailVal, setEmailVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
  const [error, setError] = useState(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState(null);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [redirect, setRedirect] = useState(false);

  let isValidated = true;

  const clearInputs = () => {
    setEmailVal("");
    setPasswordVal("");
  };
  ``;
  const validateInput = (input, setInputErrorMsg) => {
    if (isEmpty(input)) {
      isValidated = false;
      setInputErrorMsg("This field is required");
    } else {
      setInputErrorMsg(null);
    }
  };

  const onAttemptLogin = e => {
    e.preventDefault();
    // Validate Input
    isValidated = true;
    validateInput(emailVal, setEmailErrorMsg);
    validateInput(passwordVal, setPasswordErrorMsg);

    if (isValidated) {
      // API request for users in DB
      setError(false);

      props
        .attemptLogin(emailVal, passwordVal)
        .then(() => {
          clearInputs();
          setRedirect(true);
        })
        .catch(() => {
          clearInputs();
          setError(true);
        });
    }
  };

  const onUsernameChange = event => {
    setEmailVal(event.target.value);
  };

  const onPasswordChange = event => {
    setPasswordVal(event.target.value);
  };

  const renderRedirect = () => {
    if (redirect) {
      return <Redirect to="/fruits" />;
    }
  };

  return (
    <form onSubmit={e => onAttemptLogin(e)}>
      {renderRedirect()}
      <LoginCard>
        <Header>Login</Header>
        <Hr />
        {error && <ErrorBox>Username or password is invalid</ErrorBox>}
        <FormInput
          name="email"
          placeholder="Email"
          onChange={e => onUsernameChange(e)}
          value={emailVal}
          errorMsg={emailErrorMsg}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          onChange={e => onPasswordChange(e)}
          value={passwordVal}
          errorMsg={passwordErrorMsg}
        />
        <Button>Login</Button>
        <Link to="/register">
          <Button inverse>Register</Button>
        </Link>
      </LoginCard>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    attemptLogin: (username, password) =>
      dispatch(attemptLogin(username, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(loginCard);
