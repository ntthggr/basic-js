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
	let result = {};
	domains = domains.map((e) => e.split('.').reverse());
	domains.forEach((e) => {
		let domain = '';
		for (let i = 0; i < e.length; i++) {
			domain = domain + '.' + e[i];
			if (result[domain] === undefined) result[domain] = 1;
			else result[domain]++;
		}
	});
	return result;
}

module.exports = {
	getDNSStats,
};
