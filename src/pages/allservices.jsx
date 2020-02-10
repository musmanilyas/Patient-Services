import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo1 from "../components/images/back1.jpg";
import Pagination from "./../components/pagination";
import ShowMoreText from 'react-show-more-text';
import { paginate } from "./../components/paginate";
import  ImgCaregiver from './AfterLogin/imgCaregiver';
import auth from ".././services/auth";
class AllServices extends Component {
  state = {
    caregivers: [],
    pageSize: 3,
    currentPage: 1
  };

  async componentDidMount() {
    const service = this.props.match.params.service;
    const req = await auth.getService(service);
    this.setState({ caregivers: req.data });
    console.log(this.state.caregivers);
  }
  render() {
    window.scrollTo(0, 0);
    const { currentPage, pageSize, caregivers: allcare } = this.state;

    const { length: count } = this.state.caregivers;

    if (count === 0) return  (<div style={{height:'80%'}}><div className="alert alert-primary mt-2 "  role="alert">
Sorry, No caregiver for this service!!!
</div> </div>);
    console.log(count);
    const caregivers = paginate(allcare, currentPage, pageSize);
    return (
      <React.Fragment >
        <div style={{backgroundColor:'white',}}>
        <h5 className="m-auto" >
          Showing {caregivers.length} out of {allcare.length} records.
        </h5>
        <div className="row ">
          {console.log(this.state.caregiver)}
          {caregivers.map(m => {
            if (m.description)
              return (
                <div className="  ml-0 mt-2 card container row col-sm-4 ">
                  <div className="card-header">
                    <h6 className="text-left">
                    <i className="fa fa-male text-info mr-auto" />
                      <strong>Gender:</strong>
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
                      <strong>Level:</strong>{" "}
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
                      <strong>location:</strong>
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
                  <Link to={`/profile-user/${m._id}`} className='hov'>
                  <ImgCaregiver id={m._id}/>        </Link>         
                  <div className="card-body">
                    
                  <Link to={`/profile-user/${m._id}`} className='hov'>
                        
                    <h5 className="card-title">
                      
                      {m.firstname.toUpperCase()}
                      
                    </h5>
                    </Link>
                    <ShowMoreText

                    >
                      {m.description}
                    </ShowMoreText>
                    {/* <p className="card-text text-center">{m.description}</p>*/}
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
                    </p>{" "}
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
                    {/* <Link href="#" className="btn btn-success">
                      Profile
                    </Link> */}
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

export default AllServices;
