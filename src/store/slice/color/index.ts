import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type TColor = 'red' | 'black'

type TColorConfig = {
  bgColor: TColor
  fgColor: TColor
}

const initialState: TColorConfig = {
  fgColor: 'red',
  bgColor: 'black',
}

const slice = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeColor(
      state,
      action: PayloadAction<{
        which: 'fgColor' | 'bgColor'
        color: TColor
      }>,
    ) {
      state[action.payload.which] = action.payload.color
    },
  },
})

export const { changeColor } = slice.actions
export default slice.reducer
