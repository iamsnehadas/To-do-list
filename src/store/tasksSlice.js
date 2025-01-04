import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch tasks from the API
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return response.data;
});

// Add a new task
export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/todos', task);
  return response.data;
});

// Update a task
export const updateTask = createAsyncThunk('tasks/updateTask', async (task) => {
  const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`, task);
  return response.data;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex((task) => task.id === action.payload.id);
        if (index >= 0) {
          state.tasks[index] = action.payload;
        }
      });
  },
});

export default tasksSlice.reducer;
