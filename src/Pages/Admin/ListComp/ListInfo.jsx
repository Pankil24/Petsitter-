import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../Components/Loader";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import { useImmer } from "use-immer";

function ListInfo() {
  const [data, setData] = useState();
  const [detailsType, setDetailsType] = useState("user");
  const [loading, setLoading] = useState(false);
  const [filterData, setFilterData] = useImmer({
    pageIndex: 0,
    pageSize: 10,
    detailsType: "user",
  });

  const getUserData = async () => {
    setLoading(true);
    try{
      const result = await axios.get(
        `http://127.0.0.1:5000/users?pageSize=${filterData?.pageSize}&pageIndex=${
          filterData?.pageIndex + 1
        }`
      );

      setData(result?.data);
    }catch(error){
      console.log(error.message)
    }
    setLoading(false);
  };
  const getServiceData = async () => {
    setLoading(true);
    try{

      const result = await axios.get(
        `http://127.0.0.1:5000/serviceDetails?pageSize=${
          filterData?.pageSize
        }&pageIndex=${filterData?.pageIndex + 1}`
      );
      setData(result?.data);
    }catch(error){
      console.log(error.message)
    }
    setLoading(false);
  };

  const handlePageClick = ({ selected }) => {
    setFilterData((draft) => {
      draft.pageIndex = selected;
    });
  };
  useEffect(() => {
    if (filterData?.detailsType === "user") {
      getUserData();
    } else {
      getServiceData();
    }
  }, [filterData]);
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
              setFilterData((draft) => {
                draft.pageIndex = 0;
                draft.pageSize = 10;
                draft.detailsType = "user";
              });
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
              setFilterData((draft) => {
                draft.pageIndex = 0;
                draft.pageSize = 10;
                draft.detailsType = "service";
              });
            }}
          >
            Service
          </button>
        </div>
        {filterData?.detailsType === "user" && (
          <table class="table  text-left table-striped table-hover">
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
              {data?.data?.map((item, index) => (
                <tr>
                  <th>{item?.id}</th>
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
        {filterData?.detailsType === "service" && (
          <table class="table text-left table-striped table-hover">
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
              {data?.data?.map((item, index) => (
                <tr>
                  <th>{item?.id}</th>
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

        <ReactPaginate
          breakLabel="..."
          nextLabel={<FontAwesomeIcon icon={faForward} />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={data?.totalPages}
          previousLabel={<FontAwesomeIcon icon={faBackward} />}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          forcePage={filterData?.pageIndex}
        />
      </div>
    </>
  );
}

export default ListInfo;
