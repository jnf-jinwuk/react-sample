import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getItemList } from '../../../api/commonApi';
import { useAppDispatch, useAppSelector } from '@/store';
import ReduxUtil from '../../ReduxUtil';

const fetchPokemonList = createAsyncThunk(
  'pokemonList/fetchList',
  async ({ amount, offset }) => {
    const res = await getItemList(amount, offset);
    return res.data.results;
  },
);

type TPokemonList = any[] | null;

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

let initialized = false;
export const usePokemonState = initialState => {
  const dispatch = useAppDispatch();
  if (!initialized) {
    dispatch(slice.actions.initialize(initialState));
    initialized = true;
    console.log('initialize');
  }
  return useAppSelector(state => state.pokemonList);
};

export const usePokemonListActions = ReduxUtil.createUseActions(slice.actions, {
  fetchPokemonList,
});

export default slice.reducer;
