import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;