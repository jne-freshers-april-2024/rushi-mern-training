import { useEffect, useState } from "react";
import "../components/UserTodo.css";
import { useDispatch, useSelector } from "react-redux";
import Input from "../components/Input/InputComponent";
import { fetchTodos } from "./TodoSlice";

const UserTodo = () => {
  const dispatch = useDispatch(); // Use to dispatch Redux actions
  const [userid, setUserId] = useState();
  const [userTodo, setUserTodo] = useState("");
  const { todos } = useSelector((state) => state.Todos); // Select Redux state


  useEffect(() => {
    dispatch(fetchTodos()); // Fetch todos when component mounts
  }, [dispatch]); // Only run once on component mount




  console.log(todos)
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserTodo(todos[userid - 1]);
  };

  return (
    <>
      <h1>User Todo</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label>Enter User Id:</label>
        <Input
          onChange={(event) => {
            setUserId(event.target.value);
          }}
          type="text"
          name="userid"
          id="userid"
          value={userid}
          placeholder="Enter User Id"
        />

        <Input type="submit" value="Fetch Todo" />
      </form>
      {userTodo !== "" && (
        <p
          style={{
            textAlign: "center",
            marginTop: "30px",
            marginBottom: "30px",
          }}
        >
          {userTodo.todo}
        </p>
      )}
    </>
  );
};

export default UserTodo;
