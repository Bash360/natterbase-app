const joi = require("@hapi/joi");
function validate(requestBody,schema) { 
  let { error } = joi.validate(requestBody, schema, { abortEarly: false });
  if (error) { 
    errors.reduce((totalErrors, error) => { 
      return `${totalErrors} ${error.message.replace(/\"/g, '')} `;
    });
  }
  return false;
}
module.export = validate;