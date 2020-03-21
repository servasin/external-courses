'use strict'

let str1 = 'my string';
let str2 = 'new';

function stringInsert(string, newString, position) {
  if (typeof string === 'string'
      && typeof newString === 'string'
      && typeof position === 'number'
      && !Number.isNaN(position) ) {

      let chars = string.split(' ').slice();
      // Slice сделал копию массива, т.е. chars - это копия.
     // Мы можем использовать splice для копии? Или вообще не использовать splice?
      chars.splice(position + 1, 0, newString)
      
      return chars.join(' ');
  }
  return undefined;
}

console.log(stringInsert(str1, str2, 0));

module.exports = stringInsert;
