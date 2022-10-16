const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
	if (date == null) {
		return 'Unable to determine the time of year!';
	}
	try {
		date.getUTCMilliseconds();
	} catch (e) {
		throw Error('Invalid date!');
	}

	const month = date.getMonth() + 1;

	if (month > 2 && month < 6) {
		return 'spring';
	}

	if (month > 5 && month < 9) {
		return 'summer';
	}

	if (month > 8 && month < 12) {
		return 'autumn';
	} else return 'winter';
}

module.exports = {
	getSeason,
};
