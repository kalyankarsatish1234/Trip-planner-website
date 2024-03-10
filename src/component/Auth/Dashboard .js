import axios from "axios";
import React, { useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";

import "./UserBookings.css";
import Cookies from "js-cookie";

const Dashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [displayContent, setDisplayContent] = useState("bookings");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userID = parseInt(Cookies.get("userID"));

        const userResponse = await axios.get(
          `http://localhost:8080/user/${userID}`
        );
        setUserDetails(userResponse.data);

        const bookingsResponse = await axios.get(
          `http://localhost:8080/book/user/${userID}`
        );
        setBookings(bookingsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleUserProfileClick = async () => {
    setDisplayContent("profile");
    try {
      const userID = parseInt(Cookies.get("userID"));
      const response = await axios.get(`http://localhost:8080/user/${userID}`);
      setUserDetails(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleBookingsClick = async () => {
    setDisplayContent("bookings");
    try {
      const userID = parseInt(Cookies.get("userID"));
      const response = await axios.get(
        `http://localhost:8080/book/user/${userID}`
      );
      setBookings(response.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket === selectedTicket ? null : ticket);
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    try {
      const userID = parseInt(Cookies.get("userID"));
      await axios.put(
        `http://localhost:8080/user/update/${userID}`,
        userDetails
      );
      alert("User details updated successfully!");
    } catch (error) {
      alert("invalid details");
    }
  };

  const handleInputChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogoutClick = (e) => {
    console.log("handleLogoutClick");
    Object.keys(Cookies.get()).forEach((cookieName) => {
      Cookies.remove(cookieName);
    });
    alert("Successfully logged out");
    navigate("/flights");
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <button onClick={handleUserProfileClick}>User Profile</button>
        <button onClick={handleBookingsClick}>Bookings</button>
        <button onClick={handleLogoutClick}>Logout</button>
      </div>
      <div className="main-content">
        {displayContent === "profile" && userDetails && (
          <div className="profile-content">
            <h2>User Profile</h2>
            <form onSubmit={handleUpdateUser}>
              <label>User ID:</label>
              <input type="text" value={userDetails.userID} disabled />
              <label>User Name:</label>
              <input
                type="text"
                name="userName"
                value={userDetails.userName}
                onChange={handleInputChange}
              />

              <label>Phone Number:</label>
              <input
                type="text"
                name="phoneNo"
                value={userDetails.phoneNo}
                onChange={handleInputChange}
              />
              <label>Gender:</label>
              <input
                type="text"
                name="gender"
                value={userDetails.gender}
                onChange={handleInputChange}
              />
              <label>Date of Birth:</label>
              <input
                type="text"
                name="dateOfBirth"
                value={userDetails.dateOfBirth}
                onChange={handleInputChange}
              />
              <button type="submit">Update</button>
            </form>
          </div>
        )}

        {displayContent === "bookings" && (
          <>
            {bookings.map((booking) => (
              <div key={booking.bookingID} className="booking-card">
                <h3>Booking ID: {booking.bookingID}</h3>
                <p>Booking Date: {booking.bookingDate}</p>
                <div>
                  <h4>Tickets:</h4>
                  {booking.tickets.map((ticket) => (
                    <div key={ticket.ticketID} className="ticket-container">
                      <div className="ticket-content">
                        <p>Seat No: {ticket.seatNo}</p>
                        <p>Type: {ticket.type}</p>
                        <p>Price: {ticket.price}</p>
                        <button
                          className="view-ticket-button"
                          onClick={() => handleTicketClick(ticket)}
                        >
                          {selectedTicket === ticket
                            ? "Hide Ticket Details"
                            : "View Ticket Details"}
                        </button>
                      </div>
                      {selectedTicket === ticket && (
                        <div className="ticket-details">
                          <h4>Flight Details:</h4>
                          <p>Passenger Name: {ticket.traveller.name}</p>
                          <p>Departure Time: {ticket.flight.departureTime}</p>
                          <p>Arrival Time: {ticket.flight.arrivalTime}</p>
                          <p>
                            From Destination: {ticket.flight.fromDestination}
                          </p>
                          <p>To Arrival: {ticket.flight.toArrival}</p>
                          <p>Departure: {ticket.flight.departure}</p>
                          <p>Airlines: {ticket.flight.airlines}</p>
                          <p>Arrival: {ticket.flight.arrival}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
