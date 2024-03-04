import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import ListInfo from "./ListComp/ListInfo";
import StatsInfo from "./StatsComp/StatsInfo";
import { checkPageAccess } from "../lib/staticFuntions";
import images from "../../images/images";

function AdminComp() {
  const [dataType, setDataType] = useState("list");
  const [loading, setLoading] = useState(false);

  return (
    <>
      {checkPageAccess() ? (
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
          </div>

          {dataType === "list" ? <ListInfo /> : ""}
          {dataType === "stats" ? <StatsInfo /> : ""}
        </div>
      ) : (
        <div className="mt-4">
          <img
            style={{ height: "92px" }}
            src={`${images?.errorImage}`}
            alt=""
          />
          <p className="mt-4">You didn't have access to this page</p>
        </div>
      )}
      {loading && <Loader />}
    </>
  );
}

export default AdminComp;
