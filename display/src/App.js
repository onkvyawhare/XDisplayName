import React, { useState } from 'react';

const FullNameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName) {
      alert('Please fill out all fields.');
      return;
    }
    setFullName(`Full Name: ${firstName} ${lastName}!`);
  };

  return (
    <div>
    <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
        required
      />
      <br />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        required
      />
      <br />
      <button type="submit">Submit</button>
    </form>
    {fullName && (
      <div>{fullName}</div>
    )}
    </div>
  );
};

export default FullNameForm;