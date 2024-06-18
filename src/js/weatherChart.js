import Chart from 'chart.js/auto';
import { getWeatherForFiveDays } from '../js/api/weatherApi.js';
import { format } from 'date-fns';

const ctx = document.getElementById('myChart');
let chartData = {};

const getChartData = () => {
  const data = getWeatherForFiveDays();
  chartData.days = data.list.map(e => format(new Date(dt_txt), 'dd LLL'));
  // chartData.temp = ;
  // chartData.humidity = ;
  // chartData.pressure = ;
  // chartData.speed = ;
};

export const myChart = () => getChartData();
new Chart(ctx, {
  type: 'line',
  data: {
    labels: chartData.days,
    datasets: [
      {
        label: '— Temperature, C°',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        backgroundColor: 'rgb(255, 107, 8)',
        borderColor: 'rgb(255, 107, 8)',
      },
      {
        label: ' —  Humidity, %',
        backgroundColor: 'rgb(10, 6, 234)',
        borderColor: 'rgb(10, 6, 234)',
        data: [11, 12, 13, 14, 15],
        fill: false,
      },
      {
        label: ' —  Speed, m/s',
        backgroundColor: 'rgb(235, 155, 5)',
        borderColor: 'rgb(235, 155, 5)',
        data: [6, 7, 8, 9, 10],
        fill: false,
      },
      {
        label: ' —  Pressure, m/m',
        backgroundColor: 'rgb(5, 120, 6)',
        borderColor: 'rgb(5, 120, 6)',
        data: [1, 2, 3, 4, 5],
        fill: false,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Value of indicators',
      position: 'left',
    },
    legend: {
      display: true,
      align: 'start',

      labels: {
        boxWidth: 13,
        boxHeight: 12,
        defaultFontColor: 'rgb(5, 120, 6)',
        padding: 10,
      },
    },
    // scales: {
    //   xAxes: [
    //     {
    //       gridLines: {
    //         color: 'rgba(255, 255, 255, 0.541)',
    //       },
    //       ticks: {
    //         padding: 20,
    //       },
    //     },
    //   ],
    //   yAxes: [
    //     {
    //       gridLines: {
    //         color: 'rgba(255, 255, 255, 0.541)',
    //         stepSize: 0.5,
    //         zeroLineColor: 'rgba(255, 255, 255, 0.541)',
    //       },
    //       ticks: {
    //         padding: 18,
    //       },
    //     },
    //   ],
    // },
    responsive: true,
    maintainAspectRatio: false,
  },
});
