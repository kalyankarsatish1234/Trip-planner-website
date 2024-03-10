import React from 'react';

function FlightInfo({ flightData }) {
  const { origin, destination, departureTime, arrivalTime, duration, airline, aircraft, cabin, baggageAllowance } = flightData;

  return (
    <div className="flight-info">
      <div className="flight-details">
        <p className="flight-route">
         <strong>From</strong>  ({origin.slice(0, 10)}) → <strong>To</strong> ({destination.slice(0, 10)})
        </p>
        <p className="flight-times">
          <strong>Time ::-</strong> {departureTime} - {arrivalTime} ({duration})
        </p>
        <p className="flight-carrier">
          <strong>AirlineName ::-</strong> {airline} {aircraft}
        </p>
        <p className="flight-class"><strong>Cabins ::-</strong> {cabin}</p>
        <p className="flight-baggage"><strong>Baggage Allowance::-</strong> {baggageAllowance}</p>
      </div>
     
    </div>
  );
}

export default FlightInfo;
