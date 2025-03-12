import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getItemList } from '../../../api/commonApi';
import ReduxUtil from '../../ReduxUtil';

const fetchPokemonList = createAsyncThunk(
  'pokemonList/fetchList',
  async ({ amount, offset }: { amount: number; offset: number }) => {
    const res = await getItemList(amount, offset);
    return res.data.results;
  },
);

type TPokemonList = {
  status: 'error' | 'pending' | 'loaded';
  data: {
    name: string;
    url: string;
  }[];
};

const initialState: TPokemonList = {
  status: 'pending',
  data: [],
};

const slice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {
    initialize(state, action) {
      return { status: 'loaded', data: action.payload };
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        return { status: 'loaded', data: action.payload };
      })
      .addCase(fetchPokemonList.pending, (state, action) => {
        state.status = 'pending';
      });
  },
});

export const usePokemonListSlice = ReduxUtil.createUseSlice({
  slice,
  thunkActions: { fetchPokemonList },
});

export default slice.reducer;
