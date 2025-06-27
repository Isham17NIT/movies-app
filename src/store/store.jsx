import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../slices/movieSlice';
import darkModeReducer from '../slices/darkModeSlice';
const store = configureStore({
  reducer: {
    movies: moviesReducer,
    theme: darkModeReducer
  },
});

export default store;