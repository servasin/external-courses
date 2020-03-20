'use strict'

function toLowerCamelCase(str) {
  if (typeof str === 'string') {

    let chars = str.toLowerCase().split(' ').slice();
    for (let i = 1; i < chars.length; i++) {
      chars[i] = chars[i][0].toUpperCase() + chars[i].slice(1);
    }

    return chars.join('');
  }

  return undefined;
}

module.exports = toLowerCamelCase;
