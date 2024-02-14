import { DatePicker } from "antd";
import dayjs from "dayjs";
import { Form, Formik } from "formik";
import React from "react";

function ServiceForm({ serviceType }) {
  const formate = "DD-MM-YYYY";
  const date = new Date();
  console.log(
    "Dayjs ==>",
    dayjs(
      date.toLocaleDateString().replace("/", "-").replace("/", "-"),
      "YYYY-MM-DD"
    )
  );
  console.log("Today Date ==>", dayjs(new Date()));

  const intivalValue = {
    // dateStr: "",
  };

  return (
    <div>
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
                  //   validationSchema={validationSchema}
                  //   onSubmit={(values) => {
                  //     console.log(values);
                  //     navigate("/home");
                  //   }}
                >
                  {({ values, setFieldValue, handleChange, errors }) => (
                    <Form>
                      <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <input
                            type="text"
                            name="dogName"
                            placeholder="Dog Name"
                            // value={values?.email}
                            // onChange={handleChange}
                          />
                          <div
                            className="text-left mt-2"
                            style={{ marginLeft: "25px" }}
                          >
                            {/* <small style={{ color: "red" }}>
                            {errors.email}{" "}
                          </small> */}
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <input
                            type="number"
                            name="age"
                            placeholder="Dog age"
                            required=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <input
                            type="number"
                            name="height"
                            placeholder="Dog height"
                            required=""
                          />
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <input
                            type="number"
                            name="weight"
                            placeholder="Dog weight"
                            required=""
                          />
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <select value="Gender">
                            <option value="">Dog Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <select value="Gender">
                            <option value="">Dog Breed</option>
                            <option value="indian_spitz">indian Spitz</option>
                            <option value="indian_pariah_dog">
                              Indian pariah dog
                            </option>
                            <option value="labrador">labrador</option>
                            <option value="dachshund">dachshund</option>
                            <option value="golden_retriever">
                              Golden retriever
                            </option>
                            <option value="pug">Pug</option>
                            <option value="boxer">Boxer</option>
                            <option value="dalmatian">dalmatian</option>
                            <option value="pomeranian">pomeranian</option>
                          </select>
                        </div>
                        {serviceType === "dog_fullcare" && (
                          <>
                            <div className="col-lg-6 col-md-12 col-sm-12 ">
                              <DatePicker
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
                                // value={"20-03-2024"}
                                placeholder={"Start Date"}
                                value={
                                  values?.dateStr && dayjs(values?.dateStr)
                                }
                                onChange={(date, dateString) => {
                                  setFieldValue("dateObj", date);
                                  setFieldValue("dateStr", dateString);
                                }}
                                minDate={dayjs(new Date())}
                              />
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 ">
                              <DatePicker
                                disabled={values?.dateStr ? false : true}
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
                                placeholder={"End Date"}
                                onChange={(date, dateString) => {
                                  console.log("event date==>", date);
                                  console.log(
                                    "event dateString==>",
                                    dateString
                                  );
                                }}
                                minDate={dayjs(values?.dateStr).add(1, "day")}
                              />
                            </div>
                          </>
                        )}

                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea
                            name="message"
                            placeholder="Any needed precautions"
                            defaultValue={""}
                          />
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
    </div>
  );
}

export default ServiceForm;
