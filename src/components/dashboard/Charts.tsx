"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
const Charts = ({ projectLength }: { projectLength: number | string }) => {
  const options = {
    plugins: {
      legend: {
        position: "left",
        labels: {
          color: "#000",
          font: {
            size: 15,
            weight: "bold",
          },
        },
      },
    },
  } as const;
  const data = {
    labels: ["Projects", "Tasks", "Users"],
    datasets: [
      {
        label: "Overview",
        data: [projectLength, 3, 4],
        backgroundColor: ["#2d7ead", "#5186c5", "#3b93c6"],
        // borderColor: ["#38bdf8", "#22c55e", "#f59e0b"],
        borderWidth: 0,
      },
    ],
  };
  return <Doughnut data={data} options={options} />;
};

export default Charts;
