'use strict'

function stringInsert(string, newString, position) {
  if (typeof string === 'string' &&
      typeof newString === 'string' &&
      typeof position === 'number' &&
      !Number.isNaN(position) ) {

      let strToArr = string.split(' ');
      strToArr.splice(position + 1, 0, newString)
      strToArr = strToArr.join(' ');
      return strToArr;
  }
  return undefined;
}

module.exports = stringInsert;
