import React, { useEffect, useState } from "react";
import "./Flight_Fare_Summary.css";
import { useFlightContext } from "../../context/FlightContext";

const Flight_Fare_Summary = () => {
  const { numberOfTravellers, selectedFlight } = useFlightContext();
  const [economyPrice, setEconomyPrice] = useState(null);
  const [totalFare, setTotalFare] = useState(null);

  useEffect(() => {
    if (selectedFlight && selectedFlight[0]) {
      const price = parseInt(selectedFlight[0].economyPrice);
      const subtotal = numberOfTravellers * price;
      setEconomyPrice(price);
      setTotalFare(subtotal);
    }
  }, [selectedFlight, numberOfTravellers]);

  if (!selectedFlight || !selectedFlight[0]) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  return (
    <div className="flight-fare-summary">
      <h3 style={{ backgroundColor: "cyan" }}>Flight Fare Summary</h3>
      <div className="form-label">
        <p>Number of Travellers:- {numberOfTravellers}</p>
        <p>Economy Price per Ticket:- Rs {economyPrice}</p>
      </div>
      <div className="form-label">
        <p>Subtotal:- Rs {totalFare}</p>
      </div>
      <div>
        <h3>Total Fare:- Rs {totalFare}</h3>
      </div>
    </div>
  );
};

export default Flight_Fare_Summary;
