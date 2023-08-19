import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state, { payload }) => {
      const catalog = payload;

      const isExists = state.favorites.some(r => r.id === catalog.id);

      if (isExists) {
        const index = state.favorites.findIndex(item => item.id === catalog.id);

        if (index !== -1) {
          state.favorites.splice(index, 1);
        }
      } else {
        state.favorites.push(catalog);
      }
    },
  },
});

export const { actions, reducer } = favoriteSlice;
// export const { toggleFavorites } = favoriteSlice.actions;
// export default favoriteSlice.reducer;

export const selectFavorites = state => state.favorites.favorites;
