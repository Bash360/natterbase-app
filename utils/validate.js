function validate(data, rules) {
  let isValid = true;
  let missingItems = [];
	const keyArray = Object.keys(data);
	for (let rule of rules) {
		if (!keyArray.includes(rule)) {
      missingItems.push(rule);
		}
	}

  return !missingItems.length?"valid":missingItems;
}
module.export = validate;



