'use strict'

function toLowerCamelCase(str) {
  if (typeof str === 'string') {
    let strToArr = str.toLowerCase().split(' ');
    for (let i = 1; i < strToArr.length; i++) {
      strToArr[i] = strToArr[i][0].toUpperCase() + strToArr[i].slice(1);
    }
    strToArr = strToArr.join('');
    return strToArr;
  }
  return undefined;
}

module.exports = toLowerCamelCase;
