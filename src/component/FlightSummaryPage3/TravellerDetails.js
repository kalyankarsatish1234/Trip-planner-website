import React, { useState } from 'react';

const TravellerDetails = () => {
  const [adults, setAdults] = useState([
    {
      firstName: '',
      lastName: '',
      gender: '',
      countryCode: '',
      mobileNumber: '',
     
    },
  ]);

  const genderOptions = ['Select Gender', 'Male', 'Female'];

  const countryCodes = ['Select Country Code', '+91', '+1', '+44', '+61', '+81']; // Add more as needed

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newAdults = [...adults];
    newAdults[index][name] = value;
    setAdults(newAdults);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Submitted:', adults);
  };

  const addAdult = () => {
    setAdults([...adults, { firstName: '', lastName: '', gender: '', countryCode: '', mobileNumber: '', email: '' }]);
  };

  const removeAdult = (index) => {
    const newAdults = [...adults];
    newAdults.splice(index, 1);
    setAdults(newAdults);
  };

  return (
    <div className='travellerdetails'>

      <h2 className='head'>Traveller Details</h2>
    <form onSubmit={handleSubmit} className='form1'>
      
      {adults.map((adult, index) => (
        <div key={index}>
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={adult.firstName}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
          </label>

          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={adult.lastName}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
          </label>

          <label>
            Gender:
            <select
              name="gender"
              value={adult.gender}
              onChange={(e) => handleInputChange(index, e)}
              required
            >
              {genderOptions.map((option, optionIndex) => (
                <option key={optionIndex} value={option.toLowerCase()}>
                  {option}
                </option>
              ))}
            </select>
          </label>

          <label>
            Country Code:
            <select
              name="countryCode"
              value={adult.countryCode}
              onChange={(e) => handleInputChange(index, e)}
              required
            >
              {countryCodes.map((code, codeIndex) => (
                <option key={codeIndex} value={code}>
                  {code}
                </option>
              ))}
            </select>
          </label>

          <label>
            Mobile Number:
            <input
              type="text"
              name="mobileNumber"
              value={adult.mobileNumber}
              onChange={(e) => handleInputChange(index, e)}
              required
            />
          </label>

         
          {index > 0 && (
            <button type="button" onClick={() => removeAdult(index)}>
              Remove
            </button>
          )}
        </div>
      ))}

      <button type="button" onClick={addAdult}>
        + Add New Adult
      </button>

      <button type="submit">Submit</button>
    
    </form>
     </div>
  );
};

export default TravellerDetails;
