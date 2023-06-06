import React, { useState } from "react";
//import DatePicker from "react-datepicker";
//import "./react-datepicker.css";
import Calendar from "react-calendar";
import "./ReactCalendar.css";
function Calendar1(){
    //const [startDate, setStartDate] = useState(new Date());
    const [date, onChange] = useState(new Date());
    return(
        
        <>
       
        <div className=" d-flex justify-content-center align-items-center">
    {/* <DatePicker
       selected={startDate}
       onChange={(date) => setStartDate(date)}
       minDate={new Date()}
       showMonthDropdown
       showFixedNumberOfWeeks
       showDisabledMonthNavigation
      inline
      firstDayOfWeek='2'
      
    /> */}
    <Calendar
        onChange={onChange}
        showMonthDropdown
        showFixedNumberOfWeeks
        value={date}
      />
 
 </div>
  
       
        </>
    );
}
export default Calendar1;