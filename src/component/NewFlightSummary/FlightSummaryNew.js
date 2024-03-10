import React from "react";
import "./FlightSummaryNew.css";
import Flight_Overview from "./Flight_Overview";
import Cancellation_Policy from "./Cancellation_Policy";
import Traveller_Details from "./Traveller_Details";
import Flight_Fare_Summary from "./Flight_Fare_Summary";
import { Link } from "react-router-dom";

export default function FlightSummaryNew() {
  return (
    <div className="flight_summary_container">
      <div className="complete_booking">
        <h2>Complete Your Booking</h2>
      </div>
      <div className="flight_summary_subcontainer">
        <Flight_Overview></Flight_Overview>
      </div>
      <div className="flight_summary_subcontainer">
        <Cancellation_Policy></Cancellation_Policy>
      </div>
      <div className="flight_summary_subcontainer">
        <Traveller_Details></Traveller_Details>
      </div>
      <div className="flight_summary_subcontainer">
        <Flight_Fare_Summary></Flight_Fare_Summary>
      </div>
      <Link to="/flights/bookingDetails">
        <button className="btn btn-primary">Submit Booking</button>
      </Link>
    </div>
  );
}
