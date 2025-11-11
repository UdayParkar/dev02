// src/features/products/productSlice.js
import { createSlice } from '@reduxjs/toolkit';
import productsData from '../../data/products';

const initialState = {
  products: productsData,
  categoryFilter: 'All',
  brandFilter: 'All',
  sortOption: '',
  searchQuery: ''
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setCategoryFilter(state, action) {
      state.categoryFilter = action.payload;
    },
    setBrandFilter(state, action) {
      state.brandFilter = action.payload;
    },
    setSortOption(state, action) {
      state.sortOption = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    }
  }
});

export const {
  setCategoryFilter,
  setBrandFilter,
  setSortOption,
  setSearchQuery
} = productSlice.actions;

export default productSlice.reducer;
