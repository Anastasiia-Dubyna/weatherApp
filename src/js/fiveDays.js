const fiveDaysBtn = document.querySelector('.btn-five');

fiveDaysBtn.addEventListener('click', fiveDaysInfo);

function fiveDaysInfo(e) {
  e.preventDefault();
  if (e.target.nodeName === 'BUTTON') {
    return;
  }
}
