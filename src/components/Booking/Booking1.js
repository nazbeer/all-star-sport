import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const events = [
    {
      title: 'Meeting',
      start: new Date(2023, 4, 30, 10, 0),
      end: new Date(2023, 4, 30, 11, 30),
    },
    // Add more events as needed
  ];

const Booking = () => {
  return (
    <div style={{ height: 'auto' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
      />
    </div>
  );
};

export default Booking;