import React, { Component } from "react";
import auth from "../../services/auth";
import { Link } from "react-router-dom";
import logo1 from "../../components/images/back3.jpg";
import ShowMoreText from 'react-show-more-text';
import Pagination from "./../../components/pagination";
import { paginate } from "./../../components/paginate";
import emptyUser from '../../components/images/user.png';
import ImgCaregiver from '../AfterLogin/imgCaregiver';
import './../../components/belowslider.css';

class CareGivers extends Component {
  state = {
    caregivers: [],
    pageSize: 9,
    currentPage: 1,
img:null
  };

  getProPic= async (m)=> {
    
  const pic =await auth.getUserProfilePicOtherUser(m);
  
  
  }

  async componentDidMount() {
    const res = await auth.getCareGivers();
console.log(res.data);
    if (res.data != "") {

      const caregiver = res.data.filter(m => {
        return m.description != "";
      });
      this.setState({ caregivers: caregiver });
    }
  }
  handlePageChange = page => {
    this.setState({ currentPage: page });
    window.scrollTo(10, 10);
  };
  render() {
    const { currentPage, pageSize, caregivers: allcare } = this.state;

    const { length: count } = this.state.caregivers;
    if (count === 0) return <p>No Items to show</p>;
    console.log(count);
    const caregivers = paginate(allcare, currentPage, pageSize);
    return (
      <React.Fragment>
        <div style={{backgroundColor:'white' ,marginBottom:'20px',marginLeft:'38px'}}>
        <h5 className="mt-4">
          Showing {caregivers.length} out of {allcare.length} records.
        </h5>
        <div className="row ">
          {console.log(this.state.caregiver)}
          {caregivers.map(m => {
            if (m.description)
              return (
                <div className="   card container row col-sm-4 " style={{marginTop:'4%'}}>
                  <div className="card-header" style={{borderColor:'pink',borderWidth:'2px'}}>
                    <h6 className="text-left">
                      <i className="fa fa-male text-info mr-auto" />
                      <strong>&nbsp;&nbsp;Gender:&nbsp;</strong>
                      <span
                        style={{
                          color: "blue",
                          fontFamily: "italic",
                          fontWeight: "bold"
                        }}
                        className="text-dark"
                      >
                        {m.gender}
                      </span>
                    </h6>
                    <h6 className="text-left">
                      <i className="fa  fa-life-buoy text-info mr-auto" />
                      <strong>&nbsp;Level:&nbsp;</strong>
                      <span
                        style={{
                          color: "blue",
                          fontFamily: "italic",
                          fontWeight: "bold"
                        }}
                        className="text-dark"
                      >
                        {m.experience}
                      </span>
                    </h6>
                    <h6 className="text-left">
                      <i className="fa fa-location-arrow text-info" />
                      <strong>&nbsp;&nbsp;location:&nbsp;</strong>
                      <span
                        style={{
                          color: "blue",
                          fontFamily: "italic",
                          fontWeight: "bold"
                        }}
                        className="text-dark"
                      >
                        {m.cities}
                      </span>
                    </h6>
                    {(auth.getCurrentUser() == null || auth.getCurrentUser().customer)
                      ?
                      <h6 className="text-right">
                        <a href={`/inbox${m._id}`} >
                          <i className="fa fa-2x fa-envelope text-info" />
                        </a>
                      </h6> : null}




                  </div>
                  <Link className='mt-3' to={`/profile-user/${m._id}`} >
                  <ImgCaregiver id={m._id}/>
                  </Link>                 
                  <div className="card-body">
                  <Link to={`/profile-user/${m._id}`} className='hov'>
                    <h5 className="card-title">


                      {`${m.lastname.toUpperCase()}`}
                      
                    </h5>
                    </Link>
                    <div>
                    
                    <ShowMoreText

                    >
                      {m.description}
                    </ShowMoreText></div>
                    <p className="card-text text-left">
                      <strong> Service:</strong>

                      <span
                        style={{
                          color: "blue",
                          fontFamily: "italic",
                          fontWeight: "bold"
                        }}
                        className="text-info"
                      >
                        {m.service}
                      </span>
                    </p>
                    <p className="card-text text-left">
                      <strong> Rate Per Hour(Rs):</strong>

                      <span
                        style={{
                          color: "blue",
                          fontFamily: "italic",
                          fontWeight: "bold"
                        }}
                        className="text-info"
                      >
                        {m.ratesperhour}
                      </span>
                    </p>
                    <footer className=" text-muted">
                    
  </footer>
                   
                  </div>
                </div>
              );
            else return null;
          })}
        </div>
        <div className="container-fluid">
          <Pagination
            className="m-auto  col-6 form-group align-content-center"
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div></div>
      </React.Fragment>
    );
  }
}

export default CareGivers;
