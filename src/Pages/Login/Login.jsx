import React, { useState } from "react";
import "../../css/style.css";
import "../../css/bootstrap.css";
import Images from "../../images/images";
import images from "../../images/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const initVal = {
    email: "",
    password: "",
  };

  const [password, setPassword] = useState("password");
  const validationSchema = Yup.object({
    email: Yup.string().required("Please enter email"),
    password: Yup.string().required("Please enter password"),
  });
  const [intivalValue, setInitialValue] = useState(initVal);
  const navigate = useNavigate();
  return (
    <>
      <div className="preloader" />

      {/* Main Header */}
      <header className="main-header">
        <div className="header-bottom">
          <div className="container">
            <div className="clearfix">
              <div className="logo-box">
                <figure className="logo" style={{ marginTop: "44px" }}>
                  <a href="index-2.html">
                    <img src={`${Images.logo}`} alt="" />
                  </a>
                </figure>
              </div>
              <div className="nav-outer clearfix">
                <div className="menu-area">
                  <nav className="main-menu navbar-expand-lg">
                    <div className="navbar-header">
                      {/* Toggle Button */}
                      <button
                        type="button"
                        className="navbar-toggle"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                      >
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </div>
                    <div className="navbar-collapse collapse clearfix"></div>
                  </nav>
                </div>
                <ul className="social-style-one">
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* page-title */}
      <section className="page-title centred" style={{ height: "97%" }}>
        <div className="container">
          <h1>Log In</h1>
        </div>
      </section>
      {/* page-title end */}
      {/* page-info */}
      <section className="page-info">
        <div className="container">
          <div className="content-box clearfix">
            <ul className="bread-crumb">
              <li>
                <Link to={"/register"}>Haven't login Register?</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* page-info */}

      {/* contact-section */}
      <section className="contact-section centred">
        <div className="container">
          <div className="sec-title">
            <div className="top-title">Contact with Us</div>
            <h1>Fill Up the Form</h1>
          </div>
          <div className="row">
            <div className="col-lg-10 col-md-12 col-sm-12 offset-lg-1 form-column">
              <div className="contact-form-area">
                <Formik
                  enableReinitialize={true}
                  initialValues={intivalValue}
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    console.log(values);
                    navigate("/home");
                  }}
                >
                  {({ values, setFieldValue, handleChange, errors }) => (
                    <Form>
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <input
                            type="text"
                            name="email"
                            placeholder="Email address"
                            value={values?.email}
                            onChange={handleChange}
                          />
                          <div
                            className="text-left mt-2"
                            style={{ marginLeft: "25px" }}
                          >
                            <small style={{ color: "red" }}>
                              {errors.email}{" "}
                            </small>
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <input
                            type={`${password}`}
                            name="password"
                            placeholder="Password"
                            value={values?.password}
                            onChange={handleChange}
                          />
                          <FontAwesomeIcon
                            style={{
                              position: "absolute",
                              top: "30px",
                              right: "40px",
                              display:
                                password === "password" ? "block" : "none",
                            }}
                            icon={faEye}
                            onClick={() => {
                              setPassword("text");
                            }}
                          />
                          <FontAwesomeIcon
                            style={{
                              position: "absolute",
                              top: "30px",
                              right: "40px",
                              display: password === "text" ? "block" : "none",
                            }}
                            onClick={() => {
                              setPassword("password");
                            }}
                            icon={faEyeSlash}
                          />
                          <div
                            className="text-left mt-2"
                            style={{ marginLeft: "25px" }}
                          >
                            <small style={{ color: "red" }}>
                              {errors.password}{" "}
                            </small>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                          <button type="submit" className="theme-btn">
                            Log In
                          </button>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact-section end */}
      {/* main-footer */}
      <footer className="main-footer gray-bg">
        <div className="footer-top">
          <div className="container">
            <div className="top-content clearfix">
              <figure className="footer-logo">
                <a href="index-2.html">
                  <img src={`${images.logo}`} alt="" />
                </a>
              </figure>
              <ul className="social-style-one">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="widget-section">
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <h3 className="widget-title">Explore</h3>
                  <div className="widget-content">
                    <ul className="link">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Gallery</a>
                      </li>
                      <li>
                        <a href="#">News</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-12 footer-column">
                <div className="footer-widget links-widget">
                  <h3 className="widget-title">Links</h3>
                  <div className="widget-content">
                    <ul className="link">
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                      <li>
                        <a href="#">Help</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms of Use</a>
                      </li>
                      <li>
                        <a href="#">Site Map</a>
                      </li>
                      <li>
                        <a href="#">Location</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-12 footer-column">
                <div className="footer-widget contact-widget">
                  <h3 className="widget-title">Contact</h3>
                  <div className="widget-content">
                    <div className="text">
                      660 Broklyn Street,
                      <br />
                      88 New York U.S.A
                      <a href="mailto:example@gmail.com">example@gmail.com</a>
                      <a href="mailto:info@gmail.com">info@gmail.com</a>
                    </div>
                    <div className="phone">
                      <a href="tel:+886668880000">666 888 0000</a>
                    </div>
                    <div className="phone">
                      <a href="tel:+88333555999">333 555 999</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 footer-column">
                <div className="footer-widget about-widget">
                  <h3 className="widget-title">About</h3>
                  <div className="widget-content">
                    <div className="text">
                      Etiam rhoncu sit amet adip scing simply thin sed ipsum
                      dolor sit amet adip dine scing not avilable in the martket
                      lorem ipsum sem neque.
                    </div>
                    <div className="subscribe-form">
                      <form action="#" method="post">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            required=""
                            style={{ backgroundColor: "#e4e4e4" }}
                          />
                          <button type="submit">
                            <FontAwesomeIcon icon={faArrowRight} />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer-bottom centred black-bg"
          style={{ backgroundColor: "#3b3634", top: "28px" }}
        >
          <div className="container">
            <div className="copyright">
              © Copyrights 2019. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
      {/* main-footer end */}
      {/*Scroll to top*/}
      <button className="scroll-top scroll-to-target" data-target="html">
        <span className="fa fa-arrow-up" />
      </button>
    </>
  );
}

export default Login;
