import React from "react";

import { toast } from "react-toastify";
import Form from "./../../classes/form";
import auth from "./../../services/auth";
import Input1 from "../../components/inputnew";

import Select from "./../../components/selectOption";

class CreatePost extends Form {
  state = {
    data: {

      _id: "",
      postDesc: "",
      ratePerDay: "",
      hoursPerDay: "",
      gender: "",
      email: "",
      city: "",
      service: "",
      firstname:""
    },
    isEdit: false,
    city_options: ["Lahore", "Faisalabad", "Karachi", "Multan"],
    service_options: ["OldCare", "StrokePatient", "Physiotherapy", "Other"],
    checked: { Male: true, Female: false }
  };

  componentDidMount() {
    try {
      if (this.props.location.state) {
        const data = { ...this.state.data };
        const state = this.props.location.state;
        if (state) {
          this.setState({ isEdit: true });
          data.email = state.email;
          data.gender = state.gender;
          data.hoursPerDay = state.hoursPerDay;
          data.ratePerDay = state.ratePerDay;
          data.gender = state.gender;
          data.postDesc = state.postDesc;
          data.city = state.city;
          data.service = state.service;
          data._id = state._id;
          if (data.gender === "Male") {
            const checked = { ...this.state.checked };
            checked.Female = false;
            checked.Male = true;
            this.setState({ checked });
          } else {
            const checked = { ...this.state.checked };
            checked.Male = false;
            checked.Female = true;
            this.setState({ checked });
          }

          this.setState({ data });
        }
      }
    } catch (error) {}
  }

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data });
    console.log(data);
  };

  handleChangeradio = ({ target: input }) => {
    const checked = { ...this.state.checked };
    if (input.value === "Female") {
      checked.Male = false;
      checked.Female = true;
      // input.checked = "true";
      console.log(checked);
      return this.setState({ checked });
    }

    checked.Male = true;
    checked.Female = false;
    // input.checked = "true";
    console.log(checked);
    return this.setState({ checked });
  };
  stat = () => {
    return this.setState({ isOther: true });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const data = this.state.data;
    if (
      !data.hoursPerDay ||
      !data.postDesc ||
      !data.ratePerDay ||
      !data.city ||
      !data.service
    ) {
      return toast.error(
        "Fields cannot be empty.Fill Complete form then try again"
      );
    } else {
      const { email,firstname } = auth.getCurrentUser();

      if (this.state.checked.Female) {
        data.gender = "Female";
        data.email = email;
        data.firstname=firstname;
        this.setState({ data });

        try {
          if (!this.state.isEdit) {
            await auth.post(this.state.data);
            toast.success("Posted Successfully!");
            window.location = "/viewpost";
            return;
          } else {
            await auth.editpost(this.state.data); //Editing post
           // console.log("here");
            toast("Post Updated");
            window.location = "/viewpost";
            return;
          }
        } catch (error) {}
      } else {
        data.gender = "Male";
        data.email = email;
        data.firstname=firstname;
        this.setState({ data });

        try {
          if (!this.state.isEdit) {
            await auth.post(this.state.data);
            toast.success("Posted Successfully!");
            window.location = "/viewpost";

            return;
          } else {
            await auth.editpost(this.state.data);
            toast("Post Updated!");
            window.location = "/viewpost";

            return;
          }
        } catch (error) {}

        return;
      }
    }
  };
  render() {
    const dataS = { ...this.state.data };
    dataS.service = "";
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div ClassName="form-check d-flex container-fluid align-content-center ">
            <Input1
              name="ratePerDay"
              label="Rate per Day(Rs)"
              type="number"
              value={this.state.data.ratePerDay}
              placeholder="e.g 2500"
              onChange={this.handleChange}
              glyphtyp="fa fa-money"
              min="1"max='10000'
            ></Input1>
            <Input1
              name="hoursPerDay"
              label="Hours per Day"
              type="number"
              value={this.state.data.hoursPerDay}
              placeholder="For how many hours you want services"
              onChange={this.handleChange.bind(this)}
              glyphtyp="fa fa-clock-o"
              max="24"
              min="1"
            ></Input1>
            <Select
              name="city"
              value={this.state.data.city}
              label="Select City"
              options={this.state.city_options}
              onChange={this.handleChange.bind(this)}
            />
            <Select
              name="service"
              value={this.state.data.service}
              label="Type of Service"
              options={this.state.service_options}
              onChange={this.handleChange.bind(this)}
            />

            <Input1
              name="postDesc"
              label="Post Description"
              type="text"
              value={this.state.data.postDesc}
              placeholder=" Enter Details about your requirment"
              onChange={this.handleChange.bind(this)}
              glyphtyp="fa fa-pencil"
              rows="3"
            ></Input1>
            <h4>Select a Gender Preference </h4>
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="Male"
              onChange={this.handleChangeradio}
              checked={this.state.checked.Male}
            />
            <label
              className="form-check-label"
              htmlFor="exampleRadios1"
              style={{ fontFamily: "Times New Roman", fontStyle: "italic" }}
            >
              Male
            </label>
          </div>
          <div ClassName="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="Female"
              onChange={this.handleChangeradio}
              checked={this.state.checked.Female}
            />
            <label
              className="form-check-label"
              htmlFor="exampleRadios2"
              style={{ fontFamily: "Times New Roman", fontStyle: "italic" }}
            >
              Female
            </label>
            <br />

            {!this.state.isEdit && (
              <button className="btn btn-success mb-2">Post</button>
            )}
            {this.state.isEdit && (
              <button className="btn btn-success mb-2">Save</button>
            )}
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default CreatePost;
