const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	const heights = arr.filter((b) => b >= 0).sort((a, b) => b - a);
	for (let l = 0; l < arr.length; l += 1) {
		if (arr[l] >= 0) arr[l] = heights.pop();
	}
	return arr;
}

module.exports = {
	sortByHeight,
};
