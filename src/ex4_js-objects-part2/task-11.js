'use strict'

function countCharsInString(string) {
  if (typeof string === 'string') {
    let result = {};
    let chars = string.split('');

    for (let i = 0; i < chars.length; i++) {
      let counter;
      if (result[chars[i]]) {
        counter = result[chars[i]];
      } else {
        counter = 0;
      }
      result[chars[i]] = counter + 1;
    }

    for (let key in result) { // eslint-disable-line guard-for-in
        console.log(key, result[key]);
    }
  }
  return undefined;
}

module.exports = countCharsInString;
