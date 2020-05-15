import * as actionTypes from "../actions/actionTypes";

let initialState = { 0: 1 };

const addFruit = (state, fruitIdToAdd) => {
  state[fruitIdToAdd] = 0;
  return state;
};

const removeFruit = (state, fruitIdToRemove) => {
  let newCart = {};

  for (var fruitId in state) {
    if (fruitId != fruitIdToRemove) {
      newCart.fruitId = state[fruitId];
    }
  }

  return newCart;
};

const addFruitAmt = (state, fruitId) => {
  return { ...state, [fruitId]: state[fruitId] + 1 };
};

const removeFruitAmt = (state, fruitId) => {
  if (state[fruitId] === 0) {
    return state;
  }
  return { ...state, [fruitId]: state[fruitId] - 1 };
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FRUIT:
      return addFruit(state, action.payload);
    case actionTypes.REMOVE_FRUIT:
      return removeFruit(state, action.payload);
    case actionTypes.ADD_FRUIT_AMT:
      return addFruitAmt(state, action.payload);
    case actionTypes.REMOVE_FRUIT_AMT:
      return removeFruitAmt(state, action.payload);
    default:
      return state;
  }
};

export default cartReducer;
