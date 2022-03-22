const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  } else if (!Boolean(String(arr))) {
    return arr;
  } else {
    const controlSequences = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
    let transformArray = [];
    for (let i = 0; i < arr.length; i++) {
      if ((i == 0 || i == arr.length - 1) && controlSequences.includes(arr[i]))  {
        continue;
      } else if (controlSequences.indexOf(arr[i]) == -1) {
        transformArray.push(arr[i]);
      } else if (arr[i] == '--discard-next') {
        i++;
        i++;
      } else if (arr[i] == '--discard-prev') {
        transformArray.pop();
      } else if (arr[i] == '--double-next') {
        i++;
        transformArray.push(arr[i]);
        transformArray.push(arr[i]);
        console.log('hello world');
      } else if (arr[i] == '--double-prev') {
        i--;
        transformArray.push(arr[i]);
        i+=1;
      }
    }
    return transformArray;
  }
}

module.exports = {
  transform
};
