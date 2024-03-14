import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useImmer } from "use-immer";

function StatsInfo() {
  const [stateType, setStateType] = useState("user");
  const [statData, setStatData] = useImmer({
    userData: [],
    serviceData: [],
  });

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const fetchUserData = async () => {
    const getUserData = await axios.get("http://127.0.0.1:5000/getUserCount");
    setStatData((draft) => {
      draft.userData = getUserData;
    });
  };

  const fetchServiceData = async () => {
    const getServiceData = await axios.get(
      "http://127.0.0.1:5000/serviceStats"
    );

    setStatData((draft) => {
      draft.serviceData = getServiceData;
    });
  };

  useEffect(() => {
    if (stateType === "user") {

      statData?.userData.length === 0 && fetchUserData();
    } else if (stateType === "service" || "revanue") {
      statData?.serviceData.length === 0 &&  fetchServiceData();
      
    }
  }, [stateType]);
  return (
    <div className="container">
      <div className="text-left mt-5 ml-4">
        <button
          className={`btn ${
            stateType === "user" ? "btn-success" : "btn-outline-secondary"
          }`}
          onClick={() => {
            setStateType("user");
          }}
        >
          User
        </button>
        <button
          className={`btn ${
            stateType === "revanue" ? "btn-success" : "btn-outline-secondary"
          }`}
          onClick={() => {
            setStateType("revanue");
          }}
        >
          Revanue
        </button>
        <button
          className={`btn ${
            stateType === "service" ? "btn-success" : "btn-outline-secondary"
          }`}
          onClick={() => {
            setStateType("service");
          }}
        >
          Service
        </button>
      </div>
      <div className="container" style={{ marginTop: "40px" }}>
        {stateType === "user" && (
          <AreaChart
            width={1200}
            height={500}
            data={statData?.userData?.data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="user"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        )}
        {stateType === "service" && (
          <AreaChart
            width={1200}
            height={500}
            data={statData?.serviceData?.data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="profit"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        )}
        {stateType === "revanue" && (
          <AreaChart
            width={1200}
            height={500}
            data={statData?.serviceData?.data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="month" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="service"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        )}
      </div>
    </div>
  );
}

export default StatsInfo;
