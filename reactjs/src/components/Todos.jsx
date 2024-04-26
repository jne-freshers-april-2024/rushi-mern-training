import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../components/TodoSlice'
import '../components/Todos.css';

const Todo = () => {
  const dispatch = useDispatch(); // Use to dispatch Redux actions
  const { todos, loading, error } = useSelector((state) => state.Todos); // Select Redux state

  useEffect(() => {
    dispatch(fetchTodos()); // Fetch todos when component mounts
  }, [dispatch]); // Only run once on component mount

  if (loading) {
    return <p>Loading...</p>; // Display while fetching
  }

  if (error) {
    return <p>Error: {error}</p>; // Display if there's an error
  }

  return (
    <>
      <h1 id="heading">Todo's</h1>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            Id: {todo.id} <br />
            Todo: {todo.todo} <br />
            Completed: {todo.completed ? 'True' : 'False'} <br />
            User ID: {todo.userId} <br />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
