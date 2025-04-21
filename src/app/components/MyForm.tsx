import React, { useState } from 'react';

const MyForm = () => {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(enteredEmail);
    setValidEmail(emailRegex.test(enteredEmail));
  };

  return (
    <div>
      <input type="text" value={email} onChange={handleEmailChange} />
      {validEmail ? null : <span>Please enter a valid email address</span>}
    </div>
  );
};

export default MyForm;