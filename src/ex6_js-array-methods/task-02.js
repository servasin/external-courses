'use strict'

function mySome(arr, callback) {
  let item = 10;
  for (let i = 0; i < arr.length; i++) {
    if (callback(item, arr[i], arr)) {
      return true;
    }
    return false;
  }
  return; // eslint-disable-line consistent-return
}

module.exports = mySome;
