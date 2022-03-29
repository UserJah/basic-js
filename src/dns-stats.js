const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {}
  for (let domain of domains) {
    let domArr = domain.split('.');
    for (let i = -1; i >= -domArr.length; i--) {
      if (obj[`.${domArr.slice(i).reverse().join('.')}`] >= 1) {
        obj[`.${domArr.slice(i).reverse().join('.')}`] += 1;
      } else {obj[`.${domArr.slice(i).reverse().join('.')}`] = 1}
    }
  }
  return obj;
}

module.exports = {
  getDNSStats
};
