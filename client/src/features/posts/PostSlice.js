import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  post:[] ,
}

export const counterSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {}   
})

// Action creators are generated for each case reducer function
export const {  } = counterSlice.actions

export default counterSlice.reducer