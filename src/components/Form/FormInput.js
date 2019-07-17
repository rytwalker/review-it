import React from 'react';

const FormInput = ({ handleChange, name, placeholder, value }) => {
  return (
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default FormInput;
