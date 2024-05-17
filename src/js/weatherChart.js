import Chart from 'chart.js/auto';

const ctx = document.getElementById('myChart');

export const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['17 May', '18 May', '19 May', '20 May', '21 May'],
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
