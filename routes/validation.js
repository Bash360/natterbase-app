const express = require('express');
const validate = require("../utils/validate");
const router = express.Router();

router.post('/', (req, res) => {
  const { data, rules } = req.body;
  const result = validate(data, rules);
 
  if (result.isValid) return res.status(200).json({data:"valid" });
	return res.status(200).json({"error":result.missingItems});
});

module.exports = router;
