import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";



const btnStart = document.querySelector('button[data-start]');
// console.log(bntStart);
// btnStart.addEventListener('click', isStartTimeMoreSelectedDate);

const btnStartDisabled = () => {
  btnStart.disabled = true;
}
btnStartDisabled();

   const btnStartActive = () => {
    btnStart.disabled = false;
   }

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (this.defaultDate < this.selectedDates[0]){
      window.alert("Please choose a date in the future");
      console.log(this.defaultDate);
    }
    // console.log(this.defaultDate);
  },
};


let selectedDate = [];

let startTime = ' ';


// console.log(selectedDate);

flatpickr("#datetime-picker", options);

// isStartTimeMoreSelectedDate();

// function isStartTimeMoreSelectedDate() {
//   const dateNow = new Date();
//   // console.log(startTime);
//   if (startTime < dateNow) {
//     // console.log(startTime);
//    return window.alert("Please choose a date in the future");
//   } if (startTime > dateNow) {
//     btnStartActive();
//   }
// };
    
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

