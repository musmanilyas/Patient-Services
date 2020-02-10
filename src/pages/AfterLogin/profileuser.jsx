import React, { Component } from "react";
import form from "../../classes/form";
import auth from "../../services/auth";
import UserProfilePicture from '../../components/userProfilePicture';
import Input1 from "../../components/inputnew";
import Joi from "joi-browser";
import Loader from "../Animation/loader";
import { toast } from "react-toastify";

class ProfileUser extends form {
  state = {
    data: {
      firstname: "",
      lastname: "",
      email: "",
      currentpassword: "",
      newpassword: "",
      confirmpassword: ""
    },
    isLoading: false,
    error: {}
  };
  //   handleChange = ({ currentTarget: input }) => {
  //     const data = { ...this.state.data };
  //     data[input.name] = input.value;

  //     this.setState({ data });
  //     console.log(data);
  //   };
  schema = {
    firstname: Joi.string()
      .required()
      .regex(/^[a-zA-Z]/)
      .label("Firstname")
      .min(3)
      .trim()
      .max(20),
    lastname: Joi.string()
      .required()
      .regex(/^[a-zA-Z\s]*$/)
      .min(3)
      .trim()
      .max(20)

      .label("Name"),
    currentpassword: Joi.string()

      .required()
      .alphanum()
      .label("CurrentPassword"),

    newpassword: Joi.string()

      .required()
      .alphanum()
      .label("Password"),
    confirmpassword: Joi.string()

      .required()
      .alphanum()
      .label("ConfirmPassword")
  };

  checkPasswords = () => {
    if (
      this.state.data.newpassword != this.state.data.confirmpassword &&
      this.state.data.confirmpassword != ""
    ) {
      const error = { ...this.state.error };

      return true;
    } else return false;
  };

  doSubmit = async e => {
    e.preventDefault();
    try {
      const token = auth.getCurrentUser();
      this.setState({ isLoading: true });
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 3000);

      const sendData = { ...this.state.data };
      let _id = token._id;
      const send = { ...sendData, _id };
      //this.updateData(sendData);
      delete send["confirmpassword"];
      delete send["post"];
      console.log("send", send);
      const res = await auth.custByIdUpdate(send);
      if (res.status == 200) {
        toast("Profile Updated");

        send.currentpassword = "";
        send.confirmpassword = "";
        send.newpassword = "";
        this.setState({ data: send });
        return console.log("success");
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const error = { ...this.state.error };
        error.currentpassword = ex.response.data;
        this.setState({ error });
        this.setState({ isLoading: false });
      }

      // const code = this.saveCode(res);
    }
  };

  async componentDidMount() {
    let state = auth.getCurrentUser();
    const data = { ...this.state.data };
    const res = await auth.custById(state);
    console.log(res.data);
    data.firstname = res.data.firstname;
    data.lastname = res.data.lastname;

    this.setState({ data });
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.doSubmit} style={{backgroundColor:'white'}}>

          <div ClassName="form-check d-flex container-fluid align-content-center "  >
          
          
          <UserProfilePicture/>

        
            {this.renderInput1(
              "firstname",
              "Username",
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
            )}{" "}
            {this.renderError("lastname")}
            {this.renderInput1(
              "currentpassword",
              "Current Password",
              "password",
              "Current password",
              "fa fa-key"
            )}{" "}
            {this.renderError("currentpassword")}
            {this.renderInput1(
              "newpassword",
              "New Password",
              "password",
              "Select a password",
              "fa fa-key"
            )}
            {this.renderInput1(
              "confirmpassword",
              "Confirm Password",
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
            <button
              className="btn-lg btn-success mb-3"
              disabled={this.checkPasswords()}
            >
              Save
            </button>
            {this.state.isLoading === true && (
              <Loader className="col-12" label="Just a moment...."></Loader>
            )}
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default ProfileUser;
