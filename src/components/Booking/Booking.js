import './Booking.css';
import React, { useEffect, useState } from 'react';
import Timeslots from './Timeslots';
import axios from 'axios';
import Available from './Available';
const Booking = () => {
    const [data, setFieldData] = useState([]);
   
 // eslint-disable-next-line 
    useEffect(() => {
      getFields();
    }, []);
   // eslint-disable-next-line 
    const getFields = async () => {
      

            try {
                const response = await axios.get(`https://allstarstports.arenacapital.org/api/v1/fields/get`);
                
                     if (Array.isArray(response?.data?.data)) {
                        setFieldData(response?.data?.data);
                    } else if (typeof response?.data?.data === 'object') {
                        if (Array.isArray(response?.data?.data)) {
                            setFieldData(response?.data?.data);
                        } 
                        
                    } 
                console.log('Fields: ',response?.data?.data);
              } catch (error) {
                console.error('Error retrieving field data:', error);
              }

           
      
    //   try {
    //     const getfields = await fetch('https://allstarstports.arenacapital.org/api/v1/fields/get');
        
    //     const jsonData = await getfields.json();
    //     console.log(jsonData)
    //     if (Array.isArray(jsonData)) {
    //         setData(jsonData);
    //       } else if (typeof jsonData === 'object') {
    //         if (Array.isArray(jsonData.data)) {
    //           setData(jsonData.data);
    //         } 
            
    //       } 
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //     }
        
    };
    return(
        <>
        
        <div className="d-flex justify-content-around align-items-center my-2">
            <div className='col-2'>

            </div>

            {Object.entries(data).map(([fieldId, bookings]) => (
            <div className="col-3 text-center"> 
             <p className="text-dark font-weight-600" key={fieldId}>{bookings.name}</p>
            {/* <p>Field ID: {fieldId}</p> */}
            </div>

        ))}
           
        </div>

        <div className='clearfix15'></div>
       
        <div className="d-flex  my-2 min-h-40">
                <div className='col-md-3  min-h-40 align-items-center '>
                <Timeslots/>
                </div>
                <div className="col-md-9">
                    <Available/>
                    </div>
                


            {/* <div className='col-2 text-center min-h-40 align-items-center pt-8'>
          
            </div>
           
            <div className="col-3 min-h-40">
               <button className="btn btn-booked w-100 clearfix " type="button"  >Booked</button>
               <div className="box">
                    <form className='p-3'>
                        <div className='row mb-1'>
                            <p className='font-weight-600 fs-14'>Name</p>
                            <p className='fs-14'>David Blaine</p>
                        </div>
                        <div className='row mb-1'>
                            <p className='font-weight-600 fs-14'>Phone Number</p>
                            <p className='fs-14'>+974 4512 564</p>
                        </div>
                        <div className='row mb-1'>
                            <p className='font-weight-600 fs-14'>Email</p>
                            <p className='fs-14'>info@allstarsport.com</p>
                        </div>
                        <div className='row mb-1'>
                            <p className='font-weight-600 fs-14'>Payment Type</p>
                            <p className=' fs-14'>Partial</p>
                        </div>
                        <div className='row mb-1'>
                            <p className='font-weight-600 fs-14'>Payment Status</p>
                            <div className='col-md-6'>
                                <p className='text-muted font-weight-600'>Paid Amount</p>
                                <p className='text-dark font-weight-600'>AED 250</p>
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
            <div className="col-3 min-h-40">
            <button className="btn btn-success w-100 clearfix" type="button"></button>
            </div>
            <div className="col-3 min-h-40">
            <button className="btn btn-success w-100 clearfix" type="button"></button>
            </div>
        
        </div>
        <div className="d-flex justify-content-around align-items-center my-2 min-h-40">
            <div className='col-2 text-center min-h-40 align-items-center pt-8'>
                8.30 AM
            </div>
           
            <div className="col-3 min-h-40">
               <button className="btn btn-success w-100 clearfix " type="button"></button>
            </div>
            <div className="col-3 min-h-40">
            <button className="btn btn-success w-100 clearfix" type="button"></button>
            </div>
            <div className="col-3 min-h-40">
            <button className="btn btn-booked w-100 clearfix" type="button" >Booked</button>
            </div>
           
        </div>
        

        <div className="d-flex justify-content-around align-items-center my-2 min-h-40">
            <div className='col-2 text-center min-h-40 align-items-center pt-8'>
                9 AM
            </div>
           
            <div className="col-3 min-h-40">
               <button className="btn btn-success w-100 clearfix " type="button"></button>
            </div>
            <div className="col-3 min-h-40">
            <button className="btn btn-success w-100 clearfix" type="button"></button>
            </div>
            <div className="col-3 min-h-40">
            <button className="btn btn-success w-100 clearfix" type="button"></button>
            </div>
           
        </div>
        <div className="d-flex justify-content-around align-items-center my-2 min-h-40">
            <div className='col-2 text-center min-h-40 align-items-center pt-8'>
                9.30 AM
            </div>
           
            <div className="col-3 min-h-40">
               <button className="btn btn-success w-100 clearfix " type="button"></button>
            </div>
            <div className="col-3 min-h-40">
            <button className="btn btn-success w-100 clearfix" type="button"></button>
            </div>
            <div className="col-3 min-h-40">
            <button className="btn btn-success w-100 clearfix" type="button"></button>
            </div>
           
        </div>
        <div className="d-flex justify-content-around align-items-center my-2 min-h-40">
            <div className='col-2 text-center min-h-40 align-items-center pt-8'>
                10 AM
            </div>
           
            <div className="col-3 min-h-40">
               <button className="btn btn-success w-100 clearfix " type="button"></button>
            </div>
            <div className="col-3 min-h-40">
            <button className="btn btn-success w-100 clearfix" type="button"></button>
            </div>
            <div className="col-3 min-h-40">
            <button className="btn btn-success w-100 clearfix" type="button"></button>
            </div>
           
        </div>
        <div className="d-flex justify-content-around align-items-center my-2 min-h-40">
            <div className='col-2 text-center min-h-40 align-items-center pt-8'>
                10.30 AM
            </div>
           
            <div className="col-3 min-h-40">
               <button className="btn btn-success w-100 clearfix " type="button"></button>
            </div>
            <div className="col-3 min-h-40">
            <button className="btn btn-success w-100 clearfix" type="button"></button>
            </div>
            <div className="col-3 min-h-40">
            <button className="btn btn-success w-100 clearfix" type="button"></button>
            </div>
           
        </div>
        <div className="d-flex justify-content-around align-items-center my-2 min-h-40">
            <div className='col-2 text-center min-h-40 align-items-center pt-8'>
                11 AM
            </div>
           
            <div className="col-3 min-h-40">
               <button className="btn btn-success w-100 clearfix " type="button"></button>
            </div>
            <div className="col-3 min-h-40">
            <button className="btn btn-success w-100 clearfix" type="button"></button>
            </div>
            <div className="col-3 min-h-40">
            <button className="btn btn-success w-100 clearfix" type="button"></button>
            </div>
           
        </div>
        <div className="d-flex justify-content-around align-items-center my-2 min-h-40">
            <div className='col-2 text-center min-h-40 align-items-center pt-8'>
            11.30 AM
            </div>
           
            <div className="col-3 min-h-40">
               <button className="btn btn-success w-100 clearfix " type="button"></button>
            </div>
            <div className="col-3 min-h-40">
            <button className="btn btn-success w-100 clearfix" type="button"></button>
            </div>
            <div className="col-3 min-h-40">
            <button className="btn btn-success w-100 clearfix" type="button"></button>
            </div>
           
        </div>
        <div className="d-flex justify-content-around align-items-center my-2 min-h-40">
            <div className='col-2 text-center min-h-40 align-items-center pt-8'>
                12 PM
            </div>
           
            <div className="col-3 min-h-40">
               <button className="btn btn-success w-100 clearfix " type="button"></button>
            </div>
            <div className="col-3 min-h-40">
            <button className="btn btn-success w-100 clearfix" type="button"></button>
            </div>
            <div className="col-3 min-h-40">
            <button className="btn btn-success w-100 clearfix" type="button"></button>
            </div>
            */}
        </div>

        <div className='row mt-4 mb-3'>
        <div className='col-md-12 pull-right text-right d-flex justify-content-around align-items-right gap-2'>
       <p> </p><p> </p><p> </p><p> </p><p> </p><p> </p><p> </p>
        <p className='d-inline-flex'><strong className='available'></strong>Available</p>
        <p className='d-inline-flex'><strong className='pitch'></strong>Pitch Rental</p>
        <p className='d-inline-flex'><strong className='birthday'></strong>Birthday Event</p>
        </div>
        </div>

        
        </>
    );
}
export default Booking;
