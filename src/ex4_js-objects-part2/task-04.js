'use strict'

// Здесь я ввел две новые переменные, чтобы не было no-param-reassign.

function setFirstUpperCase(str) {
  if (typeof str === 'string') {
    let strToArr = str.split('');
    strToArr[0] = strToArr[0].toUpperCase();

    let newStr = strToArr.join('');
    return newStr;
  }
  return undefined;
}

module.exports = setFirstUpperCase;
