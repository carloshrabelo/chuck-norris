import { combineReducers } from '@reduxjs/toolkit'
import API from 'services/ChuckNorris'

export const initialState = {
  isLoading: true,
  error: false,
  data: []
}

const action = 'CATEGORIES'

const REQUEST = `REQUEST_${action}`
const FAILURE = `FAILURE_${action}`
const SUCCESS = `SUCCESS_${action}`

const isLoading = (state = initialState.isLoading, { type }) => {
  const mapping = {
    [SUCCESS]: false,
    [REQUEST]: true,
    [FAILURE]: false
  }

  return mapping[type] ?? state
}

const error = (state = initialState.error, { type }) => {
  const mapping = {
    [SUCCESS]: false,
    [REQUEST]: false,
    [FAILURE]: true
  }

  return mapping[type] ?? state
}

const data = (state = initialState.data, { type, payload }) => {
  if (type !== SUCCESS) return state

  return [...state, ...payload]
}

const request = payload => ({
  type: REQUEST,
  payload
})

const onSuccess = payload => ({
  type: SUCCESS,
  payload
})

const onError = () => ({
  type: FAILURE
})

export const search = id => dispatch => {
  dispatch(request(id))

  return API('categories')
    .then(payload => dispatch(onSuccess(payload)))
    .catch(err => dispatch(onError(err)))
}

export const selector = e => e[action.toLowerCase()]

export const reducer = combineReducers({
  isLoading,
  error,
  data
})

export default reducer
