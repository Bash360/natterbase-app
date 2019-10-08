const express = require('express');
const validate = require("../utils/validate");
const router = express.Router();

router.post('/', (req, res) => {
  const { data, rules } = req.body;
  
  const { isValid, missingItems } = validate(data, rules);
 

  if (isValid) return res.status(200).json({data:"valid" });
	return res.status(200).json({"error":missingItems});
});

module.exports = router;
