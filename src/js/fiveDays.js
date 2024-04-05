const fiveDaysBtn = document.querySelector('.btn-five');
const todayBtn = document.querySelector('.btn-today');

fiveDaysBtn.addEventListener('click', fiveDaysInfo);

function fiveDaysInfo(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }
  const isActiveBtn = document.querySelector('.btn-isActive');
  if (isActiveBtn === e.currentTarget) {
    todayBtn.classList.remove('btn-isActive');
    return;
  }
  if (isActiveBtn) {
    todayBtn.classList.remove('btn-isActive');
  }
}
