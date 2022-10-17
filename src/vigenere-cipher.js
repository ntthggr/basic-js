const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(reversing = true) {
		this.reversing = reversing;
	}

	encrypt(message, key) {
		if (!message || typeof message != 'string' || message.length == 0 || !key || typeof key != 'string' || key.length == 0) {
			throw new Error('Incorrect arguments!');
		}

		if (!this.reversing) {
			message = message.split('').reverse().join('');
		}
		const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		message = message.toUpperCase();
		key = key.toUpperCase();

		let result = '';
		for (let i = 0, j = 0; i < message.length; i++) {
			if (char.includes(message[i])) {
				result += String.fromCharCode(((message[i].charCodeAt(0) + key.charCodeAt(j) - 2 * 65) % 26) + 65);
			} else {
				result += message[i];
				continue;
			}
			j = ++j % key.length;
		}
		return result;
	}
	decrypt(message, key) {
		if (!message || typeof message != 'string' || message.length == 0 || !key || typeof key != 'string' || key.length == 0) {
			throw new Error('Incorrect arguments!');
		}
		if (!this.reversing) {
			message = message.split('').reverse().join('');
		}
		const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		message = message.toUpperCase();
		key = key.toUpperCase();

		let result = '';
		for (let i = 0, j = 0; i < message.length; i++) {
			if (char.includes(message[i])) {
				result += String.fromCharCode(90 - ((25 - (message[i].charCodeAt(0) - key.charCodeAt(j))) % 26));
			} else {
				result += message[i];
				continue;
			}
			j = ++j % key.length;
		}
		return result;
	}
}

module.exports = {
	VigenereCipheringMachine,
};
