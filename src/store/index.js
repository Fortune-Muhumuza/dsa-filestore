import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './reducers/homeSlice'
import notesReducer from './reducers/notesSlice'

export default configureStore({
    reducer: {
        home: homeReducer,
        notes: notesReducer
    }
  })