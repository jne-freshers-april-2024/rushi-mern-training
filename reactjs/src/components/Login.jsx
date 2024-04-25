import "./Login.css";
import Input from "./Input/Input";
import React, { useState } from "react";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors,setError] = useState({});

  const validateForm = ()=>{
      const error = {}
      if(username.trim() === "")
          error.username = "Username is Required"
      if(password.trim() === "")
          error.password = "Password is Required"
      console.log(error)
      setError(error);
      return Object.keys(errors).length>0
          

  }

  const handleFormSubmit = (event) => {
    event.preventDefault(); 
    const status = validateForm();
    if(status)
      console.log("Form Submitted Successfully")
  };

  const handleOnBlur = (event) =>{
     validateForm();
  }

  return (
    <div className="box">
      <span className="borderline"></span>
      <form method="post" onSubmit={handleFormSubmit}>
        <h2>Sign in</h2>
        <div className="inputBox">

          <Input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(event)=>{setUsername(event.target.value)}}
            onBlur = {handleOnBlur}
            placeholder="Enter Username"
          />

          <span>Username</span>
          <i></i>
        </div>
          {errors.username && <p style={{color:"red",marginTop:5}}>Username is Required</p>}
        <div className="inputBox" id="input-box">

          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onBlur = {handleOnBlur}
            onChange={(event)=>{setPassword(event.target.value)}}
            placeholder="Enter Password"
          />
          <span>Password</span>
          <i></i>
        </div>
          {errors.password && <p style={{color:"red",marginTop:5}}>Password is Required</p>}

        <Input 
           type="submit" 
           value="Login" 
        />

      </form>
    </div>
  );
};

export default SignInForm;
