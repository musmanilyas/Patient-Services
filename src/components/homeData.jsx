import React, { Component } from "react";

import postAdd from "./images/postAdd.jpg";

import { NavLink } from "react-router-dom";

const HomeData = () => {
  return (
    <React.Fragment>
      <div className="container-fluid" style={{backgroundColor:'white'}}>
        <div className="row">
          <div className="col-sm-6">
            <p
              style={{
                marginTop: "5rem",
                backgroundColor: "#D4EDDA",
                textAlign: "center",
                fontSize: "25px",
              
                fontStyle: "italic"
              }}
            >
              We offer Home Healthcare Services, Nursing Services, Patient
              Attendant Services, Physiotherapy Services, Speech Therapy and
              Caregiver services for children and old people at homes all around
              Pakistan. We are fully capable of providing home health care
              services to elder and sick patients gracefully in the comfort of
              their homes. We ensure their good health, comfort, and peace of
              mind through our own paramedical staff and supervise them by a
              team of experts and professional managerial staff so that patients
              & elders at homes can enjoy their social and family life
              meaningfully. We have male and female staff, nurses, and
              therapists to serve you
            </p>
          </div>
          <div className="col-sm-6">
            <img
              src={postAdd}
              width="900"
              height="400"
              className="d-inline-block align-top"
              alt="Patients"
              style={{ marginTop: "5rem" }}
            ></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeData;
