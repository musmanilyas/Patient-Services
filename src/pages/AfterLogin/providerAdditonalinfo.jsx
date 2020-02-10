import React, { Component } from "react";
import form from "../../classes/form";
import auth from "../../services/auth";

import Input1 from "../../components/inputnew";
import Joi from "joi-browser";
import Loader from "../Animation/loader";
import { toast } from "react-toastify";
import Select from "./../../components/selectOption";
import Modal from "./../../components/modalBoot";

class ProviderAddional extends form {
  state = {
    data: {
      cities: "",
      service: "",
      gender: "",
      description: "",
      experience: "",
      contact: "",
      address: "",
      zipcode: "",
      ratesperhour: "",

      institutename: ""
    },

    city_options: ["Lahore", "Faisalabad", "Karachi", "Multan"],
    service_options: ["OldCare", "StrokePatient", "Physiotherapy", "Other"],
    Gender: ["Male", "Female"],
    experience: ["Expert", "Fresh", "intermediate"],
    error: {},
    modal: false,
    isLoading: false
  };
  handleChangeSelect = ({ currentTarget: input }) => {
    const select = { ...this.state.select };
    select[input.name] = input.value;

    this.setState({ select });
    console.log(select);
  };

  async componentDidMount() {
    const token = auth.getCurrentUser();

    try {
      const req = await auth.getProvById(token);
      const data = { ...this.state.data };
      //   delete req.data[
      //     ("customer",
      //     "email",
      //     "firstname",
      //     "lastname",
      //     "password",
      //     "provider",
      //     "yearsofexperience",
      //     "__v",
      //     "_id")
      //   ];
      //   console.log(this.state.data);

      data.contact = req.data.contact;
      data.address = req.data.address;
      data.gender = req.data.gender;
      data.cities = req.data.cities;
      data.service = req.data.service;

      data.zipcode = req.data.zipcode;
      data.ratesperhour = req.data.ratesperhour;
      data.experience = req.data.experience;

      data.description = req.data.description;

      data.institutename = req.data.institutename;
      if (data.description == "") {
        this.setState({ modal: true });
      }
      this.setState({ data });
      console.log(this.state.data);
    } catch (error) { }
  }

  schema = {
    contact: Joi.string()

      .regex(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/)
      .required()
      .min(11)
      .max(11),
    gender: Joi.string(),
    experience: Joi.string(),
    cities: Joi.string(),
    service: Joi.string(),

    description: Joi.string(),

    address: Joi.string()
      .min(1)
      .max(50)
      .required(),

    zipcode: Joi.string()

      .regex(/^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/)
      .required()
      .max(5),
    ratesperhour: Joi.number()
      .positive().max(10000)
      .allow(0),
      

    institutename: Joi.string()
      .min(1)
      .max(50)
      .required()
  };
  doSubmit = async e => {
    try {
      const token = auth.getCurrentUser();
      this.setState({ isLoading: true });
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 3000);

      const sendData = { ...this.state.data };
      console.log(sendData);
      if (
        !sendData.cities ||
        !sendData.gender ||
        !sendData.experience ||
        !sendData.service
      ) {
        return toast.error("Fields are not allowed to be empty");
      }

      let _id = token._id;
      const send = { ...sendData, _id };
      //this.updateData(sendData);

      console.log("send", send);
      const res = await auth.postProvById(send);
      if (res.status === 200) {
        toast("Profile Updated");

        this.setState({ data: send });
        return (window.location = "/profileprov");
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
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{backgroundColor:'white'}}>
        {this.state.modal && (
          <div class="alert alert-primary" role="alert">
            ---Filling out all the info is neccessary to register as
            caregiver---
          </div>
        )}
        <h3 className="mt-2">Edit Advanced Info</h3>
        <div ClassName="form-check d-flex container-fluid align-content-center ">

          {this.renderSelect("cities", "City", this.state.city_options)}
          {this.renderSelect(
            "service",
            "Type of Service",
            this.state.service_options
          )}
          {this.renderSelect("experience", "Experience", this.state.experience)}
          {this.renderSelect("gender", "Gender", this.state.Gender)}
          {/* {this.state.data.experienceYear_Month == "No Experience" &&
            this.renderInput1(
              "experienceinnumber",
              "Number Of Experience",
              "",
              " (e.g 2.5)  (months/years) ",
              "fa fa-user"
            )}
          {this.state.data.experienceYear_Month == "No Experience" &&
            this.renderError("experienceinnumber")} */}
          {/*
          <Select
            name="cities"
            value={this.state.select.city}
            label="Select City"
            options={this.state.city_options}
            onChange={this.handleChangeSelect.bind(this)}
          />{" "}
          <Select
            name="service"
            value={this.state.select.service}
            label="Type of Service"
            options={this.state.service_options}
            onChange={this.handleChangeSelect.bind(this)}
          />
          <Select
            name="experienceYear_Month"
            label="Experience (Month/Year)"
            value={this.state.select.experienceYear_Month}
            options={this.state.experience}
            onChange={this.handleChangeSelect.bind(this)}
          /> */}
          {/* {this.state.data.experienceYear_Month != "No Experience"
             ? this.renderInput1(
                 "noofexperience",
                 "Number Of Experience",
                 "",
              " (e.g 2.5) No of (months/years) ",
             "fa fa-user"
           ) && this.renderError("noofexperience")
         : null}
         */}
          {this.renderInput1(
            "contact",
            "ContactNo",
            "Number",
            "e.g(03237022919)",
            "fa fa-phone"
          )}
          {this.renderError("contact")}
          {this.renderInput1(
            "address",
            "Address",
            "",
            "Complete Address.eg(6-km defence road comsats ,lahore)",
            "fa fa-address-card"
          )}
          {this.renderError("address")}
          {this.renderInput1(
            "zipcode",
            "Zip Code",
            "Number",
            "Zip Code",
            "fa fa-location-arrow"
          )}{" "}
          {this.renderError("zipcode")}
          {this.renderInput1(
            "ratesperhour",
            "Rates Per Hour",
            "Number",
            "Per Hour rate(Rs)",
            "fa fa-money"
          )}{" "}
          {this.renderError("ratesperhour")}
          {this.renderInput1(
            "institutename",
            "Institute Name",
            "",
            "Name of Institute you studied",
            "fa fa-university"
          )}
          {this.renderError("institutename")}
          {this.renderInput1(
            "description",
            "Description",
            "text",
            "Enter Details about yourself",
            "fa fa-pencil",
            3
          )}
          {this.renderError("description")}
          {this.renderButton("Submit")}
          {/* <button className="btn-lg btn-success mb-auto ">Save</button> */}
          {this.state.isLoading === true && (
            <Loader className="col-12" label="Just a moment...."></Loader>
          )}
        </div>
      </form>
    );
  }
}

export default ProviderAddional;
