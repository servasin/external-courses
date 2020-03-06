'use strict'

let myObj = {
  a: 1
}

function getObjectWithoutPrototype() {
       return Object.setPrototypeOf({}, null);
}

module.exports = getObjectWithoutPrototype;
