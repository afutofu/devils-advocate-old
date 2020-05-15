import * as actionTypes from "../actions/actionTypes";

let initialState = {
  logias: [],
  paramecias: [
    {
      id: 0,
      name: "Gura Gura No Mi",
      price: "$5,046,000,000",
      type: "Paramecia",
      englishName: "Tremor-Tremor Fruit or Quake-Quake Fruit",
      meaning: "Sound of shaking",
      info: `The Gura Gura no Mi is a Paramecia-type Devil Fruit which allows the user to create vibrations, or "quakes", making the user a Tremor Human (震動人間 Shindō Ningen?). It was eaten by Edward "Whitebeard" Newgate, but upon his death, its power was stolen by Marshall D. "Blackbeard" Teach.\nThis fruit is fearsomely reputed to be able to destroy the world, and is considered to be the strongest Devil Fruit within the Paramecia class, having powers no weaker than those of a Logia Devil Fruit.​​​​​​ ​It is one of the fruits with the reputation of being "invincible."`
    }
  ],
  zoans: []
};

const addLogia = (state, fruit) => {
  return state.logia.push(fruit);
};

const fruitsReducer = (state = initialState, action) => {
  switch (action) {
    case actionTypes.ADD_LOGIA:
      return addLogia(state, action.payload);
    default:
      return state;
  }
};

export default fruitsReducer;
