import axios from 'axios';
import { format } from 'date-fns';

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  params: {
    appid: '95632b02f9162f375a368971925f5209',
    units: 'metric',
  },
});

export const getWeatherByQuery = async city => {
  const { data } = await instance.get(`/weather`, {
    params: {
      q: city,
    },
  });
  console.log(data);
  return data;
};

export const getWeatherByCoords = async ({ latitude, longitude }) => {
  // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
  const { data } = await instance.get(`/weather`, {
    params: {
      lat: latitude,
      lon: longitude,
    },
  });
  return data;
};

export const getWeatherForFiveDays = async ({ latitude, longitude }) => {
  // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
  const { data } = await instance.get(`/forecast`, {
    params: {
      lat: latitude,
      lon: longitude,
    },
  });

  return data.list.reduce((acc, { dt_txt, weather, main, wind }, index) => {
    const day = format(new Date(dt_txt), 'EEEE');
    const date = format(new Date(dt_txt), 'dd LLL');
    const time = format(new Date(dt_txt), 'kk:mm');
    const cityName = data.city.name;
    const country = data.city.country;
    // const temp = acc.length;
    const weatherByHours = {
      temp: main.temp,
      pressure: main.pressure,
      humidity: main.humidity,
      wind: wind.speed,
      icon: weather[0].icon,
      time,
    };
    if (day === acc[acc?.length - 1]?.day) {
      acc[acc.length - 1].weather.push(weatherByHours);
      acc[acc.length - 1].min += main.temp_min;
      acc[acc.length - 1].max += main.temp_max;
    } else {
      if (acc.length > 0) {
        const lastEl = acc[acc.length - 1];
        lastEl.min = Math.round(lastEl.min / lastEl.weather.length);
        lastEl.max = Math.round(lastEl.max / lastEl.weather.length);
      }
      acc.push({
        cityName,
        country,
        day,
        date,
        weather: [weatherByHours],
        icon: weather[0].icon,
        min: main.temp_min,
        max: main.temp_max,
      });
    }
    // console.log('length', acc.length);
    // console.log(temp);
    if (index === 39) {
      const lastEl = acc[acc.length - 1];
      lastEl.min = Math.round(lastEl.min / lastEl.weather.length);
      lastEl.max = Math.round(lastEl.max / lastEl.weather.length);
    }
    return acc;
  }, []);
};
