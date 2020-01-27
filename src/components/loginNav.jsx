import React from "react";
//import "./navBar.css";
import { NavLink } from "react-router-dom";
import logo1 from "./images/logo1.jpg";
import "./nav2.css";
//import logo1 from "../images/logo1.jpg";
const LoginNav = () => {
    return (
        <React.Fragment>
            <div>
                <nav className=" container-fluid navbar navbar-expand-lg navbar-light back">
                    <NavLink className="nav-link" to="/home" style={{ color: "black" }}>
                        <img
                            src={logo1}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt=""
                        ></img>
                        <h4>PatientServices</h4>
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        {/* <span className="navbar-toggler-icon" /> */}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <NavLink className="nav-link na" to="/home">
                                    Home
                </NavLink>
                            </li>
                            <li className="nav-item ">
                                <NavLink className="nav-link na" to="/services">
                                    Services
                </NavLink>
                            </li>



                            <li className="nav-item">
                                <NavLink className="nav-link na" to="/aboutus">
                                    About us
                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link na" to="/contacts">
                                    Contact
                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link na" to="/contacts">
                                    Logout
                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <form className="form-inline">
                        <input
                            className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"

                        />
                        <button
                            className="btn btn-outline-success my-2 my-sm-0"
                            type="submit"
                        >
                            Search
            </button>

                    </form>
                </nav>
            </div>
        </React.Fragment>
    );
};

export default LoginNav;
