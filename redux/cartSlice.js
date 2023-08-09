import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    history: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      }
    },
    decreaseItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item._id === action.payload
      );
      if (itemIndex !== -1 && state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    checkout: (state) => {
      const currentDate = new Date().toLocaleDateString();
      const historyWithDate = state.items.map((item) => ({
        date: currentDate,
        ...item,
      }));
      state.history = state.history
        ? [...historyWithDate, ...state.history, ]
        : historyWithDate;
      state.items = [];
    },
  },
});

export const {
  addItem,
  increaseItem,
  decreaseItem,
  removeItem,
  clearCart,
  checkout,
} = cartSlice.actions;

export default cartSlice.reducer;
