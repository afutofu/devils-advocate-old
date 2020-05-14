import { combineReducers } from "redux";

import fruitTypeReducer from "./fruitType";

const allReducers = combineReducers({
  fruitType: fruitTypeReducer
});

export default allReducers;
