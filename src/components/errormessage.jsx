import React from "react";
import "./input.css";
const Emsg = ({ error }) => {
  return (
    <div className="row ">
      <span className="col-4"></span>
      {error && (
        <div className=" col-4 form-group d-flex justify-content-center alert alert-danger">
          {error}
        </div>
      )}
    </div>
  );
};
export default Emsg;
