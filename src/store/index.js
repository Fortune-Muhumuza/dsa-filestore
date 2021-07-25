import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './reducers/homeSlice'
import notesReducer from './reducers/notesSlice'
import authReducer from './reducers/authSlice'

export default configureStore({
    reducer: {
        home: homeReducer,
        notes: notesReducer,
        auth: authReducer
    }
  })