
// Змінні елементів
const body = document.body;
  const  btnStart = document.querySelector('[data-start]');
   const btnStop = document.querySelector('[data-stop]');

//  функціі вимикання та вмикання кнопки СТАРТ
   const btnStartDisabled = () => {
    btnStart.disabled = true;
   }

   const btnStartActive = () => {
    btnStart.disabled = false;
   }

//    Подія кліку на кнопку СТАРТ,
//  в колбек функціі зміна кольору елеиента body,
//  з інтервалом 1000мс
btnStart.addEventListener("click", () => {
  intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStartDisabled();
});

// Подія кліку на кнопку СТОП, 
// Зняття інтервалу зміни кольору елемента body,
// активація кнопки СТАРТ
btnStop.addEventListener("click", () => {
  clearInterval(intervalId);
  btnStartActive();

});


// функція рандомайзер кольорів
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};



