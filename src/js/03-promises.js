const inputFirstDelay = document.getElementsByName('delay');
const inputStepDelay = document.getElementsByName('step');
const inputAmount = document.getElementsByName('amount'); 
const btn = document.querySelector('button');
    
let positionPromise = null;
let intervalId = null;
let delay = null;
let firstDelay = null;
let amount = null;
let timeoutId = null;
let position = null;

const btnDisabled = () => {
  btn.disabled = true;
};

btn.addEventListener('click', createPromise);


function createPromise(position, delay) {
  // event.preventDefault();
  btnDisabled();
  firstDelay = inputFirstDelay[0].value;
  setTimeout(() => {
    delay = inputStepDelay[0].value;
   
     
         intervalId = setInterval(() => {
           positionPromise += 1;
         
          position = positionPromise;
      let amount = inputAmount[0].value;
     
      if (amount == positionPromise) {
        clearInterval(intervalId);
        // location.reload();
      }
      
           const shouldResolve = Math.random() > 0.3;
            return new Promise((resolve, reject) => {
        if (shouldResolve) {

        // Fulfill
        resolve('sdfddf');
      // console.log(position);
      console.dir(resolve);
      
      } else {
          reject('dfdfddf');
          console.log( reject);
        // reject
        
        }
        //  return Promise;
      }) 
      
      
    }, delay)}, firstDelay)
    // return promise({ position, delay });
    // return{position,delay}
  };

// createPromise(2, 1500)
//   .then(({position, delay} ) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

