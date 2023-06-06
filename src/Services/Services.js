
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Services.css';
import moment from 'moment';
import AddService from '../components/AddService/AddService';
//import AddCustomer from '../components/AddCustomer/AddCustomer';
const Services = () => {
    const [data, setData] = useState([]);
    const [successMessage, setShowMessage] = useState('');
    // eslint-disable-next-line
    useEffect(() => {
        getServices();
    }, []);
   
    const getServices = async () => {
     
      try {
            const response = await axios.get('https://allstarstports.arenacapital.org/api/v1/services/get')
            .then((res)=>{
            if (Array.isArray(res?.data?.data)) {
                setData(res?.data?.data);
                console.log(res.data.data)
            } else if (typeof res?.data?.data === 'object') {
                if (Array.isArray(res?.data?.data)) {
                setData(res?.data?.data);
                } 
            } 
            setData(res?.data?.data)
            }
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }
        
    };
    const ServiceDelete = async (id) => {
   
      try {
        const res= await axios.delete(`https://allstarstports.arenacapital.org/api/v1/service/delete?id=${id}`).then(() => {
          setShowMessage('Service Deleted Successfully');
          setTimeout(() => {
            setShowMessage(false);
            window.location.reload(); // Reload the page after 2 seconds
          }, 2000);
        })
        .catch(error => {
          console.log(error);
        });
      } catch (error) {
        console.error('Error deleting row:', error);
      }
    };
    return(
    <>
    <div className='row'>
      <div className='col-md-12 mt-3 mb-3'>
      <h1 className="text-center py-2 mb-3 font-weight-700">All <span className="calendar-text">Services</span></h1>
      </div>
      <div className='pull-right   mb-3 margin-inherit'>

      <AddService/>
      <div>{successMessage && <div className='rowdelete mt-3'>{successMessage}</div>}</div>
      </div>
        <table className='table table-hover table-responsive'>
            <thead className='bg-black text-white'>
                <tr className=''>
                   
                    <td>Name</td>
                    {/* <td>Details</td> */}
                    
                    <td>Color</td>
                    <td>Rate</td>
                    <td>Details</td>
                    <td>Duration</td>
                    <td className='d-none'><div  className='d-flex justify-content-between align-items-center'><span className="pull-left">Other Services</span> <span className="pull-right">Rate</span></div></td>
                    <td>Created at</td>
                    <td className='text-center'>Actions</td>
                </tr>
            </thead>
            <tbody>
            {data.map((data) => (
            
            <tr  key={data.id}>
            
              <td>{data.name}</td>
              {/* <td>{data.details}</td> */}
              
              <td><button style={{backgroundColor:"{data.service.color}"}} className='btn btn-default' type="button" > &nbsp;{data.color}</button></td>
              <td>{data.rate}</td>
              <td>{data.details}</td>
              <td>{data.duration} mins</td>
              <td  className='d-none'><div className='d-flex  justify-content-between align-items-center'><span className="text-left">{data.extras.name}</span> <span className="text-right font-weight-600">{data.extras.rate}</span></div></td>
              <td>  {moment(data.extras.created_at).format('L')}</td>
              <td className=" d-flex justify-content-around align-items-center text-center">
                <button className='btn btn-edit' type="button">Edit</button>
                <button className='btn btn-delete' type='button' onClick={() => ServiceDelete(data.id)}>Delete</button>
              </td>
            </tr>
         
          ))}
            </tbody>
        </table>
        </div>
    </>
);
}
export default Services;