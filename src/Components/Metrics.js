import React, { useState, useEffect } from "react";
import { MimicMetrics } from "../API";
import Card from "./Card";
import Area from "./Area";
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

  return (
    <div className="items-center">
      <h1 className="text-l font-semibold m-2">Metrics</h1>
      <p className="text-sm">
        {new Date().toLocaleDateString("en-GB")} {" -> "}{" "}
        {new Date(Date.now() - 5 * 60 * 1000).toLocaleDateString("en-GB")}
      </p>
      <div>
        <Card {...data[0]} />
        <Card {...data[1]} />
        <Card {...data[2]} />
        {/* <Area {...data[3]} /> */}
      </div>
    </div>
  );
};

export default Metrics;
