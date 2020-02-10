import React, { Component } from "react";
import "./bgRegister.css";
import "./buttonCss.css";
import desktopImage from "../components/images/reg.jpg";
import mobileImage from "../components/images/reg.jpg";

import { toast } from "react-toastify";
import { Link, Redirect } from "react-router-dom";
import auth from "../services/auth";

class BgHire extends Component {
  state = {
    data: this.props.data,
    redirect: false
  };
  handlesubmitWork = async e => {
    e.preventDefault();
    console.log("props", this.props.data);
    console.log("state", this.state.data);
    const res = await auth.worker(this.state.data);
    if (res.status === 200) {
      toast("Registered Successfully!!");
      auth.loginwithJwtHeader(res.headers["x-auth-token"]);
      this.setState({ redirect: true });
    } else toast.error("Request not valid");
  };

  handlesubmitHire = async e => {
    e.preventDefault();
    console.log(this.state.data);
    const res = await auth.cust(this.state.data);
    if (res.status === 200) {
      toast("Registered Successfully!!");
      auth.loginwithJwtHeader(res.headers["x-auth-token"]);
      window.location = "/login-firstTime";
    } else toast.error("Request not valid");
  };
  render() {
    if (this.state.redirect) {
      { window.location = `/profileprov` }
    }
    {
      const imageUrl = window.innerWidth >= 650 ? desktopImage : mobileImage;
      return (
        <div
          className="App row"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="col-6 align-center">
            <button
              className=" nav-link semi-transparent-button "
              onClick={this.handlesubmitHire}
              style={{ marginTop: "15rem" }}
            >
              <h4>WANT TO HIRE</h4>
            </button>
          </div>
          <div className="col-6">
            <button
              className="nav-link semi-transparent-button"
              onClick={this.handlesubmitWork}
              style={{ marginTop: "15rem" }}
            >
              <h4 className="align-middle">WANT TO WORK</h4>
            </button>
          </div>
        </div>
      );
    }
  }
}

export default BgHire;
