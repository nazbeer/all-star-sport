import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Booking.css';
import moment from 'moment';
const Timeslots = () => {
  const [bookingData, setBookingData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://allstarstports.arenacapital.org/api/v1/timeslots/get`);
        setBookingData(response?.data?.data);
        console.log(response?.data?.data);
      } catch (error) {
        console.error('Error retrieving booking data:', error);
      }
    };

    fetchData();
  }, []);

  if (!bookingData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {Object.entries(bookingData).map(([fieldId, bookings]) => (
        <div key={fieldId}>
          {/* <p>Field ID: {fieldId}</p> */}
          {Object.entries(bookings).map(([slotIndex, slot]) => (
            <div key={slotIndex}>
              {/* <p>Slot: {slotIndex}</p>
              <p>Available: {slot.available.toString()}</p> */}
              {/* {slot.booking.length > 0 ? ( */}
                <div>
                  {slot.booking.map((booking) => (
                    <div key={booking.id}>
                      {/* <p>Booking ID: {booking.id}</p> */}
                      <p>{moment(booking.start).format('LT')}</p>
                      {/* <p>End: {booking.end}</p>
                      <p>Customer: {booking.customer.name}</p>
                      <p>Service: {booking.service.name}</p> */}
                    </div>
                  ))}
                </div>
              {/* ) : (
                <p>No bookings for this slot</p>
              )} */}
              
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Timeslots;
