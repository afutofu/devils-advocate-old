import * as actionTypes from "./actionTypes";

export const addLogia = fruit => {
  return {
    type: actionTypes.ADD_LOGIA,
    payload: fruit
  };
};
