import { getRandomIndex } from './getRandomIndex';

export const setBackground = hits => {
  const index = getRandomIndex(hits.length - 1);
  console.log(index);
  const { largeImageURL } = hits[index];
  document.body.style = `background: linear-gradient(rgba(255, 255, 53, 0.1), rgba(48, 62, 143, 0.1 )),
  url('${largeImageURL}') center fixed; background-size: cover;`;
};
