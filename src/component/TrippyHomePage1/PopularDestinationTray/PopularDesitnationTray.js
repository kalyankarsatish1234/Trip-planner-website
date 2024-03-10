// PopularDestinationTray.js

import React, { useEffect, useState } from "react";
import "./PopularDesitnationTray.css";
import mum from "../../../images/mum.jpg";
import ba from "../../../images/ba.jpg";
import pune from "../../../images/Pune.jpg";
import Delhi from "../../../images/Delhi.jpg";
import Hyderabad from "../../../images/Hyderabad.jpg";
import Ahmedabad from "../../../images/Ahmedabad.jpg";
import { Link } from "react-router-dom";

export default function PopularDesitnationTray() {
  const [content, setcontent] = useState([]);
  const array = [
    {
      city: "Mumbai",
      desc: "Mumbai, formerly known as Bombay, is the capital city of the Indian state of Maharashtra. It is the most populous city in India and the seventh most populous city in the world.",
      img: mum,
    },
    {
      city: "Bangalore",
      desc: "Bangalore, officially known as Bengaluru, is the capital of the Indian state of Karnataka. It is known for its pleasant climate, vibrant culture, and thriving IT industry.",
      img: ba,
    },
    {
      city: "Pune",
      desc: "Pune is also renowned for its thriving IT industry, with numerous software companies, tech parks, and innovation hubs contributing to its dynamic economy.",
      img: pune,
    },
    {
      city: "Delhi",
      desc: "Delhi, officially the National Capital Territory of Delhi, is a city and a union territory of India. It is known for its rich history, diverse culture, and political significance.",
      img: Delhi,
    },
    {
      city: "Hyderabad",
      desc: "Hyderabad is the largest city of the Indian state of Telangana and the de jure capital of Andhra Pradesh. It is known for its rich history, architecture, cuisine, and vibrant culture.",
      img: Hyderabad,
    },
    {
      city: "Ahmedabad",
      desc: "Ahmedabad is the largest city and former capital of the Indian state of Gujarat. It is known for its rich cultural heritage, vibrant festivals, and bustling markets.",
      img: Ahmedabad,
    },
  ];

  useEffect(() => {
    setcontent([...array]);
  }, []);

  return (
    <div id="popular-destination-container">
      <div className="pdt-div">
        <div className="tray-title">
          <h2>Popular Destinations</h2>
        </div>
        <div className="container-pdt" id="fixed">
          <div className="row" id="row2">
            {content.map((d, index) => (
              <div key={index} className="col-md-4 col-sm-6 mb-3">
                <div className="card" id="myCont">
                  <div className="card-body">
                    <div id="imgheight">
                      <img className="card-img-top" src={d.img} alt={d.city} />
                    </div>
                    <div id="restdiv">
                      <h5 className="card-title">
                        <strong>{d.city}</strong>
                      </h5>
                      <p className="card-text">{d.desc}</p>
                      <Link
                        to="/Book"
                        className="btn btn-primary"
                        id="upbutton"
                      >
                        Book a Flight
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
