import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ username, password })

    try {
      // Send login request to the backend
      const res = await axios.post('http://localhost:3000/auth/login', { username, password });
      if(res){
        alert("success");
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className='login'>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input type="username" value={username} onChange={(e) => setusername(e.target.value)} required /><br/><br/>
        </div>

        <div>
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>

        <button type="submit">Submit</button>

      </form>

    </div>
  );
};

export default Login;