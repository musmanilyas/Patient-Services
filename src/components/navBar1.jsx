import React, { useEffect } from "react";
//import "./navBar.css";
import { NavLink } from "react-router-dom";
import logo1 from "./images/WebLogochng.png";
import "./nav2.css";
import Avatar from '@material-ui/core/Avatar';
import auth from "../services/auth";
//import logo1 from "../images/logo1.jpg";
import { async } from './../nodemailer';
import users from './images/user.png';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width:'3%',
    height:'2%',
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

}));





const NavBar = ({ user, provider, seen }) => {
  const classes = useStyles();
const [clicked,setClicker]=React.useState(false);

React.useEffect(()=>{


  getPic();





},[])


async function getPic (){
  
    if(auth.getCurrentUser()){
  const res = await auth.getUserProfilePic();
if(res){    changeImg(res);
  
}
else{
  changeImg(users);


}}
else changeImg(users);
}
const [img,changeImg]=React.useState(null);

  return (
    
    <React.Fragment>
      <div>
        <nav className=" container-fluid navbar navbar-expand-lg navbar-light back row">
          <NavLink className="nav-link" to="/home" style={{ color: "black" }}>
            <img
              src={logo1}
             
              className="d-inline-block align-top"
              alt=""
            ></img>{" "}
            {/* <h4>PatientServices</h4> */}
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            {provider == null && user == null && (
              <React.Fragment>
                <ul className="navbar-nav">
                  <li className="nav-item ">
                    <NavLink className="nav-link na" to="/home">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link na" to="/services">
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link na" to="/caregivers">
                      CareGivers
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link na" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="na nav-link" to="/register">
                      register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    {/* <NavLink className="nav-link na" to="/contacts">
                      Contact
                    </NavLink> */}
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link na" to="/aboutus">
                      Aboutus
                    </NavLink>
                  </li>
                </ul>
              </React.Fragment>
            )}

            {user && (
              <React.Fragment>
                <ul className="navbar-nav">
                  <li className="nav-item ">
                    <NavLink className="nav-link na" to="/home">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link na " to="/post">
                      Create Post
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link na " to="/viewpost">
                      View posts
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link na " to="/services">
                      Services
                    </NavLink>
                  </li>

                  <li className="nav-item ">
                    <NavLink className="nav-link na" to="/caregivers">
                      CareGivers
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link na" to="/bookings-user">
                      bOOKINGS
                      <span className="badge badge-primary badge-pill">{seen}</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link na" to="/inbox" onClick={()=>{setClicker(true)}}> 
                      Inbox
{(seen && seen.length != 0 && clicked==false) ? <span className="badge badge-primary badge-pill">{seen.length}</span> : null}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link na" to="/logout">
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </React.Fragment>
            )}

            {provider && (
              <React.Fragment>
                <ul className="navbar-nav">
                  <li className="nav-item ">
                    <NavLink className="nav-link na" to="/home">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link na " to="/services">
                      Services
                    </NavLink>
                  </li>

                  <li className="nav-item ">
                    <NavLink className="nav-link na " to="/allposts">
                      View posts
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink className="nav-link na" to="/caregivers">
                      CareGivers
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link na" to="/inbox" onClick={()=>{setClicker(true)}}>
                      Inbox
                      {(seen && seen.length != 0 && clicked==false) ? <span className="badge badge-primary badge-pill">{seen.length}</span> : null}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link na" to="/bookings">
                      bOOKINGS
                      <span className="badge badge-primary badge-pill">{seen}</span>
                    </NavLink>
                  </li>
                  
                  <li className="nav-item">
                    <NavLink className="nav-link na" to="/profile-user">
                      Profile
                      <span className="badge badge-primary badge-pill">{seen}</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link na " to="/logout" >
                      Logout&nbsp;&nbsp;
                    </NavLink>
                  </li>
                </ul>
              </React.Fragment>
            )}
          </div>
          {!provider && !user && <form className="form-inline row m-0">
            <input
              className="form-control ml-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-sm  btn-outline-success "
              type="submit"
            >
              Search
            </button>
          </form>}
          {provider && <form className="form-inline row m-0">

            <div>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</div>
          </form>}
          {user && (
            <ul className="navbar-nav ">
              <li className="nav-item" style={{ left: '30%' }}>
                <NavLink className="nav-link na active mr-5" to="/profileuser" >
                <Avatar aria-label="Profile Pic"  src={img} className={classes.large} >
{ /*style={{width:'px',height:'10px'}}*/}

{user.firstname}  </Avatar>{user.firstname}    
                </NavLink>
              </li>
            </ul>
          )}
          {provider && (  <NavLink className=" nav-link na active" style={{marginRight:'20%',marginBottom:'8px' ,textTransform:'uppercase'}} to="/profileprov">
          <Avatar aria-label="Pro pic" style={{backgroundColor:'green'}} src={img} className={classes.large}>
  {provider.firstname}          
          </Avatar>
                  {provider.firstname}
                </NavLink>
          )}
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
