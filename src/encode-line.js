const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodeArr = str.split('');
  let encodeStr = '';
  let counter = 1;
  for (let i = 0; i < encodeArr.length; i++) {
    if (encodeArr[i] == encodeArr[i+1]) {
      counter++;
    } else if (counter > 1) {
      encodeStr += String(counter) + encodeArr[i];
      counter = 1;
    } else { encodeStr += encodeArr[i] }
  }
  return encodeStr;
}

module.exports = {
  encodeLine
};
