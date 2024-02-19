import axios from "axios";
import React, { useEffect, useState } from "react";

function AdminComp() {
  const [data, setData] = useState();
  const [detailsType, setDetailsType] = useState("user");

  console.log("Data ==>", data);
  const getUserData = async () => {
    const result = await axios.get("http://localhost:5000/users");
    console.log("Admin User data ==>", result);
    setData(result?.data);
  };
  const getServiceData = async () => {
    const result = await axios.get("http://127.0.0.1:5000/serviceDetails");

    console.log("Admin Service Data ==>", result);
    setData(result?.data);
  };
  useEffect(() => {
    if (detailsType === "user") {
      getUserData();
    } else {
      getServiceData();
    }
  }, [detailsType]);
  return (
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
            backgroundColor: detailsType === "service" ? "#343a40" : "#6c757d",
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
                <th>{index}</th>
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
                <th>{index}</th>
                <td>{item.username}</td>
                <td>{item.dogname}</td>
                <td>{item.breed}</td>
                <td>{item.height}</td>
                <td>{item.weight}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.servicetype}</td>
                <td>{new Date(item.service_date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminComp;
