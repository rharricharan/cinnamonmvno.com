import React from "react";
import { useState } from "react";
import './login.css';

function Login() {

      const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }

    // Simulate login
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Reset fields
    setEmail('');
    setPassword('');
    setError('');
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

    return (
        <div className="login-wrapper">
            <div className="login-header">
                <a className="login-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="30" viewBox="0 0 36 30" fill="290B00">
                        <path d="M17.6219 30C16.7539 30 15.8945 29.6745 15.2327 29.015C13.9093 27.6959 13.9093 25.5632 15.2327 24.2527L30.2292 9.30621C31.5526 7.98715 33.6839 7.98715 35.0074 9.30621C36.3309 10.6253 36.3309 12.7495 35.0074 14.0685L20.011 29.015C19.3492 29.6745 18.4898 30 17.6219 30Z" fill="290B00"/>
                        <path d="M12.7835 16.1156C11.9155 16.1156 11.0561 15.7901 10.3944 15.1306L0.9926 5.75161C-0.330867 4.43255 -0.330867 2.30835 0.9926 0.989293C2.31607 -0.329764 4.45596 -0.329764 5.77083 0.989293L15.1726 10.3597C16.4961 11.6788 16.4961 13.803 15.1726 15.1221C14.5109 15.7816 13.6515 16.1071 12.7835 16.1071V16.1156Z" fill="290B00"/>
                    </svg>
                </a>
            </div>
            <div className="login-form">
                <form onSubmit={handleLogin}>
                    <h2>Welcome Back</h2>
                    
                    {error && <p>{error}</p>}
                    
                    <input
                    className="top-input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className="br"></div>
                    
                    <input
                    className="bttm-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    <button type="submit">
                        Login
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M16.172 11.5L10.808 6.13605L12.222 4.72205L20 12.5L12.222 20.278L10.808 18.864L16.172 13.5H4V11.5H16.172Z" fill="#F8F8F8"/>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;