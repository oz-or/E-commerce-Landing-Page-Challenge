import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push(action.payload);
    },
    clearCart(state) {
      state.cart.length = 0;
    },
  },
});

export default cartSlice.reducer;

export const { addToCart } = cartSlice.actions;
export const { clearCart } = cartSlice.actions;

export const getCart = (state) => state.cart;
