    import { useDispatch } from "react-redux";
    import { removeTodo } from "./TodoSlice";
    import './DisplayTodo.css';

    const DisplayTodo = ({todos})=>{
        const dispatch = useDispatch()

        const handleClick = (id)=>{
            dispatch(removeTodo(id))
        }
        
        return(
            <>
                <div class="container">
                    <h1>Todo List</h1>
                    <ul className="todo-list">
                        {todos.map(todo=>(
                            <li className="todo-item" key={todo.id}>
                                <label for="todo1">{todo.title}</label>
                                <button className="delete-btn" onClick={()=>{handleClick(todo.id)}}>Delete</button>
                            </li>
                        )
                        )}
                    </ul>
                </div>
            </>
        )
    }


    export default DisplayTodo;