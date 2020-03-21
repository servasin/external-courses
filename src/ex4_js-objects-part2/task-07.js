'use strict'

function trimString(string, length) {
  if (typeof string === 'string'
      && typeof length === 'number'
      && !Number.isNaN(length)
      && length >= 0) {
    if(string.length > length) {
      return string.slice(0, length - 1) + '\u2026';
    }
    
    return string;
  }
  return undefined;
}

module.exports = trimString;
