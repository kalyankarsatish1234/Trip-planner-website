import React, { useState } from "react";
import "./Hotel_Radio.css";

export default function Hotel_Radio(props) {
  const [hotelRadio, setHotelRadio] = useState(1);

  const hotel_radios = [
    { text: "Upto 4 Rooms", value: 1 },
    { text: "Group Deals", value: 2 },
  ];

  const handleOptionChange = (value) => {
    setHotelRadio(value);
  };

  return (
    <div class="hotel_type_container">
      <div class="hotel_type_radio-buttons">
        {hotel_radios.map((radio, idx) => (
          <label key={idx}>
            <input
              type="radio"
              name="options"
              value={radio.value}
              checked={hotelRadio === radio.value}
              onChange={() => handleOptionChange(radio.value)}
            />
            {radio.text}
          </label>
        ))}
      </div>
      <div class="text">Book International and Domestic Property Online</div>
    </div>
  );
}
