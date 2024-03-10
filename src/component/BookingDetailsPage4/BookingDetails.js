import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./BookingDetails.css";
import { useFlightContext } from "../../context/FlightContext";

export default function BookingDetails() {
  const { bookingGenerated } = useFlightContext();
  // useEffect(() => {
  //   console.log("IN Booking Details", bookingGenerated);
  //     console.log("Tickets:", bookingGenerated.tickets);
  //     console.log("Type:", bookingGenerated.type);
  //     console.log("ID:", bookingGenerated.bookingID);
  //   }
  // , [bookingGenerated]);

  if (!bookingGenerated || !bookingGenerated.tickets) {
    return <div>No booking data available</div>;
  }

  return (
    <div className="booking-container">
      <Link to="/">Back to Home</Link>
      <div className="booking-details">
        <div className="booking-info">
          <p>Booking ID: {bookingGenerated.bookingID}</p>
          <p>Booking Date: {bookingGenerated.bookingDate}</p>
        </div>
        <h2>Tickets</h2>
        <div className="ticket-tray">
          {bookingGenerated.tickets.map((ticket, index) => (
            <div key={index} className="ticket-card">
              <p>Airlines: {ticket.flight.airlines}</p>
              <p>From: {ticket.flight.fromDestination}</p>
              <p>To: {ticket.flight.toArrival}</p>
              <p>Departure Time: {ticket.flight.departureTime}</p>
              <p>Arrival Time: {ticket.flight.arrivalTime}</p>
              <p>Price: {ticket.price}</p>
              <p>Seat No: {ticket.seatNo}</p>
              <p>Date of Purchase: {ticket.dateOfPurchase}</p>
              <p>Name: {ticket.traveller.name}</p>
              <p>Age: {ticket.traveller.age}</p>
              <p>Mobile Number: {ticket.traveller.mobileNumber}</p>
              <p>Gender: {ticket.traveller.gender}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// const booking = {
//   "bookingId": 15,
//   "bookingDate": "2024-02-15",
//   "tickets": [
//     {
//       "flight": {
//         "arrivalTime": "18:00:00",
//         "departureTime": "16:00:00",
//         "toArrival": "Kolkata",
//         "fromDestination": "Chennai",
//         "stops": 0,
//         "flightID": 4,
//         "economyPrice": 1200.0,
//         "capacity": 244,
//         "businessClassPrice": 2000.0,
//         "arrival": "2024-03-04",
//         "departure": "2024-03-04",
//         "airlines": "Vistara"
//       },
//       "holiday": null,
//       "price": 1200.0,
//       "traveller": {
//         "travellerID": 22,
//         "name": "John Doe",
//         "age": 30,
//         "mobileNumber": null,
//         "gender": "Male"
//       },
//       "type": "Economy",
//       "dateOfPurchase": "2024-02-15",
//       "seatNo": "93",
//       "ticketID": 22
//     },
//     {
//       "flight": {
//         "arrivalTime": "18:00:00",
//         "departureTime": "16:00:00",
//         "toArrival": "Kolkata",
//         "fromDestination": "Chennai",
//         "stops": 0,
//         "flightID": 4,
//         "economyPrice": 1200.0,
//         "capacity": 244,
//         "businessClassPrice": 2000.0,
//         "arrival": "2024-03-04",
//         "departure": "2024-03-04",
//         "airlines": "Vistara"
//       },
//       "holiday": null,
//       "price": 1200.0,
//       "traveller": {
//         "travellerID": 23,
//         "name": "Jane Smith",
//         "age": 25,
//         "mobileNumber": null,
//         "gender": "Female"
//       },
//       "type": "Economy",
//       "dateOfPurchase": "2024-02-15",
//       "seatNo": "112",
//       "ticketID": 23
//     },
//     {
//       "flight": {
//         "arrivalTime": "18:00:00",
//         "departureTime": "16:00:00",
//         "toArrival": "Kolkata",
//         "fromDestination": "Chennai",
//         "stops": 0,
//         "flightID": 4,
//         "economyPrice": 1200.0,
//         "capacity": 244,
//         "businessClassPrice": 2000.0,
//         "arrival": "2024-03-04",
//         "departure": "2024-03-04",
//         "airlines": "Vistara"
//       },
//       "holiday": null,
//       "price": 1200.0,
//       "traveller": {
//         "travellerID": 24,
//         "name": "Alice Johnson",
//         "age": 40,
//         "mobileNumber": null,
//         "gender": "Female"
//       },
//       "type": "Economy",
//       "dateOfPurchase": "2024-02-15",
//       "seatNo": "204",
//       "ticketID": 24
//     }
//   ]
// };
