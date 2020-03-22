'use strict'

function stringInsert(string, newString, position) {
  if (typeof string === 'string'
      && typeof newString === 'string'
      && typeof position === 'number'
      && !Number.isNaN(position) ) {

      let chars = string.split(' ').slice(0, position + 1);
      let end = string.split(' ').slice(position + 1);
      chars = chars.concat(newString, end);

      return chars.join(' ');
  }
  return undefined;
}

module.exports = stringInsert;
