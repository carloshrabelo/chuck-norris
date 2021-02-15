import joke from 'mock/jokes'

import reduceJoke, { initialState, request, onError, onSuccess } from './jokes'

describe('joke reducers', () => {
  it('Mount reducer with initial state', () => {
    const state = reduceJoke(initialState, {})
    expect(state).toMatchObject(initialState)
  })

  it(`Should change state isLoading when request is called`, () => {
    const state = reduceJoke(initialState, request('category'))
    expect(state).toMatchObject({
      ...initialState,
      isLoading: ['category']
    })
  })

  it(`Should change state isLoading when onSuccess is called`, () => {
    const state = reduceJoke(
      {
        ...initialState,
        isLoading: ['category']
      },
      onSuccess(joke, 'category')
    )
    expect(state).toMatchObject({ ...initialState, data: [joke] })
  })

  it(`Should change state error when onError is called`, () => {
    const state = reduceJoke(initialState, onError())
    expect(state).toMatchObject({
      ...initialState,
      error: true
    })
  })

  it(`Should change state data when onSuccess is called`, () => {
    const state = reduceJoke(initialState, onSuccess(joke))
    expect(state).toMatchObject({
      ...initialState,
      data: [joke]
    })
  })
  it(`Should prevent add data when item alrealy exists`, () => {
    const state = reduceJoke({ ...initialState, data: [joke] }, onSuccess(joke))
    expect(state).toMatchObject({
      ...initialState,
      data: [joke]
    })
  })
})
