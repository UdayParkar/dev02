// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItemToCart(state, action) {
      const { id, variant, quantity } = action.payload;
      const existing = state.items.find(
        item => item.id === id && item.variant === variant
      );
      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ ...action.payload });
      }
    },
    updateItemQuantity(state, action) {
      const { id, variant, quantity } = action.payload;
      const item = state.items.find(
        item => item.id === id && item.variant === variant
      );
      if (item) {
        item.quantity = quantity;
      }
    },
    removeItemFromCart(state, action) {
      const { id, variant } = action.payload;
      state.items = state.items.filter(
        item => item.id !== id || item.variant !== variant
      );
    },
    clearCart(state) {
      state.items = [];
    }
  }
});

export const {
  addItemToCart,
  updateItemQuantity,
  removeItemFromCart,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
