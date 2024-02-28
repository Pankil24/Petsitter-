import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../Components/Loader";
import ListInfo from "./ListComp/ListInfo";
import StatsInfo from "./StatsComp/StatsInfo";

function AdminComp() {

  const [dataType , setDataType] = useState("list")
  const [loading, setLoading] = useState(false);
  
  return (
    <>
      {loading && <Loader />}
      <div className="container">
        <div className="mt-3 text-left">
         <button className={dataType === "list" ? `btn btn-primary` : "btn"} onClick={()=>{
          setDataType("list")
         }}>List</button>
         <button className={dataType === "stats" ? "btn btn-primary" :"btn"} onClick={()=>{
          setDataType("stats")
         }}>Stats</button>
        </div>

        {
          dataType === "list" ? <ListInfo/> :""
        }
        {
          dataType === "stats" ? <StatsInfo /> :""
        }
      </div>
    </>
  );
}

export default AdminComp;
