import React from "react";

import Joi from "joi-browser";
import Form from "../classes/form";
import BelowSLider from "../components/belowSlider";
import auth from "../services/auth";
import { toast } from "react-toastify";
import "./foam.css";
import back5 from "../components/images/backn.jpg";
import Loader from "./Animation/loader";
import { login } from "../services/auth";
import { Redirect } from "react-router-dom";
import ForgotPassword from '../pages/forgotPassword';
class Login extends Form {
  state = {
    data: {
      email: "",
      password: ""
    },
    isLoading: false,
    redirect: false,
    error: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),

    password: Joi.string()

      .required()
      .alphanum()
      .min(3)
      .max(7)
      .label("Password")
  };

  doSubmit = async () => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);

    try {
      await login(this.state.data);
      //      if (res === null) {
      //   toast.error("Error!! Login Failed");

      //   return;
      // } else toast("Logged In");
      //
      window.location = "/home";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error(`${ex.response.data}`);
        const data = { ...this.state.data };
        data.email = "";
        data.password = "";

        this.setState({ data });
      }
    }
  };
  render() {
    if (this.state.redirect)
      return (
        <Redirect
          to={{
            pathname: `/home`
          }}
        />
      );

    return (
      <React.Fragment>
        
        <form onSubmit={this.handleSubmit}>
          <div
            className="row col-12 change"
            style={{
              backgroundImage: `url(${back5})`,
              backgroundSize: "100%",
              backgroundSize: "cover",
              height: "600px",
              width: "100%",
              backgroundRepeat: "no-repeat"
            }}
          >
            
            <div className=" container col-6 form-group  m-auto formall ">
            
              {this.renderInput1(
                "email",
                "Email",
                "email",
                "Enter Email",
                "fa fa-envelope"
              )}
              {this.renderError("email")}
              {this.renderInput1(
                "password",
                "Password",
                "password",
                "Enter password",
                "fa fa-key"
              )}
              {this.renderError("password")}
              <ForgotPassword ></ForgotPassword>
              {this.renderButton("Login")}
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

export default Login;
