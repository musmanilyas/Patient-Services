

  /*

import React, { Component } from "react";
import disabled from "./images/disabled-care.jpg";
import physio from "./images/physio.jpg";
import oldcare from "./images/oldcare.jpg";
import { NavLink } from "react-router-dom";
import "./belowslider.css";

class  extends Component {
  state = {
    service: {
      1: "OldCare",
      2: "StrokePatient",
      3: "Physiotherapy",
      4: "Other"
    }
  };

  render() {
    return (
      <React.Fragment>
        <div class="row">
          <div
            class="col-sm-12 "
            style={{
              height: "100px",
              backgroundColor: "#e1d5ec",
              marginTop: "2rem"
            }}
          >
            <h3
              style={{
                fontSize: "2rem",
                marginTop: "2rem",
                fontFamily: " Arial Black, Gadget, sans-serif"
              }}
            >
              WHAT KIND OF SERVICE YOU WANT{" "}
            </h3>
          </div>{" "}
        </div>
        <div style={{ marginTop: "5px" }}></div>

        <div className="container-fluid jumbotron">
          <div className="row" style={{ backgroundColor: "#e1d5ec" }}>
            <div className="col-sm">
              <img src={oldcare} width="350" height="300" alt="oldcare"></img>

              <hr className="my-4" />
              <p>
                Our qualified staff will provide caregiving that can be
                challenging when it comes to psychological and physical
                well-being of our elders.
              </p>
              <NavLink
                className="hov"
                to={`/services/${this.state.service[1]}`}
              >
                <h3>OldCare</h3>
              </NavLink>
            </div>
            <div className="col-sm">
              <img
                src={physio}
                alt="Physiotherapy"
                width="390"
                height="300"
              ></img>
              <hr className="my-4" />
              <p>
                Physiotherapy is an important part of treatment.Our healthcare
                providers who help you to resume an active and independent life
                both at home and work.
              </p>
              <NavLink
                className="hov"
                to={`/services/${this.state.service[3]}`}
              >
                <h3>Physiotherapy</h3>
              </NavLink>
            </div>
            <div className="col-sm">
              <img src={disabled} width="350" height="300" alt="Disabled"></img>
              <hr className="my-4" />
              <p>
                Medical caregivers provide best care whether it is an acquired
                condition after stroke, for example, a spinal cord or brain
                injury, a serious physical injury.
              </p>
              <NavLink
                className="hov"
                to={`/services/${this.state.service[2]}`}
              >
                <h3>Stroke Patient</h3>
              </NavLink>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BelowSLider;
*/