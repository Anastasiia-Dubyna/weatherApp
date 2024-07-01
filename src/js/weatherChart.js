import Chart from 'chart.js/auto';

const ctx = document.getElementById('myChart');

// const calculateAverage = (arr, key) => {
//   return (arr.reduce((acc, item) => acc + item[key], 0) / arr.length).toFixed(
//     2
//   );
// };

const calculateMax = (arr, key) => {
  if (arr.length === 0) return null;
  return arr.reduce(
    (max, item) => (item[key] > max ? item[key] : max),
    arr[0][key]
  );
};

export const myChart = chartData => {
  const updateData = chartData.reduce(
    (acc, item) => {
      const date = `${item.date}, ${new Date().getFullYear()}`;
      return {
        ...acc,
        labels: [...acc.labels, date],
        temp: [...acc.temp, calculateMax(item.weather, 'temp')],
        humidity: [...acc.humidity, calculateMax(item.weather, 'humidity')],
        speed: [...acc.speed, calculateMax(item.weather, 'wind')],
        pressure: [...acc.pressure, calculateMax(item.weather, 'pressure')],
      };
    },
    {
      labels: [],
      temp: [],
      humidity: [],
      speed: [],
      pressure: [],
    }
  );

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: updateData.labels,
      datasets: [
        {
          label: '— Temperature, C°',
          data: updateData.temp,
          borderWidth: 1,
          backgroundColor: 'rgb(255, 107, 8)',
          borderColor: 'rgb(255, 107, 8)',
        },
        {
          label: ' —  Humidity, %',
          backgroundColor: 'rgb(10, 6, 234)',
          borderColor: 'rgb(10, 6, 234)',
          data: updateData.humidity,
          fill: false,
          hidden: true,
        },
        {
          label: ' —  Speed, m/s',
          backgroundColor: 'rgb(235, 155, 5)',
          borderColor: 'rgb(235, 155, 5)',
          data: updateData.speed,
          fill: false,
          hidden: true,
        },
        {
          label: ' —  Pressure, m/m',
          backgroundColor: 'rgb(5, 120, 6)',
          borderColor: 'rgb(5, 120, 6)',
          data: updateData.pressure,
          fill: false,
          hidden: true,
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
      responsive: true,
      maintainAspectRatio: false,
    },
  });
};
