import React from 'react';
import DatePicker from "react-datepicker";

const InputDatePicker = ({hiredDate,  handleInputDateChange}) =>(
    <DatePicker
        selected= {hiredDate}
        onChange={handleInputDateChange}
        placeholderText="Hired Date"
        calendarClassName = "input-date-picker"
    />
);
const StartDatePicker = ({startDate,  handlerStartDate}) =>(
    <DatePicker
        selected= {startDate}
        selectsStart
        minDate={new Date()}
        onChange={handlerStartDate}
        placeholderText="StartDate"
        calendarClassName = "input-date-picker"
    />
);
const EndDatePicker = ({startDate, endDate, handlerEndDate }) => (
    <DatePicker
        selected= {endDate}
        endDate
        minDate={startDate}
        onChange={handlerEndDate}
        placeholderText="End Date"
        calendarClassName = "input-date-picker"
    />
);
export {
    InputDatePicker,
    StartDatePicker,
    EndDatePicker
}
