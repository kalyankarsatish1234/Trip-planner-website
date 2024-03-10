import React, { useState, useEffect } from "react";
import "./Flight_Detail_Selection.css";
import Date_Picker_Component from "./Date_Picker_Component";

import { useFlightContext } from "../../../context/FlightContext";

import axios from "axios";

export default function Flight_Detail_Selection(props) {
  const { flightFromCity, setFlightFromCity } = useFlightContext();
  // const [flightFromCity, setFlightFromCity] = useState("");
  const { flightToCity, setFlightToCity } = useFlightContext();
  const { flightDepartureDate, setflightDepartureDate } = useFlightContext();
  const { flightReturnDate, setflightReturnDate } = useFlightContext();
  const { numberOfTravellers, setNumberOfTravellers } = useFlightContext();
  const { cities, setCities }  = useFlightContext();

  const handleInputChangeFromCity = (event) => {
    setFlightFromCity(event.target.value);
  };

  const handleInputChangeToCity = (event) => {
    setFlightToCity(event.target.value);
  };

  const handleDepartureDateChange = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setflightDepartureDate(formattedDate);
  };

  const handleReturnDateChange = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
    const day = String(date.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    setflightReturnDate(formattedDate);
  };

  const handleNumberOfTravellersChange = (event) => {
    const value = parseInt(event.target.value); // Convert input value to integer
    setNumberOfTravellers(value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/flight/locations")
      .then((response) => {
        // Set the newCities state with the updated array
        setCities(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  }, []);

  return (
    <div class="flight_detail_container">
      <div class="flight_card">
        <h3>From</h3>
        <input
          className="flight_city_options"
          required
          type="text"
          placeholder="Delhi"
          id="fligth_from"
          list="fight_from_city_options" // ID of the datalist
          value={flightFromCity}
          onChange={handleInputChangeFromCity}
        />
        <datalist id="fight_from_city_options">
          {cities.map((city, index) => (
            <option key={index} value={city.locationName} />
          ))}
        </datalist>
      </div>
      <div class="flight_card">
        <h3>To</h3>
        <input
          className="flight_city_options"
          type="text"
          placeholder="Mumbai"
          id="fligth_to"
          list="fight_to_city_options" // ID of the datalist
          value={flightToCity}
          onChange={handleInputChangeToCity}
        />
        <datalist id="fight_to_city_options">
          {cities.map((city, index) => (
            <option key={index} value={city.locationName} />
          ))}
        </datalist>
      </div>
      <div class="flight_card">
        <h3>Departure</h3>
        <Date_Picker_Component
          value={flightDepartureDate}
          id="flight_departure_date"
          onDateChange={handleDepartureDateChange}
        ></Date_Picker_Component>
      </div>
      <div class="flight_card">
        <h3>Return</h3>
        <Date_Picker_Component
          id="flight_return_date"
          disabled={props.radioValue === 1 ? true : false}
          value={flightReturnDate}
          onDateChange={handleReturnDateChange}
        ></Date_Picker_Component>
      </div>
      <div class="flight_card">
        <h3>Travellers</h3>
        <input
          type="number"
          id="flight_travellers"
          min="0"
          step="1"
          value={numberOfTravellers}
          onChange={handleNumberOfTravellersChange}
        ></input>
      </div>
    </div>
  );
}
