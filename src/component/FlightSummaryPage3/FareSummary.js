import React, { useState, useEffect } from 'react';

const FareSummary = ({ flightInfo }) => {
  const [totalFare, setTotalFare] = useState(100); // Replace with  actual total fare
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    // Assuming flightInfo contains the necessary information
    // Update totalFare based on flight information

    setTotalFare(calculateTotalFare(flightInfo));
  }, [flightInfo]);

  const calculateTotalFare = (flightInfo) => {

    return flightInfo ? flightInfo.ticketPrice + flightInfo.tax : 0;
  };

  const calculateFinalAmount = () => {
    return totalFare - totalFare * discount;
  };

  return (
    <div className='faresummary'>
      <h2 className='fare'>Fare Summary</h2>
      <p>Total Fare: Rs.{totalFare}</p>
      <p>Discount: {discount * 100}%</p>
      <p>Final Amount: Rs.{calculateFinalAmount()}</p>
    </div>
  );
};

export default FareSummary;
