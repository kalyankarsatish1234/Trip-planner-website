import React, { useEffect, useState } from "react";
import "./Traveller_Details.css";
import { useFlightContext } from "../../context/FlightContext";
import axios from "axios";
import Cookies from 'js-cookie';

const Traveller_Details = () => {
  const {
    numberOfTravellers,
    setTravellerDetails,
    bookingDetails,
    setBookingDetails,
    bookingGenerated,
    setBookingGenerated,
    selectedFlight
  } = useFlightContext();


  const [formData, setFormData] = useState(
    Array.from({ length: numberOfTravellers }, () => ({
      firstName: "",
      lastName: "",
      gender: "",
      age: "",
    }))
  );

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const newData = [...formData];
    newData[index][name] = value;
    setFormData(newData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_ID = parseInt(Cookies.get("userID"));
    console.log(formData, "Form");
    await setTravellerDetails(formData);

    let booking = {
      userID: user_ID,
      flightID: parseInt(selectedFlight[0].flightID),
      travellers: formData.map((traveller) => ({
        name: `${traveller.firstName} ${traveller.lastName}`,
        age: parseInt(traveller.age),
        gender: traveller.gender,
      })),
      type: "Economy",
    };

    setBookingDetails(booking);

    try {
      //   console.log(booking);
      const response = await axios.post(
        "http://localhost:8080/book/newbooking",
        booking
      );
      //   console.log(bookingDetails, "booking Details");
      setBookingGenerated(response.data);
      console.log("POST request successful:", response.data);

      // Handle response data
    } catch (error) {
      console.error("Error making POST request:", error);
      // Handle errors
    }
  };

  return (
    <div className="traveller-details-container">
      <h3 className="form-title">Traveller Details</h3>
      <form onSubmit={handleSubmit} className="form">
        {formData.map((traveller, index) => (
          <div key={index}>
            <h3>Traveller {index + 1}</h3>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  First Name:
                  <input
                    type="text"
                    name="firstName"
                    value={traveller.firstName}
                    onChange={(e) => handleChange(e, index)}
                    required
                    className="form-input"
                  />
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">
                  Last Name:
                  <input
                    type="text"
                    name="lastName"
                    value={traveller.lastName}
                    onChange={(e) => handleChange(e, index)}
                    required
                    className="form-input"
                  />
                </label>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  Gender:
                  <select
                    name="gender"
                    value={traveller.gender}
                    onChange={(e) => handleChange(e, index)}
                    required
                    className="form-input"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </label>
              </div>
              <div className="form-group">
                <label className="form-label">
                  Age:
                  <input
                    type="number"
                    name="age"
                    value={traveller.age}
                    onChange={(e) => handleChange(e, index)}
                    required
                    className="form-input"
                  />
                </label>
              </div>
            </div>
          </div>
        ))}
        <button type="submit" className="submit-btn">
          Submit Traveller Details
        </button>
      </form>
    </div>
  );
};

export default Traveller_Details;
