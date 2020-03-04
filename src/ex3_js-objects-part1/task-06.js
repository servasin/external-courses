'use strict'

function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  let copy = new obj.constructor();
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy( obj[key] );
    }
  }
  return copy;
}

module.exports = deepCopy;
