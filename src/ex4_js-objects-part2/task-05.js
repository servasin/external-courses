'use strict'

function isStringIncludes(str, subStr) {
  if (typeof str === 'string' && typeof subStr === 'string') {
    return str.includes(subStr);
  }

  return; // eslint-disable-line consistent-return
  //  https://drive.google.com/open?id=1c_C_mmIiaehSsV3IVkO-OtghYeLTfZ3z
}

module.exports = isStringIncludes;
