'use strict'

function isIdenticalValues(arr) {
  if (!Array.isArray(arr)) {
    return 'это не массив';
  }

  let isEqual = true

  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[0]) {
      isEqual = true;
    } else {
      isEqual = false;
    }
  }
  return isEqual;
}

module.exports = isIdenticalValues;
