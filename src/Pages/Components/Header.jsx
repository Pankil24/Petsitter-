import React, { useEffect } from "react";
import images from "../../images/images";
import { Link, useLocation } from "react-router-dom";
import { staticNav } from "../lib/staticFuntions";

function Header() {
  const location = useLocation();

  useEffect(() => {
    staticNav();
  }, []);
  return (
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
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" />
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
                  <a href="tel:+886668880000">6668880000</a>
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
                      <li
                        className="dropdown"
                        style={{
                          backgroundColor: location?.pathname.includes("/home")
                            ? "#e72636"
                            : "",
                        }}
                      >
                        <Link
                          className="pl-2 pr-3"
                          to={"/home"}
                          style={{
                            color: location?.pathname.includes("/home")
                              ? "white"
                              : "",
                          }}
                        >
                          Home
                        </Link>
                      </li>
                      <li className="dropdown">
                        <a href="#">About</a>
                      </li>
                      <li
                        className="current dropdown"
                        style={{
                          backgroundColor: location?.pathname.includes(
                            "/service"
                          )
                            ? "#e72636"
                            : "",
                        }}
                      >
                        <Link
                          className="pl-3 pr-3"
                          style={{
                            color: location?.pathname.includes("/service")
                              ? "white"
                              : "",
                          }}
                          to={"/service"}
                        >
                          Services
                        </Link>
                      </li>
                      <li>
                        <a href="gallery.html">Gallery</a>
                      </li>
                      <li className="dropdown">
                        <a href="#">News</a>
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
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
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
        </div>
      </div>
      {/*Sticky Header*/}
      <div className="sticky-header">
        <div className="container clearfix">
          <figure className="logo-box">
            <a href="index-2.html">
              <img src={`${images?.logo}`} alt="" />
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
                  <li
                    className="dropdown "
                    style={{
                      backgroundColor: location?.pathname.includes("/home")
                        ? "#e72636"
                        : "",
                    }}
                  >
                    <Link
                      className="ps-3 pe-3"
                      to={"/home"}
                      style={{
                        color: location?.pathname.includes("/home")
                          ? "white"
                          : "",
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li className="dropdown">
                    <a href="#">About</a>
                  </li>
                  <li
                    className="current dropdown"
                    style={{
                      backgroundColor: location?.pathname.includes("/service")
                        ? "#e72636"
                        : "",
                    }}
                  >
                    <Link
                      to={"/service"}
                      style={{
                        color: location?.pathname.includes("/service")
                          ? "white"
                          : "",
                      }}
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li className="dropdown">
                    <a href="#">News</a>
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
  );
}

export default Header;
