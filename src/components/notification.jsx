import React from "react";

const Notification = ({ label }) => {
  return (
    <React.Fragment>
      <div className="row  d-flex justify-content-center mb-auto">
        <div className="alert alert-success" role="alert">
          {label}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Notification;
