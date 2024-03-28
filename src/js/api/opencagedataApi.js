import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.opencagedata.com/geocode/v1/json',
  params: {
    key: 'd4683b09d0c94ec0aebf0b2e043decbf',
    language: 'en',
  },
});

export const getUserInfo = async ({ latitude, longitude }) => {
  const urlPosition = `?q=${latitude}+${longitude}`;
  const { data } = await instance.get(urlPosition);
  return data.results[0].components.country;
};
