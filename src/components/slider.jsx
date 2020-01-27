import React from "react";
import nurse1 from "./images/slid.jpg";
import "./slider.css";
import nurse3 from "./images/nurse3.jpg";
import nurse4 from "./images/nurse4.jpg";
import crousel from './images/crousel.jpeg';
const Slider = () => {
  return (
    <React.Fragment>
      <div className="bd-example container-fluid" style={{width:'98%'}}>
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={nurse4} className="d-block w-100 h-50" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="h5 ">Qualified Staff</h5>
                <p className="p ">
                  Our qualified staff will provide caregiving that can be
                  challenging when it comes to psychological and physical
                  well-being of our elders.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={crousel} className="d-block w-100 h-50" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="h5 ">Certified HealthCare Providers </h5>
                <p className="p">
                  Our professional healthcare providers who help you to resume
                  or maintain an active and independent life both at home and
                  work.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={nurse3} className="d-block w-100 h-50" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="h5 ">The Best CareGivers</h5>
                <p className="p ">
                  Medical caregivers provide best care whether it is an acquired
                  condition after stroke, for example, a spinal cord or brain
                  injury, a serious physical injury.
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          ></a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          ></a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Slider;
