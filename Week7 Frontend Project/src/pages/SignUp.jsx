import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form Data:', {
      email,
      fullName,
      username,
      password,
    });

    if (!email || !fullName || !username || !password) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8000/signup', {
        email,
        fullName,
        username,
        password,
      });

      console.log('Response:', response);

      if (response.status === 201) {
        setSuccess('Account created successfully!');
        setError('');
        setEmail('');
        setFullName('');
        setUsername('');
        setPassword('');
      }
    } catch (error) {
      console.error('Error:', error.response || error.message);
      setError('Something went wrong. Please try again later.');
      setSuccess('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='signups'>
          <img src='./insta.png' alt='Logo' />
          <h2 className='hhh'>
            Sign up to see photos and videos
            <br /> from your friends.
          </h2>
          <div className='facebook-log'>
            <div className='facebook'>
              <i className='fab fa-facebook-f'></i>
            </div>
            <span>Log in with Facebook</span>
          </div>
          <div className='divide'>
            <span>OR</span>
          </div>
          <input
            type='text'
            placeholder='Mobile number or email address'
            className='inputs'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='text'
            placeholder='Full Name'
            className='inputs'
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type='text'
            placeholder='Username'
            className='inputs'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            className='inputs'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h3 className='h'>
            People who use our service may have uploaded
            <br /> your contact information to Instagram. Learn more
          </h3>
          <h3 className='hh'>
            By signing up, you agree to our Terms, Privacy
            <br /> Policy and Cookies Policy.
          </h3>
          <button type='submit' className='sign'>
            Sign Up
          </button>

          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>

        <div className='login-but'>
          <h4>
            Have an account?{' '}
            {/* Use Link instead of <a> for navigation */}
            <Link to="/Login">Log in</Link>
          </h4>
        </div>
      </form>
    </>
  );
};

export default SignUp;
