const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {date | Fakedate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length == 0) {
    return 'Unable to determine the time of year!';
  } else if (Object.getOwnPropertyNames(date).length == 0 && date instanceof Date) { 
    let seasons = {'winter': 0,
                  'spring': 0,
                  'summer': 0,
                  'autumn': 0,};

    if (date.getMonth() == 0 || date.getMonth() == 1 || date.getMonth() == 11) {
      seasons['winter'] += 1;
    } else if (date.getMonth() >= 2 && date.getMonth() <= 4) {
      seasons['spring'] += 1;
    } else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
      seasons['summer'] += 1;
    } else if (date.getMonth() >= 8 && date.getMonth() <= 10) {
      seasons['autumn'] += 1;
    }

    for (let season in seasons) {
      if (seasons[season] == 1) {
        return season;
      }
    }
  }  else {
      throw new Error('Invalid date!');
  }
}


module.exports = {
  getSeason
};
