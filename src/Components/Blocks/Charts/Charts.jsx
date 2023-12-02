"use client"
import React, { useRef } from 'react';
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useCharts } from "@/app/store/useCharts";
import { CategoryScale } from 'chart.js/auto';
Chart.register(CategoryScale);

export default function Charts() {
  const Data = useCharts(state => state.data);
  const chartRef = useRef(null);

  const getGradient = (ctx, chartArea) => {
    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    gradient.addColorStop(0, 'rgba(116, 62, 225, 0.6)');
    gradient.addColorStop(0.65, 'rgba(116, 62, 225, 0.4)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    return gradient;
  };

  let chartData = {
    labels: Data.map((data) => data.title),
    datasets: [{
      label: "",
      data: Data.map((data) => data.day),
      fill: true,
      backgroundColor: function(context) {
        const chart = context.chart;
        const {ctx, chartArea} = chart;
        if (!chartArea) {
          return null;
        }
        return getGradient(ctx, chartArea);
      },
      borderColor: "#743EE1",
      borderWidth: 2,
      pointBackgroundColor: '#000',
      pointBorderColor: '#743EE1',
      pointBorderWidth: 3,
      tension: 0.2,
      pointRadius: 5,
    }]
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: ""
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        ticks: {
          color: "#fff",
          minRotation: 90,
        },
        grid: {
          color: "rgba(255,255,255,0.1)"
        }
      },
      y: {
        ticks: {
          color: "#fff"
        },
        grid: {
          color: "rgba(255,255,255,0.1)"
        }
      }
    }
  };

  return (
    <section className="charts">
      <div className="charts__wrapper wrapper">
        <h3 className="title">Этапы разработки проекта</h3>
        <Line
          ref={chartRef}
          data={chartData}
          options={options}
        />
      </div>
    </section>
  );
}