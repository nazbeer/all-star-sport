
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './AddService.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const AddService = () => {
    const [showModal, setShowModal] = useState(false);

    const addServiceModal = () => {
        setShowModal(!showModal);
    };
    
  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [duration, setDuration] = useState('');
  const [rate, setRate] = useState('');
  const [color, setColor] = useState('');


  const saveService = async (e) => {
    e.preventDefault();

    const data = {
      name,
     details,
     duration,
     rate, color
    };

    try {
      await axios.post(`https://allstarstports.arenacapital.org/api/v1/Services/create?name=${name}&details=${details}&duration=${duration}&rate=${rate}&color=${color}`);

    window.location.reload();
    } catch (error) {

      console.error('Error submitting form:', error);
    }
};
    return(
    <>

  <div className='row mt-3 mb-3  d-flex justify-content-center align-items-center '>
   <div className='col-md-12'>
   <button className="btn btn-success" onClick={addServiceModal}>Add Service</button>
   {showModal && (
        <div className="modal " tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
                <form onSubmit={saveService}>
              <div className="modal-header">
                <h5 className="modal-title">Add New Service</h5>
                <button type="button" className="close" onClick={addServiceModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body gap-3">
                <p className='text-muted mb-2 fs-18'>Enter the details of the Service</p>
                <input className='form-control mb-2' placeholder='Enter Service Name' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required></input>
                <input className='form-control mb-2' placeholder='Enter details' type="text" id="details" value={details} onChange={(e) => setDetails(e.target.value)} required></input>
                <input className='form-control mb-2' placeholder='Enter Duration' type="text" id="duration" value={duration} onChange={(e) => setDuration(e.target.value)} required></input>
                <input className='form-control mb-2' placeholder='Enter Rate' type="text" id="rate" value={rate} onChange={(e) => setRate(e.target.value)} required></input>
                <input className='form-control mb-2' placeholder='Enter Color Code' type="text" id="color" value={color} onChange={(e) => setColor(e.target.value)} required></input>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={addServiceModal}>
                  Close
                </button>
                <button type="submit" className="btn btn-success" onClick={saveService}>
                 Save
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
  
    </>
);
}
export default AddService;