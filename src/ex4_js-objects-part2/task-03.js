'use strict'

function deleteFirstAndLastSpaces(str) {
  if(typeof str === 'string') {
    let chars = str.slice().split('');
    // мы ж новый массив создали, создали
    if(chars[0] === ' ') {
      chars = chars.slice(1);
    }
    if(chars[chars.length - 1] === ' ') {
      chars = chars.slice(0, (chars.length - 1));
    }

    return chars.join('');
  }

  return undefined;
}

module.exports = deleteFirstAndLastSpaces;
