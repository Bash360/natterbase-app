const express = require('express');
const validate = require("./validation");
const removeItem = require("./remove-item");
const router = express.Router();


router.use("/validate", validate);
router.use("/remove",removeItem);


module.exports = router;
