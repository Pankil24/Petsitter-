import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import ListInfo from "./ListComp/ListInfo";
import StatsInfo from "./StatsComp/StatsInfo";
import { CheckPageAccess } from "../lib/staticFuntions";
import AccessDeniedPage from "../Components/AccessDeniedPage";
import { useNavigate } from "react-router-dom";

function AdminComp() {
  const [dataType, setDataType] = useState("list");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  return (
    <>
      { CheckPageAccess() ? (
        <div className="container">
          <div className="mt-3 text-left">
            <button
              className={dataType === "list" ? `btn btn-primary` : "btn"}
              onClick={() => {
                setDataType("list");
              }}
            >
              List
            </button>
            <button
              className={dataType === "stats" ? "btn btn-primary" : "btn"}
              onClick={() => {
                setDataType("stats");
              }}
            >
              Stats
            </button>
            <button className="btn btn-danger ml-3" onClick={()=>{
              navigate("/")
              localStorage.removeItem("userName")
              localStorage.removeItem("userType")
            }}>
              Log out
            </button>
          </div>

          {dataType === "list" ? <ListInfo /> : ""}
          {dataType === "stats" ? <StatsInfo /> : ""}
        </div>
      ) : (
       <AccessDeniedPage/>
      )}
      {loading && <Loader />}
    </>
  );
}

export default AdminComp;
