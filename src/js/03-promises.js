const inputFirstDelay = document.getElementsByName('delay');
const inputStepDelay = document.getElementsByName('step');
const inputAmount = document.getElementsByName('amount'); 
const btn = document.querySelector('button');
    
let positionPromise = null;
let intervalId = null;
let delay = null;
let firstDelay = null;
const btnDisabled = () => {
  btn.disabled = true;
};

btn.addEventListener('click', createPromise); 


function createPromise(position, delay) {
  event.preventDefault();

  btnDisabled();
  firstDelay = inputFirstDelay[0].value;
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    delay = inputStepDelay[0].value;
   

    
         intervalId = setInterval(() => {
      positionPromise += 1;
      let amount = inputAmount[0].value;
     
      if (amount == positionPromise) {
        clearInterval(intervalId);
        location.reload();
      }
      
      const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
        // Fulfill
      
      
      } else {
        console.log(positionPromise);
        // reject
      }
      }, delay) 
  }, firstDelay)})
    return promise;
};

// promise.then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });