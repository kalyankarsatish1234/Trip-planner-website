import React, { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import "./Navigation_Bar.css";
import flight_image from "../../../images/flights.png"
import hotel_image from "../../../images/hotel.png";
import holidayPacakages_image from "../../../images/holidayPackages.jpeg";
import train_image from "../../../images/train.jpg";
import cab_image from "../../../images/cab.jpeg";
import {Link} from "react-router-dom";

function Navigation_Bar() {
  const [activeNavLink, setactiveNavLink] = useState("/flights");

  const handleNavLinkClick = (eventKey) => {
    setactiveNavLink(eventKey);
  };

  useEffect(() => {
    // Set default active item when the component mounts
    handleNavLinkClick("/flights");
  }, []);

  return (
    <Nav className="nav-bar" variant="pills" defaultActiveKey="/home">
      <Nav.Item className="nav-item">
        <div className="pill-content">
          <Link
            to="/flights"
            className={`nav-link ${
              activeNavLink === "/flights" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("/flights")}
          >
            <img src={flight_image} alt="Flight image" className="icon" />
            <br />
            <span className="first-line">Flights</span>
          </Link>
        </div>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <div className="pill-content">
          <Link
            to="/hotels"
            className={`nav-link ${
              activeNavLink === "/hotels" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("/hotels")}
          >
            <img src={hotel_image} alt="Hotel image" className="icon" />
            <br />
            <span className="first-line">Hotels</span>
          </Link>
        </div>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <div className="pill-content">
          <Link
            to="/holiday_packages"
            className={`nav-link ${
              activeNavLink === "/holiday_packages" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("/holiday_packages")}
            
          >
            <img
              src={holidayPacakages_image}
              alt="Holiday Packages image"
              className="icon"
            />
            <br />
            <span className="first-line">Holiday</span>
            <br />
            <span className="second-line">Packages</span>
          </Link>
        </div>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <div className="pill-content">
          <Link
            to="/trains"
            className={`nav-link ${
              activeNavLink === "/trains" ? "active" : ""
            }`}
            onClick={() => handleNavLinkClick("/trains")}
            
          >
            <img src={train_image} alt="Train image" className="icon" />
            <br />
            Train
          </Link>
        </div>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <div className="pill-content">
          <Link
            to="/cabs"
            className={`nav-link ${activeNavLink === "/cabs" ? "active" : ""}`}
            onClick={() => handleNavLinkClick("/cabs")}
          >
            <img src={cab_image} alt="CabTrain image" className="icon" />
            <br />
            Cabs
          </Link>
        </div>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation_Bar;
