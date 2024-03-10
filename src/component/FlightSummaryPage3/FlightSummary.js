import React from 'react'
import BookingForm from './BookingForm'
import FareSummary from './FareSummary'
import PromoCode from './PromoCode'
import RefundPolicy from './RefundPolicy'
import TravellerDetails from './TravellerDetails'
import FlightInfo from './FlightInfo'
import './Flight.css';
const FlightSummary = () => {


        const flightData = {
          origin: 'Mumbai',
          destination: 'Pune',
          departureTime: '12:00 PM',
          arrivalTime: '06:00 PM',
          duration: '6h',
          airline: 'Airline Name',
          aircraft: 'Boeing 747',
          cabin: 'Business Class',
          baggageAllowance: '2 bags, 23kg each',
        };
        
        const refundPolicyData = {
          route: 'DEL-BOM',
          cancellationPenalty: 3800,
          cancelBetween: 6189,
          startTime: '12 Feb, 20:05',
          endTime: '12 Feb, 23:05',
          refundPolicyLink: '#', // Replace with the actual link
        };
      
        
      


  return (
    <div>
    <h1 className='flight'>Flight Booking</h1>
      <FlightInfo flightData={flightData}/>
      
      <RefundPolicy {...refundPolicyData} />
      {/* Traveller details component */}
      <div className="traveller-details-container">
      <TravellerDetails  />
       
      </div>
      
      <PromoCode/>
      <FareSummary/>


      <BookingForm/>

      
    </div>
  )
}

export default FlightSummary
