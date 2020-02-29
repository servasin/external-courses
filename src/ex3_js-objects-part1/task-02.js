'use strict'

function getKeysAndProps(obj) {
  for (let key in obj) {
    if (typeof (obj) === 'object' || !Array.isArray(obj)) {
      console.log(key, obj[key]);
      return undefined;
    }
  }
  console.log('это не объект');
  return undefined;
}

module.exports = getKeysAndProps;
