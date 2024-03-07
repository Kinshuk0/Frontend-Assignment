import React from "react";
import React from "react";
import Chart from "chart.js/auto";
import { Line, PolarArea } from "react-chartjs-2";
import { useState } from "react";
const convert = (timestamp) => {
  const d = new Date(timestamp);
  const hour = d.getHours();
  const minutes = d.getMinutes();
  const time = hour + ":" + minutes;
  return time;
};
const Card = (props) => {
  const [fillvalue, setFill] = useState(false);
  console.log("IamProps");
  const d = props.graphLines;
  const x = d?.[0]?.values;
  const y = d?.[1]?.values;
  const z = d?.[2]?.values;
  const valuesArrayX = x ? x.map((obj) => obj.value) : [];
  const valuesArrayY = y ? y.map((obj) => obj.value) : [];
  const valuesArrayZ = z ? z.map((obj) => obj.value) : [];
  const valuesTimes = x ? x.map((obj) => convert(obj.timestamp)) : [];
  //
  // console.log(valuesArray);
  // console.log("break");
  // console.log(valuesTimes);
  const data = {
    labels: valuesTimes,
    datasets: [
      {
        label: "Used",
        backgroundColor: "rgb(220, 38, 38)",
        borderColor: "rgb(220, 38, 38)",
        data: valuesArrayX,
        tension: 0.08,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: "Requested",
        backgroundColor: "rgb(37,99,235)",
        borderColor: "rgb(37,99,235)",
        data: valuesArrayY,
        tension: 0.08,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: "Limits",
        backgroundColor: "rgb(5,150,105)",
        borderColor: "rgb(5,150,105)",
        data: valuesArrayZ,
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false, // Hide legend labels and colors
      },
      layout: {
        padding: {
          left: 20,
          right: 20,
        },
      },
    },
  };
  return (
    <div className="w-1/2 p-2 border border-solid border-blue-200 ">
      <div>
        <p className="text-sm m-2">{props?.name}</p>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};

export default Card;
