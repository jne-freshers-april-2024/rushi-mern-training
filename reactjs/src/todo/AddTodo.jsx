import { useDispatch, useSelector } from 'react-redux';
import './AddTodo.css';
import DisplayTodo from './DisplayTodo';
import { addTodo } from './TodoSlice';
import { useState } from 'react';

const AddTodo = ()=>{
    const [todo,setTodo] = useState('');
    const Todos = useSelector(state =>state.todos)
    const dispatch = useDispatch()

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addTodo(todo))
        console.log(todo)
        setTodo('');
    }

    return (
        <>
             <div className="container">
                <h1>Add a New Todo</h1>
                <form id="todo-form" onSubmit={handleSubmit}>
                    <input type="text" id="todo-input" value={todo} onChange={(e)=>setTodo(e.target.value)} placeholder="Enter your todo..." required/>
                    <button type="submit" >Add Todo</button>
                </form>
            </div>
            <DisplayTodo todos={Todos}/>
        </>
    )
}

export default AddTodo;