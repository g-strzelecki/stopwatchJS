const btnStart = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
const showTime = document.querySelector('.time div');

let time = 0;
let active = 0;
let intervalID;

const start = () => {
  if (!active) {
    active = !active;
    btnStart.textContent = 'Pauza';
    intervalID = setInterval(counter, 10);
  } else {
    active = !active;
    btnStart.textContent = 'Start';
    clearInterval(intervalID);
  }
}

const counter = () => {
  time++;
  showTime.textContent = (time / 100).toFixed(2);
}

const reset = () => {
  active = 0;
  time = 0;
  clearInterval(intervalID);
  showTime.textContent = '---';
}

btnStart.addEventListener('click', start);
btnReset.addEventListener('click', reset);
