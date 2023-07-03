import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import restaurantSlice from './reducers/restaurantSlice';
import dishSlice from './reducers/dishSlice';
import menuSlice from './reducers/menuSlice';

export default configureStore({
  reducer: {
    restaurantSlice,
    dishSlice,
    menuSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
