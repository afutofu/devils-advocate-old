import * as actions from "./actionTypes";

export function fetchFruits() {
  return dispatch => {
    dispatch(fetchFruitsBegin());
    return (
      axios
        .get("/api/fruits")
        // .then(handleErrors)
        .then(res => {
          dispatch(fetchFruitsSuccess(res.data));
        })
        .catch(error => dispatch(fetchFruitsFail(error)))
    );
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const fetchFruitsBegin = () => {
  return {
    type: actions.FETCH_FRUITS_BEGIN
  };
};

export const fetchFruitsSuccess = fruits => {
  return {
    type: actions.FETCH_FRUITS_SUCCESS,
    payload: { fruits }
  };
};

export const fetchFruitsFail = error => {
  console.log(error);
  return {
    type: actions.FETCH_FRUITS_FAIL,
    payload: { error }
  };
};
