import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getItemList } from '../../../api/commonApi';
import ReduxUtil from '../../ReduxUtil';

const fetchPokemonList = createAsyncThunk(
  'pokemonList/fetchList',
  async ({ amount, offset }) => {
    const res = await getItemList(amount, offset);
    return res.data.results;
  },
);

type TPokemonList = {
  name: string;
  url: string;
}[];

const initialState: TPokemonList = null;

const slice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {
    initialize(_, action) {
      return action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPokemonList.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const usePokemonListSlice = ReduxUtil.createUseSlice({
  slice,
  thunkActions: { fetchPokemonList },
});

export default slice.reducer;
