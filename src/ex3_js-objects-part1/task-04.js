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

// Если не отключить линт на строке, то тесты не проходятся, т.к.
// проверяется  исходный объект, поэтому не получается использовать Object.assing

// https://drive.google.com/file/d/1mOsHUl4lEVwkGDL7xYD8yuExXlSM_ASl/view?usp=sharing
// https://drive.google.com/file/d/1inEg8aEl0R-3sPFBH29zNNfftyLw4HXY/view?usp=sharing

module.exports = addNewProp;
