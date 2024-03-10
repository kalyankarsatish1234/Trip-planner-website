import React from "react";
import "./Hotel_Detail_Selection.css";
import Date_Picker_Component from "./Date_Picker_Component";

export default function Hotel_Detail_Selection() {
  const cities = [
    { value: "Mumbai" },
    { value: "Delhi" },
    { value: "Bangalore" },
    { value: "Hyderabad" },
    { value: "Chennai" },
    { value: "Kolkata" },
    { value: "Ahmedabad" },
    { value: "Pune" },
    { value: "Jaipur" },
    { value: "Lucknow" },
  ];

  return (
    <div class="hotel_detail_container">
      <div class="hotel_card">
        <h3>City</h3>
        <input
          className="hotel_city_options"
          required
          type="text"
          placeholder="Delhi"
          id="hotel_city"
          list="hotel_city_options" // ID of the datalist
        />
        <datalist id="hotel_city_options">
          {cities.map((city) => (
            <option value={city.value} />
          ))}
        </datalist>
      </div>
      <div class="hotel_card">
        <h3>Check in</h3>
        <Date_Picker_Component></Date_Picker_Component>
      </div>
      <div class="hotel_card">
        <h3>Check Out</h3>
        <Date_Picker_Component></Date_Picker_Component>
      </div>
      <div class="hotel_card">
        <h3>Guests</h3>
        <input type = "number" id="hotel_guests"></input>
      </div>
    </div>
  );
}
