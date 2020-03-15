'use strict'

function Calculator() {
  let count = 0;
  this.add = function(num) {
    if (typeof num === 'number' && !Number.isNaN(num)) {
      count += num;
    }
    return calculator.add;
  };
  this.subtract = function(num) {
    if (typeof num === 'number' && !Number.isNaN(num)) {
      count -= num;
    }
    return calculator.subtract;
  };
  this.divide = function(num) {
    if (typeof num === 'number' && !Number.isNaN(num)) {
      count /= num;
    }
    return calculator.divide;
  };
  this.multiply = function(num) {
    if (typeof num === 'number' && !Number.isNaN(num)) {
      count *= num;
    }
    return calculator.multiply;
  };
  this.getResult = function() {
    return count;
  };
  this.reset = function() {
    count = 0;
  };
}

const calculator = new Calculator();

module.exports = calculator;
