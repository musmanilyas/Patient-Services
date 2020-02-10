import React, { Component } from "react";

import { logOut } from "../services/auth";
class Logout extends Component {
  componentDidMount() {
    logOut();
    window.location = "/";
  }

  render() {
    return null;
  }
}

export default Logout;
