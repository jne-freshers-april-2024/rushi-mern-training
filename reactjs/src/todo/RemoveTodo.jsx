import { useDispatch } from 'react-redux';
import './RemoveTodo.css'
import { useState } from 'react';
import { removeTodo } from './TodoSlice';

const RemoveTodo = ()=>{
    const [id,setId] = useState();
    const dispatch = useDispatch()

    const handleSubmit = ()=>{
        dispatch(removeTodo(id))
        setId('')
    }
    return(
        <>
            <div class="container">
                <h1>Remove a Todo</h1>
                <form id="remove-todo-form" onSubmit={handleSubmit}>
                    <input type="text" id="todo-id-input" onChange={(e)=>setId(e.target.value)} placeholder="Enter Todo ID to remove..." required/>
                    <button type="submit">Remove Todo</button>
                </form>
            </div>
        </>
    )
}

export default RemoveTodo;