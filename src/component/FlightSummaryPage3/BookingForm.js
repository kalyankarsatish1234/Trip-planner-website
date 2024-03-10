import React, { useState } from 'react';

function BookingForm() {
  const [countryCode, setCountryCode] = useState('+91');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you would add code to submit the booking details to your server
    console.log('Booking details:', { countryCode, mobileNumber, email });

    alert('Booking details submitted successfully!');
  };

  const countryCodes = [
    { code: '+91', name: 'India' },
    { code: '+1', name: 'United States' },
    // Add more country code options as needed
  ];

  return (
    <div className='bookingform'>
    <form onSubmit={handleSubmit}>
     
      <h2 className='booking'>Booking details will be sent to</h2>
      <div className="form-group">
        <label htmlFor="countryCode">Country Code:</label>
        <select id="countryCode" value={countryCode} onChange={handleCountryCodeChange}>
          {countryCodes.map((country) => (
            <option key={country.code} value={country.code}>
              {`${country.name} (${country.code})`}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="tel"
          id="mobileNumber"
          value={mobileNumber}
          onChange={handleMobileNumberChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <button type="submit">Submit Booking</button>
      
    </form>
    </div>
  );
}

export default BookingForm;
