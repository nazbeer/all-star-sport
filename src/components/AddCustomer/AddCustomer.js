
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './AddCustomer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const AddCustomer = () => {
    const [showModal, setShowModal] = useState(false);

    const addCustomerModal = () => {
        setShowModal(!showModal);
    };
    
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const saveCustomer = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
    };

    try {
      await axios.post(`https://allstarstports.arenacapital.org/api/v1/customers/create?name=${name}&phone=${phone}&email=${email}`);
      // Reset the form fields after successful submission
    //   setName('');
    //   setEmail('');
    //   setPhone('');
    window.location.reload();
      // Close the modal or provide appropriate feedback to the user
    } catch (error) {

      console.error('Error submitting form:', error);
    }
};
    return(
    <>

  <div className='row mt-3 mb-3  d-flex justify-content-center align-items-center '>
   <div className='col-md-12'>
   <button className="btn btn-success" onClick={addCustomerModal}>Add Customer</button>
   {showModal && (
        <div className="modal " tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
                <form onSubmit={saveCustomer}>
              <div className="modal-header">
                <h5 className="modal-title">Add New Customer</h5>
                <button type="button" className="close" onClick={addCustomerModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body gap-3">
                <p className='text-muted mb-2 fs-18'>Enter the details of the customer</p>
                <input className='form-control mb-2' placeholder='Enter Full Name' type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required></input>
                <input className='form-control mb-2' placeholder='Enter Email ID' type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                <input className='form-control mb-2' placeholder='Enter Phone Number' type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required></input>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={addCustomerModal}>
                  Close
                </button>
                <button type="submit" className="btn btn-success">
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
export default AddCustomer;