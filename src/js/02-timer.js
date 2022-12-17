import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const faceDays = document.querySelector('.value[data-days]');
const faceHours = document.querySelector('.value[data-hours]');
const faceMinutes = document.querySelector('.value[data-minutes]');
const faceSeconds = document.querySelector('.value[data-seconds]');

const btnStart = document.querySelector('button[data-start]');
// console.log(bntStart);


const btnStartDisabled = () => {
  btnStart.disabled = true;
};
btnStartDisabled();

const btnStartActive = () => {
  btnStart.disabled = false;

};

let selectedDate = ' ';
let dateNow = ' ';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      dateNow = new Date();
      selectedDate = selectedDates[0];
    if (dateNow > selectedDate) {
      window.alert("Please choose a date in the future");
      btnStartDisabled();
      window.location.reload();
    } else {
      btnStartActive();
      // console.log(selectedDate)
    };
  },
};

flatpickr("#datetime-picker", options);

let intervalId = null;


function timer() {
  btnStartDisabled();
  
  intervalId = setInterval(() => {
    const overTime = Date.now();
    const deltaTime = selectedDate - overTime;
    const { days, hours, minutes, seconds } = convertMs(deltaTime);
    updateTimerFace({ days, hours, minutes, seconds });
    // console.log(deltaTime);
    console.log(`${days} : ${hours} : ${minutes} : ${seconds}`);  
  }, 1000);
  
  
};
// timer.start();


btnStart.addEventListener('click', timer);

function addLeadingZerovalue(value) {
  // padStart(value) 
    return String(value).padStart(2, '0');
  };

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  // Remaining days
  const days = addLeadingZerovalue(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZerovalue(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes =  addLeadingZerovalue(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZerovalue(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

function updateTimerFace({ days, hours, minutes, seconds }) {
  faceDays.textContent = `${days}`;
//  console.dir(faceDays);
  faceHours.textContent = `${hours}`;
  faceMinutes.textContent = `${minutes}`;
  faceSeconds.textContent = `${seconds}`;

  isTimerClockNull();
};

function isTimerClockNull(){
  if (faceSeconds.textContent == 0){
    clearInterval(intervalId);
  }
};
