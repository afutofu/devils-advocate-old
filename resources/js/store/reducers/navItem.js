import * as actionTypes from "../actions/actionTypes";

const navItemReducer = (state = "", action) => {
  switch (action.type) {
    case actionTypes.SWITCH_LOGO:
      return "LOGO";
    case actionTypes.SWITCH_FRUITS:
      return "FRUITS";
    case actionTypes.SWITCH_CART:
      return "CART";
    case actionTypes.SWITCH_LOGIN:
      return "LOGIN";
    case actionTypes.SWITCH_REGISTER:
      return "REGISTER";
    default:
      return state;
  }
};

export default navItemReducer;
