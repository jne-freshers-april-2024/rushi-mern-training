import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from '../components/TodoSlice';

const store = configureStore({
  reducer: {
    Todos : TodoReducer
  },
})

export default store;