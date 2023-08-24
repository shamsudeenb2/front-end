"use client";
import React, { useState } from "react";

const InputField = ({
  value,
  label,
  placeholder,
  name,
  type,
  onChange,
  required,
  className,
}) => {
  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   onChange(value);
  // };

  return (
    <div>
      {label && <label htmlFor="input-field">{label}</label>}
      <input
        type={type}
        value={value}
        name={name}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default InputField;
