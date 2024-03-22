import React from "react";
import images from "../../../images/images";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ServiceForm from "../../Components/ServiceForm";
import { CheckPageAccess, handleScrollToTop } from "../../lib/staticFuntions";
import AccessDeniedPage from "../../Components/AccessDeniedPage";

function PetGromming() {
  const params = new URL(document.location).searchParams;
  const serviceType = atob(params.get("serviceType"));
  return (
    <>
      {CheckPageAccess() ? (
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
                    <a href="">Service</a>
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
                          {serviceType === "dog_grooming" && (
                            <p>
                              Consultation: Our experienced groomers will start
                              by having a consultation with you to discuss your
                              pet's specific needs and preferences. We'll talk
                              about their coat type, any health concerns, and
                              the style you're aiming for.
                            </p>
                          )}

                          {serviceType === "dog_training" && (
                            <p>
                              Initial Consultation: We'll start with a
                              comprehensive consultation to discuss your pet's
                              behavior, temperament, and training goals. Whether
                              you're dealing with puppy basics or behavioral
                              issues in an older dog, we'll create a customized
                              training plan to meet your needs.
                            </p>
                          )}

                          {serviceType === "dog_walking" && (
                            <p>
                              Personalized Consultation: Before we hit the
                              trails, we'll schedule a consultation to get to
                              know your pet's personality, energy level, and any
                              specific needs or preferences they may have. This
                              helps us tailor the walk to their individual
                              requirements.
                            </p>
                          )}

                          {serviceType === "dog_care" && (
                            <p>
                              Daily Check-Ins: Our experienced and caring pet
                              sitters will visit your home daily to check in on
                              your pets. We'll ensure they have fresh food and
                              water, administer any necessary medications, and
                              provide companionship and cuddles.
                            </p>
                          )}
                          {serviceType === "dog_grooming" && (
                            <p>
                              Bathing: We use only the finest pet-friendly
                              shampoos and conditioners to cleanse your pet's
                              coat thoroughly. Whether they need a simple bath
                              or a medicated treatment, we've got you covered.
                            </p>
                          )}
                          {serviceType === "dog_training" && (
                            <p>
                              Positive Reinforcement Techniques: At Pet-sitter,
                              we believe in using positive reinforcement methods
                              to encourage good behavior and build trust between
                              you and your pet. Our trainers use treats, praise,
                              and play to motivate your pet and make learning
                              fun.
                            </p>
                          )}

                          {serviceType === "dog_walking" && (
                            <p>
                              Flexible Scheduling: We understand that life can
                              be busy, so we offer flexible scheduling options
                              to accommodate your lifestyle. Whether you need
                              daily walks, occasional outings, or weekend
                              adventures, we've got you covered.
                            </p>
                          )}
                          {serviceType === "dog_care" && (
                            <p>
                              Regular Exercise: Physical activity is essential
                              for your pet's health and well-being. We'll take
                              your dog for daily walks or playtime in the
                              backyard to keep them active and stimulated. For
                              cats, we'll engage them in interactive play
                              sessions to satisfy their natural instincts.
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="content-style-two">
                        <h3>Safety Standards are Included</h3>
                        <div className="text">
                          {serviceType === "dog_grooming" && (
                            <p>
                              Brushing and Detangling: To keep your pet's coat
                              shiny and healthy, we'll gently brush out any
                              tangles or mats, removing loose fur and minimizing
                              shedding
                            </p>
                          )}
                          {serviceType === "dog_training" && (
                            <p>
                              Basic Obedience Commands: We'll teach your pet
                              essential obedience commands such as sit, stay,
                              come, heel, and down, using gentle and effective
                              training techniques. These commands form the
                              foundation of good behavior and are essential for
                              your pet's safety and well-being.
                            </p>
                          )}
                          {serviceType === "dog_walking" && (
                            <p>
                              Safe Transportation: If your pet needs
                              transportation to their favorite walking spot, we
                              provide safe and comfortable rides in our
                              pet-friendly vehicles equipped with all the
                              necessary safety measures.
                            </p>
                          )}

                          {serviceType === "dog_care" && (
                            <p>
                              Customized Feeding: We understand that every pet
                              has unique dietary needs and preferences. Whether
                              your pet requires a special diet, medication
                              administration, or simply their favorite treats,
                              we'll follow your instructions to ensure they
                              receive proper nutrition and hydration.
                            </p>
                          )}
                        </div>
                        <div className="image-box">
                          <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                              <figure className="image">
                                <img
                                  src={`${images?.serviceDetails2}`}
                                  alt=""
                                />
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
                                <img
                                  src={`${images?.serviceDetails3}`}
                                  alt=""
                                />
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
                            <a href="">Pets Full Grooming</a>
                          </li>
                          <li>
                            <a href="">Regular Health Checkups</a>
                          </li>
                          <li>
                            <a href="">Styling Your Pets</a>
                          </li>
                          <li>
                            <a href="">Bath, Dry &amp; Brush</a>
                          </li>
                          <li>
                            <a href=" ">Pets Cleaning &amp; Plucking</a>
                          </li>
                          <li>
                            <a href="">Coat Handler Pets</a>
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
                <ServiceForm serviceType={`${serviceType}`} />
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
      ) : (
        <AccessDeniedPage />
      )}
    </>
  );
}

export default PetGromming;
