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

function PetService() {
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
      {/* Mirrored from azim.commonsupport.com/Poopet/service.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 17 Jan 2024 13:24:20 GMT */}
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
      <header className="main-header" id="myHeader">
        <div className="page-header-mobile-info">
          <div className="page-header-mobile-info-content">
            <div className="header-info clearfix">
              <ul className="info-list">
                <li>
                  <i className="fas fa-map-marker-alt" />
                  <span>660 Broklyn Street, 88 New York </span>
                </li>
                <li>
                  <i className="fa fa-phone" />
                  <span>666 888 0000, Fax: +21 000 333</span>
                </li>
                <li>
                  <i className="fa fa-clock" />
                  <span>Mon - Fri 9:00 am - 6:00 pm</span>
                </li>
              </ul>
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
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="toggle-box clearfix">
            <div className="page-header-mobile-info-toggle" />
            <div className="link">
              <a href="contact.html" className="theme-btn">
                Appointment
              </a>
            </div>
          </div>
        </div>
        <div className="header-top">
          <div className="container">
            <div className="header-info clearfix">
              <ul className="info-list pull-right">
                <li>
                  <i className="flaticon-mail" />
                  <strong>
                    <a href="mailto:example@gmail.com">example@gmail.com</a>
                  </strong>
                  Email address
                </li>
                <li>
                  <i className="flaticon-phone-call" />
                  <strong>
                    <a href="tel:+886668880000">666 888 0000</a>
                  </strong>
                  Phone line
                </li>
                <li>
                  <i className="flaticon-clock" />
                  <strong>Mon - Fri 9:00 am - 6:00 pm</strong>
                  Working hours
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="clearfix">
              <div className="logo-box">
                <figure className="logo">
                  <a href="index-2.html">
                    <img src={`${images?.logo}`} alt="" />
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
                    <div className="navbar-collapse collapse clearfix">
                      <ul className="navigation clearfix">
                        <li className="dropdown">
                          <Link to={"/home"}>Home</Link>
                          <ul>
                            <li>
                              <a href="index-2.html">Home Page 01</a>
                            </li>
                            <li>
                              <a href="index-3.html">Home Page 02</a>
                            </li>
                            <li className="dropdown">
                              <a href="#">Header Styles</a>
                              <ul>
                                <li>
                                  <a href="index-2.html">Header Style 01</a>
                                </li>
                                <li>
                                  <a href="index-3.html">Header Style 02</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">About</a>
                          <ul>
                            <li>
                              <a href="about.html">About Us</a>
                            </li>
                            <li>
                              <a href="error.html">Error Page</a>
                            </li>
                          </ul>
                        </li>
                        <li className="current dropdown">
                          <a href="#">Services</a>
                          <ul>
                            <li>
                              <a href="service.html">Our Services</a>
                            </li>
                            <li>
                              <a>Pets Full Grooming</a>
                            </li>
                            <li>
                              <a>Dog Training</a>
                            </li>
                            <li>
                              <a>Dog Walking</a>
                            </li>
                            <li>
                              <a>Dog Full Care</a>
                            </li>

                            <li>
                              <a href="single-service-6.html">
                                Coat Handler Pets
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="gallery.html">Gallery</a>
                        </li>
                        <li className="dropdown">
                          <a href="#">News</a>
                          <ul>
                            <li>
                              <a href="blog.html">Our News</a>
                            </li>
                            <li>
                              <a href="blog-single.html">Single News</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
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
        {/*Sticky Header*/}
        <div className="sticky-header">
          <div className="container clearfix">
            <figure className="logo-box">
              <a href="index-2.html">
                <img src="images/small-logo.png" alt="" />
              </a>
            </figure>
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
                <div className="navbar-collapse collapse clearfix">
                  <ul className="navigation clearfix">
                    <li className="dropdown">
                      <Link to={"/home"}>Home</Link>
                      <ul>
                        <li>
                          <a href="index-2.html">Home Page 01</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home Page 02</a>
                        </li>
                        <li className="dropdown">
                          <a href="#">Header Styles</a>
                          <ul>
                            <li>
                              <a href="index-2.html">Header Style 01</a>
                            </li>
                            <li>
                              <a href="index-3.html">Header Style 02</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#">About</a>
                      <ul>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="error.html">Error Page</a>
                        </li>
                      </ul>
                    </li>
                    <li className="current dropdown">
                      <a href="#">Services</a>
                      <ul>
                        <li>
                          <a href="service.html">Our Services</a>
                        </li>
                        <li>
                          <a href="single-service-1.html">Pets Full Grooming</a>
                        </li>
                        <li>
                          <a href="single-service-2.html">Health Checkups</a>
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
                            Cleaning &amp; Plucking
                          </a>
                        </li>
                        <li>
                          <a href="single-service-6.html">Coat Handler Pets</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="gallery.html">Gallery</a>
                    </li>
                    <li className="dropdown">
                      <a href="#">News</a>
                      <ul>
                        <li>
                          <a href="blog.html">Our News</a>
                        </li>
                        <li>
                          <a href="blog-single.html">Single News</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* sticky-header end */}
      </header>
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
                    <a>
                      <img src={`${images?.singlService1}`} alt="" />
                    </a>
                  </figure>
                  <div className="lower-content">
                    <h2>
                      <a>
                        Pets Full
                        <br />
                        Grooming
                      </a>
                    </h2>
                    <div className="text">
                      There are many variations of passages of ipsum available
                      but the majority red.
                    </div>
                    <div className="link">
                      <a>Read more</a>
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
                    <a>
                      <img src={`${images?.singlService2}`} alt="" />
                    </a>
                  </figure>
                  <div className="lower-content">
                    <h2>
                      <a>
                        Dog
                        <br />
                        Training
                      </a>
                    </h2>
                    <div className="text">
                      There are many variations of passages of ipsum available
                      but the majority red.
                    </div>
                    <div className="link">
                      <a>Read more</a>
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
                    <a>
                      <img src={`${images?.singlService3}`} alt="" />
                    </a>
                  </figure>
                  <div className="lower-content">
                    <h2>
                      <a>
                        Dog
                        <br />
                        Walking
                      </a>
                    </h2>
                    <div className="text">
                      There are many variations of passages of ipsum available
                      but the majority red.
                    </div>
                    <div className="link">
                      <a>Read more</a>
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
                    <a>
                      <img src={`${images?.singlService5}`} alt="" />
                    </a>
                  </figure>
                  <div className="lower-content">
                    <h2>
                      <a>
                        Pets
                        <br />
                        Full Care
                      </a>
                    </h2>
                    <div className="text">
                      There are many variations of passages of ipsum available
                      but the majority red.
                    </div>
                    <div className="link">
                      <a>Read more</a>
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
                        <Link to={"/home"}>Home</Link>
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
        onClick={handleScrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      {/* jequery plugins */}
      {/* main-js */}
      {/* End of .page_wrapper */}
      {/* Mirrored from azim.commonsupport.com/Poopet/service.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 17 Jan 2024 13:24:43 GMT */}
    </>
  );
}

export default PetService;
