import React, { Component } from "react";
import auth from "../../services/auth";
import Button from '@material-ui/core/Button';
import { Link,Redirect } from "react-router-dom";                                                                                                                                                                                                                                               
import Pagination from "./../../components/pagination";
import { paginate } from "./../../components/paginate";

class Allposts extends Component {
  state = {
    firstname:'',
    redirect:false,
    email:'',
    post: [],
    pageSize: 6,
    currentPage: 1
  };

  async componentDidMount() {
    const token = await auth.getCurrentUser();

    if (token.provider) {
      const posts = await auth.getallposts();
      console.log(posts);
      const post = posts.data;
      this.setState({ post });
      console.log(post);
    }
  }
  getUser=async email=>{

   const res= await auth.getCustByEmail(email);

this.setState({email:res.data._id});
  window.location.href=`/inbox${this.state.email}`

//this.setState({redirect:true});
}


  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  render() {
    const { currentPage, pageSize, post: allposts } = this.state;
    const { length: count } = this.state.post;
    if (count === 0) return <p>No Items to show</p>;
    console.log(count);
    const post = paginate(allposts, currentPage, pageSize);

    if (this.state.email) {
      return (
        <Redirect
          to={{
            pathname: `/inbox${this.state.email}`
          }}
        />
      );
    }

    return (
      <React.Fragment>
        <div  >
        <div style={{backgroundColor:'white'}}>
          {post.map(mp => {
            return (
              <div className="row mt-3"  >
                <div className="card container col-6 form-group align-content-center "  style={{backgroundColor:'white'}}>
                  <div
                    className="card-header text-uppercase text-left " style={{backgroundColor:'#D4EDDA'}}
                    key={mp._id}
                  >
                    <i className="fa fa-user" /> <strong className="">&nbsp;Posted By:</strong>
                    {mp.firstname}
                    {mp.lastname} &emsp;&emsp; &emsp;&emsp;&emsp;&emsp;
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    &emsp;&emsp;&emsp;&emsp; &emsp;&emsp;
                    <i className="fa fa-location-arrow" />
                    {mp.city}
                  </div>
                  <div className="card-body">
                    <h6 className="card-title text-left" key={mp._id}>
                      <i className="fa fa-clock-o" />{" "}
                      <strong>&nbsp;Hours Per Day:</strong> {mp.hoursPerDay}{" "}
                      
                        <Button style={{marginTop:'10px' ,marginLeft:'10px' ,backgroundColor:'#D4EDDA',color:'#17A2B8'}} onClick={e=>this.getUser(mp.email)} variant="contained"  color="primary">
<i className="fa fa-envelope text-info"></i>&emsp;Send Message
</Button>
                                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    
                      <strong>
                        <i className="fa fa-money" />
                        &nbsp;Rate per Day(Rs):
                      </strong>
                      {mp.ratePerDay}
                    </h6>
                  </div>
                  <p className="card-text">{mp.postDesc}</p>
                  {/* <p className="text-right">
                <strong>
                  <i className="fa fa-male" />
                  Gender Preference:
                </strong>
                {mp.gender}
              </p> */}{" "}
                  <div className="card-text text-right  m-auto">
                    <strong>
                      <i className="fa fa-male" />
                      &nbsp;Gender Preference:
                    </strong>
                    &nbsp;{mp.gender}
                  </div>
                  <div className="card-text text-left m-auto ">
                    <strong>
                      <i className="fa fa-medkit" />
                      &nbsp;Type of Service:
                    </strong>
                    &nbsp; {mp.service}
                  </div>
                  <div className="card-footer text-center text-muted">
                    <strong>Posted On:{mp.dateTime.toString()}</strong>
                  </div>
                </div>{" "}
              </div>
            );
          })}
          <div className="row d-inline-block ">
            <Pagination
              className=" d-flex form-group align-content-right"
              itemsCount={count}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div></div>
      </React.Fragment>
    );
  }
}
export default Allposts;
