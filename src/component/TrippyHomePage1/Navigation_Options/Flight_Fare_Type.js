import React from "react";
import "./Flight_Fare_Type.css";

export default function Flight_Fare_Type() {
  const classTypes = [
    { text: "Economy", value: 1 },
    { text: "Business", value: 2 },
    { text: "First", value: 3 },
  ];

  return (
    <div class="flight_fare_type_container">
      <div class="wrap_div">
        <div class="text">
          Select a <br /> class type:
        </div>
        <div class="flight_fare_type_radio-buttons">
          {classTypes.map((classType, idx) => (
            <label key={idx}>
              <input type="radio" name="classType" value={classType.value} />
              <b><h6>{classType.text} <br />
              class</h6></b>
            </label>
          ))}
        </div>
      </div>

      <div class="flight_trending_flight">
        <div class="text">
          Trending <br />
          Searches:
        </div>
        <button class="flight_trending_flight_button">Mumbai - Pune</button>
      </div>
    </div>
  );
}
