import React from "react";
import Joi from "joi-browser";
import Form from "../classes/form";
import BelowSLider from "./../components/belowSlider";

import { toast } from "react-toastify";

import back5 from "../components/images/backn.jpg";
import { confirmEmail } from "../services/auth";
import { Link, Redirect } from "react-router-dom";

import Loader from "./Animation/loader";
import "./foam.css";

class Register extends Form {
  state = {
    toSend: {},
    isLoading: false,
    data: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: ""
    },
    // code: "",
    redirect: false,
    error: {}
  };

  schema = {
    firstname: Joi.string()
      .required().alphanum()
      
      .label("Firstname")
      .min(3)
      
      .max(20),
    lastname: Joi.string()
      .required()
      .regex(/^[a-zA-Z\s]*$/)
      .min(3)
      .max(20)

      .label("Lastname"),
    email: Joi.string()
      .required()
      .email()
      .label("Email field"),
    password: Joi.string()

      .required()
      .alphanum()
      .min(3)
      .max(7)
      .label("Password"),
    confirmpassword: Joi.string()

      .required()
      .alphanum()
      .label("ConfirmPassword")
  };

  doSubmit = async () => {
    try {
      this.setState({ isLoading: true });
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 3000);

      const sendData = { ...this.state.data };


      delete sendData["confirmpassword"];

      const res = await confirmEmail(sendData);
      if (res.status === 200) {
        toast("Code Sent to your Email!!");
      }

      const codes = res.data;

      const toSend = { ...sendData, code: codes };


      this.setState({ toSend: toSend });

      console.log(codes);
      this.setState({ redirect: true });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const error = { ...this.state.error };
        if (ex.response.data === 'User already registered.') {

          error.email = ex.response.data;
        }
        else

          error.firstname = ex.response.data;
        this.setState({ error });
        this.setState({ isLoading: false });
      }
    }
  };
  checkPasswords = () => {
    if (
      this.state.data.password != this.state.data.confirmpassword &&
      this.state.data.confirmpassword != ""
    )
      return true;
    else return false;
  };

  render() {
    window.scrollTo(0, 0);
    if (this.state.redirect) {
      return (
        <Redirect
          to={{
            pathname: `/verify`,
            state: this.state.toSend
          }}
        />
      );
    }

    //const imageUrl = window.innerWidth >= 20 ? back1 : back2;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div
            className="row"
            style={{
              backgroundImage: `url(${back5})`,
              backgroundSize: "98%",
              backgroundSize: "cover",
              width: "100%",
              backgroundRepeat: "no-repeat"
            }}
          >
            <div className=" container-fluid col-6 form-group align-content-center mt-2 formall">
              {this.renderInput1(
                "firstname",
                "UserName",
                "",
                " Enter Alphabets only",
                "fa fa-user"
              )}
              {this.renderError("firstname")}
              {this.renderInput1(
                "lastname",
                "Name",
                "",
                "Enter Alphabets only",
                "fa fa-user"
              )}
              {this.renderError("lastname")}
              {this.renderInput1(
                "email",
                "Email",
                "email",
                "Enter a valid Email",
                "fa fa-envelope"
              )}
              {this.renderError("email")}
              {this.renderInput1(
                "password",
                "Password",
                "password",
                "Select a password",
                "fa fa-key"
              )}
              {this.renderError("password")}
              {this.renderInput1(
                "confirmpassword",
                "ConfirmPassword",
                "password",
                "Confirm password",
                "fa fa-key"
              )}
              {this.checkPasswords() && (
                <div className="row col ">
                  <span className="col-4"></span>
                  <div className=" col-4 form-group d-flex justify-content-center alert alert-danger">
                    Passwords doesn't match
                  </div>
                </div>
              )}
              {!this.checkPasswords() && this.renderButton("Register")}
              {this.state.isLoading === true && (
                <Loader className="col-12" label="Just a moment...."></Loader>

              )}
            </div>
          </div>
        </form>

        <BelowSLider></BelowSLider>
      </React.Fragment>
    );
  }
}

export default Register;
