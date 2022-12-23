const inputFirstDelay = document.getElementsByName('delay');
const inputStepDelay = document.getElementsByName('step');
const inputAmount = document.getElementsByName('amount'); 
const btn = document.querySelector('button');
    
let positionPromise = null;
// let intervalId = null;
let delay = null;
let firstDelay = null;
let amount = null;
let timeoutId = null;
let position = null;
let stepDelay = null;

const btnDisabled = () => {
  btn.disabled = true;
};

btn.addEventListener('click', callCreatePromiseNOW);


function callCreatePromiseNOW(event) {
  event.preventDefault();
  amount = inputAmount[0].value;
  firstDelay = parseInt(inputFirstDelay[0].value);
  stepDelay = parseInt(inputStepDelay[0].value);
  
  timeoutId = setTimeout(() => {
  
    for (let i = 0; i < amount; i += 1) {
      setTimeout(function () {
        delay += stepDelay;
        createPromise(position, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    }, delay);
}
  },firstDelay);
}


function createPromise(position, delay) {
  positionPromise += 1;
  position = positionPromise;
  let promise =  new Promise((resolve, reject) => {
    // delay = delay + stepDelay;
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
      resolve({ position, delay });
    } else {
      reject({ position, delay });
      // Reject
    }

  })
  return promise;
};
