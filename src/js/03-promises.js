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


// function createPromise(position, delay) {
//   return new Promise((resolve ,reject) =>{
//   event.preventDefault();
//   console.log(position);
  
//   firstDelay = inputFirstDelay[0].value;
//   console.log(firstDelay);

//   delay = inputStepDelay[0].value;
//   console.log(delay);

//   setTimeout(() => {
    
//     intervalId = setInterval(() =>{
//   for (let i = 1; i <= inputAmount[0].value; i += 1) {
//     positionPromise  +=1;
//     console.log(position.currentTarget);
//     const shouldResolve = Math.random() > 0.3;
//     if (shouldResolve) {
//       // Fulfill
//       resolve('position');
//       // console.dir(positionPromise);
//     } else {
//       // Reject
//       reject('zalupa');
//       // console.dir(positionPromise);
//     }

//    if (inputAmount[0].value == positionPromise) {
//       clearInterval(intervalId);
//     }
    
//   }}, delay)
  
 
//    }, firstDelay);
// })};


const btnDisabled = () => {
  btn.disabled = true;
};

btn.addEventListener('click', createPromise); 


function createPromise(position, delay) {


  btnDisabled();
  firstDelay = inputFirstDelay[0].value;
return new Promise((resolve, reject) => {
  setTimeout(() => {
    delay = inputStepDelay[0].value;
     
         intervalId = setInterval(() => {
      positionPromise += 1;
          let position = positionPromise;
      let amount = inputAmount[0].value;
     
      if (amount == positionPromise) {
        clearInterval(intervalId);
        // location.reload();
      }
      
      const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {

        // Fulfill
        resolve(position, delay);
      // console.log(position);
      console.dir(resolve());
      
      } else {
        reject({position,delay});
          console.dir(reject());
        // console.dir(position);
        // reject
      }
         }, delay) 
    

  }, firstDelay)})
    // return promise;
};

   Promise
        .then(({ position, delay }) => {
          console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });