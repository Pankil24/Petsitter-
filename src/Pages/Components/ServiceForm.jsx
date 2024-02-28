import { DatePicker } from "antd";
import axios from "axios";
import dayjs from "dayjs";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import * as Yup from "yup";
import Loader from "./Loader";
import Select from "react-select";

function ServiceForm(props) {
  const formate = "DD-MM-YYYY";
  const date = new Date();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const initVal = {
    dogName: "",
    age: null,
    height: null,
    weight: null,
    gender: "",
    breed: "",
    dateStr: "",
    dateStrEnd: "",
    servicetype: props.serviceType,
  };

  const options = [
    {
      value: "Tommy",
      label: "Tommy",
      dogName: "Tommy",
      age: 17,
      height: 10,
      weight: 30,
      gender: "male",
      breed: "labrador",
    },
    {
      value: "COCO",
      label: "COCO",
      dogName: "COCO",
      age: 10,
      height: 5,
      weight: 40,
      gender: "Female",
      breed: "dachshund",
    },
    {
      value: "bruno",
      label: "bruno",
      dogName: "bruno",
      age: 18,
      height: 3,
      weight: 50,
      gender: "male",
      breed: "boxer",
    },
    {
      value: "Non of above",
      label: "Non of above",
    },
  ];
  const validationSchema = Yup.object({
    dogName: Yup.string().required("Please enter dog name"),
    age: Yup.number()
      .max(50, "Please enter valid age")
      .required("Please enter age"),
    height: Yup.number().required("Please enter height"),
    weight: Yup.number().required("Please enter weight"),
    gender: Yup.string().required("Please enter gender"),
    breed: Yup.string().required("Please enter breed"),
    dateStr: Yup.string().when("servicetype", {
      is: (value) => value === "dog_care",
      then: () => Yup.date().required("Please enter start date"),
    }),
    dateStrEnd: Yup.string().when(["servicetype", "dateStr"], {
      is: (servicetype, dateStr) => servicetype === "dog_fullcare" && dateStr,
      then: () => Yup.date().required("Please enter end date"),
    }),
  });

  const [intivalValue, setIntivalValue] = useState(initVal);

  return (
    <div>
      {loading && <Loader />}
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
                  onSubmit={async (values) => {
                    let data;

                    if (values?.dateStr) {
                      data = {
                        dogname: values?.dogName,
                        username: localStorage.getItem("userName"),
                        breed: values?.breed,
                        height: values?.height,
                        weight: values?.weight,
                        age: values?.age,
                        gender: values?.gender,
                        servicetype: props.serviceType,
                        message: values?.message,
                        start_datetime: values?.dateStr,
                        end_datetime: values?.dateStrEnd,
                      };
                    } else {
                      data = {
                        dogname: values?.dogName,
                        username: localStorage.getItem("userName"),
                        breed: values?.breed,
                        height: values?.height,
                        weight: values?.weight,
                        age: values?.age,
                        gender: values?.gender,
                        servicetype: props.serviceType,
                        message: values?.message,
                      };
                    }
                    setLoading(true);
                    const result = await axios.post(
                      "http://localhost:5000/userService",
                      data,
                      {
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }
                    );
                    if (result?.status === 200) {
                      Swal.fire({
                        icon: "success",
                        title: "Yeeyyyy...",
                        text: "Your service is confirmed",
                        footer: '<a href="#">Have any query?</a>',
                      }).then((result) => {
                        if (result?.isConfirmed === true) {
                          navigate("/home");
                        }
                      });
                    }

                    setLoading(false);
                  }}
                >
                  {({ values, setFieldValue, handleChange, errors }) => (
                    <Form>
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 mb-3 text-left">
                          Select dog details
                          <Select
                            className="text-left rounded"
                            value={
                              values?.dogSelect && {
                                value: values?.dogName,
                                label: values?.dogName,
                              }
                            }
                            onChange={(event) => {
                              if (event.label === "Non of above") {
                                setIntivalValue({ ...initVal, dogSelect: "" });
                              } else {
                                setIntivalValue(event);
                              }
                            }}
                            options={options}
                          />
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <input
                            type="text"
                            name="dogName"
                            placeholder="Dog Name"
                            value={values?.dogName}
                            onChange={handleChange}
                          />
                          <div
                            className="text-left mt-2"
                            style={{ marginLeft: "25px" }}
                          >
                            <small style={{ color: "red" }}>
                              {errors.dogName}{" "}
                            </small>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <input
                            type="number"
                            name="age"
                            placeholder="Dog age"
                            value={values?.age ? values?.age : ""}
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
                          <input
                            type="number"
                            name="height"
                            placeholder="Dog height"
                            value={values?.height ? values?.height : ""}
                            onChange={handleChange}
                          />
                          <div
                            className="text-left mt-2"
                            style={{ marginLeft: "25px" }}
                          >
                            <small style={{ color: "red" }}>
                              {errors.height}{" "}
                            </small>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <input
                            type="number"
                            name="weight"
                            placeholder="Dog weight"
                            value={values?.weight ? values?.weight : ""}
                            onChange={handleChange}
                          />
                          <div
                            className="text-left mt-2"
                            style={{ marginLeft: "25px" }}
                          >
                            <small style={{ color: "red" }}>
                              {errors.weight}{" "}
                            </small>
                          </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                          <select
                            value={values?.gender}
                            onChange={(e) => {
                              setFieldValue("gender", e.target.value);
                            }}
                          >
                            <option value="">Dog Gender</option>
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
                            value={values?.breed}
                            onChange={(e) => {
                              setFieldValue("breed", e.target.value);
                            }}
                          >
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
                          <div
                            className="text-left mt-2"
                            style={{ marginLeft: "25px" }}
                          >
                            <small style={{ color: "red" }}>
                              {errors.breed}{" "}
                            </small>
                          </div>
                        </div>
                        {props.serviceType === "dog_care" && (
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
                              <div
                                className="text-left mt-2"
                                style={{ marginLeft: "25px" }}
                              >
                                <small style={{ color: "red" }}>
                                  {errors.dateStr}{" "}
                                </small>
                              </div>
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
                                value={
                                  values?.dateStrEnd &&
                                  dayjs(values?.dateStrEnd)
                                }
                                onChange={(date, dateString) => {
                                  setFieldValue("dateObjEnd", date);
                                  setFieldValue("dateStrEnd", dateString);
                                }}
                                minDate={dayjs(values?.dateStr).add(1, "day")}
                              />
                              <div
                                className="text-left mt-2"
                                style={{ marginLeft: "25px" }}
                              >
                                <small style={{ color: "red" }}>
                                  {errors.dateStrEnd}{" "}
                                </small>
                              </div>
                            </div>
                          </>
                        )}

                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea
                            name="message"
                            placeholder="Any needed precautions"
                            defaultValue={""}
                            value={values?.message}
                            onChange={(e) => {
                              setFieldValue("message", e.target.value);
                            }}
                          />
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                          <button type="submit" className="theme-btn">
                            Get service
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
