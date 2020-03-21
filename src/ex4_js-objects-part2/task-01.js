'use strict'

function getPropOfPrototype(prop, obj) {
  if (obj !== null && !Array.isArray(obj) && typeof obj === 'object') {
       for (let key in Object.getPrototypeOf(obj)) {
         if (Object.getPrototypeOf(obj).hasOwnProperty(prop)) {
           
           return Object.getPrototypeOf(obj)[prop];
         }
       }
     }

     return undefined;
}

module.exports = getPropOfPrototype;
