import React, { useEffect } from "react";
import images from "../../images/images";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { CheckPageAccess, handleScrollToTop } from "../lib/staticFuntions";
import AccessDeniedPage from "../Components/AccessDeniedPage";

function PetService() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const header = document.getElementById("myHeader");
  //     const arrow = document.getElementById("arrow");
  //     const sticky = header.offsetTop;

  //     if (window.pageYOffset > sticky) {
  //       header.classList.add("fixed-header");
  //       arrow.classList.add("open");
  //     } else {
  //       header.classList.remove("fixed-header");
  //       arrow.classList.remove("open");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up the event listener
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      {CheckPageAccess() ? (
        <>
          {/* Mirrored from azim.commonsupport.com/Poopet/service.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 17 Jan 2024 13:24:20 GMT */}
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Poopet - HTML 5 Template Preview</title>
          {/* Stylesheets */}
          <link href="css/style.css" rel="stylesheet" />
          <link href="css/responsive.css" rel="stylesheet" />
          <link rel="icon" href="images/favicon.ico" type="image/x-icon" />
          {/* page wrapper */}
          {/* .preloader */}
          <div className="preloader" />
          {/* /.preloader */}
          {/* Main Header */}
          <Header />
          {/* End Main Header */}
          {/* page-title */}
          <section
            className="page-title centred"
            style={{ backgroundImage: "url(images/background/page-title.jpg)" }}
          >
            <div className="container">
              <h1>Our Services</h1>
            </div>
          </section>
          {/* page-title end */}
          {/* page-info */}
          <section className="page-info gray-bg">
            <div className="container">
              <div className="content-box clearfix">
                <ul className="bread-crumb">
                  <li style={{ fontSize: "25px" }}>Services</li>
                </ul>
              </div>
            </div>
          </section>
          {/* page-info */}
          {/* service-section */}
          <section className="service-section service-page-section sec-pad centred gray-bg">
            <div className="container">
              <div className="inner-content">
                <div className="row">
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 service-column wow fadeInUp"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="service-block-one">
                      <figure className="image-box">
                        <Link
                          to={`dog-service?serviceType=${btoa("dog_grooming")}`}
                        >
                          <img src={`${images?.singlService1}`} alt="" />
                        </Link>
                      </figure>
                      <div className="lower-content">
                        <h2>
                          <Link
                            to={`dog-service?serviceType=${btoa(
                              "dog_grooming"
                            )}`}
                          >
                            Pets Full
                            <br />
                            Grooming
                          </Link>
                        </h2>
                        <div className="text">
                          There are many variations of passages of ipsum
                          available but the majority red.
                        </div>
                        <div className="link">
                          <Link
                            to={`dog-service?serviceType=${btoa(
                              "dog_grooming"
                            )}`}
                          >
                            Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 service-column wow fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="service-block-one">
                      <figure className="image-box">
                        <Link
                          to={`dog-service?serviceType=${btoa("dog_training")}`}
                        >
                          <img src={`${images?.singlService2}`} alt="" />
                        </Link>
                      </figure>
                      <div className="lower-content">
                        <h2>
                          <Link
                            to={`dog-service?serviceType=${btoa(
                              "dog_training"
                            )}`}
                          >
                            Dog
                            <br />
                            Training
                          </Link>
                        </h2>
                        <div className="text">
                          There are many variations of passages of ipsum
                          available but the majority red.
                        </div>
                        <div className="link">
                          <Link
                            to={`dog-service?serviceType=${btoa(
                              "dog_training"
                            )}`}
                          >
                            Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 service-column wow fadeInUp"
                    data-wow-delay="600ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="service-block-one">
                      <figure className="image-box">
                        <Link
                          to={`dog-service?serviceType=${btoa("dog_walking")}`}
                        >
                          <img src={`${images?.singlService3}`} alt="" />
                        </Link>
                      </figure>
                      <div className="lower-content">
                        <h2>
                          <Link
                            to={`dog-service?serviceType=${btoa(
                              "dog_walking"
                            )}`}
                          >
                            Dog
                            <br />
                            Walking
                          </Link>
                        </h2>
                        <div className="text">
                          There are many variations of passages of ipsum
                          available but the majority red.
                        </div>
                        <div className="link">
                          <Link
                            to={`dog-service?serviceType=${btoa(
                              "dog_walking"
                            )}`}
                          >
                            Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 service-column wow fadeInUp"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  ></div>
                  <div
                    className="col-lg-4 col-md-6 col-sm-12 service-column wow fadeInUp"
                    data-wow-delay="300ms"
                    data-wow-duration="1500ms"
                  >
                    <div className="service-block-one">
                      <figure className="image-box">
                        <Link
                          to={`dog-service?serviceType=${btoa("dog_care")}`}
                        >
                          <img src={`${images?.singlService5}`} alt="" />
                        </Link>
                      </figure>
                      <div className="lower-content">
                        <h2>
                          <Link
                            to={`dog-service?serviceType=${btoa("dog_care")}`}
                          >
                            Pets
                            <br />
                            Full Care
                          </Link>
                        </h2>
                        <div className="text">
                          There are many variations of passages of ipsum
                          available but the majority red.
                        </div>
                        <div className="link">
                          <Link
                            to={`dog-service?serviceType=${btoa("dog_care")}`}
                          >
                            Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* service-section end */}
          {/* cta-section */}
          <section className="cta-section centred">
            <div className="container">
              <div className="inner-box">
                <h1>
                  Poopet is here to Support Every
                  <br />
                  Aspect of your Pet’s Life
                </h1>
                <div className="text">
                  Looking for proessional groomer or trainer?
                </div>
                <a href="contact.html" className="theme-btn">
                  Contact with us
                </a>
              </div>
            </div>
          </section>
          {/* cta-section end */}
          {/* main-footer */}
          <footer className="main-footer gray-bg">
            <div className="footer-top">
              <div className="container">
                <div className="top-content clearfix">
                  <figure className="footer-logo">
                    <a href="">
                      <img src={`${images?.logo}`} alt="" />
                    </a>
                  </figure>
                  <ul className="social-style-one">
                    <li>
                      <a href="">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <FontAwesomeIcon icon={faInstagram} />
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
                            <Link to={"/home"}>Home</Link>
                          </li>
                          <li>
                            <a href="">About</a>
                          </li>
                          <li>
                            <a href="">Services</a>
                          </li>
                          <li>
                            <a href="">Gallery</a>
                          </li>
                          <li>
                            <a href="">News</a>
                          </li>
                          <li>
                            <a href="">Contact</a>
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
                            <a href="">FAQs</a>
                          </li>
                          <li>
                            <a href="">Help</a>
                          </li>
                          <li>
                            <a href="">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="">Terms of Use</a>
                          </li>
                          <li>
                            <a href="">Site Map</a>
                          </li>
                          <li>
                            <a href="">Location</a>
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
                          <a href="">
                            example@gmail.com
                          </a>
                          <a href="">info@gmail.com</a>
                        </div>
                        <div className="phone">
                          <a href="">666 888 0000</a>
                        </div>
                        <div className="phone">
                          <a href="">333 555 999</a>
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
                          dolor sit amet adip dine scing not avilable in the
                          martket lorem ipsum sem neque.
                        </div>
                        <div className="subscribe-form">
                          <form action="" method="post">
                            <div className="form-group">
                              <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                required=""
                              />
                              <button type="submit">
                                <i className="fa fa-angle-right" />
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
            <div className="footer-bottom centred black-bg">
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
            onClick={() => {
              handleScrollToTop();
            }}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
          {/* jequery plugins */}
          {/* main-js */}
          {/* End of .page_wrapper */}
          {/* Mirrored from azim.commonsupport.com/Poopet/service.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 17 Jan 2024 13:24:43 GMT */}
        </>
      ) : (
        <AccessDeniedPage />
      )}
    </>
  );
}

export default PetService;
