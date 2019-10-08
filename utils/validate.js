function validate(data, rules) {
	let missingItems = [];
	isValid = true;
	for (let rule of rules) {
		if (!(rule in data)) {
			missingItems.push(rule);
			isValid = false;
		}
	}

	return { missingItems, isValid };
}
module.exports = validate;



