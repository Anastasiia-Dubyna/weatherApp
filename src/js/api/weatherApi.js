import axios from 'axios';

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
