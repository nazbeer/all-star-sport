import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Booking.css';
import moment from 'moment';
const Available = () => {
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
    <div className='row d-inline-flex '>
    {Object.entries(bookingData).map(([fieldId, bookings]) => (
      <div key={fieldId} className=''>
        {/* <p>Field ID: {fieldId}</p> */}
        {Object.entries(bookings).map(([slotIndex, slot]) => (
          <div key={slotIndex} >
            <div className=''>
            {/* {slot.available  ? ( */}
            {slot.booking.map((booking) => (
                
                <div className="col-3 min-h-40">
                    {/* <p>{slot.available.toString()}</p> */}
                     {slot.available.toString()  ? (
                <button className="btn btn-booked" type="button"  >Booked</button>
                     ) : (
                        <button className="btn btn-success" type="button"  >Available</button>
                     )}
                <div className="box">
                     <form className='p-3'>
                         <div className='row mb-1'>
                             <p className='font-weight-600 fs-14'>Name</p>
                             <p className='fs-14'>{booking.customer.name}</p>
                         </div>
                         <div className='row mb-1'>
                             <p className='font-weight-600 fs-14'>Phone Number</p>
                             <p className='fs-14'>{booking.customer.phone}</p>
                         </div>
                         <div className='row mb-1'>
                             <p className='font-weight-600 fs-14'>Email</p>
                             <p className='fs-14'>{booking.customer.email}</p>
                         </div>
                         <div className='row mb-1'>
                             <p className='font-weight-600 fs-14'>Payment Type</p>
                             <p className=' fs-14'>Partial</p>
                         </div>
                         <div className='row mb-1'>
                             <p className='font-weight-600 fs-14'>Payment Status</p>
                             <div className='col-md-6'>
                                 <p className='text-muted font-weight-600'>Paid Amount</p>
                                 <p className='text-dark font-weight-600'>AED {booking.total}</p>
                             </div>
                             <div className='col-md-6 border-left'>
                                 <p className='text-muted font-weight-600'>Payable Amount</p>
                                 <p className='text-red font-weight-600'>AED 200</p>
                             </div>
                             
                         </div>
                         <div className='row mt-3'>
                           <button className=' fs-14 btn btn-cancel'>Cancel</button>
 
                         </div>
                     </form>
 
                </div>
             </div>
                 
           
            ))}
            {/* ) : (
                <p>No bookings for this slot</p>
                           )}  */}
            </div>
           
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

export default Available;
