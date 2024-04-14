import { format } from 'date-fns';

const dateOneDay = document.querySelector('.dateOneDay');
const month = document.querySelector('.month');
const timer = document.querySelector('.timeSpan');

export const updateCurrentTime = () => {
  setInterval(() => {
    timer.textContent = format(new Date(), 'HH:mm:ss');
    month.textContent = format(new Date(), 'LLLL');
    dateOneDay.textContent = format(new Date(), 'do E');
  }, 1000);
};
