import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', name: 'Peterson Frank', year: '2' },
  { id: '2', name: 'Peterson Frank', year: '3' }
]

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {}
})

export default homeSlice.reducer