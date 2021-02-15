import { combineReducers } from "@reduxjs/toolkit";
import API from "services/ChuckNorris";

export const initialState = {
  isLoading: [],
  error: false,
  data: [],
};

const action = "JOKES";

const REQUEST = `REQUEST_${action}`;
const FAILURE = `FAILURE_${action}`;
const SUCCESS = `SUCCESS_${action}`;

const isLoading = (
  state = initialState.isLoading,
  { type, category = "random" }
) => {
  const remove = () => state.filter((current) => current !== category);

  const mapping = {
    [SUCCESS]: remove,
    [REQUEST]: () => [category, ...state],
    [FAILURE]: remove,
  };

  return mapping[type] ? mapping[type]() : state;
};

const error = (state = initialState.error, { type }) => {
  const mapping = {
    [SUCCESS]: false,
    [REQUEST]: false,
    [FAILURE]: true,
  };

  return mapping[type] ?? state;
};

const data = (state = initialState.data, { type, payload }) =>
  type !== SUCCESS
    ? state
    : [payload, ...state?.filter((current) => current.id !== payload.id)];

const request = (category) => ({
  type: REQUEST,
  category,
});

const onSuccess = (payload, category) => ({
  type: SUCCESS,
  payload,
  category,
});

const onError = (category) => ({
  type: FAILURE,
  category,
});

export const search = (category = "") => (dispatch) => {
  dispatch(request(category));
  return API("random", category && { category })
    .then((payload) => dispatch(onSuccess(payload, category)))
    .catch((err) => dispatch(onError(err, category)));
};

export const selector = (e) => e[action.toLowerCase()];
export const selectorByCategory = (category) => (e) => {
  const store = e[action.toLowerCase()];
  return {
    ...store,
    isLoading: store?.isLoading?.includes(category),
    data: store?.data?.filter((joke) => joke.categories.includes(category)),
  };
};

export const reducer = combineReducers({
  isLoading,
  error,
  data,
});

export default reducer;
