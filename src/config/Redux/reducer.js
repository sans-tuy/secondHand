import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedChip: 1,
  accessToken: null,
  favorite: [],
  notif: [],
  product: [],
  dataProduct: [],
  dataOrder: [],
  dataProductById: [],
  dataProductOrderById: [],
  dataBanner: [],
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
    setFavorite: (state, action) => {
      state.favorite = action.payload;
    },
    setNotif: (state, action) => {
      state.notif = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setDataProduct: (state, action) => {
      state.dataProduct = action.payload;
    },
    setDataOrder: (state, action) => {
      state.dataOrder = action.payload;
    },
    setDataProductById: (state, action) => {
      state.dataProductById = action.payload;
    },
    setDataProductOrderById: (state, action) => {
      state.dataProductOrderById = action.payload;
    },
    setDataBanner: (state, action) => {
      state.dataBanner = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setSelectedChip,
  setAccessToken,
  setFavorite,
  setNotif,
  setProduct,
  setDataProduct,
  setDataOrder,
  setDataProductById,
  setDataProductOrderById,
  setDataBanner,
} = globalSlice.actions;

export default globalSlice.reducer;
