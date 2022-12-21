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

btn.addEventListener('click', createPromise);



function createPromise(position, delay) {

  // location.reload();
  firstDelay = inputFirstDelay[0].value;

  amount = inputAmount[0].value;

  // timeoutId = setTimeout(() => {
 
  for (let i = 1; i <= amount; i += 1) {
        delay = inputStepDelay[0].value;
    intervalId = setInterval(() => {
        const Promise = new Promise((resolve, reject) => {
       
          const shouldResolve = Math.random() > 0.3;
          if (shouldResolve) {
            // Fulfill
            resolve(position, delay )
            console.log(resolve);
            
          } else {
            // Reject
            reject( position, delay )
            console.log(reject);
          }
        }, delay)
      }
    // }, firstDelay);
    )
    // return Promise;
    clearInterval(intervalId);
  }
  
  // clearTimeout(timeoutId);

 
};

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// ававаіаааааааааааааааааааааааааааааааааааав

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
//       reject('dfsds');
//       // console.dir(positionPromise);
//     }

//    if (inputAmount[0].value == positionPromise) {
//       clearInterval(intervalId);
//     }
    
//   }}, delay)
  
 
//    }, firstDelay);
// })};



// аваіаівівіааіаіаіаіаввввввввввввввввв



// const btnDisabled = () => {
//   btn.disabled = true;
// };

// function createPromise(position, delay) {

//   btnDisabled();
//   firstDelay = inputFirstDelay[0].value;
// return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     delay = inputStepDelay[0].value;
     
//          intervalId = setInterval(() => {
//       positionPromise += 1;
//           let position = positionPromise;
//       let amount = inputAmount[0].value;
     
//       if (amount == positionPromise) {
//         clearInterval(intervalId);
//         // location.reload();
//       }
      
//       const shouldResolve = Math.random() > 0.3;
//         if (shouldResolve) {
//   Promise
//         .then(({ position, delay }) => {
//           console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//         })
//         // Fulfill
//         resolve(position, delay);
//       // console.log(position);
//       console.dir(resolve());
      
//       } else {
//         reject({position,delay});
//           console.dir(reject());
//         // console.dir(position);
//         // reject
//          Promise.catch(({ position, delay }) => {
//           console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//         });
//       }
//          }, delay) 
    

//   }, firstDelay)})
//     // return promise;
// };

 
        