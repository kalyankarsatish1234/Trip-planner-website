import React from "react";
import { Link } from "react-router-dom";

export default function Cancellation_Policy() {
  return (
    <div>
      <h3 style={{ backgroundColor: "cyan" }}>Cancellation Refund Policy</h3>
      <p>
        You can cancel your flight booking within 24 hours of purchase for a
        full refund. After this period, cancellations may incur a fee depending
        on the airline's policy. Please review the cancellation terms and
        conditions provided by the airline before proceeding with your booking.
      </p>
      <p>
        If you need to cancel your booking, please contact our customer support
        team or log in to your account to manage your booking online. Refunds,
        if applicable, will be processed within 7-14 business days.
      </p>
      <p>
        Note: Some flights may have special cancellation policies, especially
        during peak travel seasons or for certain fare types. Make sure to check
        the specific cancellation policy associated with your booking before
        canceling.
      </p>
      <p>
        For more details, you can view the complete{" "}
        <Link to="flight/cancellationPolicy">
          Cancellation and Refund Policy
        </Link>
        .
      </p>
    </div>
  );
}
