import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Date_Picker_Component.css';

const Date_Picker_Component = ({disabled, id, onDateChange}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // Call the callback function with the selected date
    onDateChange(date);
  };

  return (
    <div className="datepicker-container">
      <DatePicker className="datepicker"
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="d MMM yyyy"
        placeholderText="Select a date"
        disabled={disabled}
      />
    </div>
  );
};

export default Date_Picker_Component;