import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice'; // Import the tasks slice

// Configure the Redux store
export const store = configureStore({
  reducer: {
    tasks: tasksReducer, // Add the tasks reducer
  },
});

export default store;
