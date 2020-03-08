'use strict'

function reverseString(string) {
  if (typeof string === 'string') {
    let newString = string.split('').reverse().join('');
    return newString;
  }
  return undefined;
}

module.exports = reverseString;
