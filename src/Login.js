import React from 'react';
import './Login.css';


function App() {
  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <div className="input-wrapper">
              <input type="email" placeholder="Email" />
              <span className="icon">@</span>
            </div>
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <input type="password" placeholder="Password" />
              <span className="icon">🔒</span>
            </div>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="/forgot-password">Forget Password?</a>
          </div>

          <button type="submit" className="login-button">Login</button>

          <div className="register-link">
            Don't have an account? <a href="/register">Register</a>
          </div> 
        </form>
      </div>
    </div>
  );
}

export default App;
