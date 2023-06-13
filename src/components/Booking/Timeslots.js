import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Booking.css';
import moment from 'moment';
const Timeslots = () => {
  const [bookingData, setBookingData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   const response = await axios.get(`https://allstarstports.arenacapital.org/api/v1/timeslots/get`);
        
      //        if (Array.isArray(response?.data?.data)) {
      //         setBookingData(response?.data?.data);
      //         console.log('timeslot', response?.data?.data);
      //       } else if (typeof response?.data?.data === 'object') {
      //           if (Array.isArray(response?.data?.data)) {
      //             setBookingData(response?.data?.data);
      //           } 
                
      //       } 
      //   console.log('Timeslots: ',response?.data?.data);
      // } catch (error) {
      //   console.error('Error retrieving field data:', error);
      // }
      try {
        const response = await axios.get(`https://allstarstports.arenacapital.org/api/v1/timeslots/get`);
        setBookingData(response?.data?.data);
        console.log('Time:', response?.data?.data);
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
   
    // <div className="d-none justify-content-around align-items-center my-2">
    //     <div className='col-2'>

    //     </div>

    //     {Object.entries(bookingData).map(([fieldId, bookings]) => (
          
         
    //     <div className="col-3 text-center"> 
    //     <p className="text-dark font-weight-600" key={fieldId}>{fieldId}</p>
        
    //     <p key={fieldId}>Available: {bookings}</p> 
    //     {/* <p>Field ID: {fieldId}</p> */}
    //     {/* {bookingData.booking.map((booking) => (
    //       <div key={booking.id}>
    //                          <p>Booking ID: {booking.id}</p>
    //                          <p>{moment(booking.start).format('LT')}</p>
    //                          <p>End: {booking.end}</p>
    //                          <p>Customer: {booking.customer.name}</p>
    //                          <p>Service: {booking.service.name}</p>
    //                        </div>
    //     ))} */}
    //     </div>
    //       ))}
       
            
    // </div>
    <div className='row  '>
    {Object.entries(bookingData).map(([fieldId, bookings]) => (
      <div key={fieldId} >
        {/* <p>Field ID: {fieldId}</p> */}
        {Object.entries(bookings).map(([slotIndex, slot]) => (
          <div key={slotIndex} >
            
            {slot.booking.map((booking) => (
                <div className=' mb-085'>
                  <button className='btn btn-time ' type='button'>{moment(booking.start).format('LT')}</button>
                </div>
            ))}
            </div>
    
        ))}
        </div>
    ))}
    </div>


    // <div className='col-md-12  '>
    //   {Object.entries(bookingData).map(([fieldId, bookings]) => (
    //     <div key={fieldId} className=''>
    //       {/* <p>Field ID: {fieldId}</p> */}
    //       {Object.entries(bookings).map(([slotIndex, slot]) => (
    //         <div key={slotIndex} >
    //           <div className='col-md-2'>
    //           {slot.booking.map((booking) => (
    //               <div>
    //                 <p>{moment(booking.start).format('LT')}</p>
    //               </div>
    //           ))}
    //           </div>
    //           <div className='col-md-2'>
             





    //           <p>Available: {slot.available.toString()}</p> 
            
    //           </div>
    //            {slot.booking.length > 0 ? (
                  
    //             <div>
    //               {slot.booking.map((booking) => (
    //                 <div key={booking.id}>
    //                   <p>Booking ID: {booking.id}</p>
    //                   <p>{moment(booking.start).format('LT')}</p>
    //                   <p>End: {booking.end}</p>
    //                   {/* <p>Customer: {booking.customer.name}</p>
    //                   <p>Service: {booking.service.name}</p> */}
    //                 </div>
    //               ))}
    //             </div>
    //            ) : (
    //             <p>No bookings for this slot</p>
    //           )} 
    //             </div>
           
    //       ))}
    //     </div>
    //   ))}
    // </div>
  );
};

export default Timeslots;
