'use strict'

function setFirstUpperCase(str) {
  if (typeof str === 'string') {

    return str[0].toUpperCase() + str.slice(1);
  }
  
  return undefined;
}

module.exports = setFirstUpperCase;
