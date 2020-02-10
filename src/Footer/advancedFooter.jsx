import React from "react";
import logo1 from "../components/images/WebLogochng.png";

import { Link } from "react-router-dom";
const AdvancedFooter = () => {
  return (
    <React.Fragment>
      <footer className="page-footer font-small  col-12">
       <div
          className="page-footer font-small unique-color pt-4 mb-0"
          style={{ backgroundColor: "#21d192" }}
        >
          <div className="container">
            <div className="row py-4 d-flex align-items-center">
              <div className="col-md-6  text-center text-md-left ">
                <h6 className="mb-0">
                  Connecting proffessional caregivers to people who need
                  intensive care!!
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-center text-md-left mt-5">
          <div className="row mt-3 ">
            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
              <h6 className="text-uppercase font-weight-bold ml-auto">
                A Name of Trust
              </h6>
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <img
                src={logo1}
                width="150"
                height="200"
                className=""
                alt="logo"
              ></img>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase font-weight-bold">
                Service Provider
              </h6>
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <Link className="dark-grey-text" to="/register">
                  Become a Service Provider if you have a medical certificate
                  from certified institute.Get started now by just signing up.
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2  mb-4">
              <h6 className="text-uppercase font-weight-bold">Hire Services</h6>
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <Link className="dark-grey-text" to="/register">
                  Hire services of certified medical staff.Provide your loved
                  ones with the best care they deserve.sign up now.
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr
                className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "60px" }}
              />
              <p>
                <i className="fas fa-home mr-3"></i>Comsats University Islamabad
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i> info@example.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> +92-323-7044919
              </p>
              <p>
                <i className="fas fa-print mr-3"></i> +92-324-4723191{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default AdvancedFooter;
