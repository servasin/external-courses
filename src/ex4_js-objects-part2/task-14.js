'use strict'

function getRandomInt(min, max) {
  if (typeof min === 'number'
      && typeof max === 'number'
      && !Number.isNaN(min)
      && !Number.isNaN(max)) {
      return Math.floor(Math.random() * (max - min)) + min;
  }
  return undefined;
}

module.exports = getRandomInt;
