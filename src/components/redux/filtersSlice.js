import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '', 
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, actions) {
      state.value = actions.payload;
    },
    
  },
});

export const { changeFilter } = filtersSlice.actions;

export const selectNameFilter = state => state.filters.name;

export default filtersSlice.reducer;