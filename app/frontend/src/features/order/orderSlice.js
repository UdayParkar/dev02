import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  latestOrderId: null
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrderId(state, action) {
      state.latestOrderId = action.payload;
    }
  }
});

export const { setOrderId } = orderSlice.actions;
export default orderSlice.reducer;
