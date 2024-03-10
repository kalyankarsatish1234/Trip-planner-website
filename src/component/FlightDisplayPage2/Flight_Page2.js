import React, { useState, useEffect } from "react";
import "./Flight_Page2.css";
import Show_Flights from "./Show_Flights";
import Flight_Filter from "./Flight_Filter";
import { useFlightContext } from "../../context/FlightContext";
import axios from "axios";

export default function Flight_Page2() {
  const [newFlight, setNewFlights] = useState([]);
  const {
    flightFromCity,
    flightToCity,
    flightDepartureDate,
    numberOfTravellers,
  } = useFlightContext();

  const url = `http://localhost:8080/flight/${flightToCity}/${flightFromCity}/${flightDepartureDate}/${numberOfTravellers}`;
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        // Set the newCities state with the updated array
        setNewFlights(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });
  }, []);

  const [filterByAirline, setFilterByAirline] = useState([]);
  const [filterByStops, setFilterByStops] = useState([]);
  const [filterByDepartureTime, setFilterByDepartureTime] = useState([]);
  const [filterByArrivalTime, setFilterByArrivalTime] = useState([]);
  const [filterByPrice, setFilterByPrice] = useState([]);
  const [flightClearFilter, setflightClearFilter] = useState([0]);

  const getClearFilterArrayFunction = (flights) => {
    setflightClearFilter([...flights]);
  };

  const getFilterByAirlineFunction = (filterVal) => {
    setFilterByAirline([...filterVal]);
  };
  const getFilterByStopsFunction = (filterVal) => {
    setFilterByStops([...filterVal]);
  };
  const getFilterByDepartureTimeFunction = (filterVal) => {
    setFilterByDepartureTime([...filterVal]);
  };
  const getFilterByArrivalTimeFunction = (filterVal) => {
    setFilterByArrivalTime([...filterVal]);
  };
  const getFilterByPriceFunction = (filterVal) => {
    setFilterByPrice([...filterVal]);
  };

  return (
    <div className="flight_page2_container">
      <div className="flight_filter_container">
        <h3>Fliter</h3>
        <Flight_Filter
          getClearFilterArrayFunction={getClearFilterArrayFunction}
          getFilterByAirlineFunction={getFilterByAirlineFunction}
          getFilterByStopsFunction={getFilterByStopsFunction}
          getFilterByDepartureTimeFunction={getFilterByDepartureTimeFunction}
          getFilterByArrivalTimeFunction={getFilterByArrivalTimeFunction}
          getFilterByPriceFunction={getFilterByPriceFunction}
        />
      </div>
      <div className="flight_details_display_container">
        <h3>Available Flights</h3>
        <Show_Flights
          flightsArray={newFlight}
          flightClearFilter={flightClearFilter}
          filterByAirline={filterByAirline}
          filterByStops={filterByStops}
          filterByDepartureTime={filterByDepartureTime}
          filterByArrivalTime={filterByArrivalTime}
          filterByPrice={filterByPrice}
        />
      </div>
    </div>
  );
}
