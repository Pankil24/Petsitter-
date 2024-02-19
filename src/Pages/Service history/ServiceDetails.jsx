import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { handleScrollToTop } from "../lib/staticFuntions";

function ServiceDetails() {
  const [data, setData] = useState();
  const userName = localStorage.getItem("userName");
  const getData = async () => {
    const result = await axios.get(
      `http://localhost:5000/serviceDetails?userId=${userName}`
    );
    console.log(result);

    setData(result?.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="">
      <Header />
      <div className="container">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">No:</th>

              <th scope="col">Dog Name</th>
              <th scope="col">Dog Breed</th>
              <th scope="col">Height</th>
              <th scope="col">Weight</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Service Type</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Service Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => (
              <tr>
                <th>{index}</th>
                <td>{item.dogname}</td>
                <td>{item.breed}</td>
                <td>{item.height}</td>
                <td>{item.weight}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <td>{item.servicetype}</td>
                <td>
                  {item.start_datetime
                    ? new Date(item?.start_datetime).toLocaleDateString()
                    : "-"}
                </td>
                <td>
                  {item.end_datetime
                    ? new Date(item?.end_datetime).toLocaleDateString()
                    : "-"}
                </td>
                <td>{new Date(item.service_date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        className="scroll-top scroll-to-target"
        id="arrow"
        data-target="html"
        onClick={handleScrollToTop}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </div>
  );
}

export default ServiceDetails;
