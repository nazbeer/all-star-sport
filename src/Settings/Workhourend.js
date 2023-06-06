import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Workhourend = () => {
    const [data, setData] = useState([]);
    const [successMessage, setShowMessage] = useState('');
    // eslint-disable-next-line
    useEffect(() => {
        getWorkhourend();
     
    }, []);
   
    const getWorkhourend = async () => {
     
      try {
            const response = await axios.get('https://allstarstports.arenacapital.org/api/v1/settings/get')
            .then((res)=>{
            //    console.log('res')
                console.log(res?.data.data?.work_hour_end)
            if (Array.isArray(res?.data?.data?.work_hour_end)) {
                // console.log(res?.data?.data);
                setData(res?.data?.data?.work_hour_end);
            } else if (typeof res?.data?.data?.work_hour_end === 'object') {
                if (Array.isArray(res?.data?.data?.work_hour_end)) {
                setData(res?.data?.data?.work_hour_end);
                } 
            } 
            // setData(res?.data?.data);
            //console.log(res?.data?.data?.time_interval);
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
                       <h4>Work hour end Settings</h4>
                    </div>
                    <div className='card-body fixed-height'>
                   
                    {data.map((data) => (
                        <div className='d-flex justify-content-between align-items-center gap-5'>
                        <p key={data.index} className='w-100 font-weight-600'>{data.name}</p>
                        {/* <select className='form-control'><option></option></select> */}
                        <input className='form-control' type='datetime' placeholder={data.value}></input>
                       
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
export default Workhourend;