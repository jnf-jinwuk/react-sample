import { getItemList } from '@/api/commonApi';
import ReduxUtil from '@/store/ReduxUtil';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const SLICE_NAME = 'abilityList';

type TAbilityList = {
  status: 'error' | 'pending' | 'loaded';
  data: {
    name: string;
    url: string;
  }[];
};

const initialState: TAbilityList = {
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
      .addCase(fetchAbilityList.fulfilled, (state, action) => {
        return { status: 'loaded', data: action.payload };
      })
      .addCase(fetchAbilityList.pending, (state, action) => {
        state.status = 'pending';
      });
  },
});

const fetchAbilityList = createAsyncThunk(
  `${SLICE_NAME}/fetchList`,
  async ({ amount, offset }: { amount: number; offset: number }) => {
    const res = await getItemList(amount, offset);
    return res.data.results;
  },
);

export const useAbilityListSlice = ReduxUtil.createUseSlice({
  slice,
  thunkActions: { fetchAbilityList },
});

export default slice.reducer;
