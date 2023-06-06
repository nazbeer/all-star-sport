import React, { useEffect, useState } from 'react';
import axios from 'axios';
const TimeslotAPI = () => {
const [data, setData] = useState([]);
// eslint-disable-next-line
useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  try {
        const response = await axios.post('https://allstarstports.arenacapital.org/api/v1/timeslots/get-by-service?service_id=31b26a51-7505-4f8e-8ce6-ab7902a1fb93',{
          params: {
            _limit: 5
           }
        })
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
}
export default TimeslotAPI;