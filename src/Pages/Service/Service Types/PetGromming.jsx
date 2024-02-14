import React from "react";
import images from "../../../images/images";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ServiceForm from "../../Components/ServiceForm";
import { handleScrollToTop } from "../../lib/staticFuntions";

function PetGromming() {
  return (
    // <>
    //   <p>this is gromming</p>
    // </>
    <>
      {/* Mirrored from azim.commonsupport.com/Poopet/single-service-1.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 17 Jan 2024 13:24:43 GMT */}

      <title>Poopet - HTML 5 Template Preview</title>
      {/* Stylesheets */}
      {/* <link href="css/style.css" rel="stylesheet" />
      <link href="css/responsive.css" rel="stylesheet" />
      <link rel="icon" href="images/favicon.ico" type="image/x-icon" /> */}
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
          <h1>Pets Full Grooming</h1>
        </div>
      </section>
      {/* page-title end */}
      {/* page-info */}
      <section className="page-info">
        <div className="container">
          <div className="content-box clearfix">
            <ul className="bread-crumb">
              <li>
                <a href="index-2.html">Service</a>
              </li>
              <li>Gromming</li>
            </ul>
          </div>
        </div>
      </section>
      {/* page-info */}
      {/* service-details */}
      <section className="sidebar-page-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <div className="service-details">
                <div className="inner-box">
                  <div className="content-style-one">
                    <figure className="image-box">
                      <img src={`${images?.serviceDetails1}`} alt="" />
                    </figure>
                    <h2>Pets Full Grooming</h2>
                    <div className="text">
                      <p>
                        There are many variations of passages of lorem ipsum
                        available, but the majority have suffered alteration in
                        some form. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed auctor erat lectus, euismod posuere
                        erat aliquet quis. Etiam sit amet nunc sed quam dapibus
                        non efficitur at in metus. Nam et metus eget arcu
                        volutpat rhoncus et eu mi. Donec id tellus sed nulla
                        faucibus aliquam.
                      </p>
                      <p>
                        Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. Morbi est nibh,
                        hendrerit bibendum enim eu, vehicula porta nisi. Donec
                        at ligula sed turpis mollis commodo in convallis magna.
                        Aliquam a mi mauris. Maecenas volutpat dui vel mauris
                        tempus placerat. Proin blandit eu tortor vel
                        pellentesque. Fusce laoreet ipsum lorem, at aliquet
                        ipsum varius tempus.
                      </p>
                    </div>
                  </div>
                  <div className="content-style-two">
                    <h3>Safety Standards are Included</h3>
                    <div className="text">
                      <p>
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere id cubilia Curae; Maecenas nec tellus
                        vehicula lorem ultricies condimentum. Sed consectetur
                        urna eget et finibus posuere. Sed tempus orci erat, sit
                        amet pretium lorem tincidunt eget. Maecenas porta risus
                        on neque rhoncus, sed pharetra diam vulputate. Nunc in
                        ligula vel sem porttitor consequat. Ut porttitor non
                        ante at bibendum. Praesent posuere turpis lacus, vel
                        tempor felis eleifend eu. Morbi velit odio, pulvinar vel
                        ligula donec, consectetur faucibus elit.
                      </p>
                    </div>
                    <div className="image-box">
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                          <figure className="image">
                            <img src={`${images?.serviceDetails2}`} alt="" />
                            <div className="icon-box">
                              <a
                                href=""
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <i className="flaticon-add" />
                              </a>
                            </div>
                          </figure>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                          <figure className="image">
                            <img src={`${images?.serviceDetails3}`} alt="" />
                            <div className="icon-box">
                              <a
                                href="images/resource/service-details-3.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <i className="flaticon-add" />
                              </a>
                            </div>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p> </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="service-sidebar sidebar">
                <div
                  className="sidebar-category sidebar-widget gray-bg wow fadeInRight"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <h3 className="sidebar-title">Services</h3>
                  <div className="widget-content">
                    <ul className="category-list">
                      <li className="active">
                        <a href="single-service-1.html">Pets Full Grooming</a>
                      </li>
                      <li>
                        <a href="single-service-2.html">
                          Regular Health Checkups
                        </a>
                      </li>
                      <li>
                        <a href="single-service-3.html">Styling Your Pets</a>
                      </li>
                      <li>
                        <a href="single-service-4.html">
                          Bath, Dry &amp; Brush
                        </a>
                      </li>
                      <li>
                        <a href="single-service-5.html">
                          Pets Cleaning &amp; Plucking
                        </a>
                      </li>
                      <li>
                        <a href="single-service-6.html">Coat Handler Pets</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="sidebar-appointment sidebar-widget wow fadeInRight"
                  data-wow-delay="300ms"
                  data-wow-duration="1500ms"
                >
                  <div className="widget-content centred">
                    <div className="text">Contact Us</div>
                    <h1>Make an Appointment</h1>
                  </div>
                </div>
              </div>
            </div>
            <ServiceForm serviceType={"dog_fullcare"}/>
          </div>
        </div>
      </section>
      {/* service-details end */}
      {/* main-footer */}
      <Footer />
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
      {/* Mirrored from azim.commonsupport.com/Poopet/single-service-1.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 17 Jan 2024 13:24:55 GMT */}
    </>
  );
}

export default PetGromming;
