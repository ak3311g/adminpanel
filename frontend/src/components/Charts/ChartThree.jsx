import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import useFetch from '../../hooks/useFetch';

// Apex Chart Configuration
const options = {
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    type: 'donut',
  },
  colors: ['#3C50E0', '#6577F3', '#8FD0EF', '#0FADCF'],
  labels: ['Stock', 'Discount Percentage', 'Price', 'Rating'],  // Four labels
  legend: {
    show: false,
    position: 'bottom',
  },
  plotOptions: {
    pie: {
      donut: {
        size: '65%',
        background: 'transparent',
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ChartThree = () => {
  const [newSeriesOne, setNewSeriesOne] = useState([]);
  const [newSeriesTwo, setNewSeriesTwo] = useState([]);
  const [newSeriesThree, setNewSeriesThree] = useState([]);
  const [newSeriesFour, setNewSeriesFour] = useState([]);
  const data = useFetch('/products'); // Fetching the data

  // Function to map product data to series
  const getSeries = () => {
    if (data && data.length > 1) {
      const stockSeries = data.map((product) => product?.stock);
      const discountSeries = data.map((product) => product?.discountPercentage);
      const priceSeries = data.map((product) => product?.price);
      const ratingSeries = data.map((product) => product?.rating);

      setNewSeriesOne(stockSeries.slice(0, 5));        // Setting stock data
      setNewSeriesTwo(discountSeries.slice(0, 5));     // Setting discount percentage data
      setNewSeriesThree(priceSeries.slice(0, 5));      // Setting price data
      setNewSeriesFour(ratingSeries.slice(0, 5));      // Setting rating data
    }
  };

  useEffect(() => {
    if (data && data.length > 0) {
      getSeries();
    }
  }, [data]);

  const [state, setState] = useState({
    series: [0, 0, 0, 0],  // Default series for four data points
  });

  // Update chart series when new data is available
  useEffect(() => {
    if (
      newSeriesOne.length > 0 &&
      newSeriesTwo.length > 0 &&
      newSeriesThree.length > 0 &&
      newSeriesFour.length > 0
    ) {
      setState({
        series: [
          newSeriesOne.reduce((a, b) => a + b, 0),  // Sum stock data
          newSeriesTwo.reduce((a, b) => a + b, 0),  // Sum discount percentage data
          newSeriesThree.reduce((a, b) => a + b, 0),// Sum price data
          newSeriesFour.reduce((a, b) => a + b, 0), // Sum rating data
        ],
      });
    }
  }, [newSeriesOne, newSeriesTwo, newSeriesThree, newSeriesFour]);

  return (
    <div className="sm:px-7.5 col-span-12 rounded-sm border border-stroke bg-white px-5 pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl font-semibold text-black dark:text-white">
            Data Analytics
          </h5>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <select
              name=""
              id=""
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
            >
              <option value="" className="dark:bg-boxdark">
                Monthly
              </option>
              <option value="" className="dark:bg-boxdark">
                Yearly
              </option>
            </select>
            <span className="absolute right-3 top-1/2 z-10 -translate-y-1/2">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                  fill="#637381"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <div id="chartThree" className="mx-auto flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}  // Series containing 4 stats
            type="donut"
          />
        </div>
      </div>

      <div className="-mx-8 flex flex-wrap items-center justify-center gap-y-3">
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-primary"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Mentees </span>
              {/* <span> {state.series[0]} </span> */}
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#6577F3]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Visitors </span>
              {/* <span> {state.series[1]} </span> */}
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#8FD0EF]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Enrolled </span>
              {/* <span> {state.series[2]} </span> */}
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#0FADCF]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Mentors </span>
              {/* <span> {state.series[3]} </span> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartThree;
