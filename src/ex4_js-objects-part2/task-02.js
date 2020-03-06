'use strict'

function getObjectWithoutPrototype() {
       return Object.setPrototypeOf({}, null);
}

module.exports = getObjectWithoutPrototype;
