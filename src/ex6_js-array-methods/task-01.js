'use strict'

function mySlice(array, start, end) {
  if (Array.isArray(array)) {

        let length = array.length
        let newArr = [];
        let startInt = Number.parseInt(start, 10);
        let endInt = Number.parseInt(end, 10);

        if (Number.isNaN(start) && Number.isNaN(end)) {
          return newArr;
        }

        if (typeof start === 'undefined' &&
            typeof end === 'undefined' ||
            Number.isNaN(startInt)) {
          for (let i = 0; i < array.length; i++) {
            newArr[i] = array[i];
          }
          return newArr;
        }

        if (typeof end === 'undefined') {
          endInt = length;
        } else {
          if (end === 0 || -end >= length || Number.isNaN(endInt)) {
            return newArr;
          }
          if (end < 0) {
            endInt = length + end;
          }
          if (end > length) {
            endInt = length;
          }
        }

        if (start < 0) {
          if (-start > length) {
            startInt = 0;
          } else {
            startInt = length + start
          }
        }

        while (startInt < endInt) {
          newArr.push(array[startInt++]);
        }
        return newArr;
  }
  return undefined;
}

module.exports = mySlice;
