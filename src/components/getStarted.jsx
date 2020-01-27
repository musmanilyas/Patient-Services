import React from "react";
import "./getStarted.css";
import { Link, NavLink } from "react-router-dom";

import img2 from "./images/Me.png";

import "./postAddBtn.css";

const Started = () => {
  return (
    <div className=" container-fluid form-group fontype">
      <h4 className=" d-flex justify-content-center marg ">
        Better Care for living Legends
      </h4>

      <h5 className="justify-content-center ">We are always close.....</h5>
      <div className="">
        <NavLink
          className="nav-link btn justify-content-center m-auto btn-white btn-animate "
          to="/register"
          style={{
            marginLeft: "12rem",
            marginTop: "2.5rem",
            backgroundColor: "#e1d5ec",
            width: "350px",
            height: "75px",
            textAlign: "center",
            fontSize: "30px"
          }}
        >
          Get Started
        </NavLink>
      </div>
    </div>
  );
};

export default Started;
