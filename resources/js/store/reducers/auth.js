import * as actions from "../actions/actionTypes";

const initialState = { userId: null, username: null };

const login = (state, payload) => {
  return { ...state, username: payload.username };
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return login(state, action.payload);
    default:
      return state;
  }
};

export default authReducer;
