const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let obj1 = {},
      obj2 = {},
      counter = 0;

  for (let i = 0; i < s1.length; i++) {
    if (obj1[s1[i]] >= 1) {
      obj1[s1[i]] += 1;
    } else {
          obj1[s1[i]] = 1;
    }
  }
  for (let j = 0; j < s2.length; j++) {
    if (obj2[s2[j]] >= 1) {
      obj2[s2[j]] += 1;
    } else {
          obj2[s2[j]] = 1;
    }
  }

  for (let key in obj1) {
    if (key in obj2) {
      counter += Math.min(obj1[key], obj2[key])
    }
  }
  console.log(obj1);
  console.log(obj2);
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
