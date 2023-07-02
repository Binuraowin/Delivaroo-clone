import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { makeResponse } from './index';

const initialState = {
  data: [],
  dish: { },
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk('dishSlice/fetchData', async () => {
  try {
    const response = await makeResponse('dish');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from the server.');
  }
});
export const fetchRestaurntById = createAsyncThunk('dishSlice/fetchRestaurntById', async (id) => {
  try {
    const response = await makeResponse(`dish/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from the server.');
  }
});

const dishSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    builder
      .addCase(fetchRestaurntById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRestaurntById.fulfilled, (state, action) => {
        state.loading = false;
        state.dish = action.payload;
      })
      .addCase(fetchRestaurntById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dishSlice.reducer;
