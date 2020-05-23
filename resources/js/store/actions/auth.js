import * as actions from "./actionTypes";
import axios from "axios";

export const login = (email, password) => {
  return {
    type: actions.LOGIN,
    payload: {
      email,
      password
    }
  };
};

export const attemptLogin = (email, password) => {
  return dispatch => {
    dispatch(attemptLoginBegin());
    return axios
      .post("/api/users/login", { email, password })
      .then(res => {
        dispatch(attemptLoginSuccess({ username: res.data, email, password }));
        return;
      })
      .catch(error => {
        dispatch(attemptLoginFail(error));
        throw Error;
      });
  };
};

const attemptLoginBegin = () => {
  return {
    type: actions.ATTEMPT_LOGIN_BEGIN
  };
};

const attemptLoginSuccess = user => {
  return {
    type: actions.ATTEMPT_LOGIN_SUCCESS,
    payload: { user }
  };
};

const attemptLoginFail = error => {
  return {
    type: actions.ATTEMPT_LOGIN_FAIL,
    payload: { error }
  };
};

export const logout = () => {
  return {
    type: actions.LOGOUT
  };
};

export const attemptRegister = (username, email, password) => {
  return dispatch => {
    dispatch(attemptRegisterBegin());
    return axios
      .post("/api/users", {
        username: username,
        email: email,
        password: password
      })
      .then(res => dispatch(attemptRegisterSuccess(res.data)))
      .catch(err => dispatch(attemptRegisterFail(err)));
  };
};

const attemptRegisterBegin = () => {
  return {
    type: actions.ATTEMPT_REGISTER_BEGIN
  };
};

const attemptRegisterSuccess = user => {
  return {
    type: actions.ATTEMPT_REGISTER_SUCCESS,
    payload: { user }
  };
};

const attemptRegisterFail = error => {
  return {
    type: actions.ATTEMPT_REGISTER_FAIL,
    payload: { error }
  };
};
