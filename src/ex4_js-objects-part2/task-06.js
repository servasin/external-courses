'use strict'

function toTitleCase(str) {
  if (typeof str === 'string') {

    return str.split(' ').map(function(item) {
      return item[0].toUpperCase() + item.slice(1);
    }).join(' ');
  }

  return undefined;
}

module.exports = toTitleCase;
