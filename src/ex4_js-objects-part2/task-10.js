'use strict'

function reverseString(string) {
  if (typeof string === 'string') {
    return string.split('').slice().reverse().join('');
  }
  return undefined;
}
console.log(reverseString('my string'));
module.exports = reverseString;
