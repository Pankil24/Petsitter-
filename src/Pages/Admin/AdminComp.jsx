import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";

function AdminComp() {
  const [data, setData] = useState();
  const [detailsType, setDetailsType] = useState("user");
  const [loading, setLoading] = useState(false);

  console.log("Data ==>", data);
  const getUserData = async () => {
    setLoading(true);
    const result = await axios.get("http://localhost:5000/users");

    setLoading(false);
    setData(result?.data);
  };
  const getServiceData = async () => {
    setLoading(true);
    const result = await axios.get("http://127.0.0.1:5000/serviceDetails");
    setData(result?.data);

    setLoading(false);
  };
  useEffect(() => {
    if (detailsType === "user") {
      getUserData();
    } else {
      getServiceData();
    }
  }, [detailsType]);
  return (
    <>
      {loading && <Loader />}
      <div className="container">
        <div className="mt-3">
          <button
            className=" pl-3 pr-3"
            style={{
              backgroundColor: detailsType === "user" ? "#343a40" : "#6c757d",
              color: detailsType === "user" ? "white" : "black",
              padding: "4px",
              borderRadius: "10px 0px 0px 0px",
            }}
            onClick={() => {
              setDetailsType("user");
            }}
          >
            User
          </button>
          <button
            className="pl-3 pr-3"
            style={{
              backgroundColor:
                detailsType === "service" ? "#343a40" : "#6c757d",
              color: detailsType === "service" ? "white" : "black",
              padding: "4px",
              borderRadius: "0px 10px 0px 0px",
            }}
            onClick={() => {
              setDetailsType("service");
            }}
          >
            Service
          </button>
        </div>
        {detailsType === "user" && (
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">No:</th>
                <th scope="col">User Name</th>
                <th scope="col">User Type</th>
                <th scope="col">Phone Number</th>
                <th scope="col">email</th>
                <th scope="col">Gender</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <th>{item.username}</th>
                  <td>{item?.user_type}</td>
                  <td>{item?.phone_number}</td>
                  <td>{item?.email}</td>
                  <td>{item?.gender}</td>
                  <td>{item?.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {detailsType === "service" && (
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">No:</th>
                <th scope="col">User Name</th>
                <th scope="col">Dog Name</th>
                <th scope="col">Dog Breed</th>
                <th scope="col">Height</th>
                <th scope="col">Weight</th>
                <th scope="col">Age</th>
                <th scope="col">Gender</th>
                <th scope="col">Service Type</th>
                <th scope="col">Service Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{item.username}</td>
                  <td>{item.dogname}</td>
                  <td>{item.breed}</td>
                  <td>{item.height}</td>
                  <td>{item.weight}</td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>{item.servicetype}</td>
                  <td>
                    {item?.service_date?.slice(0, 10)} /{" "}
                    {item?.service_date?.slice(10)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default AdminComp;
