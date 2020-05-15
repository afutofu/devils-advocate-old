import { combineReducers } from "redux";

import navItemReducer from "./navItem";
import fruitTypeReducer from "./fruitType";
import fruitsReducer from "./fruits";
import cartReducer from "./cart";

const allReducers = combineReducers({
  navItem: navItemReducer,
  fruitType: fruitTypeReducer,
  fruits: fruitsReducer,
  cart: cartReducer
});

export default allReducers;
