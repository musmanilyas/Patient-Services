import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import auth from "../services/auth";
import { Route } from "react-router-dom";
import Profile from "./profile";

import CreatePost from "./AfterLogin/createPost";
import Home from "./home";
import ViewPost from "./AfterLogin/viewPost";
import Login from "./login";
import Allposts from "./AfterLogin/allpostsprovider";
import Register from "./register";
import ProfileUser from "./AfterLogin/profileuser";
import ProfileProv from "./AfterLogin/profileprovider";
import CareGivers from "./AfterLogin/caregivers";
import Dashboard from './../Inbox/Dashboard'
import Store from './../Inbox/store';
import getCust from "../components/getcust";
import BookingReq from "../components/showbookingprov";
import BookingReqUser from '../components/showBookingUser';
import TextMobileStepper from './userRegister';


class Authenticate extends Component {
  getdata = async () => {
    const { data } = await auth.getCareGivers();
    return data;
  };

  render() {
    const authen = auth.getToken();
    React.Component = this.props.route;

    if (authen) {
      switch (this.props.route) {
        case "profileuser":
          return (
            <React.Fragment>
              <Route component={ProfileUser}></Route>
          
            </React.Fragment>
          );

        case "allposts":
          return (
            <React.Fragment>
              <Allposts className=" row col-2" />
            </React.Fragment>
          );
        case "caregivers":
          return (
            <React.Fragment>
              <CareGivers className="container col-12" />
            </React.Fragment>
          );
        case "profileprov":
          return (
            <React.Fragment>
              <Route to="/profileprov" component={ProfileProv} />
            </React.Fragment>
          );
          case "bookings-user":
            return (
              <React.Fragment>
                <Route to="/bookings-user" component={BookingReqUser} />
              </React.Fragment>
            );





        case "post":
          return (
            <React.Fragment>
              <div className="container col-12">
                <div className="col-5"></div>
                {/* <Profile className="tab-content form-group align-content-center" /> */}

                <div className="tab-content col-12">
                  <Route component={CreatePost} />
                </div>
              </div>
            </React.Fragment>
          );
        case "login":
          return <Redirect from="/" exact to="/home" />;

        case "register":
          return <Redirect from="/" exact to="/home" />;
        case "viewpost":
          return (
            <React.Fragment>
              <div className=" ">
                {/* <Profile className="tab-content form-group align-content-center" /> */}
                <ViewPost></ViewPost>
              </div>
            </React.Fragment>
          );

          
        case "bookings":
          return (
            <React.Fragment>
              <Route component={BookingReq}></Route>
            
            </React.Fragment>
          );
          case "/login-firstTime":
          return (
            <React.Fragment>
              <Home></Home>
 <TextMobileStepper></TextMobileStepper>
                         
            </React.Fragment>
          );
          
          
        case "inbox":
          return (
            <React.Fragment>
              <div className=" ">


                <Store {...this.props}>
                  <Dashboard /></Store>
              </div>
            </React.Fragment>
          );
        default:
          return;
      }
    }
    if (this.props.route === "register") {
      return <Route to="/register" component={Register} />;
    }

    return <Route to="/login" component={Login} />;
  }
}

export default Authenticate;
