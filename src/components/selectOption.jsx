import React from "react";

const Select = ({
  name,
  label,
  options,
  error,

  ...rest
}) => {
  return (
    <div className="row">
      <label
        className="col-sm-3 mt-3 "
        htmlFor={name}
        style={{
          fontFamily: "Times New Roman",
          fontStyle: "italic",

          color: "black"
        }}
      >
        {label}
      </label>

      <select
        name={name}
        id={name}
        {...rest}
        className="form-control col-md-6 mt-2"
      >
        <option value="" />
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
