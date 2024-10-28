  // src/Login.js
  import React from 'react';
  import './App.css'; // Import the CSS file

  const Login = () => {
    return (
      <div className="login-container">
        <div className="login-form">
          <h2>Sign in</h2>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <div className="remember-me">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href='#' type="submit">Login</a>
          </form>
        </div>
      </div>
    );
  };

  export default Login;
