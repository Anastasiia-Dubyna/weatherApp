import { getRandomColor } from './helpers/getRandomColor';
import { refs } from './refs.js';

refs.stopBtn.disabled = true;
let timer = null;

refs.startBtn.addEventListener('click', () => {
  timer = setInterval(() => {
    document.body.style.background = getRandomColor();
  }, 1000);
  refs.stopBtn.disabled = false;
  refs.startBtn.disabled = true;
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;
});
