import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCatalogRequest, getCatalogSearch } from './catalogApi';

export const getCatalogThunk = createAsyncThunk(
  'catalog/getCatalogThunk',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCatalogRequest();

      // notifySuc('Transaction completed successfully!');
      return response;
    } catch (error) {
      // notifyError(`Transaction completed with error!`);
      return rejectWithValue(error.message);
    }
  }
);
export const getFilterThunk = createAsyncThunk(
  'catalog/getFilterThunk',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCatalogSearch();

      // notifySuc('Transaction completed successfully!');
      return response;
    } catch (error) {
      // notifyError(`Transaction completed with error!`);
      return rejectWithValue(error.message);
    }
  }
);

export const selectCategory = state => state.catalog.catalog;
export const selectIsLoading = state => state.catalog.isLoading;
export const selectFilter = state => state.catalog.filtered;
