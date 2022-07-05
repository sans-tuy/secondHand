import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedChip: 1,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setSelectedChip: (state, action) => {
      state.selectedChip = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setSelectedChip} = globalSlice.actions;

export default globalSlice.reducer;
