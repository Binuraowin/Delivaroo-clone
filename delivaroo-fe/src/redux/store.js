import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import restaurantSlice from './reducers/restaurantSlice';
import dishSlice from './reducers/dishSlice';

export default configureStore({
  reducer: {
    restaurantSlice,
    dishSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
