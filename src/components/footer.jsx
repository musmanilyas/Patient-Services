import React from "react";
import "./footer.css";
import logo1 from "./images/logo1.jpg";



function FooterPage() {
    return (


        <div id="page-container">
            <footer className="footer-distributed" id="fot">


                <div className="footer-left" >
                    <img
                        src={logo1}
                        width="15"
                        height="70"
                        className="d-inline-block align-top"
                        alt=""
                    ></img>
                    <h3>Patient<span>Services</span></h3>

                    <p className="footer-links">
                        <a href="#">Home</a>
                        |
     <a href="#">Blog</a>
                        |
     <a href="#">About</a>
                        |
     <a href="#">Contact</a>
                    </p>

                    <p className="footer-company-name">© 2019 COMSATS CUI Learning Solutions Pvt. Ltd.</p>
                </div>

                <div className="footer-center">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>Johar Town Lahore
    </span></p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+91 22-27782183</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:support@eduonix.com">support@eduonix.com</a></p>
                    </div>
                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the company</span>
                        We offer training and skill building courses across Technology, Design, Management, Science and Humanities.</p>
                    <div className="footer-icons">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-youtube"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default FooterPage;

