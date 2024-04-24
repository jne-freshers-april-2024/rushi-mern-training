import { useState } from "react";
import ActiveUsers from "./ActiveUsers";

const Dashboard = () => {
  const [users, setUsers] = useState([
    {
      name: "Rk",
      active: true,
    },
    {
      name: "Sujay",
      active: true,
    },
    {
      name: "Amit",
      active: false,
    },
    {
      name: "Krishna",
      active: true,
    },
  ]);

  const addUser = () => {
    users.push({ name: "Kanha", active: true });
    setUsers([...users]);
  };

  return (
    <>
      <h1>Welcome to Flipkart Dashboard</h1>
      <button onClick={addUser} className="btn btn-primary">
        Add User
      </button>
      <ActiveUsers users={users} />
    </>
  );
};

export default Dashboard;
