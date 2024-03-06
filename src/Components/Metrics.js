import React from "react";
import { MimicMetrics } from "../API";
const Metrics = () => {
  //   const now = Date.now();
  //   const fiveMinutesAgo = now - 5 * 60 * 1000; // 5 minutes ago
  //   MimicMetrics.fetchMetrics({ startTs: fiveMinutesAgo, endTs: now })
  //     .then((metrics) => {
  //       console.log(metrics);
  //       // Do something with the metrics data
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching metrics:", error);
  //     });
  const fetchData = async () => {
    try {
      const now = Date.now();
      const fiveMinutesAgo = now - 5 * 60 * 1000; // 5 minutes ago
      const metrics = await MimicMetrics.fetchMetrics({
        startTs: fiveMinutesAgo,
        endTs: now,
      });
      console.log(metrics);
      // Do something with the metrics data
    } catch (error) {
      console.error("Error fetching metrics:", error);
    }
  };

  fetchData();
  return (
    <div className="bg-slate-300">
      <div className="bg-white m-4"> Metrics {" date + time"} </div>
    </div>
  );
};

export default Metrics;
