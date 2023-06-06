
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Calendar from '../components/Calendar/Calendar';
import Filter from '../components/Filter/Filter';
import Booking from '../components/Booking/Booking';

const Bookings = () => {
    

    return(
    <>
    <div className="container mb-4">
        <div className="row mb-4">
          <h1 className="text-center py-2 mb-3 font-weight-700">Booking <span className="calendar-text">Calendar</span></h1>
        </div>
        <div className="row gap-3">
        <div className="col-md-3 bg-f7 p-3 pr-4 ">
          <Calendar/>
          <Filter/>
          </div>
          <div className="col-md-8 bg-f7 p-3">
          <Booking/>
          </div>
        </div>
        
      </div>
    </>
);
};
export default Bookings;