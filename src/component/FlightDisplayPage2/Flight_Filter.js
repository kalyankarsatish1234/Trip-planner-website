import React, { useState, useEffect } from "react";
import "./Flight_Filter.css";

export default function Flight_Fliter(props) {
  const airlines = [
    "Indigo",
    "Vistara",
    "Air India",
    "Spice Jet",
    "Jet Airways",
  ];
  const [clearFilterArray, setclearFilterArray] = useState([0]);
  const [filterByAirline, setFilterByAirline] = useState([]);
  const [filterByStops, setFilterByStops] = useState([]);
  const [filterByDepartureTime, setFilterByDepartureTime] = useState([]);
  const [filterByArrivalTime, setFilterByArrivalTime] = useState([]);
  const [filterByPrice, setFilterByPrice] = useState([]);

  const clearAllFilter = () => {
    setclearFilterArray([1]);
    props.getClearFilterArrayFunction(clearFilterArray);
    setFilterByAirline([]);
    setFilterByStops([]);
    setFilterByDepartureTime([]);
    setFilterByArrivalTime([]);
    setFilterByPrice([]);

    // Select all checkboxes with the name attribute equal to
    const filterByAirlineCheckboxes = document.querySelectorAll(
      'input[name="filterByAirline"]'
    );

    const filterByStopsCheckboxes = document.querySelectorAll(
      'input[name="filterByStops"]'
    );

    const filterByDepartureCheckboxes = document.querySelectorAll(
      'input[name="filterByDeparture"]'
    );

    const filterByArrivalCheckboxes = document.querySelectorAll(
      'input[name="filterByArrival"]'
    );

    const filterByPriceCheckboxes = document.querySelectorAll(
      'input[name="filterByPrice"]'
    );

    // Loop through the checkboxes and uncheck them
    filterByAirlineCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    filterByStopsCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    filterByDepartureCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    filterByArrivalCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    filterByPriceCheckboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const getFilterByAirlineCheckbox = (e) => {
    if (e && e.target) {
      const airlineName = e.target.value;
      const isChecked = e.target.checked;

      // Update state based on checkbox state
      setFilterByAirline((prevAirline) => {
        if (isChecked) {
          return [...prevAirline, airlineName];
        } else {
          return prevAirline.filter((air) => air !== airlineName);
        }
      });
    }
  };

  useEffect(() => {
    props.getFilterByAirlineFunction(filterByAirline);
  }, [filterByAirline]);

  const getFilterByStopsCheckbox = async (e) => {
    if (e && e.target) {
      const stops = parseInt(e.target.value);
      const isChecked = e.target.checked;

      // Update state based on checkbox state
      setFilterByStops((prevStops) => {
        if (isChecked) {
          return [...prevStops, stops];
        } else {
          return prevStops.filter((stop) => stop !== stops);
        }
      });
    }
  };

  useEffect(() => {
    props.getFilterByStopsFunction(filterByStops);
  }, [filterByStops]);

  const getFilterByDepartureTimeCheckbox = async (e) => {
    if (e && e.target) {
      const departure = e.target.value;
      const isChecked = e.target.checked;

      // Update state based on checkbox state
      setFilterByDepartureTime((prevDepartures) => {
        if (isChecked) {
          return [...prevDepartures, departure];
        } else {
          return prevDepartures.filter((dept) => dept !== departure);
        }
      });
    }
  };

  useEffect(() => {
    props.getFilterByDepartureTimeFunction(filterByDepartureTime);
  }, [filterByDepartureTime]);

  const getFilterByArrivalTimeCheckbox = async (e) => {
    if (e && e.target) {
      const arrival = e.target.value;
      const isChecked = e.target.checked;

      // Update state based on checkbox state
      setFilterByArrivalTime((prevArrivals) => {
        if (isChecked) {
          return [...prevArrivals, arrival];
        } else {
          return prevArrivals.filter((arr) => arr !== arrival);
        }
      });
    }
  };
  useEffect(() => {
    props.getFilterByArrivalTimeFunction(filterByArrivalTime);
  }, [filterByArrivalTime]);

  const getFilterByPriceCheckbox = async (e) => {
    if (e && e.target) {
      const price = e.target.value;
      const isChecked = e.target.checked;

      // Update state based on checkbox state
      setFilterByPrice((prevPrice) => {
        if (isChecked) {
          return [...prevPrice, price];
        } else {
          return prevPrice.filter((pr) => pr !== price);
        }
      });
    }
  };

  useEffect(() => {
    props.getFilterByPriceFunction(filterByPrice);
  }, [filterByPrice]);

  return (
    <>
      <div className="filter_airlines">
        <h6>Filter by Airlines</h6>

        {airlines.map((airlineName) => (
          <label key={airlineName}>
            <input
              type="checkbox"
              name="filterByAirline"
              value={airlineName}
              onChange={getFilterByAirlineCheckbox}
            />{" "}
            {airlineName}
          </label>
        ))}
        <hr></hr>
      </div>

      <div className="filter_airlines">
        <h6>Filter by Stops</h6>
        <label>
          <input
            type="checkbox"
            name="filterByStops"
            value="0"
            onChange={getFilterByStopsCheckbox}
          />{" "}
          No Stop
        </label>
        <label>
          <input
            type="checkbox"
            name="filterByStops"
            value="1"
            onChange={getFilterByStopsCheckbox}
          />{" "}
          1 Stop
        </label>
        <hr></hr>
      </div>

      <div className="filter_airlines">
        <h6>Filter by Departure</h6>
        <label>
          <input
            type="checkbox"
            name="filterByDeparture"
            value="departure_1"
            onChange={getFilterByDepartureTimeCheckbox}
          />{" "}
          Before 6 AM
        </label>
        <label>
          <input
            type="checkbox"
            name="filterByDeparture"
            value="departure_2"
            onChange={getFilterByDepartureTimeCheckbox}
          />{" "}
          6 AM - 12 PM
        </label>
        <label>
          <input
            type="checkbox"
            name="filterByDeparture"
            value="departure_3"
            onChange={getFilterByDepartureTimeCheckbox}
          />{" "}
          12 PM - 6 PM
        </label>
        <label>
          <input
            type="checkbox"
            name="filterByDeparture"
            value="departure_4"
            onChange={getFilterByDepartureTimeCheckbox}
          />{" "}
          After 6 PM
        </label>
        <hr></hr>
      </div>

      <div className="filter_airlines">
        <h6>Filter by Arrival</h6>
        <label>
          <input
            type="checkbox"
            name="filterByArrival"
            value="arrival_1"
            onChange={getFilterByArrivalTimeCheckbox}
          />{" "}
          Before 6 AM
        </label>
        <label>
          <input
            type="checkbox"
            name="filterByArrival"
            value="arrival_2"
            onChange={getFilterByArrivalTimeCheckbox}
          />{" "}
          6 AM - 12 PM
        </label>
        <label>
          <input
            type="checkbox"
            name="filterByArrival"
            value="arrival_3"
            onChange={getFilterByArrivalTimeCheckbox}
          />{" "}
          12 PM - 6 PM
        </label>
        <label>
          <input
            type="checkbox"
            name="filterByArrival"
            value="arrival_4"
            onChange={getFilterByArrivalTimeCheckbox}
          />{" "}
          After 6 PM
        </label>
        <hr></hr>
      </div>

      <div className="filter_airlines">
        <h6>Filter by Price</h6>
        <label>
          <input
            type="checkbox"
            name="filterByPrice"
            value="price_1"
            onChange={getFilterByPriceCheckbox}
          />{" "}
          &lt;5000
        </label>
        <label>
          <input
            type="checkbox"
            name="filterByPrice"
            value="price_2"
            onChange={getFilterByPriceCheckbox}
          />{" "}
          &gt; 5000 - &lt; 10000
        </label>
        <label>
          <input
            type="checkbox"
            name="filterByPrice"
            value="price_3"
            onChange={getFilterByPriceCheckbox}
          />{" "}
          &gt; 10000 - &lt; 15000
        </label>
        <label>
          <input
            type="checkbox"
            name="filterByPrice"
            value="price_4"
            onChange={getFilterByPriceCheckbox}
          />{" "}
          &gt; 15000
        </label>
        <hr></hr>
        <button type="button" class="btn btn-primary" onClick={clearAllFilter}>
          Clear Filters
        </button>
      </div>
    </>
  );
}
