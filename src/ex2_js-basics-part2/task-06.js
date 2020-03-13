'use strict'

function isPrimeNumber(num) {
  switch (true) {
    case typeof(num) !== 'number' || Number.isNaN(num):
      return num + ' не число';
      break;
    case num > 1000:
      return 'Данные неверны';
      break;
    case num < 2:
      return `Число ${num} - меньше 2`;
      break;
    case num === 2 || num % 2 !== 0:
      return `Число ${num} - простое число`;
      break;
    case num % 2 === 0:
      return `Число ${num} - составное число`;
      break;
    default:
      return num;
  }
}

module.exports = isPrimeNumber;
