'use strict'

function getPropOfPrototype(prop, obj) {
  if(obj !== null &&
     !Array.isArray(obj) &&
     typeof obj === 'object') {
       let prototype = Object.getPrototypeOf(obj);
       for (var key in prototype) {
         if (prototype.hasOwnProperty(prop)) {
           return prototype[prop];;
         }
       }
     }
     return undefined;
}

module.exports = getPropOfPrototype;
