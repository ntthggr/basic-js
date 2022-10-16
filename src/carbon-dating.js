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
	const sample = Number(sampleActivity);
	if (typeof sampleActivity !== 'string' || isNaN(sample) || !sample) return false;
	if (sample < 0 || sample > MODERN_ACTIVITY) return false;
	let result = Math.log(MODERN_ACTIVITY / sample) / (0.693 / HALF_LIFE_PERIOD);
	return Math.ceil(result);
}

module.exports = {
	dateSample,
};
