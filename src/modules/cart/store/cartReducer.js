import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  wishedListItems: [],
};

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const updatedItems = [...state.cartItems, action.payload];
      state.cartItems = updatedItems;
    },
    removeFromCart: (state, action) => {
      const updatedItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = updatedItems;
    },
    addToWishlist: (state, action) => {
      const updatedItems = [...state.wishedListItems, action.payload];
      state.wishedListItems = updatedItems;
    },
    removeFromWishlist: (state, action) => {
      const updatedItems = state.wishedListItems.filter(
        (item) => item.id !== action.payload
      );
      state.wishedListItems = updatedItems;
    },
    incrementQuantity: (state, action) => {
      const updatedItems = state.cartItems.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      state.cartItems = updatedItems;
    },
    decrementQuantity: (state, action) => {
      const updatedItems = state.cartItems.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      state.cartItems = updatedItems;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addToWishlist,
  removeFromWishlist,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
