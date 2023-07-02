import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import restaurantSlice from './reducers/restaurantSlice';

export default configureStore({
  reducer: {
    restaurantSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
