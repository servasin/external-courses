'use strict'

function myEvery(arr, callback) {
  let item = 0;
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    if (!callback(item, arr[i], arr)) {
      result = false
    }
    return result;
  }
  return; // eslint-disable-line consistent-return
}

module.exports = myEvery;
