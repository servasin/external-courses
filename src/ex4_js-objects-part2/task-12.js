'use strict'

function sumAndRound(num1, num2) {
  if (typeof num1 === 'number' &&
      typeof num2 === 'number' &&
      !Number.isNaN(num1) && !Number.isNaN(num2)) {

        let sum = num1 + num2;
        return Number(sum.toFixed(3));
  }
  return undefined;
}

module.exports = sumAndRound;
