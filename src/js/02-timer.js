import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const bntStart = document.querySelector('button[data-start]');
// console.log(bntStart);
bntStart.addEventListener('click', isStartTimeMoreSelectedDate);


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate.push(this.selectedDates[0]);
    startTime = selectedDate[0];
    // console.dir(selectedDates[0]);
    console.log(startTime);
  },
};


let selectedDate = [];

let startTime = ' ';


// console.log(selectedDate);

flatpickr("#datetime-picker", options);


function isStartTimeMoreSelectedDate() {
  const dateNow = new Date();
  console.log(dateNow);
  if (startTime < dateNow) {
    // console.log(startTime);
    window.alert("Please choose a date in the future");
  }
}
    
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

// const timer = {
//   start() {
//     const startTime = options.onClose;
//     console.log(startTime);
//   }
// }

// timer.start();