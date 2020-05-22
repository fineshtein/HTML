/* eslint-disable no-unused-expressions */
/* eslint-disable semi */
const sendInput = document.getElementById('sendInput');
const sendImg = document.getElementById('sendImg');
const conveier = document.getElementById('conveier');
let firstNum, secondNum;

checkInput;
buttonClick;

// Функция проверки ввода в Input и перекраска кнопки в желтый
function checkInput () {
  if (sendInput.value) {
    sendImg.src = './img/yellowPath.png';
  } else {
    sendImg.src = './img/mobilePath.png';
  }
}

// в функции проверяется выбор вариантов ввода в Input и вывод ответов в div.conveier
function buttonClick () {
  const sendInputValue = sendInput.value;

  // повторение введенного в бублике
  conveier.insertAdjacentHTML('afterbegin',
      `<div class="questionString"><img src="./img/avatar.png" alt=""><div class = "question"><p>${sendInputValue}</p></div>`);

  // выбор вариантов ввода в input
  if (sendInputValue === '/start') {
    questionAnswer('Привет, меня зовут <b> Чат-бот </b>, а как зовут тебя?');
  } else if ((sendInputValue[0] === '/') && (sendInputValue[1] === 'n') && (sendInputValue[2] === 'a') && (sendInputValue[3] === 'm')) {
    const name = sendInputValue.slice(6);
    questionAnswer(`Привет ${name}, приятно познакомиться.Я умею считать, введи числа которые надо посчитать.`);
  } else if ((sendInputValue[0] === '/') && (sendInputValue[1] === 'n') && (sendInputValue[2] === 'u') && (sendInputValue[3] === 'm') && (sendInputValue[4] === 'b') && (sendInputValue[5] === 'e')) {
    const number = sendInputValue.slice(8);
    firstNum = Number(parseFloat(number));
    secondNum = Number(number.replace(firstNum + ',', ''));
    questionAnswer(`Твои цифры: ${firstNum},${secondNum}. Выбери действие: -, +, *, /`);
  } else if (sendInputValue === '-') {
    calculator(firstNum, secondNum);
  } else if (sendInputValue === '+') {
    calculator(firstNum, secondNum);
  } else if (sendInputValue === '*') {
    calculator(firstNum, secondNum);
  } else if (sendInputValue === '/') {
    calculator(firstNum, secondNum);
  } else if (sendInputValue === '/stop') {
    questionAnswer('Всего доброго, если хочешь поговорить, пиши / start');
  } else if (sendInputValue === '/weather') {
    informer();
  } else if (sendInputValue === '?') {
    questionAnswer('/ start - начало работы, / stop - завершение, /name - имя, /number - калькулятор, /weather - прогноз погоды');
  // eslint-disable-next-line no-mixed-operators
  } else if ((sendInputValue[0] === '/') && (sendInputValue !== '/start') || (sendInputValue !== '/stop') || (sendInputValue !== '/weather') || (sendInputValue !== '?')) {
    questionAnswer('Я не понимаю, введите другую команду! Введите ? для списка команд');
  } else {
    questionAnswer('Введите команду /start, для начала общения');
  }

  // функция калькулятор
  function calculator (firstNum, secondNum) {
    if (typeof firstNum === 'undefined' || typeof secondNum === 'undefined' || Number.isNaN(firstNum) || Number.isNaN(secondNum)) {
      questionAnswer('Сначала введите числа: /number число1, чиcло2');
    } else if (sendInputValue === '-') {
      questionAnswer(`${firstNum - secondNum}`);
    } else if (sendInputValue === '+') {
      questionAnswer(`${firstNum + secondNum}`);
    } else if (sendInputValue === '*') {
      questionAnswer(`${firstNum * secondNum}`);
    } else if (sendInputValue === '/') {
      questionAnswer(`${(Math.floor((firstNum / secondNum) * 100)) / 100}`);
    }
  }

  // функция по выводу текстового бублика с ответом
  function questionAnswer (phrase) {
    conveier.insertAdjacentHTML('afterbegin',
      `<div class="questionString"><img src="./img/chatBot.png" alt=""><div class="question answer"><p>${phrase}</p></div>`);
  }

  // информер с прогнозом погоды
  function informer () {
    conveier.insertAdjacentHTML('afterbegin',
      '<div class="questionString"><img src="./img/chatBot.png" alt=""><div class="question answer weather"><a target="_blank" href="https://nochi.com/weather/moscow-18171"><img src="https://w.bookcdn.com/weather/picture/26_18171_1_20_34495e_250_2c3e50_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=124&domid=589&anc_id=73979" alt="booked.net"/></a></div>');
  }
}
