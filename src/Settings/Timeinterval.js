import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Timeinterval = () => {
    const [data, setData] = useState([]);
    const [successMessage, setShowMessage] = useState('');
    // eslint-disable-next-line
    useEffect(() => {
        getTimeIntervals();
    }, []);
   
    const getTimeIntervals = async () => {
      try {
            const response = await axios.get('https://allstarstports.arenacapital.org/api/v1/settings/get')
            .then((res)=>{
                console.log(res?.data?.data?.time)
            if (Array.isArray(res?.data?.data?.time)) {
                setData(res?.data?.data?.time);
            } else if (typeof res?.data?.data?.time === 'object') {
                if (Array.isArray(res?.data?.data?.time)) {
                setData(res?.data?.data?.time);
                } 
            }
            }
        );
      } catch (error) {
        console.error('Error fetching data:', error);
      }  
    };
return (
    <>
            <div className='col-md-6'>
                <div className='card'>
                    <div className='card-header'>
                       <h4>Time Interval Settings</h4>
                    </div>
                    <div className='card-body fixed-height'>
                   
                    {data.map((data) => (
                        <div className='d-flex justify-content-between align-items-center gap-5'>
                        <p key={data.index} className='w-100 font-weight-600'>Time Interval (mins)</p>
                        <input className='form-control' type='number' placeholder={data.value} min='30' step='30'></input>
                       
                        </div>
                        
                    ))}
                
                    </div>
                    <div className='card-footer gap-3 d-flex'>
                        <button className='btn btn-cancel btn-sm' type='reset'>Cancel</button>
                        <button className='btn btn-save btn-sm' type='submit'>Update</button>
                    </div>

                </div>
            </div>
          
      
    </>
)
};
export default Timeinterval;