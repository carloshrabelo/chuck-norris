import categories from 'mock/categories'

import reduceCategories, {
  initialState,
  onError,
  onSuccess
} from './categories'

describe('categories reducers', () => {
  it('Mount reducer with initial state', () => {
    const state = reduceCategories(initialState, {})
    expect(state).toMatchObject(initialState)
  })

  it(`Should change state error when onError is called`, () => {
    const state = reduceCategories(initialState, onError())
    expect(state).toMatchObject({
      ...initialState,
      isLoading: false,
      error: true
    })
  })

  it(`Should change state data when onSuccess is called`, () => {
    const state = reduceCategories(initialState, onSuccess(categories))
    expect(state).toMatchObject({
      ...initialState,
      isLoading: false,
      data: categories
    })
  })
})
