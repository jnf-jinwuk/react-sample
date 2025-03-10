import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type TCounter = {
  x: number
  y: number
}

const initialState: TCounter = {
  x: 1200,
  y: 1080,
}

const slice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementX(state) {
      state.x++
    },
    incrementY(state) {
      state.y++
    },
    increment(
      state,
      action: PayloadAction<{ which: 'x' | 'y'; amount: number }>,
    ) {
      state[action.payload.which] += action.payload.amount
    },
  },
})

export const { increment, incrementX, incrementY } = slice.actions
export default slice.reducer
