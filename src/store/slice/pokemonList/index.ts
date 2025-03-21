import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getItemList } from '@/api/commonApi';
import ReduxUtil from '@/store/ReduxUtil';

const SLICE_NAME = 'pokemonList';

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
  name: SLICE_NAME,
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

const fetchPokemonList = createAsyncThunk(
  `${SLICE_NAME}/fetchList`,
  async ({ amount, offset }: { amount: number; offset: number }) => {
    const res = await getItemList(amount, offset);
    return res.data.results;
  },
);

export const usePokemonListSlice = ReduxUtil.createUseSlice({
  slice,
  thunkActions: { fetchPokemonList },
});

export default slice.reducer;
