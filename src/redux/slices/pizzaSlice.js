import { createSlice } from '@reduxjs/toolkit';

export const pizzaSlice = createSlice({
  name: 'pizzas',
  initialState: {
    count: 10,
  },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decriment: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, actioin) => {
      state.count += actioin.payload
    }
  }
})

export const { increment, decriment, incrementByAmount } = pizzaSlice.actions
export default pizzaSlice.reducer