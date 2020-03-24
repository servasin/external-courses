'use strict'

function addNewProp(str, obj) {
  if (typeof str === 'string'
      && typeof obj === 'object'
      && !Array.isArray(obj)) {

        let newObj = Object.assign
        if ( !(str in newObj) ) {
          newObj[str] = 'new'

          return newObj;
        }
  }
  return obj;
}

module.exports = addNewProp;
