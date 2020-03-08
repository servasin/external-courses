'use strict'

function getRandomInt(min, max) {
  if (typeof min === 'number' &&
      typeof max === 'number' &&
      !Number.isNaN(min) && !Number.isNaN(max)) {
      // Не вижу смысла вводить здесь новые переменные.
      min = Math.ceil(min); // eslint-disable-line no-param-reassign
      max = Math.floor(max); // eslint-disable-line no-param-reassign
      return Math.floor(Math.random() * (max - min)) + min;
  }
  return undefined;
}

module.exports = getRandomInt;
