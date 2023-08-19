import { getCatalogThunk } from './catalogThunks';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  catalog: [],
  isLoading: false,
  error: null,
  filtered: [],
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    nextPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getCatalogThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCatalogThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.catalog = action.payload;
      })
      .addCase(getCatalogThunk.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error;
      }),
});

export const catalogReducer = catalogSlice.reducer;
export const { nextPage } = catalogSlice.actions;
