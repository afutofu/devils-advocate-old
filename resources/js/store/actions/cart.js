import * as actionTypes from "./actionTypes";

export const addFruit = id => {
  return {
    type: actionTypes.ADD_FRUIT,
    payload: id
  };
};

export const removeFruit = id => {
  return {
    type: actionTypes.REMOVE_FRUIT,
    payload: id
  };
};

export const addFruitAmt = id => {
  return {
    type: actionTypes.ADD_FRUIT_AMT,
    payload: id
  };
};

export const removeFruitAmt = id => {
  return {
    type: actionTypes.REMOVE_FRUIT_AMT,
    payload: id
  };
};
