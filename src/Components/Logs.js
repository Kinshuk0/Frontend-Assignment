import React, { useState, useEffect } from "react";
import { MimicLogs } from "../API";
import Spinner from "../Assets/Spinner.svg";
const convert = (timestamp) => {
  const d = new Date(timestamp);
  const hour = d.getHours();
  let minutes = d.getMinutes();
  minutes = minutes.length === 1 ? "0" + minutes : minutes;
  const time = hour + ":" + minutes;
  return time;
};
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const milliseconds = date.getMilliseconds().toString().padStart(3, "0");
  return `${month} ${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
}
const Logs = () => {
  const [data, setData] = useState([]);
  const startTs = Date.now() - 24 * 60 * 60 * 1000;
  const endTs = Date.now();
  const fetchPreviousLogs = async () => {
    try {
      const startTs = Date.now() - 24 * 60 * 60 * 1000; // 24 hours ago
      const endTs = Date.now();
      const limit = 100;
      const logs = await MimicLogs.fetchPreviousLogs({ startTs, endTs, limit });
      setData(logs);
      //console.log("Previous logs:", logs);
      console.log(data);
    } catch (error) {
      console.error("Error fetching previous logs:", error);
    }
  };
  //logic for the subscreibe log i dont know clearly what that means so I a keeping it chill
  // const subscribeToLiveLogs = async () => {
  //   try {
  //     const unsubscribe = MimicLogs.subscribeToLiveLogs((nextLog) => {
  //       console.log("Received live log:", nextLog);
  //       // Process the received live log here
  //     });

  //     // To stop receiving live logs, call unsubscribe()
  //     // unsubscribe();
  //   } catch (error) {
  //     console.error("Error subscribing to live logs:", error);
  //   }
  // };
  useEffect(() => {
    fetchPreviousLogs();
    // subscribeToLiveLogs();
  }, []);
  return (
    <div>
      <div>
        <p className="text-right text-[0.6rem] mx-2 py-1">
          Showing logs for{" "}
          {new Date().toLocaleDateString("en-GB") + "  " + convert(startTs)}
        </p>
      </div>
      <div className="bg-slate-900 rounded-md mx-2 px-4 h-[500px] overflow-scroll">
        <div className="flex justify-center">
          <img className="h-[15px] my-1" src={Spinner} alt="spinner img" />
          <span className="text-[#5E7BAA] m-[0.25rem] text-[10px]">
            Loading previous 100 Logs
          </span>
        </div>
        {data.map((obj) => {
          return (
            <div
              className="text-xs flex items-center py-1 overflow-scroll"
              key={obj.timestamp}
            >
              <span className="text-[#5E7BAA] whitespace-nowrap">
                {formatTimestamp(obj.timestamp) + " [info] "}
              </span>
              <p className="text-[#A8C3E8] whitespace-nowrap mx-2">
                {obj.message}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Logs;
