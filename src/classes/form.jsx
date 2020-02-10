import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "../components/input";
import Emsg from "../components/errormessage";
import Input1 from "../components/inputnew";
import Select from "../components/selectOption";

class Form extends Component {
  state = {
    data: {},
    error: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const error = { ...this.state.error };
    const check = this.validateProperty(input);
    if (check) error[input.name] = check;
    else delete error[input.name];
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, error });
    
  };

  handleSubmit = e => {
    e.preventDefault();
    const error = this.validate();
    console.log(error);
    this.setState({ error: error || {} });
    if (error) return;

    this.doSubmit();
  };
  updateData = data => {
    const ret = this.setState({ data });
    console.log(data);
    return ret;
  };

  checkCode = (pro, sta) => {
    const conv = parseInt(sta);

    if (pro === conv) return true;
    else return false;
  };
  codeMatch = () => {};

  renderButton = label => {
    return (
      <div className="d-flex justify-content-center ">
        <button
          className="btn btn-primary mb-2"
          disabled={Object.keys(this.state.error).length > 0}
        >
          {label}
        </button>
      </div>
    );
  };

  renderInput(name, label, type = "text", placeholder = "") {
    const { data } = this.state;
    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        type={type}
        placeholder={placeholder}
        onChange={this.handleChange}
      ></Input>
    );
  }

  renderSelect(name, label, options) {
    const { data } = this.state;
    return (
      <Select
        name={name}
        label={label}
        value={data[name]}
        options={options}
        onChange={this.handleChange}
      />
    );
  }
  renderInput1(
    name,
    label,
    type = "text",
    placeholder = "",
    glyphtyp = "",

    row
  ) {
    const { data } = this.state;
    return (
      <Input1
        rows={row}
        name={name}
        label={label}
        value={data[name]}
        type={type}
        placeholder={placeholder}
        onChange={this.handleChange}
        glyphtyp={glyphtyp}
      ></Input1>
    );
  }

  renderError(name) {
    const { error } = this.state;
    return <Emsg error={error[name]}></Emsg>;
  }
}

export default Form;
