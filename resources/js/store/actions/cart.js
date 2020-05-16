import * as actions from "./actionTypes";

export const addFruit = id => {
  return {
    type: actions.ADD_FRUIT,
    payload: id
  };
};

export const removeFruit = id => {
  return {
    type: actions.REMOVE_FRUIT,
    payload: id
  };
};

export const addFruitAmt = id => {
  return {
    type: actions.ADD_FRUIT_AMT,
    payload: id
  };
};

export const removeFruitAmt = id => {
  return {
    type: actions.REMOVE_FRUIT_AMT,
    payload: id
  };
};
