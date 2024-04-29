import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid';

const initialState = {
  todos : [{id:1,title:"Work on BackEnd Project"}]
}

export const todoSlice = createSlice({
  name: 'Todos',
  initialState,
  reducers: {
       addTodo : (state,action)=>{
            const todo = {
                id: nanoid(),
                title: action.payload
            }
            state.todos.push(todo)
            console.log(state.todos)
            console.log("Add Todo")
       },

       removeTodo: (state,action)=>{
            state.todos = state.todos.filter( todo=> todo.id !== action.payload )
            console.log("Remove Todo")
       }

  },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer