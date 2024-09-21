import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ username, password });

    try {
      const res = await axios.post('http://localhost:5000/auth/login', { username, password });
      if (res) {
        alert('Login Successful!');
      }
    } catch (err) {
      alert('Login Failed');
    }
  };

  return (
    <div className='login'>
      <div className='left-login'>
        <img src='./left_img.png' alt='Left' />
      </div>
      <div className='right-login'>
        <img src='./insta.png' alt='Logo' />
        <form onSubmit={handleSubmit}>
          <div className='inputss'>
            <input
              type="text"
              placeholder="Phone number, username or email address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='input'>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Log in</button>
          <div className="divider">
            <span>OR</span>
          </div>
          <div className="facebook-login">
            <div className="facebook-icon">
              <i className="fab fa-facebook-f"></i>
            </div>
            <span>Log in with Facebook</span>
          </div>
          <h3 className='h3'>Forgotten your password?</h3>
        </form>
        <div className='signup'>
          <h3>Don't have an account? <Link to='/signup'>Sign up</Link></h3> 
        </div>
      </div>
    </div>
  );
};

export default Login;
