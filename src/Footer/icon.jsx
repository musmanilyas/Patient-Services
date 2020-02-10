import React from "react";

import { Link } from "react-router-dom";
const Icons = ({user,provider}) => {
  return (
    <React.Fragment>
      {(user==null && provider==null) && (<div
        className="page-footer font-small unique-color-dark pt-4 mb-0"
        style={{ backgroundColor: "black", height: "200px" }}
      >
        <div className="container">
          <ul className="list-unstyled list-inline text-center py-2">
            <li className="list-inline-item ml-20 ">
              <h5 className="mb-1 h5 ml-5 text-center mt-auto ">
                Register for free
                <Link to="/register" className=" btn-lg btn-success col-4 ">
                  Sign up!
                </Link>
                <br />
              </h5>
            </li>
            <li className="list-inline-item"></li>
          </ul>
        </div>
      
    </div>
    )}
      <footer
        className="page-footer font-small cyan darken-3"
        style={{ backgroundColor: '#D4EDDA' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5">
              <div className="mb-5 flex-center">
                <a className="fb-ic">
                  <i className="fa fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                </a>

                <a className="tw-ic">
                  <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>

                <a className="gplus-ic">
                  <i className="fa fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x" />
                </a>

                <a className="li-ic">
                  <i className="fa fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>

                <a className="ins-ic">
                  <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>

                <a className="pin-ic">
                  <i className="fa fa-pinterest fa-lg white-text fa-2x"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2018 Copyright: PatientServices.com
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Icons;
