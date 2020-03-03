'use strict'

function makeCopyObj(obj) {
  if (obj !== null &&
      obj !== undefined &&
      typeof obj === 'object' &&
      !Array.isArray(obj) ) {

        return Object.assign({}, obj);
      }
  return obj;
}

module.exports = makeCopyObj;
