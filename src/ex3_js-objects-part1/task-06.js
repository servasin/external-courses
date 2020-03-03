'use strict'

function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  let copy = new obj.constructor();
  for (let key in obj) { // eslint-disable-line guard-for-in
    copy[key] = deepCopy( obj[key] );
  }
  return copy;
}

module.exports = deepCopy;
