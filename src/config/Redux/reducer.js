import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedChip: 1,
  accessToken: null,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setSelectedChip: (state, action) => {
      state.selectedChip = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setSelectedChip, setAccessToken} = globalSlice.actions;

export default globalSlice.reducer;
