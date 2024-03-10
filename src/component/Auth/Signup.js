import React, { useState } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
  const [userName, setuserName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [gender, setGender] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:8080/user/signup', {
      userName,
      email,
      phoneNo,
      gender,
      dateOfBirth,
      address,
      password,
    })
      .then((response) => {
        console.log(response.data.message);
        if (response.data.message === 'Created') {
          console.log(response.data.message);
          navigate('/login');
        }else if(response.data.message==="Email Already exists"){
          alert("Email exists")
        }else{
          alert("Try again error while creating")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="sign-up-container">
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="username">Username:</label>
        <input
          className="input-field" // Apply CSS class for input field
          type="text"
          placeholder="Username"
          onChange={(e) => setuserName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          className="input-field" // Apply CSS class for input field
          type="email"
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="phoneNo">Phone Number:</label>
        <input
          className="input-field" // Apply CSS class for input field
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setPhoneNo(e.target.value)}
        />

        <label htmlFor="gender">Gender:</label>
        <input
          className="input-field" // Apply CSS class for input field
          type="text"
          placeholder="Gender"
          onChange={(e) => setGender(e.target.value)}
        />

        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          className="input-field" // Apply CSS class for input field
          type="text"
          placeholder="Date of Birth"
          onChange={(e) => setDateOfBirth(e.target.value)}
        />

        <label htmlFor="address">Address:</label>
        <input
          className="input-field" // Apply CSS class for input field
          type="text"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          className="input-field" // Apply CSS class for input field
          type="password"
          placeholder="******"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="submit-button" type="submit">Sign Up</button> {/* Apply CSS class for submit button */}
        <p>
          Have an Account? <Link className="login-link" to="/login">Login</Link> {/* Apply CSS class for login link */}
        </p>
      </form>
    </div>
  );
};

export default Signup;
