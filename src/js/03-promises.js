const inputFirstDelay = document.getElementsByName('delay');
const inputStepDelay = document.getElementsByName('step');
const inputAmount = document.getElementsByName('amount'); 
const btn = document.querySelector('button');
    
let positionPromise = null;
let delay = null;
let firstDelay = null;
let amount = null;
let position = null;
let stepDelay = null;


btn.addEventListener('click', callCreatePromiseNOW);


function callCreatePromiseNOW(event) {
  event.preventDefault();
  amount = inputAmount[0].value;
  firstDelay = parseInt(inputFirstDelay[0].value);
  stepDelay = parseInt(inputStepDelay[0].value);
  delay = firstDelay;
    for (let i = 0; i < amount; i += 1) {
        createPromise(i, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
  delay += stepDelay;
}
}


function createPromise(position, delay) {
  positionPromise += 1;
  position = positionPromise;
  return new Promise((resolve, reject) => {
    // delay = delay + stepDelay;
    const shouldResolve = Math.random() > 0.3;
      setTimeout(function () {
    if (shouldResolve) {
      // Fulfill
      resolve({ position, delay });
    } else {
      reject({ position, delay });
      // Reject
    }
  }, delay);
  })
 
};
