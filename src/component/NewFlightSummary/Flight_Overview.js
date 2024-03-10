import React from "react";
import { useFlightContext } from "../../context/FlightContext";

export default function Flight_Overview() {
  const { selectedFlight } = useFlightContext();
  
  // Check if selectedFlight is defined and not empty
  if (!selectedFlight || selectedFlight.length === 0) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  // Accessing properties from the object inside the array
  const flight = selectedFlight[0];

  return (
    <div>
      <h3 style={{ backgroundColor: "cyan" }}>Flight Overview</h3>
      <h4>
        {flight.fromDestination} --&gt; {flight.toArrival}
      </h4>
      <p>
        <strong>Date:</strong> {flight.departure}&nbsp;&nbsp;&nbsp;
        <strong>Stops:</strong> {flight.stops}
        &nbsp;&nbsp;&nbsp; <strong>Time: </strong>
        {calculateTimeDifference(flight.arrivalTime, flight.departureTime)}<br></br>
        <strong>Airlines: </strong> {flight.airlines}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <strong>Flight ID: </strong> {flight.flightID}
      </p>
      <p>
        <strong>Cabin Baggage - </strong> 7Kgs(1 piece only)/Adult <br />
        <strong>Check-in Baggage - </strong> 15Kgs(1 piece only)/Adult{" "}
      </p>
    </div>
  );
}

// Function to calculate the time difference between arrival and departure times
const calculateTimeDifference = (arrival, departure) => {
  if (!arrival || !departure) {
    return ""; // If either arrival or departure is undefined, return an empty string
  }

  // Splitting arrival and departure times into hours and minutes
  const arrivalTime = arrival.split(":").map(Number);
  const departureTime = departure.split(":").map(Number);

  // Calculating the time difference
  const arrivalMinutes = arrivalTime[0] * 60 + arrivalTime[1];
  const departureMinutes = departureTime[0] * 60 + departureTime[1];
  const differenceMinutes = arrivalMinutes - departureMinutes;

  // Converting minutes back to HH:MM format
  const hours = Math.floor(differenceMinutes / 60);
  const minutes = differenceMinutes % 60;

  return `${hours}h ${minutes}m`;
};
