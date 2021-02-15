import { combineReducers } from '@reduxjs/toolkit'
import API from 'services/ChuckNorris'

export const initialState = {
  isLoading: false,
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

const data = (state = initialState.data, { type, payload }) =>
  type !== SUCCESS ? state : payload

export const onSuccess = payload => ({
  type: SUCCESS,
  payload
})

export const onError = () => ({
  type: FAILURE
})

export const search = () => dispatch =>
  API('categories')
    .then(payload => dispatch(onSuccess(payload)))
    .catch(err => dispatch(onError(err)))

export const selector = e => e[action.toLowerCase()]

export const reducer = combineReducers({
  isLoading,
  error,
  data
})

export default reducer
