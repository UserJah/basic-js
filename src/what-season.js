const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given dateTime and expose the enemy scout!
 * 
 * @param {DateTime | FakeDateTime} dateTime real or fake dateTime
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new DateTime(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date != this.date) {
    return "Invalid date!";
  } else {
    let seasons = {'winter': 0,
                  'spring': 0,
                  'summer': 0,
                  'autumn': 0,};

    let dateTime = new Date(date);

    if (dateTime.getMonth() == 0 || dateTime.getMonth() == 1 || dateTime.getMonth() == 11) {
      seasons['winter'] += 1;
    } else if (dateTime.getMonth() >= 2 && dateTime.getMonth() <= 4) {
      seasons['spring'] += 1;
    } else if (dateTime.getMonth() >= 5 && dateTime.getMonth() <= 7) {
      seasons['summer'] += 1;
    } else if (dateTime.getMonth() >= 8 && dateTime.getMonth() <= 10) {
      seasons['autumn'] += 1;
    } else {
      return 'Unable to determine the time of year!'
    }

    console.log(seasons);

    for (let season in seasons) {
      if (seasons[season] == 1) {
        return season;
      }
    }
  }
}


module.exports = {
  getSeason
};
