import * as actions from "./actionTypes";

export const login = (username, email) => {
  return {
    type: actions.LOGIN,
    payload: {
      username,
      email
    }
  };
};
