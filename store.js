import { configureStore } from '@reduxjs/toolkit'
import categories from './reducers/categories'
import jokes from './reducers/jokes'

export default configureStore({
  reducer: {
    categories,
    jokes
  }
})
