'use strict'

function isStringIncludes(str, subStr) {
  if (typeof str === 'string' && typeof subStr === 'string') {
    return str.includes(subStr);
  }

  return; // eslint-disable-line consistent-return
}

module.exports = isStringIncludes;
