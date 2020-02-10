import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import Home from "./home";
import "../../src/components/nav2.css";
import auth from "../services/auth";
import CreatePost from "./AfterLogin/createPost";
class Profile extends Component {
  state = {};

  componentDidMount() {
    const Current_user = auth.getCurrentUser();

    if (Current_user.customer == true) {
      let user = { ...this.state };
      user = Current_user;
      this.setState({ user });
      console.log(this.state.user);
      return;
    } else {
      let provider = { ...this.state };
      provider = Current_user;
      this.setState({ provider });
      console.log(this.state.provider);
    }
  }
  render() {
    return <React.Fragment></React.Fragment>;
  }
}
export default Profile;

/* <div className="tab-content col-10">
          <div className="tab-pane active" id="home" role="tabpanel">
            <Home></Home>
          </div>
          <div className="tab-pane" id="CreatePost" role="tabpanel">
            <CreatePost></CreatePost>
          </div>
          <div className="tab-pane" id="messages" role="tabpanel">
            messages
          </div>
          <div className="tab-pane" id="settings" role="tabpanel">
            settings
          </div> */
