import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { makeResponse } from './index';

const initialState = {
  data: [
    {
      id: 1,
      name: 'John Doe',
      address: '123 Main St',
      createdAt: '2023-07-02',
      updatedAt: '2023-07-02',
    },
  ],
  restaurant: {

  },
  loading: false,
  error: null,
};

export const fetchData = createAsyncThunk('restaurantSlice/fetchData', async () => {
  try {
    const response = await makeResponse('restaurant');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from the server.');
  }
});
export const fetchRestaurntById = createAsyncThunk('restaurantSlice/fetchRestaurntById', async (id) => {
  try {
    const response = await makeResponse(`restaurant/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from the server.');
  }
});

const restaurantSlice = createSlice({
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
        state.restaurant = action.payload;
      })
      .addCase(fetchRestaurntById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default restaurantSlice.reducer;
