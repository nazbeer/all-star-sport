
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Customer.css';
import AddCustomer from '../components/AddCustomer/AddCustomer';
import EditCustomer1 from '../components/EditCustomer/EditCustomer1';
const Customer = () => {
    const [data, setData] = useState([]);
    const [successMessage, setShowMessage] = useState('');
    // eslint-disable-next-line
    useEffect(() => {
      getCustomers();
     // editCustomers();
    }, []);
   
    const getCustomers = async () => {
     
      try {
            const response = await axios.get('https://allstarstports.arenacapital.org/api/v1/customers/get')
            .then((res)=>{
            if (Array.isArray(res?.data?.data)) {
                setData(res?.data?.data);
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
    const CustomerDelete = async (id) => {
   
      try {
        const res= await axios.delete(`https://allstarstports.arenacapital.org/api/v1/customers/delete?id=${id}`).then(() => {
          setShowMessage('Customer Deleted Successfully');
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
      <h1 className="text-center py-2 mb-3 font-weight-700">All <span className="calendar-text">Customers</span></h1>
      </div>
      <div className='pull-right   mb-3 margin-inherit'>

       <AddCustomer/>
      <div>{successMessage && <div className='rowdelete mt-3'>{successMessage}</div>}</div>
      </div>
        <table className='table table-hover table-responsive'>
            <thead className='bg-black text-white'>
                <tr className='text-center'>
                    <td>#</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone Number</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
            {data.map((data) => (
            <tr  key={data.id}>
                <td>{data.index}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td className=" d-flex justify-content-around align-items-center text-center">
                {/* <button className='btn btn-edit' type="button">Edit</button> */}
                <EditCustomer1/>
                <button className='btn btn-delete' type='button' onClick={() => CustomerDelete(data.id)}>Delete</button>
              </td>
            </tr>
         
          ))}
            </tbody>
        </table>
        </div>
    </>
);
}
export default Customer;