
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './EditCustomer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const EditCustomer = (data) => {
    const [showModal, setShowModal] = useState(false);

    const editCustomerModal = () => {
        setShowModal(!showModal);
    };
    
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);

  const saveCustomer = async (id) => {
   

    try {
      // await axios.put(`https://allstarstports.arenacapital.org/api/v1/customers/update?id=76309ec5-7499-4d23-861f-ecb79fbf4f54&name=${name}&phone=${phone}&email=${email}`).then(response => {
        await axios.put(`https://allstarstports.arenacapital.org/api/v1/customers/update?id=76309ec5-7499-4d23-861f-ecb79fbf4f54&name=nasbeer@nazbeer.com&phone=524762486&email=nazbeer.ahammed@gmail.com`).then(response => {
        console.log(response);
       // setShowModal(false);
      })
      .catch(error => {
        console.error(error);
      });;
  
    //window.location.reload();
      // Close the modal or provide appropriate feedback to the user
    } catch (error) {

      console.error('Error submitting form:', error);
    }
};
    return(
    <>



   <button className="btn btn-edit" onClick={editCustomerModal}>Edit</button>
   {showModal && (
        <div className="modal " tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
                <form onSubmit={saveCustomer}>
              <div className="modal-header">
                <h5 className="modal-title">Edit Customer</h5>
                <button type="button" className="close" onClick={editCustomerModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body gap-3">
                <p className='text-muted mb-2 fs-18'>Enter the details of the customer</p>
                <input className='form-control mb-2' type="text" id="name" placeholder='Update Name' onChange={(e) => setName(e.target.value)} required></input>
                <input className='form-control mb-2' type="email" id="email" placeholder='Update Email' onChange={(e) => setEmail(e.target.value)} required></input>
                <input className='form-control mb-2'  type="text" id="phone" placeholder='Update Phone' onChange={(e) => setPhone(e.target.value)} required></input>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={editCustomerModal}>
                  Close
                </button>
                <button type="button" className="btn btn-success"onClick={saveCustomer}>
                 Save
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      )}
  
  
  
    </>
);
}
export default EditCustomer;