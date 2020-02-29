'use strict'

function addNewProp(str, obj) {
  if (typeof str === 'string' &&
      typeof obj === 'object' && !Array.isArray(obj)) {

        if ( !(str in obj) ) {
          obj[str] = 'new'// eslint-disable-line no-param-reassign
          return obj;
        }
  }
  return obj;
}

module.exports = addNewProp;
