
/**
 * @description
 * @author "mark bashir"
 * @date 2019-10-08
 * @param {object} data
 * @param {array} rules
 * @returns array or string
 */
function validate(data, rules) {
  let missingItems = [];  ///empty array to put missing Items if any is found
	const keyArray = Object.keys(data); // returns the keys as array
	for (let rule of rules) {
		if (!keyArray.includes(rule)) {
      missingItems.push(rule);
		}
	}

  return !missingItems.length? "valid" :missingItems;
}
module.exports = validate;



