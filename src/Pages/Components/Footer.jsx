import React from "react";

function Footer() {
  return (
    <footer className="main-footer gray-bg">
      <div className="footer-top">
        <div className="container">
          <div className="top-content clearfix">
            <figure className="footer-logo">
              <a href="index-2.html">
                <img src="images/footer-logo.png" alt="" />
              </a>
            </figure>
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
                    Etiam rhoncu sit amet adip scing simply thin sed ipsum dolor
                    sit amet adip dine scing not avilable in the martket lorem
                    ipsum sem neque.
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
  );
}

export default Footer;
