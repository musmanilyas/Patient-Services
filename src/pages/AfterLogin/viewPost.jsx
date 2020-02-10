import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import format from "date-format";
import auth from "../../services/auth";
import moment from 'moment-timezone';
import _ from "lodash";
import Pagination from "./../../components/pagination";
import { paginate } from "./../../components/paginate";
import ImgCaregiver from '../AfterLogin/imgCaregiver';
class ViewPost extends Component {
  state = {
    editpost: {},

    post: [],
    insidepost: [],
    pageSize: 3,
    currentPage: 1,
    redirect: false
  };
  handleupdate = async post => {
    console.log(post);
    this.setState((this.state.editpost = post));

    console.log(this.state.editpost);
    this.setState({ redirect: true });

    // const id = post.filter(m => {
    //   return m._id === post._id;
    // });

    // console.log(id);
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  async componentDidMount() {
    const token = auth.getCurrentUser();

    try {
      const result = await auth.getpost(token.email);

      this.setState({ post: result.data });

      console.table(this.state.post);
    } catch (error) { }
  }
  /*date = (dat) => {
    var date = dat;
    date.toLocaleTimeString();
    var localDate = "" + d;
    return localDate;
  }*/

  render() {
    if (this.state.redirect)
      return (
        <Redirect
          to={{
            pathname: `/post`,
            state: this.state.editpost
          }}
        />
      );
    else {
      return (
        <React.Fragment>

          {(this.state.post.map(m=>(m.post.length ==0) && <div className="alert alert-primary mt-2" role="alert" style={{height:'100%'}}>
        You have no posts yet!!!
  </div>))  }
          <div style={{backgroundColor:'white'}}>
          {this.state.post.map(m => {
            return m.post.map(mp => (
              <div className="row mt-3">
                <div className="card container col-6 form-group align-content-center">
                  <div
                    className="card-header text-uppercase text-left " style={{backgroundColor:'#D4EDDA'}}
                    key={m._id}
                  >
           <i className="fa fa-user" />  <strong>Posted By:</strong>
                    {m.firstname}  &emsp;&emsp;
                    &emsp;&emsp;&emsp;&emsp; &emsp;&emsp;&emsp;
                    &emsp;&emsp;&emsp;&emsp; &emsp;&emsp;
                    <i className="fa fa-location-arrow" />
                    {mp.city}
                  </div>

                  <div className="card-body">
                    <h6 className="card-title text-left" key={mp._id}>
                      <i className="fa fa-clock-o" />{" "}
                      <strong>Hours Per Day:</strong> {mp.hoursPerDay}{" "}
                      <Link
                        className="text-right"
                        data-toggle="tooltip"
                        title="Edit post"
                        onClick={() => this.handleupdate(mp)}
                      >
                        <i className="fa fa-edit "></i>
                      </Link>
                      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                      <i className="fa fa-money" />{" "}
                      <strong>Rate per Day:</strong>
                      {mp.ratePerDay}(Rs)
                    </h6>
                  </div>
                  <p className="card-text">{mp.postDesc}</p>

                  {/* <p className="text-right">
                    <strong>
                      <i className="fa fa-male" />
                      Gender Preference:
                    </strong>
                    {mp.gender}
                  </p> */}

                  <div className="card-text text-left m-auto ">
                    <strong>
                      <i className="fa fa-medkit" />
                      Type of Service:
                    </strong>
                    {mp.service}
                  </div>
                  <div className="card-text text-right  m-auto">
                    <strong>
                      <i className="fa fa-male" />
                      Gender Preference:
                    </strong>
                    {mp.gender}
                  </div>

                  <div className="card-footer text-center text-muted">
                    <strong>Posted On:{mp.dateTime}</strong>
                  </div>
                </div>{" "}
              </div>
            ));
          })}
          </div>
        </React.Fragment>
      );
    }
  }
}

export default ViewPost;
{
  /* <div classname="container-fluid row ">
          Hellloooo
          <div className="col-3"></div>
          <div
            className="col-9 bg-success  "
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "15px",
              marginTop: "20px",
              marginBottom: "20px"
            }}
          >
            <div
              className="  form-group mt-3 "
              style={{ backgroundColor: "white" }}
            >
              <p className="  d-block justify-content-center ">
                Contentadadadadadadad dadadadadaaddaxzczddaadsassa
                sasssaasassasafdsfssffsffsfssfsfdddddddafasfaasfasdddddddddddddddddddddddd
              </p>
              <br />

              <Link
                to="/post"
                className="text-primary ml-2"
                data-toggle="tooltip"
                title="Edit post"
              >
                <i className="fa fa-edit"></i>
              </Link>
            </div>
          </div>
        </div> */
}
