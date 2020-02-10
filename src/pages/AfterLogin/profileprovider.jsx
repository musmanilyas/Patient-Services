import React, { Component } from "react";
import form from "../../classes/form";
import auth from "../../services/auth";
import UserProfilePicture from '../../components/userProfilePicture';
import Input1 from "../../components/inputnew";
import Joi from "joi-browser";
import Loader from "../Animation/loader";
import { toast } from "react-toastify";
import Select from "./../../components/selectOption";
import ProviderAddional from "./providerAdditonalinfo";
class ProfileProv extends form {
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
    isClicked: false,
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
      .label("Username")
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
      const send = { ...sendData,_id };
      //this.updateData(sendData);
      delete send["confirmpassword"];
      delete send["post"];
      console.log("send", send);
      const res = await auth.provByIdUpdatePut(send);
      if (res.status === 200) {
        toast.success("Profile Updated");

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
    {/*} const redirect = this.props.location.state;
    if (redirect) {
      
      return this.setState({ isClicked: true });
    }*/}
    let state = auth.getCurrentUser();
    const data = { ...this.state.data };
    const res = await auth.getProvById(state);
    console.log(res.data);
    data.firstname = res.data.firstname;
    data.lastname = res.data.lastname;

    this.setState({ data });
  }

  clicked = e => {
    e.preventDefault();
    this.setState({ isClicked: true });
  };
  render() {
    return (
      <React.Fragment>
        {!this.state.isClicked && (<div><div class="alert alert-primary" role="alert">
          ---Filling out Additional info is neccessary to register as
           caregiver---
            </div>
          <button
            className="btn btn-group-lg btn-primary mt-3 bg-primary"
            onClick={this.clicked}
          >
            Edit Additinal info
          </button> </div>
        )}


        {!this.state.isClicked && (
          <form onSubmit={this.doSubmit}>
            <h3 className="mt-2">Edit General Info</h3>
            <div ClassName="form-check d-flex container-fluid align-content-center " style={{backgroundColor:'white'}}>

              <UserProfilePicture></UserProfilePicture>
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
                className="btn-lg btn-success mb-auto "
                disabled={this.checkPasswords()}
              >
                Save
              </button>
              {this.state.isLoading === true && (
                <Loader className="col-12" label="Just a moment...."></Loader>
              )}
            </div>
          </form>
        )}

        {this.state.isClicked && <ProviderAddional />}
      </React.Fragment>
    );
  }
}

export default ProfileProv;
