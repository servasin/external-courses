'use strict'

function checkProperty(str, obj) {

  if (typeof str === 'string' &&
      typeof obj === 'object' && !Array.isArray(obj)) {

    for (let key in obj) {
      if(key === str) {
        return true;
      }
    }
  }
  return false;
}

module.exports = checkProperty;
