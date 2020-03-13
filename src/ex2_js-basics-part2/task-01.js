'use strict'

function isStringOrNumber(a) {
  if (typeof(a) === 'string' ||
      typeof(a) === 'number' &&
      !Number.isNaN(a)) {
    return typeof(a);
  }
  return undefined;
}

module.exports = isStringOrNumber;
