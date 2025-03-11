import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getItemList } from '../../../api/commonApi';

const fetchPokemonList = createAsyncThunk(
  'pokemonList/fetchList',
  async ({ amount, offset }) => {
    const res = await getItemList(amount, offset);
    return res.data.results;
  },
);

type TPokemonList = any[];

const initialState: TPokemonList = null;

const slice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {
    initialize(state, action) {
      return action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPokemonList.fulfilled, (state, action) => {
      console.log('fetchPokemonList.fulfilled');
      return action.payload;
    });
  },
});

export const pokemonListActions = slice.actions;
pokemonListActions.fetchPokemonList = fetchPokemonList;

export default slice.reducer;
