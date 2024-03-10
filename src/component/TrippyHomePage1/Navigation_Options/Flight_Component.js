import React, {useState} from "react";
import Flight_Radio from "./Flight_Radio";
import Flight_Detail_Selection from "./Flight_Detail_Selection";
import Flight_Fare_Type from "./Flight_Fare_Type";

export default function Flight_Component() {

  const [flightRadioValue, setFlightRadioValue] = useState(1);

  const getFlightRadio = (value) => {
    setFlightRadioValue(value);
  };

  return (
    <div>
      <Flight_Radio getRadioValue={getFlightRadio}></Flight_Radio>
      <Flight_Detail_Selection radioValue={flightRadioValue}></Flight_Detail_Selection>
      <Flight_Fare_Type></Flight_Fare_Type>
    </div>
  );
}
