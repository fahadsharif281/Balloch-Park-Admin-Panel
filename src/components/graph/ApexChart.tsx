import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { getAllLocationsByTypeApiCall } from "../../services/general.services";

const ApexChart: React.FC = () => {
  useEffect(() => {
    getAllLocationsByTypeApiCall("walking-route");
  }, []);
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
    },
    series: [
      {
        name: "Users",
        data: [45, 52, 38, 45, 19, 23, 2, 10, 23, 5, 7, 8, 10],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.001,
        opacityFrom: 0.33,
        opacityTo: 0.11,
      },
    },
    colors: ["green"],
    xaxis: {
      labels: { hideOverlappingLabels: false },
      categories: [
        "Walking",
        "Dog walk",
        "Toilets",
        "Entrance",
        "Amenities",
        "View point",
        "Nature",
        "Play park",
        "Garden",
        "Table benches",
        "Water safety",
        "Castle",
        "Exit",
      ],
    },
    yaxis: {
      tickAmount: 7,
    },
  };
  console.log(options.xaxis?.categories, "options");
  return (
    <div>
      <ReactApexChart
        options={options}
        series={options.series}
        type="area"
        height={400}
        width="100%"
      />
    </div>
  );
};

export default ApexChart;
