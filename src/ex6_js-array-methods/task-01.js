'use strict'

function mySlice(array, start, end) {
  if (Array.isArray(array)) {

        let length = array.length
        let newArray = [];

        if (start === undefined && end === undefined) {
          for (let i = 0; i < length; i++) {
            newArray[i] = array[i];
          }
          return newArray;
        }
        if (Number.isNaN(start) && Number.isNaN(end)) {
          return newArray;
        }

        if (start < 0) {
          if (-start > length) {
            start = 0; // eslint-disable-line no-param-reassign
          } else {
            start = length + start; // eslint-disable-line no-param-reassign
          }
        }

        if (end === undefined) {
          end = length; // eslint-disable-line no-param-reassign
        } else {
          if (end === 0 || -end >= length) {
            return newArray;
          }
          if (end < 0) {
            end = length + end; // eslint-disable-line no-param-reassign
          }
          if (end > length) {
            end = length; // eslint-disable-line no-param-reassign
          }
        }

        while (start < end) {
          newArray.push(array[start++]) // eslint-disable-line no-param-reassign
        }
        return newArray;
  }
  return undefined;
}

module.exports = mySlice;
