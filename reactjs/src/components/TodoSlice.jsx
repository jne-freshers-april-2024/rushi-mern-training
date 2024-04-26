import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Create an async thunk for fetching todos
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await axios.get('https://dummyjson.com/todos');
  return response.data.todos; // Return the list of todos
});

// Define the initial state
const initialStateTodo = {
  todos: [], // Empty array initially
  loading: false, // Loading state
  error: null, // Error state
};

// Create a slice for todos
const TodoSlice = createSlice({
  name: 'Todos',
  initialState: initialStateTodo,
  reducers: {
    // Define synchronous reducers if needed
  },
  extraReducers: (builder) => {
    // Handle asynchronous actions
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true; // Indicate loading
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false; // Loading complete
        state.todos = action.payload; // Store fetched todos in state
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false; // Loading complete
        state.error = action.error.message; // Store the error message
      });
  },
});

export default TodoSlice.reducer;
