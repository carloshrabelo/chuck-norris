import { configureStore } from '@reduxjs/toolkit'
import categories from './reducers/categories'

export default configureStore({
  reducer: {
    categories
  }
})
