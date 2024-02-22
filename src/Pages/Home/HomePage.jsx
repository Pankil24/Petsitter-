import React, { useEffect } from "react";
import "../../css/style2.css";
import "../../css/responsive.css";
import images from "../../images/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faCat,
  faChevronLeft,
  faChevronRight,
  faPaw,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-bootstrap";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Loader from "../Components/Loader";

function HomePage() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("myHeader");
      const arrow = document.getElementById("arrow");
      const sticky = header.offsetTop;

      if (window.pageYOffset > sticky) {
        header.classList.add("fixed-header");
        arrow.classList.add("open");
      } else {
        header.classList.remove("fixed-header");
        arrow.classList.remove("open");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* Mirrored from azim.commonsupport.com/Poopet/index-2.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 17 Jan 2024 13:22:51 GMT */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      {/* main-slider */}
      <section class="main-slider slider-style-two">
        <div class="">
          <div class="">
            <div class="">
              <Carousel>
                <Carousel.Item>
                  <img src={`${images?.silder1}`} alt="" />
                  <Carousel.Caption>
                    <div class="content-box">
                      <h1>Your Pets Friends are in Good Hands</h1>
                      <div class="text">
                        We offer all the best quality services for your best
                        friends, Call us now and book an appointment
                      </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={`${images?.silder2}`} alt="" />
                  <Carousel.Caption>
                    <div class="content-box">
                      <h1>Your Pets Friends are in Good Hands</h1>
                      <div class="text">
                        We offer all the best quality services for your best
                        friends, Call us now and book an appointment
                      </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={`${images?.slider3}`} alt="" />
                  <Carousel.Caption>
                    <div class="content-box">
                      <h1>Your Pets Friends are in Good Hands</h1>
                      <div class="text">
                        We offer all the best quality services for your best
                        friends, Call us now and book an appointment
                      </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={`${images?.slider4}`} alt="" />
                  <Carousel.Caption>
                    <div class="content-box">
                      <h1>Your Pets Friends are in Good Hands</h1>
                      <div class="text">
                        We offer all the best quality services for your best
                        friends, Call us now and book an appointment
                      </div>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* main-slider end */}
      {/* about-style-two */}
      <section className="about-style-two centred">
        <div className="container">
          <div className="inner-content">
            <div className="content-box">
              <div className="sec-title">
                <div className="top-title">Few Words About Poopet Company</div>
                <h1>Pet Grooming &amp; Care Center</h1>
              </div>
              <div className="text">
                <p>
                  There are many variations of passages of available but the
                  majority have suffered alteration in some form, by injected hu
                  randomised words which don look even slightly believable. If
                  you are going to use a passage of you need to be sure there
                  lipsim is simply free text now isn't anything embarr assing
                  hidden in the middle of text.
                </p>
              </div>
            </div>
            <div className="image-box">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                  <figure
                    className="image wow fadeInLeft"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <img src={`${images?.dog1}`} alt="" />
                  </figure>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                  <figure
                    className="image wow fadeInRight"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    <img src={`${images?.dog2}`} alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about-style-two end */}
      {/* team-style-two */}
      <section className="team-style-two gray-bg centred">
        <div className="container">
          <div className="sec-title alternate-color">
            <div className="top-title">Pet Care Staff</div>
            <h1>Meet Our Groomers</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 staff-column">
              <div
                className="team-block-one wow fadeInUp"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <figure className="image-box">
                  <a href="#">
                    <img src={`${images?.team4}`} alt="" />
                  </a>
                </figure>
                <div className="lower-content">
                  <h3>
                    <a href="#">Reena Scot</a>
                  </h3>
                  <span className="designation">Groomer</span>
                  <ul className="social-style-one">
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebookF} />
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
            <div className="col-lg-3 col-md-6 col-sm-12 staff-column">
              <div
                className="team-block-one wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <figure className="image-box">
                  <a href="#">
                    <img src={`${images?.team5}`} alt="" />
                  </a>
                </figure>
                <div className="lower-content">
                  <h3>
                    <a href="#">Mike Albert</a>
                  </h3>
                  <span className="designation">Groomer</span>
                  <ul className="social-style-one">
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebookF} />
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
            <div className="col-lg-3 col-md-6 col-sm-12 staff-column">
              <div
                className="team-block-one wow fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <figure className="image-box">
                  <a href="#">
                    <img src={`${images?.team6}`} alt="" />
                  </a>
                </figure>
                <div className="lower-content">
                  <h3>
                    <a href="#">Sarah Eve</a>
                  </h3>
                  <span className="designation">Groomer</span>
                  <ul className="social-style-one">
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebookF} />
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
            <div className="col-lg-3 col-md-6 col-sm-12 staff-column">
              <div
                className="team-block-one wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <figure className="image-box">
                  <a href="#">
                    <img src={`${images?.team7}`} alt="" />
                  </a>
                </figure>
                <div className="lower-content">
                  <h3>
                    <a href="#">Reena Scot</a>
                  </h3>
                  <span className="designation">Groomer</span>
                  <ul className="social-style-one">
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebookF} />
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
        </div>
      </section>
      {/* team-style-two end */}
      {/* chooseus-section */}
      <section
        className="chooseus-section black-bg"
        style={{
          backgroundImage: `url(${images?.testimonialBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 title-column">
              <div className="inner-box">
                <div className="sec-title">
                  <div className="top-title">Why People Choose Us</div>
                  <h1>
                    We’ve 25+ Years of Experiences to Handle your Pets Friends
                  </h1>
                </div>
                <div className="link">
                  <a href="#" className="theme-btn">
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12 column">
                    <div
                      className="chooseus-block-one wow fadeInUp"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="top-content">
                        <div className="icon-box">
                          <i className="flaticon-staff" />
                        </div>
                        <h3>
                          <a href="#">
                            Professional
                            <br />
                            Staff
                          </a>
                        </h3>
                      </div>
                      <div className="text">
                        Lorem ipsum dolor sit a consetetur simple is pscing
                        elitr sed m nonmy eirmod simply free text.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 column">
                    <div
                      className="chooseus-block-one wow fadeInUp"
                      data-wow-delay="00ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="top-content">
                        <div className="icon-box">
                          <i className="flaticon-shield" />
                        </div>
                        <h3>
                          <a href="#">
                            Deliver Quality
                            <br />
                            Services
                          </a>
                        </h3>
                      </div>
                      <div className="text">
                        Lorem ipsum dolor sit a consetetur simple is pscing
                        elitr sed m nonmy eirmod simply free text.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 column">
                    <div
                      className="chooseus-block-one wow fadeInUp"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="top-content">
                        <div className="icon-box">
                          <i className="flaticon-veterinary" />
                        </div>
                        <h3>
                          <a href="#">
                            Best Medical
                            <br />
                            Treatment
                          </a>
                        </h3>
                      </div>
                      <div className="text">
                        Lorem ipsum dolor sit a consetetur simple is pscing
                        elitr sed m nonmy eirmod simply free text.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 column">
                    <div
                      className="chooseus-block-one wow fadeInUp"
                      data-wow-delay="300ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="top-content">
                        <div className="icon-box">
                          <i className="flaticon-support" />
                        </div>
                        <h3>
                          <a href="#">
                            24/7 Smart
                            <br />
                            Support
                          </a>
                        </h3>
                      </div>
                      <div className="text">
                        Lorem ipsum dolor sit a consetetur simple is pscing
                        elitr sed m nonmy eirmod simply free text.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* chooseus-section end */}
      {/* clients-section */}

      {/* clients-section end */}
      {/* healthcare-section */}
      <section className="healthcare-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div
                className="image-box wow slideInLeft"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <figure className="image">
                  <img src={`${images?.healthCare1}`} alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <div className="top-content">
                  <div className="sec-title">
                    <div className="top-title">Care for your Pets</div>
                    <h1>Pets Healthcare Tips</h1>
                  </div>
                  <div className="text">
                    <p>
                      Lorem ipsum is simply free text available there are many
                      variations of passages of orem ipsum avail but the
                      majority have suffered alteration in some form.
                    </p>
                  </div>
                </div>
                <div className="lower-content">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 column">
                      <div
                        className="single-item wow fadeInUp"
                        data-wow-delay="00ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="icon-box">
                          <FontAwesomeIcon icon={faCat} />
                        </div>
                        <h3>
                          <a href="#">Feeding a cat to be healthy</a>
                        </h3>
                        <div className="text" style={{ color: "grey" }}>
                          There are many variations of passages of orem ipsum
                          avail but the majority have suffered alteration in
                          some form.
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 column">
                      <div
                        className="single-item wow fadeInUp"
                        data-wow-delay="300ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="icon-box">
                          <FontAwesomeIcon icon={faPaw} />
                        </div>
                        <h3>
                          <a href="#">Dogs veterinary diest plans</a>
                        </h3>
                        <div className="text" style={{ color: "grey" }}>
                          There are many variations of passages of orem ipsum
                          avail but the majority have suffered alteration in
                          some form.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* healthcare-section end */}
      {/* pricing-section */}
      <section className="pricing-section centred sec-pad gray-bg">
        <div className="container">
          <div
            className="sec-title alternate-color"
            style={{ content: "\f105" }}
          >
            <div className="top-title">Our Rates</div>
            <h1>Pricing Plans</h1>
          </div>
          <div className="inner-content">
            <div className="row">
              <div
                className="col-lg-4 col-md-6 col-sm-12 pricing-column wow fadeInUp"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="pricing-table">
                  <div className="table-header">
                    <div className="title">Small Package</div>
                    <div className="price">
                      $20.00<span>/visit</span>
                    </div>
                  </div>
                  <div className="table-content">
                    <ul>
                      <li>Grooming</li>
                      <li>Cleaning</li>
                      <li>Plucking</li>
                      <li>Triming</li>
                      <li>Styling</li>
                      <li>Bath</li>
                    </ul>
                  </div>
                  <div className="table-footer">
                    <a href="#" className="theme-btn">
                      Enquire now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 pricing-column wow fadeInUp"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="pricing-table">
                  <div className="table-header">
                    <div className="title">Medium Package</div>
                    <div className="price">
                      $30.00<span>/visit</span>
                    </div>
                  </div>
                  <div className="table-content">
                    <ul>
                      <li>Grooming</li>
                      <li>Cleaning</li>
                      <li>Plucking</li>
                      <li>Triming</li>
                      <li>Styling</li>
                      <li>Bath</li>
                    </ul>
                  </div>
                  <div className="table-footer">
                    <a href="#" className="theme-btn">
                      Enquire now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12 pricing-column wow fadeInUp"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="pricing-table">
                  <div className="table-header">
                    <div className="title">Large Package</div>
                    <div className="price">
                      $40.00<span>/visit</span>
                    </div>
                  </div>
                  <div className="table-content">
                    <ul>
                      <li>Grooming</li>
                      <li>Cleaning</li>
                      <li>Plucking</li>
                      <li>Triming</li>
                      <li>Styling</li>
                      <li>Bath</li>
                    </ul>
                  </div>
                  <div className="table-footer">
                    <a href="#" className="theme-btn">
                      Enquire now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* pricing-section end */}
      {/* gallery-section */}
      <section className="gallery-section ">
        <div className="container-fluid ">
          <ul className="gallery-carousel owl-theme owl-carousel row">
            <li className="single-gallery-block col">
              <figure className="image-box">
                <img src={`${images?.gallary1}`} alt="" />
                <div className="icon-box">
                  <a
                    href="images/gallery/gallery-1.png"
                    className="lightbox-image"
                    data-fancybox="gallery"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </div>
              </figure>
            </li>
            <li className="single-gallery-block col">
              <figure className="image-box">
                <img src={`${images?.gallary2}`} alt="" />
                <div className="icon-box">
                  <a
                    href="images/gallery/gallery-2.png"
                    className="lightbox-image"
                    data-fancybox="gallery"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </div>
              </figure>
            </li>
            <li className="single-gallery-block col">
              <figure className="image-box">
                <img src={`${images?.gallary3}`} alt="" />
                <div className="icon-box">
                  <a
                    href="images/gallery/gallery-3.png"
                    className="lightbox-image"
                    data-fancybox="gallery"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </div>
              </figure>
            </li>
            <li className="single-gallery-block col">
              <figure className="image-box">
                <img src={`${images?.gallary4}`} alt="" />
                <div className="icon-box">
                  <a
                    href="images/gallery/gallery-5.png"
                    className="lightbox-image"
                    data-fancybox="gallery"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </div>
              </figure>
            </li>
            <li className="single-gallery-block col">
              <figure className="image-box">
                <img src={`${images?.gallary5}`} alt="" />
                <div className="icon-box">
                  <a
                    href="images/gallery/gallery-5.png"
                    className="lightbox-image"
                    data-fancybox="gallery"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </div>
              </figure>
            </li>
          </ul>
        </div>
      </section>
      {/* gallery-section end */}

      {/* news-section */}
      <section className="news-section sec-pad">
        <div className="container">
          <div className="sec-title centred">
            <div className="top-title">Our Blog &amp; News</div>
            <h1>Latest News &amp; Articles</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 news-column">
              <div
                className="news-block-one wow fadeInLeft"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="date">
                  04
                  <br />
                  Mar
                </div>
                <figure className="image-box">
                  <a href="blog-single.html">
                    <img src={`${images?.new1}`} alt="" />
                  </a>
                </figure>
                <div className="lower-content">
                  <ul className="info-box">
                    <li>Mike Hardson</li>
                    <li>3 Comments</li>
                  </ul>
                  <h3>
                    <a href="blog-single.html">
                      How to take care of any kind of your pets
                    </a>
                  </h3>
                  <div className="text">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </div>
                  <div className="link">
                    <a href="blog-single.html">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-column">
              <div
                className="news-block-one wow fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="date">
                  05
                  <br />
                  Mar
                </div>
                <figure className="image-box">
                  <a href="blog-single.html">
                    <img src={`${images?.new2}`} alt="" />
                  </a>
                </figure>
                <div className="lower-content">
                  <ul className="info-box">
                    <li>Mike Hardson</li>
                    <li>2 Comments</li>
                  </ul>
                  <h3>
                    <a href="blog-single.html">
                      Shelter and feed animals that are in need
                    </a>
                  </h3>
                  <div className="text">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </div>
                  <div className="link">
                    <a href="blog-single.html">Read more</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-column">
              <div
                className="news-block-one wow fadeInLeft"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="date">
                  06
                  <br />
                  Mar
                </div>
                <figure className="image-box">
                  <a href="blog-single.html">
                    <img src={`${images?.new3}`} alt="" />
                  </a>
                </figure>
                <div className="lower-content">
                  <ul className="info-box">
                    <li>Mike Hardson</li>
                    <li>4 Comments</li>
                  </ul>
                  <h3>
                    <a href="blog-single.html">
                      Dog walking helps keep your dog sane
                    </a>
                  </h3>
                  <div className="text">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                  </div>
                  <div className="link">
                    <a href="blog-single.html">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* news-section end */}
      {/* google-map-section */}
      {/* <section className="google-map-section">
        <div className="container">
          <div className="google-map-area">
            <div
              className="google-map"
              id="contact-google-map"
              data-map-lat="40.712776"
              data-map-lng="-74.005974"
              data-icon-path="images/icons/map-marker.png"
              data-map-title="Brooklyn, New York, United Kingdom"
              data-map-zoom={12}
              data-markers='{
                  "marker-1": [40.712776, -74.005974, "<h4>Branch Office</h4><p>77/99 New York</p>","images/icons/map-marker.png"]
              }'
            ></div>
          </div>
        </div>
      </section> */}
      {/* google-map-section end */}
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
                <a href="index-2.html">
                  <img src={`${images?.logo}`} alt="" />
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
                    <FontAwesomeIcon icon={faFacebookF} />
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
                        <Link to="/service">Services</Link>
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
        id="arrow"
        data-target="html"
        onClick={handleScrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      {/* jequery plugins */}
      {/* map script */}
      {/* main-js */}
      {/* End of .page_wrapper */}
      {/* Mirrored from azim.commonsupport.com/Poopet/index-2.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 17 Jan 2024 13:24:18 GMT */}
    </>
  );
}

export default HomePage;
