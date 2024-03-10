import React, { createContext, useState, useContext } from 'react';

const FlightContext = createContext();

export const FlightProvider = ({ children }) => {
  const [flightFromCity, setFlightFromCity] = useState('');
  const [flightToCity, setFlightToCity] = useState('');
  const [flightDepartureDate, setflightDepartureDate] = useState('');
  const [flightReturnDate, setflightReturnDate] = useState('');
  const [numberOfTravellers, setNumberOfTravellers] = useState(1);
  const [cities, setCities] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState([]);
  const [travellerDetails, setTravellerDetails] = useState([]);
  const [bookingDetails, setBookingDetails] = useState({});
  const [bookingGenerated, setBookingGenerated] = useState({});

  return (
    <FlightContext.Provider value={{
      flightFromCity,
      setFlightFromCity,
      flightToCity,
      setFlightToCity,
      flightDepartureDate,
      setflightDepartureDate,
      flightReturnDate,
      setflightReturnDate,
      numberOfTravellers,
      setNumberOfTravellers,
      cities,
      setCities,
      selectedFlight,
      setSelectedFlight,
      travellerDetails,
      setTravellerDetails,
      bookingDetails,
      setBookingDetails,
      bookingGenerated,
      setBookingGenerated
    }}>
      {children}
    </FlightContext.Provider>
  );
};

export const useFlightContext = () => useContext(FlightContext);