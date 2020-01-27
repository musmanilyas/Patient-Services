import React, { Component } from "react";
import healthCare from "../components/images/healthCare.jpg";
import Economy from "../components/images/economy.jpg";
import Safety from "../components/images/safety.jpg";
import Convenience from "../components/images/convenience.jpg";
import quickRecovery from "../components/images/quickRecovery.jpg";
import Rehabilitation from "../components/images/rehabilitation.png";
const HomeData1 = () => {
  return (
    <React.Fragment>
      <div className="container-fluid" >
        <h2 style={{ textAlign: "center" }}>Why Choose Us?</h2>
        <h4
          style={{
            textAlign: "center",
            fontFamily: "Times New Roman",
            fontStyle: "italic",
            color: "grey"
          }}
        >
          We Provide Care
        </h4>

        <div className="row">
          <div className="col-sm-6">
            <div>
              <img src={healthCare} width="100" height="70"></img>
              <h6>PERSONALIZED HOME HEALTHCARE</h6>
              <p style={{ textAlign: "center", display: "inline-block" }}>
                We Provide tailor-made care plans according to the needs of the
                patient by our expert’s assessments or as per doctors advice
              </p>
            </div>
          
            <div>
              <img src={Rehabilitation} width="100" height="70"></img>
              <h6>TOTAL REHABILITATIONY</h6>
              <p>
                
                Total recovery is assured due to increased compliance with multi
                skilled, and highly professional medical and non-medical care
                staff at home, thus lesser chance of readmission in hospital /
                old age homes.
              </p>
            </div>
  <div>
              <img src={Safety} width="100" height="70"></img>
              <h6>SAFETY</h6>
              <p>
                This website provide services all around Pakistan significantly
                improve patient healing and clearly reduce other medical hazards
                in shape of hospital induced infections.
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div>
              <img src={quickRecovery} width="100" height="70"></img>
              <h6>QUICK RECOVERY</h6>
              <p style={{ textAlign: "center", display: "inline-block" }}>
                Patients receiving home healthcare services may get evidently
                quick recovery due to physical, emotional and spiritual comfort
                of home environment under our trained caregivers, patient
                attendants, or nurses.
              </p>
            </div>

            <div>
              <img src={Economy} width="100" height="70"></img>
              <h6>ECONOMY</h6>
              <p>
                Cost of services provided by this website are incredibly less
                than hospitalization and costs as well as with other
                direct/indirect expenses incurred during the tenure of
                hospitalization.
              </p>
            </div>

            <div>
              <img src={Convenience} width="100" height="70"></img>
              <h6>CONVENIENCE</h6>
              <p>
                By hiring home nursing services for patients, child care and old
                care , the family members of patient can get rid from other
                hurdles such as hospital travelling, for family and visitors as
                well because such errands may cause a lot of inconvenience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeData1;
