import React from "react";
import "./loader.css";
const Loader = ({ label }) => {
  return (
    <React.Fragment>
      <div className="row  d-flex justify-content-center mb-auto">
        <div className="loader "></div>
        {label}
      </div>
    </React.Fragment>
  );
};
export default Loader;
