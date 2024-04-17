import { format } from 'date-fns';
import { refs } from './refs';

export const updateCurrentTime = () => {
  setInterval(() => {
    refs.timer.textContent = format(new Date(), 'HH:mm:ss');
    refs.month.textContent = format(new Date(), 'LLLL');
    refs.dateOneDay.textContent = format(new Date(), 'do E');
  }, 1000);
};
