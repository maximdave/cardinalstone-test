/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Scatter } from "react-chartjs-2";
import "chartjs-adapter-moment";
import {
  getWeekChart,
  getMonthChart,
  getThreeMonthsChart,
  getSixMonthsChart,
  getAYearChart,
  getTwoYearsChart,
} from "../../utils/allIndexApi";

const AllIndexChart = () => {
  const [weekChartData, setWeekChartData] = useState([]);
  const [monthChartData, setMonthChartData] = useState([]);
  const [threeMonthsChartData, setThreeMonthsChartData] = useState([]);
  const [sixMonthsChartData, setSixMonthsChartData] = useState([]);
  const [aYearChartData, setAYearChartData] = useState([]);
  const [twoYearsChartData, setTwoYearsChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Loadingerror, setLoadingError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      (async () => {
        try {
          setLoading(true);
          const result = await getWeekChart();
          setWeekChartData(result);
          setLoading(false);
        } catch (error) {
          setLoadingError(true);
          setLoading(false);
        }
      })();

      (async () => {
        try {
          setLoading(true);
          const result = await getMonthChart();
          setMonthChartData(result);
          setLoading(false);
        } catch (error) {
          setLoadingError(true);
          setLoading(false);
        }
      })();

      (async () => {
        try {
          setLoading(true);
          const result = await getThreeMonthsChart();
          setThreeMonthsChartData(result);
          setLoading(false);
        } catch (error) {
          setLoadingError(true);
          setLoading(false);
        }
      })();

      (async () => {
        try {
          setLoading(true);
          const result = await getSixMonthsChart();
          setSixMonthsChartData(result);
          setLoading(false);
        } catch (error) {
          setLoadingError(true);
          setLoading(false);
        }
      })();

      (async () => {
        try {
          setLoading(true);
          const result = await getAYearChart();
          setAYearChartData(result);
          setLoading(false);
        } catch (error) {
          setLoadingError(true);
          setLoading(false);
        }
      })();

      (async () => {
        try {
          setLoading(true);
          const result = await getTwoYearsChart();
          setTwoYearsChartData(result);
          setLoading(false);
        } catch (error) {
          setLoadingError(true);
          setLoading(false);
        }
      })();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const dateFormatter = (dateString) => {
    return new Date(
      dateString.split(" ")[0].split("/")[2],
      dateString.split(" ")[0].split("/")[0] - 1,
      dateString.split(" ")[0].split("/")[1],
      12
    );
  };

  const data = {
    datasets: [
      {
        label: "7D",
        data: weekChartData.map((item) => ({
          y: item.Price,
          x: dateFormatter(item.Date),
        })),
        fill: true,
        backgroundColor: "#a4003b",
        borderColor: "#a4003b",
      },
      {
        label: "1M",
        data: monthChartData.map((item) => ({
          y: item.Price,
          x: dateFormatter(item.Date),
        })),
        fill: true,
        backgroundColor: "#ffff99",
        borderColor: "#ffff99",
      },
      {
        label: "3M",
        data: threeMonthsChartData.map((item) => ({
          y: item.Price,
          x: dateFormatter(item.Date),
        })),
        fill: true,
        backgroundColor: "#ef9011",
        borderColor: "#ef9011",
      },
      {
        label: "6M",
        data: sixMonthsChartData.map((item) => ({
          y: item.Price,
          x: dateFormatter(item.Date),
        })),
        fill: true,
        backgroundColor: "#bf7bb5",
        borderColor: "#bf7bb5",
      },
      {
        label: "1Y",
        data: aYearChartData.map((item) => ({
          y: item.Price,
          x: dateFormatter(item.Date),
        })),
        fill: true,
        backgroundColor: "#bfbfbf",
        borderColor: "#bfbfbf",
      },
      {
        label: "2Y",
        data: twoYearsChartData.map((item) => ({
          y: item.Price,
          x: dateFormatter(item.Date),
        })),
        fill: true,
        backgroundColor: "#528dc2",
        borderColor: "#528dc2",
      },
    ],
    tension: 0.4,
  };

  const options = {
    scales: {
      yAxes: {
        display: false,
      },

      xAxes: {
        type: "time",
        time: {
          unit: "day",
        },
        display: false,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "NSE ALL SHARES INDEX",
      },
    },
  };

  return (
    <Scatter
      style={{ backgroundColor: "#002564" }}
      height={null}
      width={null}
      data={data}
      options={options}
    />
  );
};

export default AllIndexChart;
