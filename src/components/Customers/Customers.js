import './Customers.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Customers = () => {
    const [data, setData] = useState([]);
    // eslint-disable-next-line
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
            const response = await axios.get('https://allstarstports.arenacapital.org/api/v1/customers/get')
            // const response = await axios.get('https://allstarstports.arenacapital.org/api/v1/fields/get')
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
    return(
    <>
        <table className='table table-hover table-responsive'>
            <thead className='bg-black text-white'>
                <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone Number</td>
                </tr>
            </thead>
            <tbody>
            {data.map((data) => (
            <tr  key={data.id}>
                <td>{data.index}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
            </tr>
         
          ))}
            </tbody>
        </table>
    </>
);
}
export default Customers;