import React from "react";

import "./Offer.css";
import flight from "../../../images/flight_offer.jpg";
import hotel from "../../../images/hotel_offer.jpg";
import train from "../../../images/train_offer.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Offer = () => {
  const settings = {
    dots: true,
    //carousel move infinitely
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="offer-container">
      <div className="offer1">
        <h2 className="offer-title">Offers</h2>
        <Slider {...settings}>
          {/* iterate it through map  */}
          {data.map((d) => (
            //create div for card
            <div className="image">
              {/* 1 div is handle the image  */}
              <div className="image1">
                <img src={d.imag} alt="" className="image2" />
              </div>

              {/* 2 div is handle the review and name  */}
              <div className="Info">
                <p className="Name">{d.nameOffer}</p>
                <p>{d.info}</p>
                <button className="button">BookNow</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
const data = [
  {
    imag: hotel,
    nameOffer: "HotelBooking",
    info: "Get FLAT 10% OFF on domestic hotels at India's",
  },

  {
    imag: flight,
    nameOffer: "FlightBooking",
    info: "FLAT 20% OFF on Business Class Bookings",
  },

  {
    imag: train,
    nameOffer: "RailBooking",
    info: "FLAT 30% OFF on Business Class Bookings",
  },
];
export default Offer;
