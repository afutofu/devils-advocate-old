import * as actions from "./actionTypes";

export const addLogia = fruit => {
  return {
    type: actions.ADD_LOGIA,
    payload: fruit
  };
};
