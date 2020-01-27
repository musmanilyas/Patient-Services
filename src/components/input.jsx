import React from "react";
import "./input.css";
const Input = ({ placeholder, name, value, label, error, onChange, type }) => {
  return (
    <div className="input-group mb-3">
      <label className="label1 col-sm-3 " htmlFor={name} aria-describedby="basic-addon1">

        {label}
      </label>
      <input
        name={name}
        value={value}
        id={name}
        type={type}
        className="form-control  input1"
        onChange={onChange}
        placeholder={placeholder}
        aria-describedby="basic-addon1"
      />
    </div>
  );
};






export default Input;
