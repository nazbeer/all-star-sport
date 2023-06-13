import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './BookingNew.css';

const API_URL = 'https://allstarstports.arenacapital.org/api/v1/timeslots/get';

const BookingNew = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [hoveredBooking, setHoveredBooking] = useState(null);

  useEffect(() => {
    fetchBookings(selectedDate);
  }, [selectedDate]);

  const fetchBookings = async (date) => {
    try {
      const response = await axios.get(API_URL, {
        params: {
          date: date.toISOString(),
        },
      });
      setBookings(response?.data?.data);
      console.log('Res: ', response?.data?.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBookingHover = (booking) => {
    setHoveredBooking(booking);
  };

  const handleBookingLeave = () => {
    setHoveredBooking(null);
  };

  return (
    <div className="App">
      <h1>Booking System</h1>
      <div className="calendar-container">
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>
      <div className="bookings-container">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className={`booking ${booking.available ? 'true' : 'false'}`}
            onMouseEnter={() => handleBookingHover(booking)}
            onMouseLeave={handleBookingLeave}
          >
            <div>{booking.start}</div>
            <div>{booking.service.name}</div>
            {hoveredBooking === booking && (
              <div className="customer-details">{booking.customer.name}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingNew;
