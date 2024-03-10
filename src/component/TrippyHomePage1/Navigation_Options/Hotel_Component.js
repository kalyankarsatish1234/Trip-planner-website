import React from "react";
import Hotel_Radio from "./Hotel_Radio";
import Hotel_Detail_Selection from "./Hotel_Detail_Selection";

export default function Hotel_Component() {
  return (
    <div className="hotel_container">
      <Hotel_Radio />
      <Hotel_Detail_Selection />
    </div>
  );
}
