import React, { useState, useEffect } from "react";
import { MimicMetrics } from "../API";
import Card from "./Card";
const convert = (timestamp) => {
  const d = new Date(timestamp);
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const time = hour + ":" + minutes;
  return time;
};
const Metrics = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const now = Date.now();
      // const fiveMinutesAgo = now - 5 * 60 * 1000; // 5 minutes ago
      const oneHourAgo = now - 60 * 60 * 1000;
      const metrics = await MimicMetrics.fetchMetrics({
        startTs: oneHourAgo,
        endTs: now,
      });
      setData(metrics);
      // Do something with the metrics data
    } catch (error) {
      console.error("Error fetching metrics:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures that fetchData is called only once when the component mounts
  const now = Date.now();
  const fiveMinutesAgo = now - 5 * 60 * 1000; // 5 minutes ago
  return (
    <div className="flex flex-wrap border border-solid border-blue-200 mx-auto">
      <div className="items-center flex flex-wrap border border-solid border-blue-200 my-2 mx-2 w-screen">
        <h1 className="text-xl font-semibold m-3">Metrics</h1>
        <div className="text-xs">
          {new Date().toLocaleDateString("en-GB") +
            "  " +
            convert(fiveMinutesAgo)}{" "}
          {" -> "}{" "}
          {new Date(Date.now() - 5 * 60 * 1000).toLocaleDateString("en-GB") +
            "  " +
            convert(now)}
        </div>
      </div>
      <div className="flex flex-wrap mx-auto border border-solid border-blue-200">
        <Card {...data[0]} className="my-2" />
        <Card {...data[1]} className="my-2" />
        <Card {...data[2]} className="my-2" />
        <Card {...data[3]} className="my-2" />
        {/* add for area */}
      </div>
    </div>
  );
};

export default Metrics;
