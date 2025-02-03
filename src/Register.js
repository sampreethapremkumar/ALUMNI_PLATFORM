import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Import the CSS file

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Registration logic goes here
        navigate('/directory');
    };

    return (
        <div className="container">
            <div className="form-wrapper">
                <button className="close-button">X</button>
                <h2 className="title">Registration</h2>
                <form onSubmit={handleRegister}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Name"
                            required
                            className="input"
                        />
                        <span className="icon">👤 </span>
                    </div>
                    <div className="input-group">
                        <input
                            type="email"
                            placeholder="Email"
                            required
                            className="input"
                        />
                        <span className="icon">📧</span>
                    </div>
                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            className="input"
                        />
                        <span className="icon">🔒</span>
                    </div>
                    <div className="options">
                        <label>
                            <input type="checkbox" className="checkbox" /> Remember me
                        </label>
                        <span className="forgot-password">Forgot Password</span>
                    </div>
                    <button type="submit" className="register-button">Register</button>
                </form>
                <p className="footer">
                    Don’t have an account? <span className="register-link">Register</span>
                </p>
            </div>
        </div>
    );
};

export default Register;
  