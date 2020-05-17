import * as actions from "./actionTypes";

export const login = (username, password) => {
  return {
    type: actions.LOGIN,
    payload: {
      username,
      password
    }
  };
};

export const logout = () => {
  return {
    type: actions.LOGOUT
  };
};
