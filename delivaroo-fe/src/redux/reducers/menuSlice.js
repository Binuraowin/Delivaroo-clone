import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { makeResponse } from './index';

const initialState = {
  MenuData: [],
  menu: { },
  loading: false,
  error: null,
};

export const fetchMenuData = createAsyncThunk('menuSlice/fetchMenuData', async () => {
  try {
    const response = await makeResponse('menu');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from the server.');
  }
});
export const fetchRestaurntById = createAsyncThunk('menuSlice/fetchRestaurntById', async (id) => {
  try {
    const response = await makeResponse(`menu/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from the server.');
  }
});

const menuSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenuData.fulfilled, (state, action) => {
        state.loading = false;
        state.MenuData = action.payload;
      })
      .addCase(fetchMenuData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(fetchRestaurntById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRestaurntById.fulfilled, (state, action) => {
        state.loading = false;
        state.menu = action.payload;
      })
      .addCase(fetchRestaurntById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default menuSlice.reducer;
