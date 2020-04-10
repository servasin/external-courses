'use strict'

function checkProperty(str, obj) {
  return obj.hasOwnProperty(str);
}

module.exports = checkProperty;
