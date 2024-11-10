import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bikes: [],
  selectedCategory: 'All',
};

const bikeSlice = createSlice({
  name: 'bikes',
  initialState,
  reducers: {
    setBikes: (state, action) => {
      state.bikes = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setBikes, setSelectedCategory } = bikeSlice.actions;
export default bikeSlice.reducer;
