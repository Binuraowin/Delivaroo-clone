import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import restaurantSlice from './reducers/restaurantSlice';
import authSlice from "./reducers/authSlice";

export default configureStore({
  reducer: {
    restaurantSlice,
    authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
