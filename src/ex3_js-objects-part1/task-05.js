'use strict'

function makeCopyObj(obj) {
  if (obj !== null &&
      obj !== undefined &&
      typeof obj === 'object' &&
      !Array.isArray(obj) ) {

        let copy = Object.assign({}, obj);
        return copy;
      }
  return obj;
}

module.exports = makeCopyObj;
