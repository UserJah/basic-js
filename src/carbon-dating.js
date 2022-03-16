const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let t = 0;
  if (typeof(sampleActivity) != 'string' || isNaN(sampleActivity) != false || +sampleActivity <= 0 || sampleActivity > 15) {
    return false;
  } else {
    t = Math.ceil(Math.log(15/+sampleActivity)*5730/0.693);
  }
  return t;
}
module.exports = {

  dateSample
};
