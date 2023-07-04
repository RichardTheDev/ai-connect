import { configureStore } from '@reduxjs/toolkit';
import { name, reducer } from '../actions/slice';

const store = configureStore({
  reducer: {
    [name]: reducer,
  },
});

export default store;