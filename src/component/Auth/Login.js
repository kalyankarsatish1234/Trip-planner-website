import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/user/signin', {
        email,
        password,
      });

      if (response.data) {
        console.log('User details:', response.data);
        const { userID, userName, email, phoneNo, gender, dateOfBirth } = response.data;
        Cookies.set('userID', userID);
        Cookies.set('userName', userName);
        Cookies.set('email', email);
        Cookies.set('phoneNo', phoneNo);
        Cookies.set('gender', gender);
        Cookies.set('dateOfBirth', dateOfBirth);

        window.location.replace('/dashboard');
      } else {
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      setError('Login failed. Please try again later.');
    }
  };

  const handleSignupClick = () => {
    navigate('/Signup');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            className="input-field" // Apply CSS class for input field
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            className="input-field" // Apply CSS class for input field
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="submit-button" type="submit">Login</button> {/* Apply CSS class for submit button */}
      </form>
      <div className="signup-button">
        <button className="signup-link" onClick={handleSignupClick}>Sign up</button> {/* Apply CSS class for signup link */}
      </div>
    </div>
  );
};

export default Login;
