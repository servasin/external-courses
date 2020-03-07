'use strict'

function toTitleCase(str) {
  if (typeof str === 'string') {
    let strToArr = str.split(' ');
    for (let i = 0; i < strToArr.length; i++) {
      strToArr[i] = strToArr[i][0].toUpperCase() + strToArr[i].slice(1);
    }
    strToArr = strToArr.join(' ');
    return strToArr;
  }
  return undefined;
}

module.exports = toTitleCase;
