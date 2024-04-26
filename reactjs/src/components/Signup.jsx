import React, { useState } from 'react';
import './Signup.css'; // Use the same CSS as for the login form
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap for base styling
import { Link } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password
  const [email, setEmail] = useState(''); // State for email
  const [error, setError] = useState(''); // Error handling state

  const validateForm = () => {
    if (!username.trim()) {
      return 'Username is required';
    }
    if (!email.trim()) {
      return 'Email is required';
    }
    if (!password.trim()) {
      return 'Password is required';
    }
    return ''; // No errors
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent form default behavior

    const error = validateForm();
    if (error) {
      setError(error);
    } else {
      setError(''); // Clear errors
      // Perform sign-up logic (e.g., API call, state update)
      console.log('Sign-up data:', { username, email, password });
    }
  };

  return (
    <div className="login-container"> {/* Centering */}
      <div className="login-box"> {/* Consistent box styling */}
        <h2>Sign Up</h2> {/* Form heading */}
        
        <form onSubmit={handleFormSubmit}> {/* Form with submit handling */}
          <div className="form-group"> {/* Username input */}
            <label htmlFor="username">Username</label> {/* Label */}
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update state on change
            />
          </div>

          <div className="form-group"> {/* Email input */}
            <label htmlFor="email">Email</label> {/* Label */}
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state on change
            />
          </div>

          <div className="form-group"> {/* Password input */}
            <label htmlFor="password">Password</label> {/* Label */}
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state on change
            />
          </div>

          {error && <p className="error-message">{error}</p>} {/* Display error if any */}

          <div className="form-group text-center"> {/* Submit button */}
            <button type="submit" className="btn btn-primary">Sign Up</button> {/* Submit button */}
          </div>

          <div className="form-group text-center">
            <Link to="/signin">Already have an account? Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
