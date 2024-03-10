// import React from "react";
// import { Outlet } from 'react-router-dom'
// import Header from '../Header/Header'
// import Container_Nav_Options from './Navigation_Options/Container_Nav_Options'
import Offer from "./Offer/Offer";
import PopularDesitnationTray from "./PopularDestinationTray/PopularDesitnationTray";
import AboutUs from "./AboutUs/AboutUs";
import React from "react";
import Navigation_Bar from "./Navigation_Options/Navigation_Bar";
import { Routes, Route, Link, useLocation} from "react-router-dom";
import Flight_Component from "./Navigation_Options/Flight_Component";
import Hotel_Component from "./Navigation_Options/Hotel_Component";
import './HomePage.css'

export default function HomePage() {
  const location = useLocation();

  // Function to dynamically generate the link based on the current URL
  const getSearchLink = () => {
    if (location.pathname === "/flights") {
      return "/flights/search";
    } else if (location.pathname === "/hotels") {
      return "/hotels/search";
    } else {
      // Default case or handle additional cases if needed
      return "/search";
    }
  };
  return (
    <>
      {console.log("In Home")}
      <div className="container-nav-options">
        <Navigation_Bar></Navigation_Bar>
        <div className="flight-card">
          <Routes>
            <Route path="/" element={<Flight_Component />} />
            <Route path="/flights" element={<Flight_Component />} />
            <Route path="/hotels" element={<Hotel_Component />} />
          </Routes>
          <div class="search_button_div">
            <Link to={getSearchLink()}>
              <button type="button" class="btn btn-primary">
                Search
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Offer />
      <PopularDesitnationTray />
      <AboutUs />
    </>
  );
}
