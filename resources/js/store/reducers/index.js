import { combineReducers } from "redux";

import navItemReducer from "./navItem";
import fruitTypeReducer from "./fruitType";
import fruitsReducer from "./fruits";

const allReducers = combineReducers({
  navItem: navItemReducer,
  fruitType: fruitTypeReducer,
  fruits: fruitsReducer
});

export default allReducers;
