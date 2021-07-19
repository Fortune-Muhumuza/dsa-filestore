import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './reducers/homeSlice'

export default configureStore({
    reducer: {
        home: homeReducer,
    }
  })