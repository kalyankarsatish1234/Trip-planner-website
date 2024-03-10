import React, { useState } from "react";
import "./Flight_Radio.css";

export default function Flight_Radio(props) {
  
  const [flightRadio, setFlightRadio] = useState(1);
  const flight_radios = [
    { text: "One Way", value: 1 },
    { text: "Round Trip", value: 2 },
    { text: "Multi City", value: 3 },
  ];

  const handleOptionChange = (value) => {
    setFlightRadio(value);
    props.getRadioValue(value);
  };

  return (
    <div class="flight_type_container">
      <div class="flight_type_radio-buttons">
        {flight_radios.map((radio, idx) => (
          <label key={idx}>
            <input
              type="radio"
              name="options"
              value={radio.value}
              checked={flightRadio === radio.value}
              onChange={() => handleOptionChange(radio.value)}
            />
            {radio.text}
          </label>
        ))}
      </div>

      <div class="text">Book International and Domestic Flights</div>
    </div>
  );
}
