import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Weekends from './Weekends';
import Timeinterval from './Timeinterval';
import Workhourend from './Workhourend';
import Workhourstart from './Workhourstart';
import './Settings.css';
const Settings = () => {
    

return (
    <>
        <div className='row'>
            <div className='col-md-12 mt-3 mb-3'>
                <h1 className="text-center py-2 mb-3 font-weight-700">All <span className="calendar-text">Settings</span></h1>
            </div>
            {/* <div className='pull-right   mb-3 margin-inherit'>
                <div>{successMessage && <div className='rowdelete mt-3'>{successMessage}</div>}</div>
            </div> */}
            <Timeinterval/>
            <Weekends/>
            <div className='clearfix'></div>
            <Workhourstart/>
            <Workhourend/>
        </div>
      
    </>
)
};
export default Settings;