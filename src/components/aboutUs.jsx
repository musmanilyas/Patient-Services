import React, { Component } from "react";
import "./aboutUss.css";
//import AboutUs from "../components/images/back3.jpg";
import healthCare from "../components/images/healthCare.jpg";
import Economy from "../components/images/economy.jpg";
import Safety from "../components/images/safety.jpg";
import Convenience from "../components/images/convenience.jpg";
import quickRecovery from "../components/images/quickRecovery.jpg";
import Rehabilitation from "../components/images/rehabilitation.png";

const aboutUS = () => {
  return (
    <div>
      <div className="ct-pageWrapper" id="ct-js-wrapper">
        <section className="company-heading intro-type" id="parallax-one">
          <div className="container">
            <div className="row product-title-info">
              <div className="col-md-12">
                <h1>About Us</h1>
              </div>
            </div>
          </div>
          <div
            className="parallax"
            id="parallax-cta"
            style={{
              backgroundImage:
                "url(https://www.solodev.com/assets/hero/hero.jpg)"
            }}
          />
        </section>
        <section
          className="story-section company-sections ct-u-paddingBoth100 paddingBothHalf noTopMobilePadding"
          id="section"
        >
          <div className="container text-center">
            <h2>WE CARE</h2>
            <h3>WE PROVIDE</h3>
            <div
              className="col-md-8 col-md-offset-2"
              style={{ marginLeft: "12rem" }}
            >
              <div className="red-border" />
              <p
                className="ct-u-size22 ct-u-fontWeight300 marginTop40"
                style={{ textAlign: "center" }}
              >
                The expanding request for attendants to look after patients is
                increasing day by day with the increase in new and complex
                diseases. It gives much more importance to home care attendants
                to gather, track and break down patient data, and oversee time
                table to take care of the patients according to the doctor’s
                description. Sometimes it becomes difficult for relatives to
                manage their time table to take care of patient, which gives
                rise to the importance of homecare attendants with relative work
                field (Certified in medical fields).
                <br /> Increase of complex diseases day by day demands intense
                care for patients of diseases like strokes, mental illness,
                kidney disease and the one’s with critical heart conditions.
                They need proper care from the experts of medical field. Experts
                who can treat patients exactly according to the doctor’s
                description .
              </p>
              {/* <a class="ct-u-marginTop60 btn btn-solodev-red btn-fullWidth-sm ct-u-size19" href="#">Learn More</a> */}
            </div>
          </div>
        </section>
        <section className="culture-section company-sections ct-u-paddingBoth100 paddingBothHalf noTopMobilePadding">
          <div className="container">
            <div className="row">
              <div
                className="col-md-8 col-md-offset-2"
                style={{ marginLeft: "14rem" }}
              >
                <h2>CARE FOR EVERY SITUATION</h2>
                <h3>TAKING CARE OF RELATIVES</h3>
                <p className="ct-u-size22 ct-u-fontWeight300 ct-u-marginBottom60">
                  We believe that the key to good health is good care for
                  everybody regardless of their age, gender, and social status.
                  <br />
                  Our mission is to, through our comprehensive range of products
                  and services, we touch the lives of our clients across all
                  social boundaries. This legacy has helped us to develop a bond
                  of trust with our clients.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div class="row" style={{ marginTop: "2rem" }}>
              <div class="col-sm-6">
                <div>
                  <img src={healthCare} width="100" height="70"></img>
                  <h6>PERSONALIZED HOME HEALTHCARE</h6>
                  <p style={{ textAlign: "center", display: "inline-block" }}>
                    We Provide tailor-made care plans according to the needs of
                    the patient by our expert’s assessments or as per doctors
                    advice
                  </p>
                </div>
                <div>
                  <img src={Economy} width="100" height="70"></img>
                  <h6>ECONOMY</h6>
                  <p>
                    Cost of services provided by this website are incredibly
                    less than hospitalization and costs as well as with other
                    direct/indirect expenses incurred during the tenure of
                    hospitalization.
                  </p>
                </div>

                <div>
                  <img src={Safety} width="100" height="70"></img>
                  <h6>SAFETY</h6>
                  <p>
                    This website provide services all around Pakistan
                    significantly improve patient healing and clearly reduce
                    other medical hazards in shape of hospital induced
                    infections.
                  </p>
                </div>
              </div>
              <div class="col-sm-6">
                <div>
                  <img src={quickRecovery} width="100" height="70"></img>
                  <h6>QUICK RECOVERY</h6>
                  <p style={{ textAlign: "center", display: "inline-block" }}>
                    Patients receiving home healthcare services may get
                    evidently quick recovery due to physical, emotional and
                    spiritual comfort of home environment under our trained
                    caregivers, patient attendants, or nurses.
                  </p>
                </div>
                <div>
                  <img src={Rehabilitation} width="100" height="70"></img>
                  <h6>TOTAL REHABILITATIONY</h6>
                  <p>
                    {" "}
                    Total recovery is assured due to increased compliance with
                    multi skilled, and highly professional medical and
                    non-medical care staff at home, thus lesser chance of
                    readmission in hospital / old age homes.
                  </p>
                </div>

                <div>
                  <img src={Convenience} width="100" height="70"></img>
                  <h6>CONVENIENCE</h6>
                  <p>
                    By hiring home nursing services for patients, child care and
                    old care , the family members of patient can get rid from
                    other hurdles such as hospital travelling, for family and
                    visitors as well because such errands may cause a lot of
                    inconvenience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="customers-section company-sections ct-u-paddingBoth100 paddingBothHalf noTopMobilePadding">
          <div className="container">
            <div className="row">
              <div
                className="col-md-8 col-md-offset-2"
                style={{ marginLeft: "14rem" }}
              >
                <h2>CUSTOMERS</h2>
                <h3>
                  Our profession is the only one which works unceasingly to
                  annihilate itself.
                </h3>
                <p className="ct-u-size22 ct-u-fontWeight300 ct-u-marginBottom60 marginTop40">
                  This website will be a great platform for normal people in
                  need to get the help and care they deserve. There are a couple
                  of websites like this in America but they are not as well
                  managed as we planned to make. There is no website like this
                  working on a big level in Pakistan so this what people need,
                  to get registered and authorized help.
                </p>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default aboutUS;
