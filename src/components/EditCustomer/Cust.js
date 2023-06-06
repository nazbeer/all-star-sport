import React, { useState } from 'react';
import axios from 'axios';

const EditCustomerModal = ({ customer, onClose }) => {
  const [name, setName] = useState(customer.name);
  const [phone, setPhone] = useState(customer.phone);
  const [email, setEmail] = useState(customer.email);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUpdate = () => {
    const updatedCustomer = {
      id: customer.id,
      name: name,
      phone: phone,
      email: email,
    };

    axios.put(`https://allstarstports.arenacapital.org/api/v1/customers/update?id=${customer.id}&name=${name}&email=${email}&phone=${phone}`)
      .then(response => {
        setSuccessMessage('Customer details updated successfully.');
      })
      .catch(error => {
        setErrorMessage('Error updating customer details. Please try again.');
        console.log(error);
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit Customer</h3>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <button onClick={handleUpdate}>Update</button>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const CustomerList = () => {
  const customers = [
    {
      id: '123c3d04-1dff-4258-9f8f-d43bf95b3bb6',
      name: 'Gene',
      phone: '(504) 542-33912',
      email: 'aryanna86@bailey.org',
    },
    // Add more customers as needed
  ];

  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleEdit = customer => {
    setSelectedCustomer(customer);
  };

  const handleCloseModal = () => {
    setSelectedCustomer(null);
  };

  return (
    <div>
      <h1>Customer List</h1>
      {customers.map(customer => (
        <div key={customer.id}>
          <p>Name: {customer.name}</p>
          <p>Phone: {customer.phone}</p>
          <p>Email: {customer.email}</p>
          <button onClick={() => handleEdit(customer)}>Edit</button>
        </div>
      ))}
      {selectedCustomer && (
        <EditCustomerModal customer={selectedCustomer} onClose={handleCloseModal} />
      )}
    </div>
  );
};

const Cust = () => {
  return (
    <div>
      <h1>My App</h1>
      <CustomerList />
    </div>
  );
};

export default Cust;
