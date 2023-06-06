import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditCustomer = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('https://allstarstports.arenacapital.org/api/v1/customers/' + id)
      .then(res => {
        console.log('res');
        console.log(res);
        if (Array.isArray(res?.data?.data)) {
            setData(res?.data?.data);
            
        } else if (typeof res?.data?.data === 'object') {
            if (Array.isArray(res?.data?.data)) {
            setData(res?.data?.data);
            } 
        } 
        setData(res?.data?.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'id':
        setId(event.target.value);
        break;
      case 'name':
        setName(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'phone':
        setPhone(event.target.value);
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      id,
      name,
      email,
      phone,
    };

    axios.put('https://allstarstports.arenacapital.org/api/v1/customers/update', data)
      .then(response => {
        console.log(response);
        setShowModal(false);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleEdit = () => {
    setShowModal(true);
  };

  return (
    <div>
      
      <ul>
        {data.map((data, index) => (
          <li key={index}>
           
            <button onClick={() => handleEdit(data.id)}>Edit</button>
          </li>
        ))}
      </ul>
      {showModal && (
        <div>
          <h2>Edit Customer</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="id"
              placeholder="ID"
              value={id}
              readOnly
            />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={phone}
              onChange={handleChange}
            />
            <button type="submit">Update</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditCustomer;