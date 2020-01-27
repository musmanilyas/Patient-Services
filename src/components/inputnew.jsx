import React from "react";

const Input1 = ({
  placeholder,
  name,
  value,
  label,
  rows,
  error,
  onChange,
  type,
  glyphtyp,
  max,
  min
}) => {
  return (
    <div className="row">
      <label
        className="col-sm-3 mt-4"
        htmlFor={name}
        style={{
          fontFamily: "Times New Roman",
          fontStyle: "italic",

          color: "black"
        }}
      >
        {label}
      </label>

      <div className="input-group mb-3 col-sm-6 mt-4">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon3">
            <i className={glyphtyp}></i>
          </span>
        </div>
        {!rows && (
          <input
            name={name}
            value={value}
            id={name}
            type={type}
            className="form-control"
            onChange={onChange}
            placeholder={placeholder}
            aria-describedby="basic-addon3"
            max={max}
            min={min}
          />
        )}

        {rows && (
          <textarea
            className="form-control"
            name={name}
            value={value}
            id={name}
            className="form-control"
            onChange={onChange}
            placeholder={placeholder}
            rows={rows}
            aria-describedby="basic-addon3"
          />
        )}
      </div>
    </div>
  );
};

export default Input1;
