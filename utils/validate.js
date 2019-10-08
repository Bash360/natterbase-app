
/**
 * @description
 * @author "mark bashir"
 * @date 2019-10-08
 * @param {object} data
 * @param {array} rules
 * @returns array or string
 */
function validate(data, rules) {

	let missingItems = [];
	isValid = true;

  let missingItems = [];  ///empty array to put missing Items if any is found
	const keyArray = Object.keys(data); // returns the keys as array
	for (let rule of rules) {
		if (!(rule in data)) {
			missingItems.push(rule);
			isValid = false;
		}
	}

	return { missingItems, isValid };
}
module.exports = validate;



