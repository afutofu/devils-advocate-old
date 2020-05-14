import * as actionTypes from "../actions/actionTypes";

const fruitTypeReducer = (state = "LOGIA", action) => {
  switch (action.type) {
    case actionTypes.SWITCH_LOGIA:
      return "LOGIA";
    case actionTypes.SWITCH_PARAMECIA:
      return "PARAMECIA";
    case actionTypes.SWITCH_ZOAN:
      return "ZOAN";
    default:
      return state;
  }
};

export default fruitTypeReducer;
