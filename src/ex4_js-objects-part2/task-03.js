'use strict'

function deleteFirstAndLastSpaces(str) {
  if(typeof str === 'string') {
    // что мне делать с no-param-reassign, вводить новые переменные?
    str = str.split(''); // eslint-disable-line no-param-reassign
    if(str[0] === ' ') {
      str.splice(0, 1);
    }
    if(str[str.length - 1] === ' ') {
      str.splice( (str.length - 1), 1);
    }
    str = str.join(''); // eslint-disable-line no-param-reassign
    return str;
  }
  return undefined;
}

module.exports = deleteFirstAndLastSpaces;
