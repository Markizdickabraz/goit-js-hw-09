const inputFirstDelay = document.getElementsByName('delay');
const inputStepDelay = document.getElementsByName('step');
const inputAmount = document.getElementsByName('amount'); 
const btn = document.querySelector('button');
    
let positionPromise = null;
let intervalId = null;
let delay = null;
let firstDelay = null;
let intvalTimeout = null;

btn.addEventListener('click', createPromise);


function createPromise(position, delay) {
  event.preventDefault();
  delay = inputStepDelay[0].value;
  console.log(delay);
  firstDelay = inputFirstDelay[0].value;
  console.log(firstDelay);

  setTimeout(() => {
    
 
    intervalId = setInterval(() =>{
  for (let i = 1; i <= inputAmount[0].value; i += 1) {
    positionPromise +=1;
    position +=1;
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      // Fulfill
      console.dir(positionPromise);
    } else {
      // Reject
      console.dir(positionPromise);
    }

   if (inputAmount[0].value == positionPromise) {
      clearInterval(intervalId);
    }
    
  }}, delay)
  
 
   }, firstDelay);
};
















// const btnDisabled = () => {
//   btn.disabled = true;
// };

// btn.addEventListener('click', createPromise); 


// function createPromise(position, delay) {


//   btnDisabled();
//   firstDelay = inputFirstDelay[0].value;
// return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     delay = inputStepDelay[0].value;
     
//          intervalId = setInterval(() => {
//       positionPromise += 1;
//       let amount = inputAmount[0].value;
     
//       if (amount == positionPromise) {
//         clearInterval(intervalId);
//         location.reload();
//       }
      
//       const shouldResolve = Math.random() > 0.3;
//         if (shouldResolve) {
//         // Fulfill
//       console.log(position);
      
//       } else {
//         console.dir(position);
//         // reject
//       }
//       }, delay) 
//   }, firstDelay)})
//     // return promise;
// };

// // promise.then(({ position, delay }) => {
// //     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// //   })
// //   .catch(({ position, delay }) => {
// //     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// //   });