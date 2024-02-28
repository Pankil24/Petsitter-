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
  faArrowUp,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { resetWarned } from "antd/es/_util/warning";
import Swal from "sweetalert2";
import Loader from "../Components/Loader";
import { TimePicker } from "antd";
import dayjs from "dayjs";
function Register() {
  const initVal = {
    email: "",
    password: "",
    userName: "",
    address: "",
    userType: "",
    age: "",
    phone: "",
    gender: "",
  };

  const [password, setPassword] = useState("password");
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string()
      .trim()
      .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please Enter Valid email")
      .required("Please Enter email"),
    password: Yup.string()
      .min(8, "Password must be more than 8 charchter")
      .matches(/.*[A-Z].*/, "Password must contain uppercase")
      .matches(/[@$&]/, "Password must conatains special char")
      .matches(/.*\d.*/, "Password must contains numbers")
      .required("Please Enter password"),
    userName: Yup.string()
      .required("Username is required")
      .min(3, "Username must be at least 3 characters")
      .max(20, "Username must be less than 20 characters")
      .matches(
        /^\w+$/,
        "Username can only contain letters, numbers, and underscores"
      ),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    userType: Yup.string().required("Please enter user type"),
    gender: Yup.string().required("Please enter gender"),
    age: Yup.number()
      .min(18, "You must be at least 18 years old")
      .max(150, "Age must be less than 150")
      .required("Age is required"),

    address: Yup.string()
      .min(20, "Please enter valid address")
      .required("Please enter address"),
  });
  const [intivalValue, setInitialValue] = useState(initVal);
  const navigate = useNavigate();
  return (
    <>
      {loading && <Loader />}
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
          <h1>Sign Up</h1>
        </div>
      </section>

      {/* page-info */}
      <section className="page-info">
        <div className="container">
          <div className="content-box clearfix">
            <ul className="bread-crumb">
              <li>
                <a href="index-2.html">Homepage</a>
              </li>
              <li>Sign Up</li>
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
          </div>
          <div className="row">
            <div className="col-lg-10 col-md-12 col-sm-12 offset-lg-1 form-column">
              <div className="contact-form-area">
                <Formik
                  enableReinitialize={true}
                  initialValues={intivalValue}
                  validationSchema={validationSchema}
                  validateOnChange={false}
                  onSubmit={async (values) => {
                    console.log(values);
                    // navigate("/home");
                    localStorage.setItem("userName", values?.userName);

                    setLoading(true);
                    const result = await axios.post(
                      "http://localhost:5000/register",
                      values,
                      {
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }
                    );

                    setLoading(false);

                    if (result?.status === 200) {
                      navigate("/home");
                    } else {
                      Swal.fire({
                        icon: "error",
                        title: "Opps...",
                        text: result.data,
                      });
                    }
                    console.log(result);
                  }}
                >
                  {({ values, setFieldValue, handleChange, errors }) => (
                    <Form>
                      {console.log("values ==>", values)}
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <input
                            type="text"
                            name="userName"
                            placeholder="User Name"
                            required=""
                            value={values?.userName}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
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
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone number"
                            required=""
                            value={values?.phone}
                            onChange={handleChange}
                          />
                          <div
                            className="text-left mt-2"
                            style={{ marginLeft: "25px" }}
                          >
                            <small style={{ color: "red" }}>
                              {errors.phone}{" "}
                            </small>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            required=""
                            value={values?.age}
                            onChange={handleChange}
                          />
                          <div
                            className="text-left mt-2"
                            style={{ marginLeft: "25px" }}
                          >
                            <small style={{ color: "red" }}>
                              {errors.age}{" "}
                            </small>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <select
                            value={values?.gender}
                            onChange={(e) => {
                              // console.log(e.target.value);
                              setFieldValue("gender", e.target.value);
                            }}
                          >
                            <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>

                          <div
                            className="text-left mt-2"
                            style={{ marginLeft: "25px" }}
                          >
                            <small style={{ color: "red" }}>
                              {errors.gender}{" "}
                            </small>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <select
                            value={values?.userType}
                            onChange={(e) => {
                              // console.log(e.target.value);
                              setFieldValue("userType", e.target.value);
                            }}
                          >
                            <option value="">User Type</option>
                            <option value="user">User</option>
                            <option value="care_taker">Caretaker</option>
                            <option value="admin">Admin</option>
                          </select>

                          <div
                            className="text-left mt-2"
                            style={{ marginLeft: "25px" }}
                          >
                            <small style={{ color: "red" }}>
                              {errors.userType}{" "}
                            </small>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 ">
                          <TimePicker
                            style={{
                              width: "100%",
                              borderRadius: "40px",
                              height: "72px",
                              backgroundColor: "#f2f1f0",
                              padding: "15px 25px",
                              color: "#615e5d",
                              position: "relative",
                              marginBottom: "12px",
                            }}
                            value={dayjs(
                              values?.startTime ?? "00:00:00",
                              "HH:mm:ss"
                            )}
                            onChange={(e, string) => {
                              setFieldValue("startTime", string);
                            }}
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 ">
                          <TimePicker
                            style={{
                              width: "100%",
                              borderRadius: "40px",
                              height: "72px",
                              backgroundColor: "#f2f1f0",
                              padding: "15px 25px",
                              color: "#615e5d",
                              position: "relative",
                              marginBottom: "12px",
                            }}
                            disabled={values?.startTime ? false : true}
                            value={dayjs(
                              values?.endTime ?? "00:00:00",
                              "HH:mm:ss"
                            )}
                            onChange={(e, string) => {
                              setFieldValue("endTime", string);
                            }}
                          />
                        </div>
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
                          <textarea
                            name="address"
                            placeholder="Address"
                            defaultValue={""}
                            value={values?.address}
                            onChange={handleChange}
                          />
                          <div
                            className="text-left mt-2"
                            style={{ marginLeft: "25px" }}
                          >
                            <small style={{ color: "red" }}>
                              {errors.address}{" "}
                            </small>
                          </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                          <button type="submit" className="theme-btn">
                            Register
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
      <button
        className="scroll-top scroll-to-target"
        data-target="html"
        id="arrow"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </>
  );
}

export default Register;
