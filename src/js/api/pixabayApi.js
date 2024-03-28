import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    image_type: 'backgrounds',
    orientation: 'horizontal',
    per_page: '40',
    key: '37485893-252f507e861118bf45a5e3b29',
  },
});

export const getPhotos = async place => {
  const { data } = await instance.get('', {
    params: {
      q: place,
    },
  });
  return data.hits;
};
